/* @group Base */
.chzn-container {
  font-size: 13px;
  position: relative;
  display: inline-block;
  zoom: 1;
  *display: inline;
}
.chzn-container .chzn-drop {
  background: #fff;
  border: 1px solid #aaa;
  border-top: 0;
  position: absolute;
  top: 29px;
  left: 0;
  -webkit-box-shadow: 0 4px 5px rgba(0,0,0,.15);
  -moz-box-shadow   : 0 4px 5px rgba(0,0,0,.15);
  -o-box-shadow     : 0 4px 5px rgba(0,0,0,.15);
  box-shadow        : 0 4px 5px rgba(0,0,0,.15);
  z-index: 999;
}
/* @end */

/* @group Single Chosen */
.chzn-container-single .chzn-single {
  background-color: #ffffff;
  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, #f4f4f4), color-stop(0.48, #eeeeee), color-stop(0.5, #f6f6f6), color-stop(0.8, #ffffff));
  background-image: -webkit-linear-gradient(center bottom, #f4f4f4 0%, #eeeeee 48%, #f6f6f6 50%, #ffffff 80%);
  background-image: -moz-linear-gradient(center bottom, #f4f4f4 0%, #eeeeee 48%, #f6f6f6 50%, #ffffff 80%);
  background-image: -o-linear-gradient(top, #f4f4f4 0%, #eeeeee 48%, #f6f6f6 50%, #ffffff 80%);
  background-image: -ms-linear-gradient(top, #f4f4f4 0%, #eeeeee 48%, #f6f6f6 50%, #ffffff 80%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#ffffff',GradientType=0 );
  background-image: linear-gradient(top, #f4f4f4 0%, #eeeeee 48%, #f6f6f6 50%, #ffffff 80%);
  -webkit-border-radius: 5px;
  -moz-border-radius   : 5px;
  border-radius        : 5px;
  -moz-background-clip   : padding;
  -webkit-background-clip: padding-box;
  background-clip        : padding-box;
  border: 1px solid #aaaaaa;
  -webkit-box-shadow: 0 0 3px #ffffff inset, 0 1px 1px rgba(0,0,0,0.1);
  -moz-box-shadow   : 0 0 3px #ffffff inset, 0 1px 1px rgba(0,0,0,0.1);
  box-shadow        : 0 0 3px #ffffff inset, 0 1px 1px rgba(0,0,0,0.1);
  display: block;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  height: 23px;
  line-height: 23px;
  padding: 0 0 0 8px;
  color: #444444;
  text-decoration: none;
}
.chzn-container-single .chzn-single span {
  margin-right: 26px;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.chzn-container-single .chzn-single abbr {
  display: block;
  position: absolute;
  right: 26px;
  top: 6px;
  width: 12px;
  height: 13px;
  font-size: 1px;
  background: url(chosen-sprite.png) right top no-repeat;
}
.chzn-container-single .chzn-single abbr:hover {
  background-position: right -11px;
}
.chzn-container-single .chzn-single div {
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  height: 100%;
  width: 18px;
}
.chzn-container-single .chzn-single div b {
  background: url('chosen-sprite.png') no-repeat 0 0;
  display: block;
  width: 100%;
  height: 100%;
}
.chzn-container-single .chzn-search {
  padding: 3px 4px;
  position: relative;
  margin: 0;
  white-space: nowrap;
  z-index: 1010;
}
.chzn-container-single .chzn-search input {
  background: #fff url('chosen-sprite.png') no-repeat 100% -22px;
  background: url('chosen-sprite.png') no-repeat 100% -22px, -webkit-gradient(linear, left bottom, left top, color-stop(0.85, white), color-stop(0.99, #eeeeee));
  background: url('chosen-sprite.png') no-repeat 100% -22px, -webkit-linear-gradient(center bottom, white 85%, #eeeeee 99%);
  background: url('chosen-sprite.png') no-repeat 100% -22px, -moz-linear-gradient(center bottom, white 85%, #eeeeee 99%);
  background: url('chosen-sprite.png') no-repeat 100% -22px, -o-linear-gradient(bottom, white 85%, #eeeeee 99%);
  background: url('chosen-sprite.png') no-repeat 100% -22px, -ms-linear-gradient(top, #ffffff 85%,#eeeeee 99%);
  background: url('chosen-sprite.png') no-repeat 100% -22px, linear-gradient(top, #ffffff 85%,#eeeeee 99%);
  margin: 1px 0;
  padding: 4px 20px 4px 5px;
  outline: 0;
  border: 1px solid #aaa;
  font-family: sans-serif;
  font-size: 1em;
}
.chzn-container-single .chzn-drop {
  -webkit-border-radius: 0 0 4px 4px;
  -moz-border-radius   : 0 0 4px 4px;
  border-radius        : 0 0 4px 4px;
  -moz-background-clip   : padding;
  -webkit-background-clip: padding-box;
  background-clip        : padding-box;
}
/* @end */

.chzn-container-single-nosearch .chzn-search input {
  position: absolute;
  left: -9000px;
}

/* @group Multi Chosen */
.chzn-container-multi .chzn-choices {
  background-color: #fff;
  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.85, white), color-stop(0.99, #eeeeee));
  background-image: -webkit-linear-gradient(center bottom, white 85%, #eeeeee 99%);
  background-image: -moz-linear-gradient(center bottom, white 85%, #eeeeee 99%);
  background-image: -o-linear-gradient(bottom, white 85%, #eeeeee 99%);
  background-image: -ms-linear-gradient(top, #ffffff 85%, #eeeeee 99%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#eeeeee',GradientType=0 );
  background-image: linear-gradient(top, #ffffff 85%, #eeeeee 99%);
  border: 1px solid #aaa;
  margin: 0;
  padding: 0;
  cursor: text;
  overflow: hidden;
  height: auto !important;
  height: 1%;
  position: relative;
}
.chzn-container-multi .chzn-choices li {
  float: left;
  list-style: none;
}
.chzn-container-multi .chzn-choices .search-field {
  white-space: nowrap;
  margin: 0;
  padding: 0;
}
.chzn-container-multi .chzn-choices .search-field input {
  color: #666;
  background: transparent !important;
  border: 0 !important;
  font-family: sans-serif;
  font-size: 100%;
  height: 15px;
  padding: 5px;
  margin: 1px 0;
  outline: 0;
  -webkit-box-shadow: none;
  -moz-box-shadow   : none;
  -o-box-shadow     : none;
  box-shadow        : none;
}
.chzn-container-multi .chzn-choices .search-field .default {
  color: #999;
}
.chzn-container-multi .chzn-choices .search-choice {
  -webkit-border-radius: 3px;
  -moz-border-radius   : 3px;
  border-radius        : 3px;
  -moz-background-clip   : padding;
  -webkit-background-clip: padding-box;
  background-clip        : padding-box;
  background-color: #e4e4e4;
  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, #eeeeee), color-stop(0.48, #e8e8e8), color-stop(0.5, #f0f0f0), color-stop(0.8, #f4f4f4));
  background-image: -webkit-linear-gradient(center bottom, #eeeeee 0%, #e8e8e8 48%, #f0f0f0 50%, #f4f4f4 80%);
  background-image: -moz-linear-gradient(center bottom, #eeeeee 0%, #e8e8e8 48%, #f0f0f0 50%, #f4f4f4 80%);
  background-image: -o-linear-gradient(top, #eeeeee 0%, #e8e8e8 48%, #f0f0f0 50%, #f4f4f4 80%);
  background-image: -ms-linear-gradient(top, #eeeeee 0%, #e8e8e8 48%, #f0f0f0 50%, #f4f4f4 80%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#f4f4f4',GradientType=0 );
  background-image: linear-gradient(top, #eeeeee 0%, #e8e8e8 48%, #f0f0f0 50%, #f4f4f4 80%);
  -webkit-box-shadow: 0 0 2px #ffffff inset, 0 1px 0 rgba(0,0,0,0.05);
  -moz-box-shadow   : 0 0 2px #ffffff inset, 0 1px 0 rgba(0,0,0,0.05);
  box-shadow        : 0 0 2px #ffffff inset, 0 1px 0 rgba(0,0,0,0.05);
  color: #333;
  border: 1px solid #aaaaaa;
  line-height: 13px;
  padding: 3px 20px 3px 5px;
  margin: 3px 0 3px 5px;
  position: relative;
}
.chzn-container-multi .chzn-choices .search-choice span {
  cursor: default;
}
.chzn-container-multi .chzn-choices .search-choice-focus {
  background: #d4d4d4;
}
.chzn-container-multi .chzn-choices .search-choice .search-choice-close {
  display: block;
  position: absolute;
  right: 3px;
  top: 4px;
  width: 12px;
  height: 13px;
  font-size: 1px;
  background: url(chosen-sprite.png) right top no-repeat;
}
.chzn-container-multi .chzn-choices .search-choice .search-choice-close:hover {
  background-position: right -11px;
}
.chzn-container-multi .chzn-choices .search-choice-focus .search-choice-close {
  background-position: right -11px;
}
/* @end */

/* @group Results */
.chzn-container .chzn-results {
  margin: 0 4px 4px 0;
  max-height: 240px;
  padding: 0 0 0 4px;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
}
.chzn-container-multi .chzn-results {
  margin: -1px 0 0;
  padding: 0;
}
.chzn-container .chzn-results li {
  display: none;
  line-height: 15px;
  padding: 5px 6px;
  margin: 0;
  list-style: none;
}
.chzn-container .chzn-results .active-result {
  cursor: pointer;
  display: list-item;
}
.chzn-container .chzn-results .highlighted {
  background-color: #3875d7;
  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.1, #2a62bc), color-stop(0.8, #3875d7));
  background-image: -webkit-linear-gradient(center bottom, #2a62bc 10%, #3875d7 80%);
  background-image: -moz-linear-gradient(center bottom, #2a62bc 10%, #3875d7 80%);
  background-image: -o-linear-gradient(bottom, #2a62bc 10%, #3875d7 80%);
  background-image: -ms-linear-gradient(top, #2a62bc 10%, #3875d7 80%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2a62bc', endColorstr='#3875d7',GradientType=0 );
  background-image: linear-gradient(top, #2a62bc 10%, #3875d7 80%);
  color: #fff;
}
.chzn-container .chzn-results li em {
  background: #feffde;
  font-style: normal;
}
.chzn-container .chzn-results .highlighted em {
  background: transparent;
}
.chzn-container .chzn-results .no-results {
  background: #f4f4f4;
  display: list-item;
}
.chzn-container .chzn-results .group-result {
  cursor: default;
  color: #999;
  font-weight: bold;
}
.chzn-container .chzn-results .group-option {
  padding-left: 15px;
}
.chzn-container-multi .chzn-drop .result-selected {
  display: none;
}
.chzn-container .chzn-results-scroll {
  background: white;
  margin: 0px 4px;
  position: absolute;
  text-align: center;
  width: 321px; /* This should by dynamic with js */
  z-index: 1;
}
.chzn-container .chzn-results-scroll span {
  display: inline-block;
  height: 17px;
  text-indent: -5000px;
  width: 9px;
}
.chzn-container .chzn-results-scroll-down {
  bottom: 0;
}
.chzn-container .chzn-results-scroll-down span {
  background: url('chosen-sprite.png') no-repeat -4px -3px;
}
.chzn-container .chzn-results-scroll-up span {
  background: url('chosen-sprite.png') no-repeat -22px -3px;
}
/* @end */

/* @group Active  */
.chzn-container-active .chzn-single {
  -webkit-box-shadow: 0 0 5px rgba(0,0,0,.3);
  -moz-box-shadow   : 0 0 5px rgba(0,0,0,.3);
  -o-box-shadow     : 0 0 5px rgba(0,0,0,.3);
  box-shadow        : 0 0 5px rgba(0,0,0,.3);
  border: 1px solid #5897fb;
}
.chzn-container-active .chzn-single-with-drop {
  border: 1px solid #aaa;
  -webkit-box-shadow: 0 1px 0 #fff inset;
  -moz-box-shadow   : 0 1px 0 #fff inset;
  -o-box-shadow     : 0 1px 0 #fff inset;
  box-shadow        : 0 1px 0 #fff inset;
  background-color: #eee;
  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.2, white), color-stop(0.8, #eeeeee));
  background-image: -webkit-linear-gradient(center bottom, white 20%, #eeeeee 80%);
  background-image: -moz-linear-gradient(center bottom, white 20%, #eeeeee 80%);
  background-image: -o-linear-gradient(bottom, white 20%, #eeeeee 80%);
  background-image: -ms-linear-gradient(top, #ffffff 20%,#eeeeee 80%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#eeeeee',GradientType=0 );
  background-image: linear-gradient(top, #ffffff 20%,#eeeeee 80%);
  -webkit-border-bottom-left-radius : 0;
  -webkit-border-bottom-right-radius: 0;
  -moz-border-radius-bottomleft : 0;
  -moz-border-radius-bottomright: 0;
  border-bottom-left-radius : 0;
  border-bottom-right-radius: 0;
}
.chzn-container-active .chzn-single-with-drop div {
  background: transparent;
  border-left: none;
}
.chzn-container-active .chzn-single-with-drop div b {
  background-position: -18px 1px;
}
.chzn-container-active .chzn-choices {
  -webkit-box-shadow: 0 0 5px rgba(0,0,0,.3);
  -moz-box-shadow   : 0 0 5px rgba(0,0,0,.3);
  -o-box-shadow     : 0 0 5px rgba(0,0,0,.3);
  box-shadow        : 0 0 5px rgba(0,0,0,.3);
  border: 1px solid #5897fb;
}
.chzn-container-active .chzn-choices .search-field input {
  color: #111 !important;
}
/* @end */

/* @group Disabled Support */
.chzn-disabled {
  cursor: default;
  opacity:0.5 !important;
}
.chzn-disabled .chzn-single {
  cursor: default;
}
.chzn-disabled .chzn-choices .search-choice .search-choice-close {
  cursor: default;
}

/* @group Right to Left */
.chzn-rtl { direction:rtl;text-align: right; }
.chzn-rtl .chzn-single { padding-left: 0; padding-right: 8px; }
.chzn-rtl .chzn-single span { margin-left: 26px; margin-right: 0; }

.chzn-rtl .chzn-single div { left: 3px; right: auto; }
.chzn-rtl .chzn-single abbr {
  left: 26px;
  right: auto;
}
.chzn-rtl .chzn-choices li { float: right; }
.chzn-rtl .chzn-choices .search-choice { padding: 3px 5px 3px 19px; margin: 3px 5px 3px 0; }
.chzn-rtl .chzn-choices .search-choice .search-choice-close { left: 4px; right: auto; background-position: right top;}
.chzn-rtl.chzn-container-single .chzn-results { margin-left: 4px; margin-right: 0; padding-left: 0; padding-right: 4px; }
.chzn-rtl .chzn-results .group-option { padding-left: 0; padding-right: 20px; }
.chzn-rtl.chzn-container-active .chzn-single-with-drop div { border-right: none; }
.chzn-rtl .chzn-search input {
  background: url('chosen-sprite.png') no-repeat -38px -22px, #ffffff;
  background: url('chosen-sprite.png') no-repeat -38px -22px, -webkit-gradient(linear, left bottom, left top, color-stop(0.85, white), color-stop(0.99, #eeeeee));
  background: url('chosen-sprite.png') no-repeat -38px -22px, -webkit-linear-gradient(center bottom, white 85%, #eeeeee 99%);  
  background: url('chosen-sprite.png') no-repeat -38px -22px, -moz-linear-gradient(center bottom, white 85%, #eeeeee 99%);
  background: url('chosen-sprite.png') no-repeat -38px -22px, -o-linear-gradient(bottom, white 85%, #eeeeee 99%);
  background: url('chosen-sprite.png') no-repeat -38px -22px, -ms-linear-gradient(top, #ffffff 85%,#eeeeee 99%);
  background: url('chosen-sprite.png') no-repeat -38px -22px, linear-gradient(top, #ffffff 85%,#eeeeee 99%);
  padding: 4px 5px 4px 20px;
}
/* @end */
