(self.webpackChunkilyavtln_ui=self.webpackChunkilyavtln_ui||[]).push([[210],{"./projects/ui-kit/src/stories/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>ButtonComponent});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_button_css_ngResource__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/ui-kit/src/stories/button.css?ngResource"),_button_css_ngResource__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_button_css_ngResource__WEBPACK_IMPORTED_MODULE_3__),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let ButtonComponent=class ButtonComponent{primary=!1;backgroundColor;size="medium";label="Button";onClick=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter;get classes(){const mode=this.primary?"storybook-button--primary":"storybook-button--secondary";return["storybook-button",`storybook-button--${this.size}`,mode]}static propDecorators={primary:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],backgroundColor:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],onClick:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}]}};ButtonComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"storybook-button",standalone:!0,imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],template:' <button\n  type="button"\n  (click)="onClick.emit($event)"\n  [ngClass]="classes"\n  [ngStyle]="{ \'background-color\': backgroundColor }"\n>\n  {{ label }}\n</button>',styles:[_button_css_ngResource__WEBPACK_IMPORTED_MODULE_3___default()]})],ButtonComponent)},"./projects/ui-kit/src/stories/header.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>HeaderComponent});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_header_css_ngResource__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./projects/ui-kit/src/stories/header.css?ngResource"),_header_css_ngResource__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_header_css_ngResource__WEBPACK_IMPORTED_MODULE_4__),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_button_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/ui-kit/src/stories/button.component.ts");let HeaderComponent=class HeaderComponent{user=null;onLogin=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter;onLogout=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter;onCreateAccount=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter;static propDecorators={user:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],onLogin:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}],onLogout:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}],onCreateAccount:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}]}};HeaderComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"storybook-header",standalone:!0,imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,_button_component__WEBPACK_IMPORTED_MODULE_3__.Q],template:'<header>\n  <div class="storybook-header">\n    <div>\n      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">\n        <g fill="none" fillRule="evenodd">\n          <path\n            d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"\n            fill="#FFF"\n          />\n          <path\n            d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"\n            fill="#555AB9"\n          />\n          <path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8" />\n        </g>\n      </svg>\n      <h1>Acme</h1>\n    </div>\n    <div>\n      <div *ngIf="user">\n        <span class="welcome">\n          Welcome, <b>{{ user.name }}</b\n          >!\n        </span>\n        <storybook-button\n          *ngIf="user"\n          size="small"\n          (onClick)="onLogout.emit($event)"\n          label="Log out"\n        ></storybook-button>\n      </div>\n      <div *ngIf="!user">\n        <storybook-button\n          *ngIf="!user"\n          size="small"\n          class="margin-left"\n          (onClick)="onLogin.emit($event)"\n          label="Log in"\n        ></storybook-button>\n        <storybook-button\n          *ngIf="!user"\n          size="small"\n          [primary]="true"\n          class="margin-left"\n          (onClick)="onCreateAccount.emit($event)"\n          label="Sign up"\n        ></storybook-button>\n      </div>\n    </div>\n  </div>\n</header>',styles:[_header_css_ngResource__WEBPACK_IMPORTED_MODULE_4___default()]})],HeaderComponent)},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./projects/ui-kit/src/stories/page.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:()=>LoggedIn,LoggedOut:()=>LoggedOut,__namedExportsOrder:()=>__namedExportsOrder,default:()=>page_stories});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),pagengResource=__webpack_require__("./projects/ui-kit/src/stories/page.css?ngResource"),pagengResource_default=__webpack_require__.n(pagengResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),header_component=__webpack_require__("./projects/ui-kit/src/stories/header.component.ts");let PageComponent=class PageComponent{user=null;doLogout(){this.user=null}doLogin(){this.user={name:"Jane Doe"}}doCreateAccount(){this.user={name:"Jane Doe"}}};PageComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"storybook-page",standalone:!0,imports:[common.CommonModule,header_component.l],template:'<article>\n  <storybook-header\n    [user]="user"\n    (onLogout)="doLogout()"\n    (onLogin)="doLogin()"\n    (onCreateAccount)="doCreateAccount()"\n  ></storybook-header>\n  <section class="storybook-page">\n    <h2>Pages in Storybook</h2>\n    <p>\n      We recommend building UIs with a\n      <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">\n        <strong>component-driven</strong>\n      </a>\n      process starting with atomic components and ending with pages.\n    </p>\n    <p>\n      Render pages with mock data. This makes it easy to build and review page states without\n      needing to navigate to them in your app. Here are some handy patterns for managing page data\n      in Storybook:\n    </p>\n    <ul>\n      <li>\n        Use a higher-level connected component. Storybook helps you compose such data from the\n        "args" of child component stories\n      </li>\n      <li>\n        Assemble data in the page component from your services. You can mock these services out\n        using Storybook.\n      </li>\n    </ul>\n    <p>\n      Get a guided tutorial on component-driven development at\n      <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">\n        Storybook tutorials\n      </a>\n      . Read more in the\n      <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer"> docs </a>\n      .\n    </p>\n    <div class="tip-wrapper">\n      <span class="tip">Tip</span> Adjust the width of the canvas with the\n      <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">\n        <g fill="none" fillRule="evenodd">\n          <path\n            d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"\n            id="a"\n            fill="#999"\n          />\n        </g>\n      </svg>\n      Viewports addon in the toolbar\n    </div>\n  </section>\n</article>',styles:[pagengResource_default()]})],PageComponent);const page_stories={title:"Example/Page",component:PageComponent,parameters:{layout:"fullscreen"}},LoggedOut={},LoggedIn={play:(_ref=(0,asyncToGenerator.A)((function*({canvasElement}){const canvas=(0,dist.ux)(canvasElement),loginButton=canvas.getByRole("button",{name:/Log in/i});yield(0,dist.E3)(loginButton).toBeInTheDocument(),yield dist.Q4.click(loginButton),yield(0,dist.E3)(loginButton).not.toBeInTheDocument();const logoutButton=canvas.getByRole("button",{name:/Log out/i});yield(0,dist.E3)(logoutButton).toBeInTheDocument()})),function play(_x){return _ref.apply(this,arguments)})};var _ref;const __namedExportsOrder=["LoggedOut","LoggedIn"];LoggedOut.parameters={...LoggedOut.parameters,docs:{...LoggedOut.parameters?.docs,source:{originalSource:"{}",...LoggedOut.parameters?.docs?.source}}},LoggedIn.parameters={...LoggedIn.parameters,docs:{...LoggedIn.parameters?.docs,source:{originalSource:"{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const loginButton = canvas.getByRole('button', {\n      name: /Log in/i\n    });\n    await expect(loginButton).toBeInTheDocument();\n    await userEvent.click(loginButton);\n    await expect(loginButton).not.toBeInTheDocument();\n    const logoutButton = canvas.getByRole('button', {\n      name: /Log out/i\n    });\n    await expect(logoutButton).toBeInTheDocument();\n  }\n}",...LoggedIn.parameters?.docs?.source}}}},"./projects/ui-kit/src/stories/button.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".storybook-button {\n  display: inline-block;\n  cursor: pointer;\n  border: 0;\n  border-radius: 3em;\n  font-weight: 700;\n  line-height: 1;\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n.storybook-button--primary {\n  background-color: #1ea7fd;\n  color: white;\n}\n.storybook-button--secondary {\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n  background-color: transparent;\n  color: #333;\n}\n.storybook-button--small {\n  padding: 10px 16px;\n  font-size: 12px;\n}\n.storybook-button--medium {\n  padding: 11px 20px;\n  font-size: 14px;\n}\n.storybook-button--large {\n  padding: 12px 24px;\n  font-size: 16px;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/ui-kit/src/stories/header.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".storybook-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n.storybook-header svg {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header h1 {\n  display: inline-block;\n  vertical-align: top;\n  margin: 6px 0 6px 10px;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1;\n}\n\n.storybook-header button + button {\n  margin-left: 10px;\n}\n\n.storybook-header .welcome {\n  margin-right: 10px;\n  color: #333;\n  font-size: 14px;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/ui-kit/src/stories/page.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".storybook-page {\n  margin: 0 auto;\n  padding: 48px 20px;\n  max-width: 600px;\n  color: #333;\n  font-size: 14px;\n  line-height: 24px;\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n.storybook-page h2 {\n  display: inline-block;\n  vertical-align: top;\n  margin: 0 0 4px;\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 1;\n}\n\n.storybook-page p {\n  margin: 1em 0;\n}\n\n.storybook-page a {\n  color: #1ea7fd;\n  text-decoration: none;\n}\n\n.storybook-page ul {\n  margin: 1em 0;\n  padding-left: 30px;\n}\n\n.storybook-page li {\n  margin-bottom: 8px;\n}\n\n.storybook-page .tip {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 10px;\n  border-radius: 1em;\n  background: #e7fdd8;\n  padding: 4px 12px;\n  color: #66bf3c;\n  font-weight: 700;\n  font-size: 11px;\n  line-height: 12px;\n}\n\n.storybook-page .tip-wrapper {\n  margin-top: 40px;\n  margin-bottom: 40px;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.storybook-page .tip-wrapper svg {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 3px;\n  margin-right: 4px;\n  width: 12px;\n  height: 12px;\n}\n\n.storybook-page .tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);