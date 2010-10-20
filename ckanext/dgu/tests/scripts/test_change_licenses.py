from sqlalchemy.util import OrderedDict

from ckanext.dgu.scripts.change_licenses import ChangeLicenses
from ckan import model
from ckan.tests import *
from ckan.tests.wsgi_ckanclient import WsgiCkanClient
from ckan.lib.create_test_data import CreateTestData


class TestChangeLicenses(TestController):
    @classmethod
    def setup_class(self):
        # create test data
        model.notifier.initialise()
        self.tsi = TestSearchIndexer()
        CreateTestData.create()
        self.tsi.index()

        username = 'annafan'
        user = model.User.by_name(unicode(username))
        assert user
        self.testclient = WsgiCkanClient(self.app, api_key=user.apikey, base_location='/api/2')
        print "BASE", self.testclient.base_location
        self.license_name = 'test-license'
        self.change_licenses = ChangeLicenses(self.testclient, self.license_name)

    @classmethod
    def teardown_class(self):
        CreateTestData.delete()

    def test_0_change_pkg(self):
        pkg = model.Package.by_name(u'annakarenina')
        pkg_dict_before = pkg.as_dict()
        assert pkg_dict_before['license_id'] == 'other-open', pkg_dict_before['license_id']
        
        self.change_licenses.change_package(pkg.id)
        
        pkg = model.Package.by_name(u'annakarenina')
        pkg_dict_after = pkg.as_dict()
        assert pkg_dict_after['license_id'] == self.license_name, pkg_dict_after['license_id']

        # check no other properties have changed
        keys = set(pkg_dict_before.keys())
        assert keys == set(pkg_dict_after.keys()), set(pkg_dict_after.keys()) ^ set(pkg_dict_before.keys())
        for key in keys:
            if key not in ['license_id', 'license', 'revision_id']:
                assert pkg_dict_before[key] == pkg_dict_after[key], \
                       '%s: %r!=%r' % (key, pkg_dict_before[key], pkg_dict_after[key])

    def get_licenses(self):
        q = model.Session.query(model.Package)
        return dict([(pkg.name, pkg.license_id) for pkg in q.all()])

    def test_1_change_all_pkgs(self):
        licenses_before = self.get_licenses()
        self.change_licenses.change_all_packages()
        licenses_after = self.get_licenses()

        change_in_packages = set(licenses_before.keys()) - set(licenses_after.keys())
        assert not change_in_packages, change_in_packages

        for pkg_name in licenses_after.keys():
            assert licenses_after[pkg_name] == self.license_name, licenses_after[pkg_name]

