(self.webpackChunkilyavtln_ui=self.webpackChunkilyavtln_ui||[]).push([[535],{"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./projects/ui-kit/src/lib/components/chip/chip.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Removable:()=>Removable,WithCustomTitle:()=>WithCustomTitle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>chip_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var chip_componentngResource=__webpack_require__("./projects/ui-kit/src/lib/components/chip/chip.component.scss?ngResource"),chip_componentngResource_default=__webpack_require__.n(chip_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let ChipComponent=class ChipComponent{};ChipComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ui-chip",standalone:!0,imports:[],template:"<p>chip works!</p>\n",styles:[chip_componentngResource_default()]})],ChipComponent);const chip_stories={title:"UI/Components/Chip",component:ChipComponent,tags:["autodocs"]},Default={render:args=>({props:args}),args:{title:"Default Chip",size:"medium"}},WithCustomTitle={render:args=>({props:args}),args:{title:"Custom Chip Title",size:"large"}},Removable={render:args=>({props:args}),args:{title:"Removable Chip",size:"small"}},__namedExportsOrder=["Default","WithCustomTitle","Removable"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => ({\n    props: args\n  }),\n  args: {\n    title: 'Default Chip',\n    // Замените на ваши свойства\n    size: 'medium' // Добавьте размер, если есть\n  }\n}",...Default.parameters?.docs?.source}}},WithCustomTitle.parameters={...WithCustomTitle.parameters,docs:{...WithCustomTitle.parameters?.docs,source:{originalSource:"{\n  render: args => ({\n    props: args\n  }),\n  args: {\n    title: 'Custom Chip Title',\n    // Пользовательский заголовок для этой истории\n    size: 'large' // Настройки размера\n  }\n}",...WithCustomTitle.parameters?.docs?.source}}},Removable.parameters={...Removable.parameters,docs:{...Removable.parameters?.docs,source:{originalSource:"{\n  render: args => ({\n    props: args\n  }),\n  args: {\n    title: 'Removable Chip',\n    // Заголовок для удаляемого чипа\n    size: 'small' // Размер для удаляемого чипа\n  }\n}",...Removable.parameters?.docs?.source}}}},"./projects/ui-kit/src/lib/components/chip/chip.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);