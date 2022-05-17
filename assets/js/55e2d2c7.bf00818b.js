"use strict";(self.webpackChunkmdbw_atlas_operator=self.webpackChunkmdbw_atlas_operator||[]).push([[3112],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7606:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},c="Create a MongoDB Atlas cluster",l={unversionedId:"migrate-to-cloud/setup-cluster",id:"migrate-to-cloud/setup-cluster",title:"Create a MongoDB Atlas cluster",description:"Once you are logged into your account, follow the steps from the documentation to create your free cluster. Once your cluster is up and running, you will be able to create your entites collection needed for your backend.",source:"@site/docs/migrate-to-cloud/2-setup-cluster.md",sourceDirName:"migrate-to-cloud",slug:"/migrate-to-cloud/setup-cluster",permalink:"/mern-k8s/docs/migrate-to-cloud/setup-cluster",draft:!1,editUrl:"https://github.com/joellord/mern-k8s/tree/main/docs/docs/migrate-to-cloud/2-setup-cluster.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is MongoDB Atlas",permalink:"/mern-k8s/docs/migrate-to-cloud/intro"},next:{title:"Set up the backend to use Atlas",permalink:"/mern-k8s/docs/migrate-to-cloud/setup-backend"}},u={},p=[{value:"Set up access",id:"set-up-access",level:2},{value:"Create a collection",id:"create-a-collection",level:2}],d={toc:p};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-mongodb-atlas-cluster"},"Create a MongoDB Atlas cluster"),(0,r.kt)("p",null,"Once you are logged into your account, follow the steps from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/"},"documentation")," to create your free cluster. Once your cluster is up and running, you will be able to create your ",(0,r.kt)("inlineCode",{parentName:"p"},"entites")," collection needed for your backend."),(0,r.kt)("h2",{id:"set-up-access"},"Set up access"),(0,r.kt)("p",null,"As part of the cluster creation process, you will be prompted to create a user. Use the username ",(0,r.kt)("inlineCode",{parentName:"p"},"mern-k8s")," and password ",(0,r.kt)("inlineCode",{parentName:"p"},"mern-k8s"),". You can use different values, but these are the values that will be used in the following examples."),(0,r.kt)("p",null,"Once the user is created, make sure that you go to the ",(0,r.kt)("em",{parentName:"p"},"Network Access")," item in the left navigation menu, and enable access from your current IP address. If you want to use a different Kubernetes cluster later on, you will need to add the address too. "),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To make it easier during this workshop, you can enable network access to ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0/0"),". This will accept any incoming connection. You should never use this in production though."))),(0,r.kt)("h2",{id:"create-a-collection"},"Create a collection"),(0,r.kt)("p",null,"From the Atlas UI, you will see a ",(0,r.kt)("em",{parentName:"p"},"Browse Collections")," button. Click it to see your existing collections."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Browse Collections",src:n(3431).Z+"#center",width:"1670",height:"743"}),"\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("div",{align:"center"},"The Atlas UI with the Browse Collections button"))),(0,r.kt)("p",null,"At the moment, there shouldn't be any data in your cluster. If you'd like to explore what Atlas has to offer, you could add the sample data sets. For now, let's add our own data. Clicking on the ",(0,r.kt)("em",{parentName:"p"},"Add My Own Data")," button will open up a modal prompting your for a database and collection names. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Database Modal",src:n(5629).Z+"#center",width:"1974",height:"797"}),"\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("div",{align:"center"},"The Create Database modal"))),(0,r.kt)("p",null,"Use the name ",(0,r.kt)("inlineCode",{parentName:"p"},"mern-k8s")," for the database, and use ",(0,r.kt)("inlineCode",{parentName:"p"},"entities")," for your collection name."),(0,r.kt)("h1",{id:"get-your-connection-string"},"Get your connection string"),(0,r.kt)("p",null,"Go back to the ",(0,r.kt)("em",{parentName:"p"},"Database")," item from the left navigation menu. You should see your cluster again. This click, click on the ",(0,r.kt)("em",{parentName:"p"},"Connect")," button. "),(0,r.kt)("p",null,"From the next modal, choose ",(0,r.kt)("em",{parentName:"p"},"Connect using MongoDB Compass"),". This will show you the connection string to your cluster."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"While we won't be using MongoDB Compass in the context of this workshop, you still still ",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/products/compass"},"look it up"),", it's a great UI for everything MongoDB related."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Connection String",src:n(7386).Z+"#center",width:"1142",height:"888"}),"\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("div",{align:"center"},"The Connection String for Atlas"))),(0,r.kt)("p",null,"Copy this connection string, and save it somewhere handy as you'll need it soon. Make sure to replace ",(0,r.kt)("strong",{parentName:"p"},"password")," with your actual password."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can set this connection string as an environment variable so it will automatically be used in the following steps."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export ATLAS_CONNECTION_STRING=mongodb+srv://mernk8s:mernk8s@cluster0.wc3ix.mongodb.net/test\n")),(0,r.kt)("p",{parentName:"div"},"Make sure you replace the cluster id (",(0,r.kt)("inlineCode",{parentName:"p"},"wc3ix"),") with your own!"))))}m.isMDXComponent=!0},3431:function(e,t,n){t.Z=n.p+"assets/images/browsecollections-d7045f56267b211218c5ae52f41c3c51.png"},7386:function(e,t,n){t.Z=n.p+"assets/images/connstring-a7119fd2e8eca36a1937943db166fa33.png"},5629:function(e,t,n){t.Z=n.p+"assets/images/createdb-8c96f23b4958600cac98d43a7499d7d8.png"}}]);