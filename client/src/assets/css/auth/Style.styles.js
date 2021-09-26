import styled from "styled-components";

/*
        1. Common
	2. Helper Class
	3. All Nested Class
	4. left sidebar
		4.1 left Sidebar switcher
	5. Header Top
	6. Breadcrumb
	7. Star Rating css
	8. Analytics
	9. widgets CSS
	10. Event
	11. Professors
	12. Student
	13. Courses
		13.1 Courses Info
		13.2. Course Payment
	14. Library
	15. Inbox
	16. Google Map
	17. Images Cropper
	18. Form Element
	19. Mini Sidebar
	20. Custom Scroll
	21. Wizard CSS
	22. Notification
	23. footer

-----------------------------------------------------------------------------------*/



export const Styles = styled.div `	

html, body {height: 100%; font-family: 'Roboto', sans-serif;font-weight:400;background:#F6F8FA;}
.floatleft {float:left}
.floatright {float:right}
.alignleft {float:left;margin-right:15px;margin-bottom: 15px}
.alignright {float:right;margin-left:15px;margin-bottom: 15px}
.aligncenter {display:block;margin:0 auto 15px}
a:focus {outline:0px solid}
img {max-width:100%;height:auto}
.fix {overflow:hidden}
p {margin:0 0 15px;}
h1, h2, h3, h4, h5, h6 {
  margin: 0 0 10px;
  font-weight:700;
}
a {transition: all 0.3s ease 0s;text-decoration:none;}
a:hover{
  color: #ec4445;
  text-decoration: none;
}
a:visited, a:link, a:active {
  text-decoration: none;
}
a:active, a:hover {
  outline: 0 none;
}
ul{
list-style: outside none none;
margin: 0;
padding: 0
}
.clear{clear:both}
body {}
@font-face {
  font-family: 'educate-icon';
  src:
    url('fonts/educate-icon.ttf?ka5vvx') format('truetype'),
    url('fonts/educate-icon.woff?ka5vvx') format('woff'),
    url('fonts/educate-icon.svg?ka5vvx#educate-icon') format('svg');
  font-weight: normal;
  font-style: normal;
}
/*----------------------------------------*/
/*  2. Helper Class
/*----------------------------------------*/
.mg-tb-30{
	margin:30px 0px;
}
.mg-b-30{
	margin-bottom:30px;
}
.mg-tb-15{
	margin:15px 0px;
}
.mg-t-30{
	margin-top:30px;
}
.mg-b-10{
	margin-bottom:23px;
}
.mg-ub-10{
	margin-bottom:17px;
}
.mg-t-15{
	margin-top:15px;
}
.mg-t-10{
	margin-top:10px;
}
.mg-b-15{
	margin-bottom:20px;
}
.mt-b-30{
	margin-bottom:30px;
}
.bg-green {
    background: #006DF0;
}
.bg-red {
    background: #933EC5;
}
.bg-blue {
    background: #65b12d;
}
.bg-purple {
    background: #D80027;
}
/*----------------------------------------*/
/*  3. All Nested Class
/*----------------------------------------*/
.product-sales-chart, .analytics-info-cs, .tranffic-als-inner, .analytics-rounded, .single-new-trend, .personal-info-wrap, .author-widgets-single, .calender-inner, .product-status-wrap, .review-tab-pro-inner, .income-dashone-total, .analytics-edu-wrap, .analytics-sparkle-line, .analysis-progrebar, .sparkline8-list, .sparkline9-list, .sparkline7-list, .sparkline10-list, .sparkline12-list, .sparkline13-list, .sparkline14-list, .sparkline13-list, .sparkline11-list, .x-editable-list, .code-editor-single, .blog-details-inner, .charts-single-pro, .about-sparkline, .sparkline-list, .button-ad-wrap, .tab-content-details, .sparkline16-list, .sparkline15-list, .tinymce-single, .single-product-item, .courses-inner, .single-latest-item, .product-payment-inner-st, .profile-info-inner, .contact-panel, .widget-int-shape, .social-media-edu{
	padding:20px;
	background:#fff;
}

/*  18. Form Element
/*----------------------------------------*/
.sparkline8-graph .basic-login-inner, .sparkline8-graph .login-social-inner, .sparkline9-graph .basic-login-form-ad, .sparkline11-graph .basic-login-form-ad{
	text-align:left;
}
.form-group-inner {
    margin-bottom: 15px;
}
.form-group-inner label{
	font-size:14px;
	color:#303030;
}
.form-group-inner input[type="email"], .form-group-inner input[type="password"], .form-group-inner input[type="text"], .form-select-list .custom-select-value{
	font-size:14px;
	color:#303030;
	border:1px solid #ddd;
	outline:none;
	border-radius:0px;
	box-shadow: none;
}
.icheckbox_square-green, .iradio_square-green {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    width: 22px;
    height: 22px;
    background: url(img/green1.png) no-repeat;
    border: none;
    cursor: pointer;
}
.icheckbox_square-green {
    background-position: 0 0;
}
.icheckbox_square-green.hover {
    background-position: -22px 0;
}
.icheckbox_square-green.checked {
    background-position: -44px 0;
	transition: all 0.3s ease 0s;
}
.login-btn-inner .check-label{
	margin-left:5px;
}
.login-btn-inner .label-check-inner{
	margin:0px;
	padding-top:5px;
}
.login-social-inner{
	margin-bottom:20px;
}
.login-social-inner a.button {
    line-height: 42px;
    text-decoration: none;
	margin-right:5px;
}
.login-social-inner .btn-social {
    position: relative;
}
.login-social-inner .span-left {
    padding-left: 55px;
    padding-right: 15px;
}
.login-social-inner .facebook {
    background-color: #3b5998;
}
.login-social-inner .twitter, .login-social-inner .twitter:hover, .login-social-inner .twitter:focus, .login-social-inner .facebook, .login-social-inner .facebook:hover, .login-social-inner .facebook:focus, .login-social-inner .googleplus, .login-social-inner .googleplus:hover, .login-social-inner .googleplus:focus, .login-social-inner .linkedin, .login-social-inner .linkedin:hover, .login-social-inner .linkedin:focus {
    color: #fff;
    text-shadow: 0 1px rgba(0, 0, 0, 0.08);
}
.login-social-inner .button {
    border: 0;
    height: 42px;
    color: #fff;
    line-height: 1;
    font-size: 15px;
    cursor: pointer;
    text-align: center;
    vertical-align: top;
    display: inline-block;
    -webkit-user-drag: none;
    text-shadow: 0 1px rgba(255, 255, 255, 0.2);
}
.login-social-inner .button{
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    -o-border-radius: 0;
    border-radius: 0;
    outline: none;
}
.login-social-inner .facebook:hover, .login-social-inner .facebook:focus {
    background-color: #25385F;
}
.login-social-inner .facebook span {
    background-color: #31497D;
}
.login-social-inner .btn-social span {
    -webkit-border-radius: 3px 0 0 3px;
    -moz-border-radius: 3px 0 0 3px;
    -o-border-radius: 3px 0 0 3px;
    border-radius: 3px 0 0 3px;
    display: inline-block;
    text-align: center;
    position: absolute;
    width: 42px;
    left: 0;
}
.login-social-inner .btn-social i {
    font-size: 22px;
    position: relative;
    top: 2px;
}
.login-social-inner .twitter span {
    background-color: #009AD5;
}
.login-social-inner .twitter {
    background-color: #00acee;
}
.login-social-inner .twitter:hover, .login-social-inner .twitter:focus {
    background-color: #00749F;
}
.login-social-inner .googleplus span {
    background-color: #C03121;
}
.login-social-inner .googleplus:hover, .login-social-inner .googleplus:focus {
    background-color: #8D2418;
}
.login-social-inner .googleplus {
    background-color: #dd4b39;
}
.login-social-inner .linkedin span {
    background-color: #084261;
}
.login-social-inner .linkedin:hover, .login-social-inner .linkedin:focus {
    background-color: #084261;
}
.login-social-inner .linkedin {
    background-color: #0077B5;
}
.login-horizental {
    margin-top: 20px;
}
.form-group-inner label.login2 {
    margin: 0px;
    padding: 7px 0px;
}
.inline-basic-form .form-group-inner{
	margin-bottom:0px;
}
.modal-login-form-inner{
	text-align:left;
}
.modal-edu-general .modal-body .modal-basic-inner p{
	margin-bottom:15px;
}
.bt-df-checkbox {
    padding: 8px 0px;
    margin: 0;
}
.bt-df-checkbox .radio-checked {
    margin-right: 8px;
}
.icheckbox_square-green.checked {
    background-position: -44px 0;
}
.icheckbox_square-green.checked.disabled {
    background-position: -88px 0;
}
.iradio_square-green {
    background-position: -109px 0;
}
.iradio_square-green.hover {
    background-position: -131px 0;
}
.iradio_square-green.checked {
    background-position: -153px 0;
	transition: all 0.3s ease 0s;
}
.iradio_square-green.checked.disabled {
    background-position: -197px 0;
}
.inline-checkbox-cs {
    padding: 7px 0px;
}
.inline-checkbox-cs .checkbox-inline{
	padding-left:0px;
}
.form-group-inner.input-with-success label{
	color: #1ab394;
}
.form-group-inner.input-with-success input[type="text"]{
	border: 1px solid #1ab394;
}
.form-group-inner.input-with-warning label{
	color: #f8ac59;
}
.form-group-inner.input-with-warning input[type="text"]{
	border: 1px solid #f8ac59;
}
.form-group-inner.input-with-error label{
	color: #ed5565;
}
.form-group-inner.input-with-error input[type="text"]{
	border: 1px solid #ed5565;
}
.inline-remember-me label {
    margin: 0px;
    padding: 5px 0px;
}
.input-group {
    position: relative;
    display: table;
    border-collapse: separate;
}
.input-group-addon:first-child {
    border-right: 0;
}
.input-group .form-control:first-child, .input-group-addon:first-child, .input-group-btn:first-child>.btn, .input-group-btn:first-child>.btn-group>.btn, .input-group-btn:first-child>.dropdown-toggle, .input-group-btn:last-child>.btn-group:not(:last-child)>.btn, .input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.input-group-btn .btn, .form-bc-ele .btn{
	padding: 10px 12px;
}
.input-group-addon {
    background-color: #fff;
    border: 1px solid #E5E6E7;
    border-radius: 1px;
    color: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    padding: 6px 12px;
    text-align: center;
}
.input-group-addon{
    width: 1%;
    white-space: nowrap;
    vertical-align: middle;
}
.input-group .form-control {
    position: relative;
    z-index: 2;
    float: left;
    width: 100%;
    margin-bottom: 0;
}
.form-control {
    background-color: #FFFFFF;
    background-image: none;
    border: 1px solid #e5e6e7;
    border-radius: 1px;
    color: inherit;
    display: block;
    padding: 6px 12px;
    transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
    width: 100%;
	height:40px;
	box-shadow:none;
}
.form-control:focus {
    border-color: #006DF0;
    outline: 0;
    box-shadow: none;
}
.custom-go-button .btn-primary, .custom-dropdowns-button .dropdown-toggle, .dropdown-segmented .dropdown-toggle, .dropdown-segmented .btn-white {
    background-color: #006DF0;
    border-color: #006DF0;
    color: #FFFFFF;
	border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.custom-go-button .btn-primary, .custom-go-button .btn-primary:active, .custom-go-button .btn-primary:focus, .custom-dropdowns-button .dropdown-toggle, .custom-dropdowns-button .dropdown-toggle:active, .custom-dropdowns-button .dropdown-toggle:focus, .dropdown-segmented .dropdown-toggle, .dropdown-segmented .dropdown-toggle:active, .dropdown-segmented .dropdown-toggle:focus{
	border-top-right-radius: 0;
    border-bottom-right-radius: 0;
	background-color: #006DF0;
    border-color: #006DF0;
}
.dropdown-segmented .dropdown-toggle, .dropdown-segmented .dropdown-toggle:active, .dropdown-segmented .dropdown-toggle:focus{
	border-left:1px solid #006DF0;
}
.cancel-wp .btn-white, .cancel-wp .btn-white:active, .cancel-wp .btn-white:focus{
	border-radius:0px;
	outline:none;
}
.file-upload-inner.ts-forms input[type="text"]:hover, .file-upload-inner.ts-forms input[type="text"]:focus, .file-upload-inner.ts-forms input[type="text"]:active, .file-upload-inner.ts-forms .file-button:hover + input{
	border: 1px solid #006DF0;
}
.file-upload-inner.ts-forms input[type="text"]{
	height: 40px;
}
.file-upload-inner.ts-forms .file-button, .file-upload-inner.ts-forms .file-button:active, .file-upload-inner.ts-forms .file-button:focus{
	background: #006DF0;
	border-radius:0px;
	width:70px;
	height: 40px;
	line-height: 40px;
	top:0px;
}
.file-upload-inner.ts-forms .prepend-small-btn .file-button, .file-upload-inner.ts-forms .prepend-big-btn .file-button {
    left: 0px;
}
.file-upload-inner.ts-forms .prepend-big-btn input[type="text"] {
    padding-left: 81px;
}
.file-upload-inner.ts-forms .icon-left, .file-upload-inner.ts-forms .icon-right{
	top:0px;
}
.file-upload-inner.file-upload-inner-right.ts-forms .file-button, .file-upload-inner.file-upload-inner-right.ts-forms .file-button:active, .file-upload-inner.file-upload-inner-right.ts-forms .file-button:focus{
	right: 0px !important;
}
.file-upload-inner.file-upload-inner-right.ts-forms .append-small-btn .file-button input, .file-upload-inner.file-upload-inner-right.ts-forms .append-big-btn .file-button input{
	right: 0px !important;
}
.select2-container--default .select2-results__option--highlighted[aria-selected] {
    background-color: #03a9f4;
}
.chosen-select-single label{
	font-weight:400;
	font-size:14px;
}
.spacer-b16a {
    text-align: left;
    margin-bottom: 5px;
}
.sliderv-wrapper.green-slider.green-left-pro {
    margin-left: 8px;
}
.sliderv-wrapper.black-slider.slider-bl-pro {
    margin-top: 22px;
}
.input-mask-title{
	text-align:right;
	padding: 10px 0px;
}
.input-mark-inner, .data-custon-pick, .touchspin-inner{
	text-align:left;
}
.input-mask-title label, .input-mark-inner .help-block, .data-custon-pick label, .touchspin-inner label{
	font-size:14px;
	font-weight:400;
}
.input-mark-inner .form-control, .data-custon-pick .form-control{
	border-radius:0px;
}
.input-mark-inner .form-control:focus, .input-mark-inner .form-control:active, .data-custon-pick .form-control:focus, .data-custon-pick .form-control:active{
	outline:none;
	box-shadow:none;
	border: 1px solid #006DF0;
}
.form-group.data-custon-pick.data-custom-mg{
	margin-bottom:0px;
}
.datepicker table tr td.active.active, .datepicker table tr td span.active.active{
	background-color: #006DF0;
    border-color: #006DF0;
}
.ts-forms .tsbox {
    position: relative;
}
.ts-forms .label {
    font-size: 14px;
    margin-bottom: 15px;
    height: 14px;
    color: #303030;
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 5px 0px;
}
.colorpicker-inner.ts-forms.mg-b-23{
	margin: 14px 0px;
}
.ts-forms label {
    display: block;
    color: inherit;
    font-weight: normal;
    text-align: left;
    margin-bottom: 0;
}
.ts-forms {
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    box-sizing: border-box;
    color: rgba(0,0,0,.54);
    line-height: 1;
    position: relative;
}
.ts-forms input[type="text"], .ts-forms input[type="password"], .ts-forms input[type="email"], .ts-forms input[type="search"], .ts-forms input[type="url"], .ts-forms textarea, .ts-forms select {
	background: #fff;
    border: 1px solid rgba(0,0,0,.12);
    border-radius: 0px;
    color: rgba(0,0,0,.87);
    display: block;
    font-family: inherit;
    font-size: 14px;
    height: 34px;
    padding: 10px 15px;
    width: 100%;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all.4s;
    -moz-transition: all.4s;
    -ms-transition: all.4s;
    -o-transition: all.4s;
    transition: all.4s;
}
.sp-replacer {
    background-color: #e0e0e0;
    -webkit-border-radius: 0 3px 3px 0;
    -moz-border-radius: 0 3px 3px 0;
    -o-border-radius: 0 3px 3px 0;
    border-radius: 0 3px 3px 0;
    border: none;
    bottom: 0;
    cursor: pointer;
    display: block;
    outline: none;
    padding-left: 16px;
    padding-top: 0px;
    position: absolute;
    right: 0;
    top: 0;
    width: 52px;
    color: rgba(0,0,0,.56);
    -webkit-transition: color.4s;
    -moz-transition: color.4s;
    -ms-transition: color.4s;
    -o-transition: color.4s;
    transition: color.4s;
}
.sp-preview-inner, .sp-alpha-inner, .sp-thumb-inner {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
.sp-replacer {
	top: 20px !important;
    padding-left: 10px !important;
}
.sp-preview {
    position: relative;
    width: 25px;
    height: 20px;
    border: solid 1px #222;
    margin-right: 5px;
    float: left;
    z-index: 0;
    top: 5px;
}
.sp-dd {
    padding: 2px 0;
    height: 16px;
    line-height: 16px;
    float: left;
    font-size: 10px;
    margin-top: 5px;
}
.dual-list-box-inner option{
	padding:0px 15px;
}
.inbox-email-menu-list .nav-tabs>li>a{
	border: 0px solid transparent;
}
.x-editable-list .table{
	margin-bottom:0px;
}
.menu-list-mg-b.menu-list-wrap{
	margin-bottom:40px
}

.main-sparkline8-hd h1, .main-sparkline9-hd h1, .main-spark7-hd h1, .main-sparkline10-hd h1, .main-sparkline11-hd h1, .main-sparkline12-hd h1, .main-sparkline13-hd h1, .main-sparkline14-hd h1{
	font-size:20px;
	color:#303030;
}
.basic-choropleth {
    height: 400px;
    width: 100%;
}
.alert-title.dropzone-custom-sys h2, .download-custom h2, .alert-title h2, .code-editor-single h2 {
    font-size: 18px;
    color: #303030;
}
.mini-navbar .charts-single-pro .bar-mini-ds{
	display:none;
}
.alert-title.dropzone-custom-sys p, .download-custom p, .alert-title p, .sparkline-content p {
    font-size: 14px;
    color: #303030;
    line-height: 24px;
}
.sparkline-content a {
    font-size: 14px;
    color: #303030;
}
.preloader-single {
    background: #fff;
    width: 100%;
    height: 350px;
    padding: 15px;
}
.file-cs-ctn {
    text-align: center;
    padding: 30px 0px !important;
}
.custonfile .btn-primary {
    color: #fff;
    background-color: #86bc42;
    border-color: #86bc42;
}
.dropdown-menu.filedropdown{
	width:100%;
}
.dropdown-menu.filedropdown li a{
	margin-top:0px;
	padding:8px 20px;
}
.dropdown-menu.filedropdown li i{
	margin-right:5px;
}
.custom-panel-jw a{
	font-size:18px;
}
.project-people img {
    width: 28px;
    height: 28px;
    margin-left: 2px;
    margin-bottom: 4px;
}
.panel-body a {
    font-size: 14px;
    color: #303030;
    margin-top: 15px;
}
.custom-panel-jw .social-media-in a {
    margin-top: 5px;
}
.project-value h2 {
    font-size: 25px;
    color: #444;
    margin-top: 10px;
}
.custom-project-dsl h2 {
    margin: 0;
    padding: 10px 15px;
    background: #ddd;
    font-size: 16px;
}
.m-t-none {
    font-size: 20px;
    color: #444;
}
.custom-address-mailbox div {
    margin: 5px 0px;
}
.panel-csm h4{
	font-size:18px;
	color:#303030;
}
.project-dtl-info h1 {
    font-size: 25px;
    color: #444;
}
.back-backend a {
    background: #006DF0;
	border-color:#006DF0;
}
.back-backend a:hover {
    background: #006DF0;
	border-color:#006DF0;
}
.back-link {
    float: left;
    width: 100%;
    margin: 10px;
}
.content-error h1 {
    font-size: 35px;
    color: #444;
	text-transform:uppercase;
}
.content-error .counter {
    color: #006DF0;
}
.content-error {
    text-align: center;
    margin: 0px 20px;
}
.content-error p {
    font-size: 14px;
    color: #444;
    line-height: 24px;
}
.content-error a {
    display: inline-block;
    margin: 0px 5px;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    padding: 10px 30px;
    border-radius: 3px;
    background: #006DF0;
    transition: all .4s ease 0s;
}
.login-footer a{
	color:#006DF0;
}
.login-footer {
    margin-top: 15px;
}
.main-spark-hd h1, .smart-main-spark-hd h1{
	font-size:20px;
}
.custom-datatable-overright table tbody tr td a {
    color: #303030;
    font-size: 14px;
}
.custom-datatable-overright table tbody tr td {
    padding-left: 10px !important;
    padding-right: 5px !important;
    font-size: 14px;
    text-align: left;
}
.pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover {
    background-color: #006DF0;
    border-color: #006DF0;
}
.fixed-table-pagination {
    padding: 0px 10px;
}
.tab-content-details h2 {
    font-size: 20px;
    color: #303030;
}
.tab-content-details {
    text-align: center;
    background: #fff;
    padding: 20px 100px;
}
.tab-content-details p {
    font-size: 14px;
    color: #303030;
    line-height: 24px;
	margin-bottom:0px;
}
.color-line {
    background: #f7f9fa;
    height: 6px;
    background-image: -webkit-linear-gradient(left,#006DF0,#006DF0 25%,#933EC5 25%,#933EC5 35%,#65b12d 35%,#65b12d 45%,#D80027 45%,#D80027 55%,#ffb606 55%,#ffb606 65%,#e67e22 65%,#e67e22 75%,#e74c3c 85%,#e74c3c 85%,#c0392b 85%,#c0392b 100%);
    background-image: -moz-linear-gradient(left,#006DF0,#006DF0 25%,#933EC5 25%,#933EC5 35%,#65b12d 35%,#65b12d 45%,#D80027 45%,#D80027 55%,#ffb606 55%,#ffb606 65%,#e67e22 65%,#e67e22 75%,#e74c3c 85%,#e74c3c 85%,#c0392b 85%,#c0392b 100%);
    background-image: -ms-linear-gradient(left,#006DF0,#006DF0 25%,#933EC5 25%,#933EC5 35%,#65b12d 35%,#65b12d 45%,#D80027 45%,#D80027 55%,#ffb606 55%,#ffb606 65%,#e67e22 65%,#e67e22 75%,#e74c3c 85%,#e74c3c 85%,#c0392b 85%,#c0392b 100%);
    background-image: linear-gradient(to right,#006DF0,#006DF0 25%,#933EC5 25%,#933EC5 35%,#65b12d 35%,#65b12d 45%,#D80027 45%,#D80027 55%,#ffb606 55%,#ffb606 65%,#e67e22 65%,#e67e22 75%,#e74c3c 85%,#e74c3c 85%,#c0392b 85%,#c0392b 100%);
    background-size: 100% 6px;
    background-position: 50% 100%;
    background-repeat: no-repeat;
}
.form-group-inner {
    margin-bottom: 15px;
}
.form-group-inner label{
	font-size:14px;
	color:#303030;
}
.form-group-inner input[type="email"], .form-group-inner input[type="password"], .form-group-inner input[type="text"], .form-select-list .custom-select-value{
	font-size:14px;
	color:#303030;
	border:1px solid #ddd;
	outline:none;
	border-radius:0px;
	box-shadow: none;
}
.form-group-inner input[type="email"]:focus, .form-group-inner input[type="password"]:focus, .form-group-inner input[type="text"]:focus, .form-select-list .custom-select-value:focus{
	border:1px solid #006DF0;
	outline:none;
	border-radius:0px;
	box-shadow: none;
}
.icheckbox_square-green, .iradio_square-green {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    width: 22px;
    height: 22px;
    background: url(img/green1.png) no-repeat;
    border: none;
    cursor: pointer;
}
.icheckbox_square-green {
    background-position: 0 0;
}
.icheckbox_square-green.hover {
    background-position: -22px 0;
}
.icheckbox_square-green.checked {
    background-position: -44px 0;
	transition: all 0.3s ease 0s;
}
.login-btn-inner .check-label{
	margin-left:5px;
}
.login-btn-inner .label-check-inner{
	margin:0px;
	padding-top:5px;
}
.login-btn-inner .login-submit-cs{
	background-color: #006DF0;
    border-color: #006DF0;
	font-size:14px;
	font-weight:400;
	border-radius:0px;
}
.modal-bootstrap.modal-login-form {
    padding: 7px 20px;
    background-color: #006DF0;
    display: inline-block;
    text-align: center;
}
.modal-bootstrap.modal-login-form a{
    color:#fff;
}
.login-btn-inner .btn-primary.active.focus, .login-btn-inner .btn-primary.active:focus, .login-btn-inner .btn-primary.active:hover, .login-btn-inner .btn-primary:active.focus, .login-btn-inner .btn-primary:active:focus, .login-btn-inner .btn-primary:active:hover, .login-btn-inner .btn-primary:hover, .login-btn-inner .btn-primary:active, .login-btn-inner .btn-primary:focus{
	background-color: #006DF0;
    border-color: #006DF0;
	border-radius:0px;
	outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
}
.create-account-sign a{
	color: #006DF0;
    font-size: 100px;
    padding: 5px 70px;
    display: block;
}
.login-social-inner{
	margin-bottom:20px;
}
.login-social-inner a.button {
    line-height: 42px;
    text-decoration: none;
	margin-right:5px;
}
.login-social-inner .btn-social {
    position: relative;
}
.login-social-inner .span-left {
    padding-left: 55px;
    padding-right: 15px;
}
.login-social-inner .facebook {
    background-color: #3b5998;
}
.login-social-inner .twitter, .login-social-inner .twitter:hover, .login-social-inner .twitter:focus, .login-social-inner .facebook, .login-social-inner .facebook:hover, .login-social-inner .facebook:focus, .login-social-inner .googleplus, .login-social-inner .googleplus:hover, .login-social-inner .googleplus:focus, .login-social-inner .linkedin, .login-social-inner .linkedin:hover, .login-social-inner .linkedin:focus {
    color: #fff;
    text-shadow: 0 1px rgba(0, 0, 0, 0.08);
}
.login-social-inner .button {
    border: 0;
    height: 42px;
    color: #fff;
    line-height: 1;
    font-size: 15px;
    cursor: pointer;
    text-align: center;
    vertical-align: top;
    display: inline-block;
    -webkit-user-drag: none;
    text-shadow: 0 1px rgba(255, 255, 255, 0.2);
}
.login-social-inner .button{
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    -o-border-radius: 0;
    border-radius: 0;
    outline: none;
}
.login-social-inner .facebook:hover, .login-social-inner .facebook:focus {
    background-color: #25385F;
}
.login-social-inner .facebook span {
    background-color: #31497D;
}
.login-social-inner .btn-social span {
    -webkit-border-radius: 3px 0 0 3px;
    -moz-border-radius: 3px 0 0 3px;
    -o-border-radius: 3px 0 0 3px;
    border-radius: 3px 0 0 3px;
    display: inline-block;
    text-align: center;
    position: absolute;
    width: 42px;
    left: 0;
}
.login-social-inner .btn-social i {
    font-size: 22px;
    position: relative;
    top: 2px;
}
.login-social-inner .twitter span {
    background-color: #009AD5;
}
.login-social-inner .twitter {
    background-color: #00acee;
}
.login-social-inner .twitter:hover, .login-social-inner .twitter:focus {
    background-color: #00749F;
}
.login-social-inner .googleplus span {
    background-color: #C03121;
}
.login-social-inner .googleplus:hover, .login-social-inner .googleplus:focus {
    background-color: #8D2418;
}
.login-social-inner .googleplus {
    background-color: #dd4b39;
}
.login-social-inner .linkedin span {
    background-color: #084261;
}
.login-social-inner .linkedin:hover, .login-social-inner .linkedin:focus {
    background-color: #084261;
}
.login-social-inner .linkedin {
    background-color: #0077B5;
}
.form-group-inner label.login2 {
    margin: 0px;
    padding: 10px 0px;
}
.bt-df-checkbox {
    padding: 8px 0px;
    margin: 0;
}
.bt-df-checkbox .radio-checked {
    margin-right: 8px;
}
.icheckbox_square-green.checked {
    background-position: -44px 0;
}
.icheckbox_square-green.checked.disabled {
    background-position: -88px 0;
}
.iradio_square-green {
    background-position: -109px 0;
}
.iradio_square-green.hover {
    background-position: -131px 0;
}
.iradio_square-green.checked {
    background-position: -153px 0;
	transition: all 0.3s ease 0s;
}
.iradio_square-green.checked.disabled {
    background-position: -197px 0;
}
.inline-checkbox-cs {
    padding: 7px 0px;
}
.inline-checkbox-cs .checkbox-inline{
	padding-left:0px;
}
.checkbox.login-checkbox label {
    padding-left: 0px;
}
.btn-success.loginbtn {
    background-color: #006DF0;
    border-color: #006DF0;
}
.lock-inner i {
    font-size: 60px;
    color: #006DF0;
}
.lock-inner .text-success {
    color: #006DF0;
}
.lock-inner .btn-primary {
    background: #006DF0;
	border-color:#006DF0;
}
.poss-recover .btn-success {
    background-color: #006DF0;
    border-color: #006DF0;
}
.main-sparkline16-hd h1, .main-sparkline15-hd h1{
	font-size:20px;
}
.knob-single input {
    position: absolute;
    top: 0px;
    right: 25px;
}
.download-custom i {
    font-size: 40px;
}
.dropzone-custom-sys {
    text-align: center;
    padding: 30px 100px;
    background: #fff;
}
element.style {
    display: inline-block;
    width: 721px;
    height: 355px;
    vertical-align: top;
}
div#sparklinehome canvas {
    width: 100% !important;
}
.header-top-area {
    background: #006DF0;
}
.sidebar-nav .metismenu{
	background: #fff;
}
.sidebar-nav {
    background: #fff;
}
.sidebar-nav ul{
	background: #fff;
}
#sidebar.active .sidebar-nav ul.metismenu li ul.submenu-angle{
	position: absolute;
    right: -180px;
    top: 0px;
    text-align: left;
    width: 180px;
    background: #fff;
	-webkit-box-shadow: 0 1px 4px rgba(0,0,0,.175);
    box-shadow: 0 1px 4px rgba(0,0,0,.175);
}
#sidebar.active .sidebar-nav .metismenu a:hover, #sidebar.active .sidebar-nav .metismenu a:focus, #sidebar.active .sidebar-nav .metismenu a:active{
	background:#F6F8FA;
}
#sidebar.active .mCustomScrollBox{
	overflow:unset;
}
#sidebar.active .mCSB_container{
	overflow:unset;
}
.sidebar-nav .metismenu a{
	color:#8d9498;
}
.sidebar-nav .metismenu a:hover, .sidebar-nav .metismenu a:focus, .sidebar-nav .metismenu a:active {
    background: #F6F6F6;
}
.header-top-menu .navbar-nav>li .dropdown-menu, .header-right-info ul.header-right-menu li .author-message-top, .header-right-info ul.header-right-menu li .notification-author, .header-right-info ul.header-right-menu li .author-log, .header-right-info ul.header-right-menu li .admintab-wrap.menu-setting-wrap.menu-setting-wrap-bg.dropdown-menu {
    background: #fff;
}
.header-top-menu .navbar-nav>li .dropdown-menu a:hover, .header-right-info ul.header-right-menu li .dropdown-header-top.author-log li a:hover, .header-right-info ul.header-right-menu li .dropdown-header-top.author-log li a:focus, .header-drl-controller-btn.btn-info:active:focus, .btn-info:active:hover {
    background: #F6F8FA;
}
.header-top-menu .navbar-nav>li.open > a {
    color: #fff;
}
.header-top-menu .navbar-nav>li>a:hover {
    color: #fff;
}
#sidebar {
    background: #fff;
}
#sidebar .sidebar-header {
    background: #fff;
}
#sidebar.active .sidebar-header {
    padding-top:10px;
	position:relative;
	z-index:9;
	padding-bottom:10px;
}
.order-st i {
    background: #86bc42;
}
.product-details-btn button, .product-details-btn-2 button {
    background: #86bc42;
}
.single-product-text .button-default.cart-btn {
    background: #006DF0;
}
.history-anl-icon i {
    background-color: #86bc42;
}
.footer-copyright-area {
    background: #006DF0;
	padding: 20px 0px;
    text-align: center;
}
.message-single-top h1, .notification-single-top h1 {
    border-bottom: 1px solid #F6F8FA;
}
.header-right-info ul.header-right-menu li .message-view a, .header-right-info ul.header-right-menu li .notification-view a {
    border-top: 1px solid #F6F8FA;
}
.header-right-info .author-message-top:before, .header-right-info .notification-author:before {
    border-bottom: 10px solid #fff;
}
.header-right-info ul.header-right-menu li.open > a {
    color: #fff;
}
.indicator-ms {
    background: #fff;
}
.indicator-nt {
    background: #fff;
}
.menu-setting-wrap.menu-setting-wrap-bg .nav-tabs>li.active>a, .menu-setting-wrap.menu-setting-wrap-bg .nav-tabs>li.active>a:focus, .menu-setting-wrap.menu-setting-wrap-bg .nav-tabs>li.active>a:hover
 .notes-img {
    background: #F6F8FA;
}
.header-right-info .nav.custon-set-tab>li>a:focus, .header-right-info .nav.custon-set-tab>li>a:hover, .header-right-info .nav.custon-set-tab>li>a:active {
    color: #303030;
}
.edu-custon-design .panel-heading {
    background: #006DF0;
    color: #fff;
}
.panel-group.edu-custon-design .accordion-head a:hover, .panel-group.edu-custon-design .accordion-head a:focus, .panel-group.edu-custon-design .accordion-head a:active {
    color: #fff;
}
.analytics-sparkle-line .analytics-content .tuition-fees {
    font-size: 14px;
    float: right;
    margin-top: 8px;
	color: #999;
	font-weight:300;
}
.storage-right {
    float: right;
    margin-bottom: 0px;
    margin-top: -25px;
    font-size: 16px !important;
}
.analysis-progrebar-content .progress {
    width: 100%;
	margin-bottom: 6px;
}
.single-item-rating {
    float: right;
    margin-top: -32px;
    color: #ffb463;
}
.single-item-rating i{
    font-size:14px;
}
.product-price h3{
	font-size:25px;
}
.product-buttons button:hover{
	background:#006DF0;
	transition:all .4s ease 0s;
}
.single-product-text a, .single-latest-text a{
    color: #444;
    display: block;
	font-size:18px;
}
.single-product-text .cards-hd-dn{
    margin-top: 17px;
}
.single-product-text.edu-pro-tx a{
    margin-top: -1px;
}
.single-product-image img{
	width:100%;
}
.single-product-text a:hover, .single-latest-text a:hover{
	color:#006DF0;
	transition:all .4s ease 0s;
}
.single-product-text .button-default.cart-btn:hover{
	background:#006DF0;
	transition:all .4s ease 0s;
}
.single-latest-image {
    float: left;
}
.single-latest-text {
    background: #fff;
    overflow: hidden;
    padding: 10px 0 25px 30px;
}
.single-latest-text p{
	font-size: 14px;
    color: #444;
    margin: 10px 0px;
}
.single-latest-text .button-default{
	font-size:14px;
	background:#86bc42;
	padding: 5px 10px;
    border-radius: 3px;
    transition: all .4s ease 0s;
	color:#fff;
	display: inline;
}
.single-latest-text .button-default:hover{
	background:#2d3e50;
	color:#fff;
}
.progress-skill .progress {
    height: 5px;
    margin-bottom: 10px;
}
.progress-skill h2{
	font-size:16px;
	color:#444;
}
.progress-green {
    background-color: #006DF0;
}
.progress-yellow {
    background-color: #933EC5;
}
.progress-blue {
    background-color: #65b12d;
}
.progress-red {
    background-color: #D80027;
}
.blog-sig-details-dt.courses-info span {
    margin: 10px 50px 0;
    display: inline-block;
}
.social-media-edu, .single-review-st-text{
	    display: flex;
}
.single-review-st-text{
	padding: 7.7px 0px;
}
.single-review-st-text:last-child{
	padding-bottom: 0px;
}
.social-media-edu i {
    font-size: 40px;
    line-height: 54px;
	color:#006DF0;
}
.social-media-edu.twitter-cl i {
	color:#933EC5;
}
.social-media-edu.linkedin-cl i {
	color:#65b12d;
}
.social-media-edu.youtube-cl i {
	color:#D80027;
}
.social-edu-ctn {
    margin-left: 15px;
}
.social-edu-ctn h3{
	font-size:16px;
	text-transform:capitalize;
	color:#006DF0;
}
.twitter-cl .social-edu-ctn h3{
	color:#933EC5;
}
.linkedin-cl .social-edu-ctn h3{
	color:#65b12d;
}
.youtube-cl .social-edu-ctn h3{
	color:#D80027;
}
.social-edu-ctn p{
	font-size:14px;
	margin:0;
	color: #303030;
}
.single-product-text img {
    width: 100px;
    height: 100px;
    -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border-radius: 100%;
	margin-top: -70px;
}
.single-product-text{
	padding:20px;
	text-align:center;
}
.single-product-text.edu-pro-tx {
    padding: 20px 0px 0px 0px;
}
.single-product-text.edu-pro-tx h5 {
    line-height: 20px;
    margin-bottom: 5px;
	color: #444;
}
.single-cards-item, .single-review-st-item, .white-box{
	background:#fff;
	overflow:hidden;
}
.single-review-st-item, .white-box{
	padding:20px;
}
.single-product-text .ctn-cards{
	font-size:14px;
	color:#444;
	line-height:24px;
}
.single-product-text .follow-cards {
    font-size: 14px;
    color: #fff;
    background: #006DF0;
    display: inline-block;
    padding: 5px 20px;
    border-radius: 3px;
}
.single-product-text .follow-cards:hover {
    color: #fff;
}
.cards-dtn {
    margin-top: 27px;
}
.single-product-text .cards-hd-dn{
	font-size:18px;
}
.single-product-text h5{
	font-size:14px;
	color:#999;
	font-weight:300;
}
.cards-dtn h3{
	font-size:18px;
	color:#303030;
	margin:0;
}
.cards-dtn p{
	font-size:14px;
	color:#303030;
	margin:0;
}
.single-review-st-text img{
	height:50px;
	width:50px;
	border-radius:50%;
}
.review-ctn-hf h3{
	font-size:14px;
	color:#303030;
	margin-bottom:5px;
}
.review-ctn-hf, .review-item-rating {
    margin-left: 15px;
}
.review-ctn-hf p{
	font-size:14px;
	color:#303030;
	margin:0;
}
.single-review-st-hd h2{
	font-size:18px;
	color:#303030;
}
.review-item-rating i {
    font-size: 14px;
    margin-top: 15px;
	color:#ffb463;
}
.review-ctn-hf{
	margin-top:5px;
}
.review-item-rating {
    text-align: right;
    margin-left: auto;
	margin-top:5px;
}
.single-product-text.edu-pro-tx{
	text-align:left;
}
.label-purple {
    background-color: #9675ce;
}
.basic-list li {
    display: block;
    padding: 11.6px 0;
    border-bottom: 1px solid rgba(120,130,140,.13);
    line-height: 27px;
    color: #303030;
    font-size: 14px;
}
.basic-list li:last-child {
    border-bottom: 0px solid rgba(120,130,140,.13);
	padding-bottom:0px;
}
.basic-list .label {
    margin-top: 0px;
    padding: 7px 10px;
    font-size: 12px;
    border-radius: 2px;
}
.label-danger.label-1{
	background:#006DF0;
}
.label-purple.label-2{
	background:#933EC5;
}
.label-success.label-3{
	background:#65b12d;
}
.label-info.label-4{
	background:#D80027;
}
.label-purple.label-7{
	background:#555;
}
.white-box h3{
	font-size:16px;
	color:#444;
}
.country-state .progress{
	height:4px;
	margin-bottom: 0px;
}
.country-state h2{
	font-size:18px;
	color:#444;
	margin-bottom:2px;
}
.country-state li {
    margin: 26px 0px;
}
.country-state small{
	font-size:14px;
	color:#303030;
}
.white-box.analytics-info-cs h3{
	font-size:16px;
	color:#303030;
}
.analytics-content .progress{
	height:5px;
	margin-bottom:0;
}
.analytics-content .text-success{
	color:#006DF0;
}
.analytics-content .text-danger{
	color:#933EC5;
}
.analytics-content .text-info{
	color:#65b12d;
}
.analytics-content .text-inverse{
	color:#D80027;
}
.progress-bar.progress-bar-danger{
	background:#933EC5;
}
.progress-bar.progress-bar-info{
	background:#65b12d;
}
.progress-bar.progress-bar-inverse{
	background:#D80027;
}
.progress-bar.progress-bar-danger.hd-tp-1{
	background:#006DF0;
}
.projects-st-content.project-rating-cl .progress-bar.hd-tp-2{
	background:#933EC5;
}
.progress-bar.hd-tp-3{
	background:#65b12d;
}
.projects-st-content.project-rating-cl2 .progress-bar.hd-tp-4{
	background:#D80027;
}
.progress-bar.progress-bar-danger.hd-tp-5{
	background:#9675ce;
}
.projects-st-content.project-rating-cl .progress-bar.hd-tp-6{
	background:#555;
}
.cus-product-sl-rp li h5{
	color:#999;
	font-weight:300;
}
.menu-switcher-pro .btn-info:active, .menu-switcher-pro .btn-info:focus, .menu-switcher-pro .btn-info:hover, .menu-switcher-pro .btn-info:visited, .header-drl-controller-btn.btn-info:active:focus{
	background: #006DF0;
	outline:none;
}
.mini-navbar .single-review-st-text img {
    height: 56px;
    width: 56px;
}
.mini-navbar .single-product-text img {
    width: 116px;
    height: 116px;
}
.mini-navbar .country-state li {
    margin: 28.5px 0px;
}
.mini-navbar .basic-list li {
    padding: 11.6px 0px;
}
.widget-cl-1 .text-success{
	color:#006DF0;
}
.widget-cl-2 .text-info{
	color:#933EC5;
}
.widget-cl-3 .text-warning{
	color:#65b12d;
}
.widget-cl-4 .text-danger{
	color:#D80027;
}
.btn-success.widget-btn-1:active, .btn-success.widget-btn-1:hover, .btn-success.widget-btn-1:focus, .btn-success.widget-btn-1:visited{
	background:#006DF0;
	border:1px solid #006DF0;
	outline:none;
}
.btn-info.widget-btn-2:active, .btn-info.widget-btn-2:hover, .btn-info.widget-btn-2:focus, .btn-info.widget-btn-2:visited{
	background:#933EC5;
	border:1px solid #933EC5;
	outline:none;
}
.btn-info.widget-btn-2{
	background:#933EC5;
	border:1px solid #933EC5;
}
.btn-warning.widget-btn-3{
	background:#65b12d;
	border:1px solid #65b12d;
}
.btn-warning.widget-btn-3:active, .btn-warning.widget-btn-3:hover, .btn-warning.widget-btn-3:focus, .btn-warning.widget-btn-3:visited{
	background:#65b12d;
	border:1px solid #65b12d;
	outline:none;
}
.btn-danger.widget-btn-4{
	background:#D80027;
	border:1px solid #D80027;
}
.btn-danger.widget-btn-4:active, .btn-danger.widget-btn-4:hover, .btn-danger.widget-btn-4:focus, .btn-danger.widget-btn-4:visited{
	background:#D80027;
	border:1px solid #D80027;
	outline:none;
}
.add-professors .invalid, .addcourse .invalid, .comment .invalid, .addcoursepro .invalid, .add-department .invalid {
    color: #D80027;
}
.form-group textarea{
	width:100%;
	height:134px;
	padding:10px;
	border:1px solid #e5e6e7;
	outline:none;
	line-height:24px;
}
.form-group.edit-ta-resize textarea{
	height:144px;
}
.form-group textarea:focus{
	border:1px solid #006DF0;
}
.add-professors .form-group, .addcoursepro .form-group{
	margin: 10px 0px;
}
.add-professors .file-upload-inner.ts-forms input[type="text"]{
	margin: 10px 0px;
}
.m-t-md .btn-success{
	background-color: #006DF0;
    border-color: #006DF0;
}
.m-t-md .btn-primary{
	background-color: #933EC5;
    border-color: #933EC5;
}
.m-t-md .btn-warning{
	background-color: #65b12d;
    border-color: #65b12d;
}
.addcourse .form-group{
	margin:10px 0px;
}
.pro-ad .dropzone.dropzone-custom{
	border: 0px dashed #86bc42;
}
.dropzone.dz-clickable .dz-message{
	border: 2px dashed #ccc;
	margin: 0px 0px;
	padding: 20px;
}
.pro-ad .dropzone.dz-started .dz-message{
	display:block;
	height: 175px;
}
.pro-ad .dropzone.dz-started .edudropnone{
	display:none;
}
.pro-ad .dropzone .dz-preview {
    position: absolute;
    bottom: 115px;
}
.pro-ad .download-custom i{
    color: #999;
    font-size: 25px;
    margin-bottom: 10px;
}
.pro-ad .download-custom h2, .pro-ad .download-custom p{
    font-size: 14px;
    color: #999;
}
.pro-ad .dropzone{
    padding:0px;
}
.pro-ad .form-group textarea{
	height: 134px;
}
.pro-ad.addcoursepro .form-group textarea{
	height: 234px;
}
.hd-pro-img{
	overflow:hidden;
	opacity:0;
}
.alert-up-pd .invalid {
    position: relative;
    top: 10px;
}
.pro-ad .dropzone.dz-clickable{
    cursor: auto;
}
.pro-ad .dropzone .download-custom{
    cursor: pointer;
}
.payment-adress .waves-effect.waves-light{
	cursor:poiner;
}
.comment .form-group{
	margin-bottom:0px;
}
.comment input[type="text"], .comment textarea{
	margin:15px 0px;
}
.payment-adress.comment-stn{
	text-align:left;
}
.add-department .form-group{
	margin:10px 0px;
}
.datatable-dashv1-list .form-control{
	height:35px;
}
.datatable-dashv1-list .btn-default{
	outline:none
}
.datatable-dashv1-list .editable-submit{
	background:#006DF0;
	color:#fff;
	border:1px solid #006DF0;
}
.datatable-dashv1-list .btn-default:hover, .datatable-dashv1-list .btn-default:focus, .datatable-dashv1-list .btn-default:active, .datatable-dashv1-list .editable-submit:hover, .datatable-dashv1-list .editable-submit:focus, .datatable-dashv1-list .editable-submit:active{
	background:#006DF0;
	color:#fff;
}
.dropdown-segmented .btn{
	padding: 9px 12px;
}
.multi-uploader-cs .dropzone.dropzone-custom{
	border: 2px dashed #006DF0;
}
.multi-uploader-cs .dropzone.dz-clickable .dz-message{
	border: 0px dashed #006DF0;
}
.custom-login h3, .ps-recovered h3{
	font-size:20px;
	color:#303030;
}
.custom-login p, .ps-recovered p{
	font-size:14px;
	color:#303030;
}
.footer-lg-pro a{
	font-size:14px;
	color:#006DF0;
}
.country-state li:last-child {
    margin-bottom:0px;
}
.pwstrength_viewport_progress .progress, .pwstrength_viewport_progress2 .progress, .pwstrength_viewport_progress4 .progress, .form-group.mg-b-pass {
	margin-bottom:0px;
}
/*----------------------------------------*/
/*  19. Mini Sidebar
/*----------------------------------------*/
#sidebar.active .sidebar-nav .metismenu {
    margin-top: 12px;
}
.mini-navbar .dropzone.dz-clickable .dz-message {
   padding: 32px 20px;
}
.mini-navbar #sidebar.active .sidebar-nav ul.metismenu li ul.submenu-angle.interface-mini-nb-dp{
	top:-30px;
}
.mini-navbar #sidebar.active .sidebar-nav ul.metismenu li ul.submenu-angle.chart-mini-nb-dp{
	top:-40px;
}
.mini-navbar #sidebar.active .sidebar-nav ul.metismenu li ul.submenu-angle.form-mini-nb-dp{
	top:-100px;
}
.mini-navbar #sidebar.active .sidebar-nav ul.metismenu li ul.submenu-angle.app-mini-nb-dp{
	top:-170px;
}
.mini-navbar #sidebar.active .sidebar-nav ul.metismenu li ul.submenu-angle.page-mini-nb-dp{
	top:-210px;
}
.sparkline-content p{
	line-height:27px;
}
.sparkline-content.peity-ctn p{
	line-height:26px;
}
.mini-navbar .sparkline-content p{
	font-size: 15px;
    line-height: 29px;
}
.form-group-inner:last-child{
	margin-bottom:0px;
}
.note-editor.note-frame.panel.panel-default{
	margin-bottom:0px;
}
.custon-tab-style1 p:last-child, .edu-custon-design .admin-panel-content p:last-child{
	margin-bottom:0px;
}
.edu-tab1 .nav-tabs{
	border-bottom: 0px solid #ddd;
}
/*----------------------------------------*/
/*  20. Custom Scroll
/*----------------------------------------*/
.comment-scrollbar, .timeline-scrollbar, .messages-scrollbar, .project-list-scrollbar {
    height: 580px;
}
.mCSB_outside+.mCSB_scrollTools {
    right: -15px;
    margin: 0px 0px;
}
.message-menu .mCSB_outside+.mCSB_scrollTools, .notification-menu .mCSB_outside+.mCSB_scrollTools, .left-custom-menu-adp-wrap .mCSB_outside+.mCSB_scrollTools {
    right: 0px;
    margin: 0px 0px;
}
.mCS-light-1.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ background-color: #006DF0; }
.mCS-light-1.mCSB_scrollTools .mCSB_draggerRail{ background-color: #ccc; } 
/*-----------------------
21. Wizard CSS
-------------------------*/
.wizard > .steps{
    position: relative;
    display: block;
    width: 100%;
}
.wizard.vertical > .steps{
    display: inline;
    float: left;
    width: 30%;
}
.wizard > .steps .number{
    font-size: 1.429em;
}
.wizard > .steps > ul > li{
    width: 25%;
}
.wizard > .steps > ul > li,.wizard > .actions > ul > li{
    float: left;
}
.wizard.vertical > .steps > ul > li{
    float: none;
    width: 100%;
}
.wizard > .steps a,.wizard > .steps a:hover,.wizard > .steps a:active{
    display: block;
    width: auto;
    margin: 0 0.5em 0.5em;
    padding: 1em 1em;
    text-decoration: none;

    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
}
.wizard > .steps .disabled a,.wizard > .steps .disabled a:hover,.wizard > .steps .disabled a:active{
    background: #eee;
    color: #aaa;
    cursor: default;
}
.wizard > .steps .current a,.wizard > .steps .current a:hover,.wizard > .steps .current a:active{
    background: #2184be;
    color: #fff;
    cursor: default;
}
.wizard > .steps .done a,.wizard > .steps .done a:hover,.wizard > .steps .done a:active{
    background: #9dc8e2;
    color: #fff;
}
.wizard > .steps .error a,.wizard > .steps .error a:hover,.wizard > .steps .error a:active{
    background: #ff3111;
    color: #fff;
}
.wizard > .content{
    background: #eee;
    display: block;
    margin: 0.5em;
    min-height: 35em;
    overflow: hidden;
    position: relative;
    width: auto;

    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
}
.wizard.vertical > .content{
    display: inline;
    float: left;
    margin: 0 2.5% 0.5em 2.5%;
    width: 65%;
}
.wizard > .content > .body{
    float: left;
    position: absolute;
    width: 95%;
    height: 95%;
    padding: 2.5%;
}
.wizard > .content > .body ul{
    list-style: disc !important;
}
.wizard > .content > .body ul > li{
    display: list-item;
}
.wizard > .content > .body > iframe{
    border: 0 none;
    width: 100%;
    height: 100%;
}
.wizard > .content > .body input{
    display: block;
    border: 1px solid #ccc;
}
.wizard > .content > .body input[type="checkbox"]{
    display: inline-block;
}
.wizard > .content > .body input.error{
    background: rgb(251, 227, 228);
    border: 1px solid #fbc2c4;
    color: #8a1f11;
}
.wizard > .content > .body label{
    display: inline-block;
    margin-bottom: 0.5em;
}
.wizard > .content > .body label.error{
    color: #8a1f11;
    display: inline-block;
    margin-left: 1.5em;
}
.wizard > .actions{
    position: relative;
    display: block;
    text-align: right;
    width: 100%;
}
.wizard.vertical > .actions{
    display: inline;
    float: right;
    margin: 0 2.5%;
    width: 95%;
}
.wizard > .actions > ul{
    display: inline-block;
    text-align: right;
}
.wizard > .actions > ul > li{
    margin: 0 0.5em;
}
.wizard.vertical > .actions > ul > li{
    margin: 0 0 0 1em;
}
.wizard > .actions a,.wizard > .actions a:hover,.wizard > .actions a:active{
    background: #2184be;
    color: #fff;
    display: block;
    padding: 0.5em 1em;
    text-decoration: none;

    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
}
.wizard > .actions .disabled a,.wizard > .actions .disabled a:hover,.wizard > .actions .disabled a:active{
    background: #eee;
    color: #aaa;
}
.current-info{
	display:none;
}
#example-basic-h-1, #example-basic-h-0, #example-basic-h-2, #example-basic-h-3{
	display:none;
}
.product-cart-inner .wizard > .steps a, .product-cart-inner .wizard > .steps a:hover, .product-cart-inner .wizard > .steps a:active{
	padding:10px 15px;
	line-height: 24px;
	font-size:14px;
	background:#e12503;
}
.product-cart-inner .wizard > .steps .disabled a, .product-cart-inner .wizard > .steps .disabled a:hover, .product-cart-inner .wizard > .steps .disabled a:active{
	background: #fff;
    color: #444;
}
.product-cart-inner .wizard > .content > .body{
	background:#fff;
	width:100%;
}
.product-cart-inner .wizard > .content{
	background:#fff;
	border: 1px solid rgba(0,0,0,.12);
}
.product-cart-inner .wizard > .content > .body input {
    width: 35px;
}
.wizard > .actions a, .wizard > .actions a:hover, .wizard > .actions a:active {
    background: #e12503;
}
.product-list-cart .product-status-wrap{
	border: 0px solid rgba(0,0,0,.12);
	padding:0px;
}
.product-list-cart .product-status-wrap table th{
	border: 0px solid rgba(0,0,0,.12);
}
.product-list-cart h3{
	font-size:16px;
}
.product-delivary input, .payment-details input{
	width:100% !important;
}
.payment-details button, .product-confarmation button{
	background: #e12503;
	border-color:#e12503;
}
.product-confarmation {
    text-align: center;
}
.product-confarmation p{
    padding: 0px 130px;
    line-height: 24px;
    font-size: 14px;
}
.error-pagewrap {
    min-height: 100vh;
    text-align: center;
}
.error-pagewrap:before {
    content: '';
    height: 100vh;
    width: 1px;
}
.error-page-int, .error-pagewrap:before {
    vertical-align: middle;
    display: inline-block;
}
.error-page-int  {
    max-width: 500px;
    padding: 20px 0;
    width: 80%;
    position: relative;
    margin: 0 auto;
}
.content-error a{
	margin:5px 5px;
	display:inline-block;
}
.nk-ds-n-pro{
	display:none;
}
.nk-ds-n-pro-t-0{
	margin-top:0px;
}
.devit-card-custom .form-group{
	margin:10px 0px;
}
.custom-product-edit {
    margin-top: 0px;
}
.login-horizental.lg-hz-mg{
	margin-top:0px;
}
.content-error .hpanel {
	text-align: left;
}
.content-error #loginForm a{
	padding: 6px 0px;
	margin: 5px 0px;
	border:none;
}
.header-right-info .author-message-top::before, .header-right-info .notification-author::before {
	position: unset;
	display: block;
	border-width: 0px;
}
.profile-img img{
	width:100%;
}
.c3-align-dlt{
	display:none;
}
/*----------------------------------------*/
/*  22. Notification
/*----------------------------------------*/
.notification-bt .btn{
	border-radius:3px;
}
.notification-bt .btn-info{
	background-color: #006DF0;
    border-color: #006DF0;
}
.notification-bt .btn-warning{
	background-color: #933EC5;
    border-color: #933EC5;
}
.notification-bt .btn-danger{
	background-color: #D80027;
    border-color: #D80027;
}
.notification-bt .btn-success{
	background-color: #65b12d;
    border-color: #65b12d;
}
.notification-bt .btn-info:focus, .notification-bt .btn-info:active, .notification-bt .btn-info:visited, .notification-bt .btn-warning:focus, .notification-bt .btn-warning:active, .notification-bt .btn-warning:visited{
	background-color: #006DF0;
    border-color: #006DF0;
	outline:none;
}
.notification-bt .btn-warning:focus, .notification-bt .btn-warning:active, .notification-bt .btn-warning:visited{
	background-color: #933EC5;
    border-color: #933EC5;
	outline:none;
}
.notification-bt .btn-danger:focus, .notification-bt .btn-danger:active, .notification-bt .btn-danger:visited{
	background-color: #D80027;
    border-color: #D80027;
	outline:none;
}
.notification-bt .btn-success:focus, .notification-bt .btn-success:active, .notification-bt .btn-success:visited{
	background-color: #65b12d;
    border-color: #65b12d;
	outline:none;
}
.info-md a{
	background-color: #933EC5;
    border-color: #933EC5;
}
.warning-md a{
	background-color: #65b12d;
    border-color: #65b12d;
}
.danger-md a{
	background-color: #D80027;
    border-color: #D80027;
}
.chart-ds-n-ex{
	display:none;
}
/*----------------------------------------*/
/*  23. footer
/*----------------------------------------*/
.footer-copy-right p {
    margin: 0px;
    font-size: 15px;
    color: #fff;
}
.footer-copy-right a{
	color:#fff;
	text-decoration:none;
}

`