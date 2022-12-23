"use strict";(self.webpackChunksuiweb_website=self.webpackChunksuiweb_website||[]).push([[250],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||r;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const r={},o="Level 3: Splitting Code Into Components",l={unversionedId:"tutorial/3-components/README",id:"tutorial/3-components/README",title:"Level 3: Splitting Code Into Components",description:"Introduction",source:"@site/docs/tutorial/3-components/README.md",sourceDirName:"tutorial/3-components",slug:"/tutorial/3-components/",permalink:"/docs/tutorial/3-components/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Level 2: Parsing Fibers from SJDON Notation",permalink:"/docs/tutorial/2-parsing-sjdon/"},next:{title:"Level 4: Adding State to Our Components Using Hooks",permalink:"/docs/tutorial/4-hooks/"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Goal",id:"goal",level:2},{value:"<code>index.js</code>",id:"indexjs",level:3},{value:"Revisiting the <code>parseSjdon</code> Function",id:"revisiting-the-parsesjdon-function",level:2},{value:"Revisiting the <code>createElement</code> Function",id:"revisiting-the-createelement-function",level:2},{value:"Revisiting the <code>renderFiber</code> Function",id:"revisiting-the-renderfiber-function",level:2},{value:"Unwrapping Functional Fibers",id:"unwrapping-functional-fibers",level:3},{value:"Review",id:"review",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"level-3-splitting-code-into-components"},"Level 3: Splitting Code Into Components"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Now that we are able to define elements in SJDON, it's a good moment to think about organizing the code of our elements."),(0,a.kt)("p",null,"Imagine defining the whole structure of a website inside a single, static SJDON array. As you can imagine, this array will soon become quite big and messy. Also, we might need the same functionality multiple times on a page, so it would be nice if we could re-use those elements. This is where ",(0,a.kt)("strong",{parentName:"p"},"Components")," come in."),(0,a.kt)("p",null,"First, let's start with a simple example of something we could call a ",(0,a.kt)("strong",{parentName:"p"},"Static Component"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const reusableParagraph = [\n  'p', \n  'This paragraph is so nice, we want to reuse it' \n]\n\nconst sjdon = [\n    'div',\n    { className: 'container' },\n    [ 'h1', { 'id': 'page-title' }, 'Welcome to SJDON' ],\n    [ 'p', 'SJDON stands for Simple JavaScript DOM Notation.' ],\n    reusableParagraph\n]\n")),(0,a.kt)("p",null,"Here, we can basically just define an SJDON structure in an array, and then insert this into another SJDON array, wherever we want to include the component. But as you can imagine, the use of this is quite limited, because it might not happen that often that you want to include ",(0,a.kt)("em",{parentName:"p"},"exactly the same")," element multiple times."),(0,a.kt)("p",null,"So it would be useful if we could have some logic inside our components. This is where ",(0,a.kt)("strong",{parentName:"p"},"Functional Components")," come in. A functional component is actually just a JavaScript function which returns data in a specific way, in this case SJDON. This means that instead of defining the structure of an element from scratch every time we use it, we put the functionality inside a function and return the code for the element from there instead. This makes it easier to keep some order inside our code base, as we no longer have to define everything inside one huge array, but instead our definitions spread across multiple cohesive functions. More importantly, this also allows for easy re-use of elements, without defining them every time separately."),(0,a.kt)("h2",{id:"goal"},"Goal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://suiweb.github.io/demos/tutorial/03-components/index.html"},"Demo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/suiweb/suiweb/tree/main/demos/tutorial/03-components"},"Source Code"))),(0,a.kt)("p",null,"Let's look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," file of the demo for this level."),(0,a.kt)("h3",{id:"indexjs"},(0,a.kt)("inlineCode",{parentName:"h3"},"index.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createElement } from '../../lib/js/fiber.js'\nimport { parseSjdon } from '../../lib/js/sjdon.js'\nimport { render } from '../../lib/js/render.js'\n\nfunction DateComponent({ size }) {\n    const date = new Date().toUTCString()\n    const style = { \n        fontWeight: 'bold',\n        fontSize: size == 'big' ? '18px' : 'inherit'\n    }\n  \n    return [ \n        'p',\n        'The current date is: ', \n        [ 'span', { style }, date ]\n    ]\n}\n\nconst sjdon = [\n    'div',\n    { className: 'container' },\n    [ 'h1', { 'id': 'page-title' }, 'Welcome to SJDON' ],\n    [ 'p', 'SJDON stands for Simple JavaScript DOM Notation.' ],\n    // highlight-next-line\n    [ DateComponent, { size: 'big' } ]\n]\n\nrender(\n    parseSjdon(sjdon, createElement),\n    document.getElementById('app')\n)\n")),(0,a.kt)("p",null,"We call this ",(0,a.kt)("inlineCode",{parentName:"p"},"DateComponent")," function a functional component (or also functional element). Functional components are powerful as they're configurable via props, similar to static elements. The difference is that the props are not directly assigned to the HTML element, but passed as the first parameter to the function."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you're confused with the syntax ",(0,a.kt)("inlineCode",{parentName:"p"},"{ size }")," which is used as the function parameter, this is called parameter destructuring. The first parameter is expected to be an object and its property ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," is directly accessed. It would be the same thing to have one parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," and accessing ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," via ",(0,a.kt)("inlineCode",{parentName:"p"},"props.size"),", it's just more convenient the other way.")),(0,a.kt)("p",null,"If we look at the return value of ",(0,a.kt)("inlineCode",{parentName:"p"},"DateComponent"),", we see that it returns an array with the structure of SJDON. If we would now like to use this component inside our SJDON structure, we can do so by using the SJDON element ",(0,a.kt)("inlineCode",{parentName:"p"},"[ DateComponent ]"),". As with static elements, we can also define props and children on functional components. They are passed to the function as the first argument. In this example we assign the props ",(0,a.kt)("inlineCode",{parentName:"p"},"{ size: big }"),". If we add children to the array, like ",(0,a.kt)("inlineCode",{parentName:"p"},"[ DateComponente, 'child']"),", they are passed inside the props with the key ",(0,a.kt)("inlineCode",{parentName:"p"},"children"),"."),(0,a.kt)("p",null,"When the ",(0,a.kt)("inlineCode",{parentName:"p"},"DateComponent")," is rendered, it will result in the function call ",(0,a.kt)("inlineCode",{parentName:"p"},"DateComponent({ size: 'big' })"),'. This will then display an HTML paragraph saying "The current date is: ',(0,a.kt)("strong",{parentName:"p"},"Sun, 11 Dec 2022 13:12:56 GMT"),'", where the date, printed in bold, corresponds to the current date when the function ',(0,a.kt)("inlineCode",{parentName:"p"},"DateComponent")," was executed. Depending on the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," the font size would be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"24px")," or kept the same with ",(0,a.kt)("inlineCode",{parentName:"p"},"inherit"),". "),(0,a.kt)("h2",{id:"revisiting-the-parsesjdon-function"},"Revisiting the ",(0,a.kt)("inlineCode",{parentName:"h2"},"parseSjdon")," Function"),(0,a.kt)("p",null,"As seen in the example, we encounter a new type of element ",(0,a.kt)("inlineCode",{parentName:"p"},"[ DateComponent ]"),". In this case, the first item of the SJDON array is a function, not just a string like it was before. We have to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"parseSjdon")," function to make this work."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export function parseSjdon<T>([type, ...rest]: SjdonElement, create: CreateElementFunction<T>): T {\n    const propsArray = rest.filter(isSjdonProps)\n    const props: Props = Object.assign({}, ...propsArray)\n    const children = rest.filter(isSjdonChild)\n\n    // highlight-next-line\n    if (typeof type == 'string') {\n        const parsedChildren = children.map(child => (isSjdonElement(child) ? parseSjdon(child, create) : child))\n        return create(type, props, ...parsedChildren)\n    // highlight-start\n    } else {\n        const fiberFunction = (props?: Record<string, unknown>) => parseSjdon(type({ ...props, children }), create)\n        return create(fiberFunction, props)\n    }\n    // highlight-end\n}\n")),(0,a.kt)("p",null,"To handle the new functional elements, we have to distinguish between two cases. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),", the first entry in the SJDON array, is a string, the same logic as before applies. However, if the ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," is a function, we can't just simply parse the ",(0,a.kt)("inlineCode",{parentName:"p"},"SjdonElement"),'. We have to "wait" until the function is executed and returns the generated SJDON array. To achieve that, we create a wrapper function, which executes the ',(0,a.kt)("inlineCode",{parentName:"p"},"type")," function and calls ",(0,a.kt)("inlineCode",{parentName:"p"},"parseSjdon")," with its return value. This wrapper function is called ",(0,a.kt)("inlineCode",{parentName:"p"},"fiberFunction")," and passed as the first argument to the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," function. You can also see that, as explained in the example, the props and the children are passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," function, so they're available to use inside the functional component."),(0,a.kt)("h2",{id:"revisiting-the-createelement-function"},"Revisiting the ",(0,a.kt)("inlineCode",{parentName:"h2"},"createElement")," Function"),(0,a.kt)("p",null,"As seen in the ",(0,a.kt)("inlineCode",{parentName:"p"},"parseSjdon")," function, we now call ",(0,a.kt)("inlineCode",{parentName:"p"},"createElement")," with a function as the first parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," if the SJDON element happens to be a functional component. In the first level, ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," could only be a valid HTML tag. That is why, in this level, we are going to revisit the ",(0,a.kt)("inlineCode",{parentName:"p"},"createElement")," function in its full functionality, which allows us to not only use strings for the ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," parameter, but also functions."),(0,a.kt)("p",null,"Below, you can find the full implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"createElement"),". As you can see, there is an additional part, starting at the line ",(0,a.kt)("inlineCode",{parentName:"p"},"if (type instanceof Function) {"),", which adds some logic in case of the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," being an instance of a ",(0,a.kt)("inlineCode",{parentName:"p"},"Function"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export const createElement: CreateElementFunction<Fiber> = (type, props, ...children) => {\n    const mappedChildren = mapChildren(children)\n    const safeProps = props ?? {}\n\n    // highlight-start\n    // If the type is a function, create a functional fiber.\n    if (type instanceof Function) {\n        // A functional element can not have direct children, it is a function,\n        // which can take in children as a prop and return a static element with children.\n        if (mappedChildren.size > 0) throw new Error('A functional element can not have children.')\n\n        return {\n            fiberFunction: type,\n            functionProps: safeProps,\n            memorizedStates: [],\n        }\n    }\n    // highlight-end\n    // Otherwise create a static fiber.\n    else return { type, props: safeProps, children: mappedChildren }\n}\n")),(0,a.kt)("p",null,"As it is invalid for a ",(0,a.kt)("inlineCode",{parentName:"p"},"Fiber")," with a ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"Function")," to have children at this level of the rendering cycle, an error will be thrown in that case. Otherwise, an object is returned, which satisfies the ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionalFiber")," type."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you're confused why there can't be any children (at this stage) inside a ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionalFiber"),", take a look again at the updated ",(0,a.kt)("inlineCode",{parentName:"p"},"parseSjdon")," function. As the children are still in the SJDON format, the ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionalFiber")," never really sees them. They are actually never passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"createElement")," function, but rather directly passed to the functional component, so it can use it somewhere in its SJDON structure. ")),(0,a.kt)("p",null,"Next, let's take a look at the type definition of ",(0,a.kt)("inlineCode",{parentName:"p"},"FuntionalFiber"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export type FunctionalFiber = {\n    /**\n     * The `fiberFunction` contains the information to generate the fiber.\n     * It takes the `functionProps` as an argument, calls hooks and returns the generated `Fiber`.\n     */\n    fiberFunction: FiberFunction\n    /**\n     * The `functionProps` are the props which are passed to the `fiberFunction`. Differently to the\n     * normal `props`, these are not added to the DOM and only used inside of the `fiberFunction`.\n     * The normal `props` will be defined by the `StaticFiber`, which will be returned from executing\n     * the `fiberFunction`.\n     * These will be the `props` that will be added to the DOM node.\n     * @see {@link StaticFiber}\n     */\n    functionProps: Readonly<Props>\n    /**\n     * The `memorizedStates` array contains all stored values of the component's hooks.\n     */\n    memorizedStates: unknown[]\n} & Partial<StaticFiber>\n")),(0,a.kt)("p",null,"As you can see in the last line of the type definition of ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionalFiber"),", objects of this type can optionally contain all properties of a ",(0,a.kt)("inlineCode",{parentName:"p"},"StaticFiber"),", indicated by ",(0,a.kt)("inlineCode",{parentName:"p"},"& Partial<StaticFiber>"),". Additionally, there are three new properties, namely ",(0,a.kt)("inlineCode",{parentName:"p"},"fiberFunction"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"functionProps")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"memorizedStates"),", which are specific to the type ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionalFiber"),"."),(0,a.kt)("p",null,"When we look again at the return statement of ",(0,a.kt)("inlineCode",{parentName:"p"},"createElement")," for Functional Fibers, we see that we set the  parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," as the property ",(0,a.kt)("inlineCode",{parentName:"p"},"fiberFunction")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionalFiber"),". Additionally, we assign ",(0,a.kt)("inlineCode",{parentName:"p"},"safeProps")," to the property ",(0,a.kt)("inlineCode",{parentName:"p"},"functionProps"),". When we later execute the function stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"fiberFunction"),", we will pass it the parameters stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"functionProps"),". Lastly, we initialize ",(0,a.kt)("inlineCode",{parentName:"p"},"memorizedStates")," as an empty array. We will explore the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"memorizedStates")," in the next level, for now we just notice it is there."),(0,a.kt)("h2",{id:"revisiting-the-renderfiber-function"},"Revisiting the ",(0,a.kt)("inlineCode",{parentName:"h2"},"renderFiber")," Function"),(0,a.kt)("p",null,"Now that we have looked at the properties of a Functional Fiber, we will explore how Functional Fibers are rendered to the DOM."),(0,a.kt)("p",null,"For that, we look at an updated implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"renderFiber"),", which we have also only explored partially in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/1-static-rendering/#the-renderfiber-function"},"first level")," of this tutorial."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function renderFiber(fiber: Fiber, container: HTMLElement, previousVersion?: Fiber, nextSibling?: Fiber) {\n    // If the component is a functional fiber, execute its fiberFunction\n    // to get the unwrapped StaticFiber properties merged into the same object.\n    // highlight-next-line\n    if (isFunctionalFiber(fiber)) unwrapFunctionalFiber(fiber, container, previousVersion)\n\n    // After unwrapping, the fiber must contain all properties of a static fiber.\n    if (!isStaticFiber(fiber)) throw new Error('Fiber did not contain all StaticFiber properties after unwrapping.')\n\n    replaceFiberInDom(fiber, container, previousVersion, nextSibling)\n\n    expandChildFibers(fiber, previousVersion)\n}\n")),(0,a.kt)("p",null,"We detect that the first line of the function has been added since the last time. It checks whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"fiber")," that was passed is of type ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionalFiber"),". In that case, we ",(0,a.kt)("em",{parentName:"p"},"unwrap")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionalFiber")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrapFunctionalFiber")," function, which basically means that we execute the function stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"fiberFuntion"),", which should then return a ",(0,a.kt)("inlineCode",{parentName:"p"},"StaticFiber"),". Now, you might also better understand why we have the check in the following line, whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"fiber")," is now a ",(0,a.kt)("inlineCode",{parentName:"p"},"StaticFiber"),", as this should be the case after unwrapping the ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionalFiber"),". If that is not the case, we ran into some unexpected state that should actually never occur, so we'll throw an error."),(0,a.kt)("h3",{id:"unwrapping-functional-fibers"},"Unwrapping Functional Fibers"),(0,a.kt)("p",null,"To understand what's exactly happening when unwrapping a ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionalFiber"),", we are going to have a closer look at a slightly simplified implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrapFunctionalFiber")," now."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function unwrapFunctionalFiber(fiber: FunctionalFiber, container: HTMLElement, previousVersion?: Fiber) {\n    // Unwrap fibers until the fiberFunction returns a StaticFiber.\n    let unwrappedFiber = fiber.fiberFunction(fiber.functionProps)\n    while (isFunctionalFiber(unwrappedFiber))\n        unwrappedFiber = unwrappedFiber.fiberFunction(unwrappedFiber.functionProps)\n\n    // Merge all properties of the unwrappedFiber into the functional fiber.\n    Object.assign(fiber, unwrappedFiber)\n}\n")),(0,a.kt)("p",null,"We can see that we execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"fiberFunction")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"fiber"),", pass it ",(0,a.kt)("inlineCode",{parentName:"p"},"functionProps")," as its argument and assign it to ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrappedFiber"),"."),(0,a.kt)("p",null,"In the following line, we check if ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrappedFiber")," is still a ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionalFiber"),", which could happen, as a ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionalFiber")," could in theory return another ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionalFiber"),". We repeat the action of executing the ",(0,a.kt)("inlineCode",{parentName:"p"},"fiberFunction")," so many times, until ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrappedFiber")," is no longer a ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionalFiber"),", meaning it's now of type ",(0,a.kt)("inlineCode",{parentName:"p"},"StaticFiber"),"."),(0,a.kt)("p",null,"What happens then might actually be a bit confusing at first sight. We use ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.assign")," to copy all properties of ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrappedFiber")," into our original ",(0,a.kt)("inlineCode",{parentName:"p"},"fiber"),". This means that ",(0,a.kt)("inlineCode",{parentName:"p"},"fiber")," is now actually ",(0,a.kt)("em",{parentName:"p"},"both")," a ",(0,a.kt)("inlineCode",{parentName:"p"},"StaticFiber")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionalFiber"),"."),(0,a.kt)("p",null,"At the moment, you might not understand why we do this, instead of just returning the ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrappedFiber"),". However, it will become quite important later, when we look at how components can be re-rendered, if their ",(0,a.kt)("em",{parentName:"p"},"state")," changes. For the moment, you should just understand ",(0,a.kt)("em",{parentName:"p"},"what")," is happening, and we'll explain ",(0,a.kt)("em",{parentName:"p"},"why")," it's happening in the following level."),(0,a.kt)("p",null,"Note that since we are assigning the properties of ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrappedFiber")," to the same ",(0,a.kt)("inlineCode",{parentName:"p"},"fiber")," we passed to the function, we don't need to return anything, as we have a ",(0,a.kt)("em",{parentName:"p"},"reference")," to this object already where we called ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrapFunctionalFiber"),", just with the difference that the ",(0,a.kt)("inlineCode",{parentName:"p"},"fiber")," now contains some more properties."),(0,a.kt)("h2",{id:"review"},"Review"),(0,a.kt)("p",null,"Except of unwrapping Functional Fibers in ",(0,a.kt)("inlineCode",{parentName:"p"},"renderFiber"),", there is no additional functionality needed for supporting Functional Fibers in the form we have looked at so far, since our Functional Fibers become Static Fibers as well. Thus, rendering works almost the same as for ",(0,a.kt)("em",{parentName:"p"},"normal")," Static Fibers, which we have already covered in the first level."),(0,a.kt)("p",null,"The next big enhancement will be the introduction of ",(0,a.kt)("em",{parentName:"p"},"state")," in fibers using hooks. And this is exactly what we are going to look at in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/4-hooks/"},"next level"),"."))}d.isMDXComponent=!0}}]);