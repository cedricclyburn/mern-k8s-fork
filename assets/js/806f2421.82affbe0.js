"use strict";(self.webpackChunkmdbw_atlas_operator=self.webpackChunkmdbw_atlas_operator||[]).push([[9611],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5153:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={sidebar_position:5},p="Set up the ingress for multiple services",l={unversionedId:"deploy-to-k8s/setup-ingress",id:"deploy-to-k8s/setup-ingress",title:"Set up the ingress for multiple services",description:"At the moment, the ingress is only configured to access the backend. The ingress can support multiple rules to redirect the traffic. In this example, we will use rules based on the request path to redirect the traffic to either the frontend or the backend.",source:"@site/docs/deploy-to-k8s/5-setup-ingress.md",sourceDirName:"deploy-to-k8s",slug:"/deploy-to-k8s/setup-ingress",permalink:"/mern-k8s/docs/deploy-to-k8s/setup-ingress",draft:!1,editUrl:"https://github.com/joellord/mern-k8s/docs/deploy-to-k8s/5-setup-ingress.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Deploy the frontend",permalink:"/mern-k8s/docs/deploy-to-k8s/deploy-frontend"},next:{title:"Deploying the database on Kubernetes",permalink:"/mern-k8s/docs/deploy-to-k8s/deploy-database"}},c={},u=[{value:"Update your ingress",id:"update-your-ingress",level:2},{value:"Apply this new ingress",id:"apply-this-new-ingress",level:2},{value:"Test the application",id:"test-the-application",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"set-up-the-ingress-for-multiple-services"},"Set up the ingress for multiple services"),(0,i.kt)("p",null,"At the moment, the ingress is only configured to access the backend. The ingress can support multiple rules to redirect the traffic. In this example, we will use rules based on the request path to redirect the traffic to either the frontend or the backend."),(0,i.kt)("h2",{id:"update-your-ingress"},"Update your ingress"),(0,i.kt)("p",null,"Change the new ingress to add some ",(0,i.kt)("inlineCode",{parentName:"p"},"annotation")," as well as a new rule for the frontend service. Use the following ",(0,i.kt)("inlineCode",{parentName:"p"},"yaml")," for your ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress.yaml")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: mern-k8s-ingress\n  annotations:\n    nginx.ingress.kubernetes.io/rewrite-target: /$2\nspec:\n  rules:\n    - http:\n        paths:\n          - path: /api(/|$)(.*)\n            pathType: Prefix\n            backend:\n              service:\n                name: mern-k8s-back\n                port:\n                  number: 80\n          - path: /()(.*)\n            pathType: Prefix\n            backend:\n              service:\n                name: mern-k8s-front\n                port:\n                  number: 80\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"annotation")," will take the second argument from the regular expression used in the path, and use that as the request sent to the service. "),(0,i.kt)("p",{parentName:"div"},"In other words, a request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/healthz")," to the ingress will the rewritten as ",(0,i.kt)("inlineCode",{parentName:"p"},"/health")," when it is sent to the backend service."),(0,i.kt)("p",{parentName:"div"},"This is why the path matching expression for the frontend has an empty set of parenthesis."))),(0,i.kt)("h2",{id:"apply-this-new-ingress"},"Apply this new ingress"),(0,i.kt)("p",null,"Apply this new ingress to your cluster with ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./ingress.yaml\n")),(0,i.kt)("p",null,"You should see a confirmation that the ingress has been changed."),(0,i.kt)("h2",{id:"test-the-application"},"Test the application"),(0,i.kt)("p",null,"You should now be able to test the application. Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"minikube")," command to get the IP address of your local Minikube cluster, and point your browser to this IP address."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"minikube ip\n")),(0,i.kt)("p",null,"You will see the application fully running, and with the data from the Atlas cluster still."))}h.isMDXComponent=!0}}]);