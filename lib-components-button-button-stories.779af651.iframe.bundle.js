(self.webpackChunkilyavtln_ui=self.webpackChunkilyavtln_ui||[]).push([[451],{"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./projects/ui-kit/src/lib/components/button/button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var button_componentngResource=__webpack_require__("./projects/ui-kit/src/lib/components/button/button.component.scss?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let ButtonComponent=class ButtonComponent{label;type="primary";size="medium";get buttonClass(){return{"btn-primary":"primary"===this.type,"btn-secondary":"secondary"===this.type,"btn-small":"small"===this.size,"btn-medium":"medium"===this.size,"btn-large":"large"===this.size}}static propDecorators={label:[{type:core.Input}],type:[{type:core.Input}],size:[{type:core.Input}]}};ButtonComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ui-button",standalone:!0,imports:[common.NgClass],template:'<button [ngClass]="buttonClass">\n  @if (label) {\n    {{ label }}\n  } @else {\n    <ng-content></ng-content>\n  }\n</button>\n',styles:[button_componentngResource_default()]})],ButtonComponent);const button_stories={title:"UI/Components/Button",component:ButtonComponent,tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","secondary"]},label:{control:"text"},size:{control:"select",options:["small","medium","large"]}}},Primary={args:{type:"primary",label:"Primary Button",size:"medium"}},Secondary={args:{type:"secondary",label:"Secondary Button",size:"medium"}},__namedExportsOrder=["Primary","Secondary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'primary',\n    label: 'Primary Button',\n    size: 'medium'\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'secondary',\n    label: 'Secondary Button',\n    size: 'medium'\n  }\n}",...Secondary.parameters?.docs?.source}}}},"./projects/ui-kit/src/lib/components/button/button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".btn-primary {\n  background-color: blue;\n  color: white;\n}\n\n.btn-secondary {\n  background-color: gray;\n  color: white;\n}\n\n.btn-small {\n  font-size: 12px;\n  padding: 5px 10px;\n}\n\n.btn-medium {\n  font-size: 14px;\n  padding: 10px 15px;\n}\n\n.btn-large {\n  font-size: 16px;\n  padding: 15px 20px;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);