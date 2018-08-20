webpackJsonp(["path---utilities-transitions"],{"./.cache/json/utilities-transitions.json":function(e,l){e.exports={data:{Fade:{composes:null,displayName:"Fade",description:null,props:[{name:"in",doclets:{type:null,controllable:null},defaultValue:{value:"false",computed:!1},description:{childMarkdownRemark:{html:"<p>Show the component; triggers the fade in or fade out animation</p>"}},required:!1,type:{name:"bool",value:null,raw:null}},{name:"mountOnEnter",doclets:{type:null,controllable:null},defaultValue:{value:"false",computed:!1},description:{childMarkdownRemark:{html:'<p>Wait until the first "enter" transition to mount the component (add it to the DOM)</p>'}},required:!1,type:{name:"bool",value:null,raw:null}},{name:"unmountOnExit",doclets:{type:null,controllable:null},defaultValue:{value:"false",computed:!1},description:{childMarkdownRemark:{html:"<p>Unmount the component (remove it from the DOM) when it is faded out</p>"}},required:!1,type:{name:"bool",value:null,raw:null}},{name:"appear",doclets:{type:null,controllable:null},defaultValue:{value:"false",computed:!1},description:{childMarkdownRemark:{html:"<p>Run the fade in animation when the component mounts, if it is initially\nshown</p>"}},required:!1,type:{name:"bool",value:null,raw:null}},{name:"timeout",doclets:{type:null,controllable:null},defaultValue:{value:"300",computed:!1},description:{childMarkdownRemark:{html:"<p>Duration of the fade animation in milliseconds, to ensure that finishing\ncallbacks are fired even if the original browser transition end events are\ncanceled</p>"}},required:!1,type:{name:"number",value:null,raw:null}},{name:"onEnter",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>Callback fired before the component fades in</p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"onEntering",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>Callback fired after the component starts to fade in</p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"onEntered",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>Callback fired after the has component faded in</p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"onExit",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>Callback fired before the component fades out</p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"onExiting",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>Callback fired after the component starts to fade out</p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"onExited",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>Callback fired after the component has faded out</p>"}},required:!1,type:{name:"func",value:null,raw:null}}]},Collapse:{composes:null,displayName:"Collapse",description:null,props:[{name:"in",doclets:{type:null,controllable:null},defaultValue:{value:"false",computed:!1},description:{childMarkdownRemark:{html:"<p>Show the component; triggers the expand or collapse animation</p>"}},required:!1,type:{name:"bool",value:null,raw:null}},{name:"mountOnEnter",doclets:{type:null,controllable:null},defaultValue:{value:"false",computed:!1},description:{childMarkdownRemark:{html:'<p>Wait until the first "enter" transition to mount the component (add it to the DOM)</p>'}},required:!1,type:{name:"bool",value:null,raw:null}},{name:"unmountOnExit",doclets:{type:null,controllable:null},defaultValue:{value:"false",computed:!1},description:{childMarkdownRemark:{html:"<p>Unmount the component (remove it from the DOM) when it is collapsed</p>"}},required:!1,type:{name:"bool",value:null,raw:null}},{name:"appear",doclets:{type:null,controllable:null},defaultValue:{value:"false",computed:!1},description:{childMarkdownRemark:{html:"<p>Run the expand animation when the component mounts, if it is initially\nshown</p>"}},required:!1,type:{name:"bool",value:null,raw:null}},{name:"timeout",doclets:{type:null,controllable:null},defaultValue:{value:"300",computed:!1},description:{childMarkdownRemark:{html:"<p>Duration of the collapse animation in milliseconds, to ensure that\nfinishing callbacks are fired even if the original browser transition end\nevents are canceled</p>"}},required:!1,type:{name:"number",value:null,raw:null}},{name:"onEnter",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>Callback fired before the component expands</p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"onEntering",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>Callback fired after the component starts to expand</p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"onEntered",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>Callback fired after the component has expanded</p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"onExit",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>Callback fired before the component collapses</p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"onExiting",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>Callback fired after the component starts to collapse</p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"onExited",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>Callback fired after the component has collapsed</p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"dimension",doclets:{type:null,controllable:null},defaultValue:{value:"'height'",computed:!1},description:{childMarkdownRemark:{html:"<p>The dimension used when collapsing, or a function that returns the\ndimension</p>\n<p><em>Note: Bootstrap only partially supports 'width'!\nYou will need to supply your own CSS animation for the <code>.width</code> CSS class.</em></p>"}},required:!1,type:{name:"union",value:[{name:"enum",value:[{value:"'height'",computed:!1},{value:"'width'",computed:!1}]},{name:"func"}],raw:null}},{name:"getDimensionValue",doclets:{type:null,controllable:null},defaultValue:{value:"function getDimensionValue(dimension, elem) {\n  let value = elem[`offset${capitalize(dimension)}`];\n  let margins = MARGINS[dimension];\n\n  return (\n    value +\n    parseInt(css(elem, margins[0]), 10) +\n    parseInt(css(elem, margins[1]), 10)\n  );\n}",computed:!1},description:{childMarkdownRemark:{html:"<p>Function that returns the height or width of the animating DOM node</p>\n<p>Allows for providing some custom logic for how much the Collapse component\nshould animate in its specified dimension. Called with the current\ndimension prop value and the DOM node.</p>"}},required:!1,type:{name:"func",value:null,raw:null}},{name:"role",doclets:{type:null,controllable:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>ARIA role of collapsible element</p>"}},required:!1,type:{name:"string",value:null,raw:null}}]}},pageContext:{}}}});
//# sourceMappingURL=path---utilities-transitions-4f037b716ab755da561e.js.map