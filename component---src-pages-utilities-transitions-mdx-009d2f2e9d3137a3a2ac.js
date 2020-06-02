(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"8Gbd":function(e,n,t){"use strict";t.r(n),t.d(n,"query",(function(){return m})),t.d(n,"_frontmatter",(function(){return u})),t.d(n,"default",(function(){return x}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("mXGw");var a=t("7ljp"),o=t("Snbm"),i=t("h55t"),l=t("vXRK"),r=t("1u5/"),d=t("UbUy"),c=t.n(d),s=t("XczI"),p=t.n(s);var m="2048555541",u={},h={query:m,_frontmatter:u},b=o.a;function x(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.mdx)(b,Object.assign({},h,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"transitions"},"Transitions"),Object(a.mdx)("p",null,"Bootstrap includes a few general use CSS transitions that can be applied\nto a number of components. React Bootstrap, bundles them up into a few composable\n",Object(a.mdx)("inlineCode",{parentName:"p"},"<Transition>")," components from ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/reactjs/react-transition-group"}),"react-transition-group"),", a commonly used animation wrapper for React."),Object(a.mdx)("p",null,"Encapsulating animations into components has the added benefit of making them  more broadly useful,\nas well as portable for using in other libraries.  All React-bootstrap components that can be animated, support pluggable\n",Object(a.mdx)("inlineCode",{parentName:"p"},"<Transition>")," components."),Object(a.mdx)("h2",{id:"collapse"},"Collapse"),Object(a.mdx)("p",null,"Add a collapse toggle animation to an element or component."),Object(a.mdx)(i.a,{title:"Smooth animations",mdxType:"Callout"},"If you're noticing choppy animations, and the component that's being collapsed has non-zero margin or padding, try wrapping the contents of your ",Object(a.mdx)("code",null,"<Collapse>")," inside a node with no margin or padding, like the ",Object(a.mdx)("code",null,"<div>")," in the example below. This will allow the height to be computed properly, so the animation can proceed smoothly."),Object(a.mdx)(r.a,{codeText:c.a,mdxType:"ReactPlayground"}),Object(a.mdx)("h2",{id:"fade"},"Fade"),Object(a.mdx)("p",null,"Add a fade animation to a child element or component."),Object(a.mdx)(r.a,{codeText:p.a,mdxType:"ReactPlayground"}),Object(a.mdx)("h2",{id:"api"},"API"),Object(a.mdx)(l.a,{metadata:t.data.Collapse,mdxType:"ComponentApi"}),Object(a.mdx)(l.a,{metadata:t.data.Fade,mdxType:"ComponentApi"}))}x.isMDXComponent=!0},Q6D8:function(e,n,t){e.exports={callout:"Callout-styles-module--callout--1_K3h",warning:"Callout-styles-module--warning--39Zw- Callout-styles-module--callout--1_K3h",danger:"Callout-styles-module--danger--19388 Callout-styles-module--callout--1_K3h"}},UbUy:function(e,n){e.exports='function Example() {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <>\n      <Button\n        onClick={() => setOpen(!open)}\n        aria-controls="example-collapse-text"\n        aria-expanded={open}\n      >\n        click\n      </Button>\n      <Collapse in={open}>\n        <div id="example-collapse-text">\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus\n          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer\n          labore wes anderson cred nesciunt sapiente ea proident.\n        </div>\n      </Collapse>\n    </>\n  );\n}\n\nrender(<Example />);\n'},XczI:function(e,n){e.exports='function Example() {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <>\n      <Button\n        onClick={() => setOpen(!open)}\n        aria-controls="example-fade-text"\n        aria-expanded={open}\n      >\n        Toggle text\n      </Button>\n      <Fade in={open}>\n        <div id="example-fade-text">\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus\n          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer\n          labore wes anderson cred nesciunt sapiente ea proident.\n        </div>\n      </Fade>\n    </>\n  );\n}\n\nrender(<Example />);\n'},h55t:function(e,n,t){"use strict";var a=t("mXGw"),o=t.n(a),i=t("Q6D8");n.a=function(e){var n=e.title,t=e.children,a=e.theme;return o.a.createElement("aside",{role:"note",className:i[a||"warning"]},n&&o.a.createElement("header",{className:"h5"},n),o.a.createElement("div",null,t))}}}]);
//# sourceMappingURL=component---src-pages-utilities-transitions-mdx-009d2f2e9d3137a3a2ac.js.map