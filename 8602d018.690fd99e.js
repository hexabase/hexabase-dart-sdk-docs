(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(6),c=(r(0),r(92)),o=["components"],i={},p={unversionedId:"SDK/Project",id:"SDK/Project",isDocsHomePage:!1,title:"Project",description:"The Project manages datastore, files and more.",source:"@site/docs/SDK/Project.md",slug:"/SDK/Project",permalink:"/hexabase-dart-sdk-docs/docs/SDK/Project",editUrl:"https://github.com/b-eee/hexabase-sdk-docs/edit/master/website/docs/SDK/Project.md",version:"current",sidebar:"someSidebar",previous:{title:"Workspace",permalink:"/hexabase-dart-sdk-docs/docs/SDK/Workspace"},next:{title:"Datastore",permalink:"/hexabase-dart-sdk-docs/docs/SDK/Datastore"}},s=[{value:"Retribute all project",id:"retribute-all-project",children:[]},{value:"Retribute specific project",id:"retribute-specific-project",children:[]},{value:"Update project",id:"update-project",children:[]},{value:"Delete project",id:"delete-project",children:[]}],l={rightToc:s};function d(e){var t=e.components,r=Object(a.a)(e,o);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The Project manages datastore, files and more."),Object(c.b)("h2",{id:"retribute-all-project"},"Retribute all project"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-dart"},"var projects = await workspace.projects();\nprint(projects[0].id);\nprint(projects[0].datastores[0].id);\n")),Object(c.b)("h2",{id:"retribute-specific-project"},"Retribute specific project"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-dart"},"// From client\nvar project = client.project(id: 'PROJECT_ID');\n// From workspace\nvar project = workspace.project(id: 'PROJECT_ID');\nprint(project.id);\nprint(project.datastores[0].id);\n")),Object(c.b)("h2",{id:"update-project"},"Update project"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-dart"},"// Call name method each line\nproject.name('ja', '\u30c6\u30b9\u30c8\u30a2\u30d7\u30ea');\nproject.name('en', 'Test App');\n// You can use chaine method\nproject.name('ja', '\u30c6\u30b9\u30c8\u30a2\u30d7\u30ea').name('en', 'Test App');\nawait project.save();\n")),Object(c.b)("h2",{id:"delete-project"},"Delete project"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-dart"},"await project.delete();\n")))}d.isMDXComponent=!0},92:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return j}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),b=n,j=d["".concat(o,".").concat(b)]||d[b]||u[b]||c;return r?a.a.createElement(j,i(i({ref:t},s),{},{components:r})):a.a.createElement(j,i({ref:t},s))}));function j(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);