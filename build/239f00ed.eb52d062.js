(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{64:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(2),i=a(6),r=(a(0),a(90)),l=["components"],c={},o={unversionedId:"SDK/Item",id:"SDK/Item",isDocsHomePage:!1,title:"Item",description:"You can manage datastore item by HexabaseItem.",source:"@site/docs/SDK/Item.md",slug:"/SDK/Item",permalink:"/hexabase-dart-sdk-docs/docs/SDK/Item",editUrl:"https://github.com/b-eee/hexabase-sdk-docs/edit/master/website/docs/SDK/Item.md",version:"current",sidebar:"someSidebar",previous:{title:"Datastore",permalink:"/hexabase-dart-sdk-docs/docs/SDK/Datastore"}},s=[{value:"Create data",id:"create-data",children:[]},{value:"Update data",id:"update-data",children:[]},{value:"Get detail",id:"get-detail",children:[]},{value:"Get field value",id:"get-field-value",children:[]},{value:"Retribute item status",id:"retribute-item-status",children:[{value:"Change status",id:"change-status",children:[]}]},{value:"Delete item",id:"delete-item",children:[]},{value:"Attach file",id:"attach-file",children:[{value:"Multiple files",id:"multiple-files",children:[]},{value:"Download file content",id:"download-file-content",children:[]},{value:"Delete file",id:"delete-file",children:[]}]}],d={rightToc:s};function u(e){var t=e.components,a=Object(i.a)(e,l);return Object(r.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You can manage datastore item by HexabaseItem."),Object(r.b)("h2",{id:"create-data"},"Create data"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"var item = datastore.item();\nitem.set('name', 'Apple').set('price', 100);\nawait item.save();\n")),Object(r.b)("h2",{id:"update-data"},"Update data"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"item.set('name', 'Banana').set('price', 90);\nawait item.save();\n")),Object(r.b)("h2",{id:"get-detail"},"Get detail"),Object(r.b)("p",null,"If you retribute items from Datastore, please call ",Object(r.b)("inlineCode",{parentName:"p"},"getDetail")," before update the item."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"var items = await datastore.items();\nvar item = items[0];\nawait item.getDetail();\nitem.set('name', 'Banana').set('price', 90);\nawait item.save();\n")),Object(r.b)("h2",{id:"get-field-value"},"Get field value"),Object(r.b)("p",null,"You can get the field value with ",Object(r.b)("inlineCode",{parentName:"p"},"get")," method."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"item.get('name'); // Apple\nitem.get('price'); // 90\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"get")," method returns dynamic. So you can call it by specifying the type of return value."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"// String\nitem.getAsString('name'); // Apple\nitem.getAsString('no_field', defaultValue: 'Meron'); // Meron\n\n// bool\nitem.getAsBool('exist_field'); // true\nitem.getAsBool('no_field', defaultValue: false); // false\n\n// int\nitem.getAsInt('exist_field'); // 100\nitem.getAsInt('no_field', defaultValue: 99); // 99\n\n// double\nitem.getAsDouble('exist_field'); // 100.05\nitem.getAsDouble('no_field', defaultValue: 99.9); // 99.9\n\n\n// DateTime\nitem.getAsDateTime('exist_field'); // 2022-11-08 12:00:00.000Z\nitem.getAsDateTime('no_field', defaultValue: DateTime(2020, 10, 2, 12, 10);); // 2020-10-02 12:10:00.000Z\n")),Object(r.b)("h2",{id:"retribute-item-status"},"Retribute item status"),Object(r.b)("p",null,"After call ",Object(r.b)("inlineCode",{parentName:"p"},"getDetail")," method, you can get all of status changing actions that your current item can execute."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"await item.getDetail();\nitem.actions().map((action) => action.name);\n")),Object(r.b)("h3",{id:"change-status"},"Change status"),Object(r.b)("p",null,"You can set action with ",Object(r.b)("inlineCode",{parentName:"p"},"action")," method. After save the data, the status will be changed."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"item.action('startReservation').set('price', 110);\nawait item.save();\n")),Object(r.b)("h2",{id:"delete-item"},"Delete item"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"await item.delete();\n")),Object(r.b)("h2",{id:"attach-file"},"Attach file"),Object(r.b)("p",null,"You can upload file(s) if you prepared file field to datastore."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"var filePath = './test/test.png';\nvar file = HexabaseFile(\n        name: basename(filePath), contentType: lookupMimeType(filePath));\nfile.data = File(filePath).readAsBytesSync(); // Unit8List\nitem.set('picture', file);\nawait item.save();\n")),Object(r.b)("h3",{id:"multiple-files"},"Multiple files"),Object(r.b)("p",null,"If you want to upload multiple files, please use ",Object(r.b)("inlineCode",{parentName:"p"},"add")," method."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"var filePaths = ['./test/test.png', './test/test2.png'];\nfor (var filePath in filePaths) {\n    var file = HexabaseFile(\n            name: basename(filePath), contentType: lookupMimeType(filePath));\n    file.data = File(filePath).readAsBytesSync();\n    item.add('picture', file);\n}\nawait item.save();\n")),Object(r.b)("h3",{id:"download-file-content"},"Download file content"),Object(r.b)("p",null,"If you want to download file content, please use ",Object(r.b)("inlineCode",{parentName:"p"},"get")," method. It returns ",Object(r.b)("strong",{parentName:"p"},"multiple")," HexabaseFile objects, even if you upload a file."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"var pictures = item.get('picture') as List<HexabaseFile>;\n// data is Unit8List\nvar data = await pictures[0].download();\n")),Object(r.b)("h3",{id:"delete-file"},"Delete file"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"var picture = pictures[0];\nawait pictures[0].delete();\n")))}u.isMDXComponent=!0},90:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(a),b=n,m=u["".concat(l,".").concat(b)]||u[b]||p[b]||r;return a?i.a.createElement(m,c(c({ref:t},s),{},{components:a})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<r;s++)l[s]=a[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);