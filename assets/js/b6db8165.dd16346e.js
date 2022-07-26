"use strict";(self.webpackChunkmdbw_atlas_operator=self.webpackChunkmdbw_atlas_operator||[]).push([[6617],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6853:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={sidebar_position:4},s="Containerize the frontend",c={unversionedId:"containerization/frontend",id:"containerization/frontend",title:"Containerize the frontend",description:"The backend is now running inside its own container. It's now time to build a container for the frontend.",source:"@site/docs/containerization/4-frontend.md",sourceDirName:"containerization",slug:"/containerization/frontend",permalink:"/mern-k8s/docs/containerization/frontend",draft:!1,editUrl:"https://github.com/joellord/mern-k8s/tree/main/docs/docs/containerization/4-frontend.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create a network",permalink:"/mern-k8s/docs/containerization/network"},next:{title:"Package with Docker Compose (optional)",permalink:"/mern-k8s/docs/containerization/docker-compose"}},p={},d=[{value:"Create a Dockerfile",id:"create-a-dockerfile",level:2},{value:"Build the frontend image",id:"build-the-frontend-image",level:2},{value:"Start the container",id:"start-the-container",level:2}],u={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"containerize-the-frontend"},"Containerize the frontend"),(0,o.kt)("p",null,"The backend is now running inside its own container. It's now time to build a container for the frontend."),(0,o.kt)("p",null,"The frontend container is slightly  more complex than the backend one. It uses a multi stage build approach to start by building the application with Node.js, and then copy the resulting files to an Nginx server. This second stage with the server and the build files will constitute the actual container, and the previous stages won't be part of that final image."),(0,o.kt)("h2",{id:"create-a-dockerfile"},"Create a Dockerfile"),(0,o.kt)("p",null,"Just as you did for the backend, you will need to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," to tell Docker how to build this new image. Make sure that you are in the ",(0,o.kt)("inlineCode",{parentName:"p"},"front")," folder this time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd front\ntouch Dockerfile\n")),(0,o.kt)("p",null,"With your favourite IDE, write the following to your file. First, start by telling Docker to use ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," as the base image. Let's use version 16 again."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"FROM node:16\n")),(0,o.kt)("p",null,"Next, we will need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"jq"),", a CLI tool to manipulate JSON from the command line. With this tool, we will be able to change values in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," file to use values set in the environment variables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"ENV JQ_VERSION=1.6\nRUN wget --no-check-certificate https://github.com/stedolan/jq/releases/download/jq-${JQ_VERSION}/jq-linux64 -O /tmp/jq-linux64\nRUN cp /tmp/jq-linux64 /usr/bin/jq\nRUN chmod +x /usr/bin/jq\n")),(0,o.kt)("p",null,"With the image read, you can change the working directory and copy over all the files from the ",(0,o.kt)("inlineCode",{parentName:"p"},"front")," folder into the ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/app")," folder of the container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"WORKDIR /opt/app\nCOPY . .\n")),(0,o.kt)("p",null,"Now's the time to use ",(0,o.kt)("inlineCode",{parentName:"p"},"jq")," to change the values of the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," file. For now, it will change each value to ",(0,o.kt)("inlineCode",{parentName:"p"},"$key"),". For your current file, this means that it will ",(0,o.kt)("inlineCode",{parentName:"p"},'"BASE_URL": "http://localhost:5000"')," to ",(0,o.kt)("inlineCode",{parentName:"p"},'"BASE_URL": "$BASE_URL"'),". The command for your Dockerfile is as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"RUN jq 'to_entries | map_values({ (.key) : (\"$\" + .key) }) | reduce .[] as $item ({}; . + $item)' ./src/config.json > ./src/config.tmp.json && mv ./src/config.tmp.json ./src/config.json\n")),(0,o.kt)("p",null,"Finally, you can install the dependencies, and run the build command to create your HTML, CSS, and JavaScript files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"RUN npm install && npm run build\n")),(0,o.kt)("p",null,"We now have an image with the three files on it, but ultimately, we want to copy those over to an Nginx server. To the existing file, add the new stage. Using a new ",(0,o.kt)("inlineCode",{parentName:"p"},"FROM")," command tells Docker that this is a second stage, and that the first stage won't be part of the final container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"FROM nginx:1.17\n")),(0,o.kt)("p",null,"Now, you will need to specify the folder in which your JavaScript files will reside. This environment variable will be used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"start-nginx.sh")," script that will be added to the container. This script goes through each of the JavaScript files, and overwrites and ",(0,o.kt)("inlineCode",{parentName:"p"},"$ENV_VAR")," with the value of the environment variable. In this specific case, the ",(0,o.kt)("inlineCode",{parentName:"p"},"$BASE_URL")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," file will be changed to the actual value from the server. Make sure that this script has execute permissions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"ENV JSFOLDER=/usr/share/nginx/html/static/js/*.js\nCOPY ./start-nginx.sh /usr/bin/start-nginx.sh\nRUN chmod +x /usr/bin/start-nginx.sh\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We won't go through the details of this ",(0,o.kt)("inlineCode",{parentName:"p"},"start-nginx.sh")," file in here, but know that this file can be used with virtually any JavaScript framework. Here is the actual content of the script if you are curious about it."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!/usr/bin/env bash\nexport EXISTING_VARS=$(printenv | awk -F= '{print $1}' | sed 's/^/\\$/g' | paste -sd,); \nfor file in $JSFOLDER;\ndo\n  cat $file | envsubst $EXISTING_VARS > tmpfile.js\n  mv tmpfile.js $file\ndone\nnginx -g 'daemon off;'\n")))),(0,o.kt)("p",null,"You're almost done with the Dockerfile. You only need to change the working directory to the default folder from which Nginx serves files, and copy the files from the first stage. Finally, change the ",(0,o.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," to this file. This new ",(0,o.kt)("inlineCode",{parentName:"p"},"start-nginx.sh")," script is the script that will be used to start the server now."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},'WORKDIR /usr/share/nginx/html\nCOPY --from=0 /opt/app/build .\nENTRYPOINT [ "start-nginx.sh" ]\n')),(0,o.kt)("p",null,"Your final ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," should look like the following."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},'FROM node:16\n\nENV JQ_VERSION=1.6\nRUN wget --no-check-certificate https://github.com/stedolan/jq/releases/download/jq-${JQ_VERSION}/jq-linux64 -O /tmp/jq-linux64\nRUN cp /tmp/jq-linux64 /usr/bin/jq\nRUN chmod +x /usr/bin/jq\n\nWORKDIR /opt/app\nCOPY . .\nRUN jq \'to_entries | map_values({ (.key) : ("$" + .key) }) | reduce .[] as $item ({}; . + $item)\' ./src/config.json > ./src/config.tmp.json && mv ./src/config.tmp.json ./src/config.json\nRUN npm install && npm run build\n\nFROM nginx:1.17\nENV JSFOLDER=/usr/share/nginx/html/static/js/*.js\nCOPY ./start-nginx.sh /usr/bin/start-nginx.sh\nRUN chmod +x /usr/bin/start-nginx.sh\nWORKDIR /usr/share/nginx/html\nCOPY --from=0 /opt/app/build .\nENTRYPOINT [ "start-nginx.sh" ]\n')),(0,o.kt)("h2",{id:"build-the-frontend-image"},"Build the frontend image"),(0,o.kt)("p",null,"With this new ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", you will be able to build and share your frontend image too."),(0,o.kt)("p",null,"Just like you did for the backend, use ",(0,o.kt)("inlineCode",{parentName:"p"},"docker build")," to create this new image, and then push it to your registry. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"docker login")," if you had not previously logged in to your account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t $DOCKER_HUB_USERNAME/mern-k8s-front .\ndocker push $DOCKER_HUB_USERNAME/mern-k8s-front\n")),(0,o.kt)("h2",{id:"start-the-container"},"Start the container"),(0,o.kt)("p",null,"You can now start this new container. In this case, it won't need to connect to the network. This is because the client application is making a request to ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:5000"),", and your current localhost has an open port to connect to the backend service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d --rm --name mern-k8s-front -p 8080:80 -e BASE_URL="http://localhost:5000" $DOCKER_HUB_USERNAME/mern-k8s-front\n')),(0,o.kt)("p",null,"You can verify that the application is running by opening ",(0,o.kt)("a",{parentName:"p",href:"localhost:8080"},"http://localhost:8080")," in your browser. You should see the application up and running again. "),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You might notice that all the data your entered previously is now lost. This is because the database container was restarted in a previous step, so it was reinitialized to its initial state."))))}h.isMDXComponent=!0}}]);