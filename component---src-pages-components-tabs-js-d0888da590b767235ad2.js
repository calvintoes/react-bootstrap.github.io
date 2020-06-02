(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"+gK0":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return T}));var n=a("mXGw"),l=a.n(n),o=a("+xvc"),i=a("Gf/E"),c=a("vXRK"),s=a("1u5/"),r=a("Dc2n"),m=a.n(r),b=a("YwJH"),d=a.n(b),u=a("eGDG"),p=a.n(u),f=a("Z/LK"),h=a.n(f),y=a("r+yI");t.default=Object(y.a)((function(e){var t=e.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.default,{h:"2",id:"tabs"},"Tabbed components"),l.a.createElement("p",{className:"lead"},"Dynamic tabbed interfaces"),l.a.createElement(o.default,{h:"2",id:"tabs-examples"},"Examples"),l.a.createElement("p",null,"Create dynamic tabbed interfaces, as described in the"," ",l.a.createElement("a",{href:"https://www.w3.org/TR/wai-aria-practices/#tabpanel"},l.a.createElement("abbr",{title:"Web Accessibility Initiative"},"WAI")," ",l.a.createElement(i.a,null)," ","Authoring Practices"),". ",l.a.createElement("code",null,"Tabs")," is a higher-level component for quickly creating a"," ",l.a.createElement("code",null,"Nav")," matched with a set of ",l.a.createElement("code",null,"TabPane"),"s."),l.a.createElement(s.a,{codeText:h.a,exampleClassName:"bs-example-tabs"}),l.a.createElement(o.default,{h:"2",id:"tabs-controlled"},"Controlled"),l.a.createElement("p",null,l.a.createElement("code",null,"Tabs")," can be controlled directly when you want to handle the selection logic personally."),l.a.createElement(s.a,{codeText:m.a,exampleClassName:"bs-example-tabs"}),l.a.createElement(o.default,{h:"2",id:"tabs-no-animation"},"No animation"),l.a.createElement("p",null,"Set the ",l.a.createElement("code",null,"transition")," prop to ",l.a.createElement("code",null,"false")),l.a.createElement(s.a,{codeText:p.a,exampleClassName:"bs-example-tabs"}),l.a.createElement(o.default,{h:"2",id:"tabs-with-dropdown"},"Dropdowns?"),l.a.createElement("p",null,"Dynamic tabbed interfaces should not contain dropdown menus, as this causes both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab’s trigger element is not immediately visible (as it’s inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies."),l.a.createElement("p",null,"That said, it Dropdowns do work technically (sans focus management), but we don't make any claims about support."),l.a.createElement(o.default,{h:"2",id:"tabs-custom-layout"},"Custom Tab Layout"),l.a.createElement("p",null,"For more complex layouts the flexible ",l.a.createElement("code",null,"TabContainer"),","," ",l.a.createElement("code",null,"TabContent"),", and ",l.a.createElement("code",null,"TabPane")," components along with any style of ",l.a.createElement("code",null,"Nav")," allow you to quickly piece together your own Tabs component with additional markup needed."),l.a.createElement("p",null,"Create a set of NavItems each with an ",l.a.createElement("code",null,"eventKey")," ","corresponding to the eventKey of a ",l.a.createElement("code",null,"TabPane"),". Wrap the whole thing in a ",l.a.createElement("code",null,"TabContainer")," and you have fully functioning custom tabs component. Check out the below example making use of the grid system and pills."),l.a.createElement(s.a,{codeText:d.a,exampleClassName:"bs-example-tabs"}),l.a.createElement(o.default,{h:"2",id:"tabs-api"},"API"),l.a.createElement(c.a,{metadata:t.Tabs}),l.a.createElement(c.a,{metadata:t.Tab}),l.a.createElement(c.a,{metadata:t.TabContainer}),l.a.createElement(c.a,{metadata:t.TabContent}),l.a.createElement(c.a,{metadata:t.TabPane}))}));var T="268054633"},Dc2n:function(e,t){e.exports='function ControlledTabs() {\n  const [key, setKey] = useState(\'home\');\n\n  return (\n    <Tabs\n      id="controlled-tab-example"\n      activeKey={key}\n      onSelect={(k) => setKey(k)}\n    >\n      <Tab eventKey="home" title="Home">\n        <Sonnet />\n      </Tab>\n      <Tab eventKey="profile" title="Profile">\n        <Sonnet />\n      </Tab>\n      <Tab eventKey="contact" title="Contact" disabled>\n        <Sonnet />\n      </Tab>\n    </Tabs>\n  );\n}\n\nrender(<ControlledTabs />);\n'},"Gf/E":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("mXGw"),l=a.n(n);function o(){return l.a.createElement("abbr",{title:"Accessible Rich Internet Applications"},"ARIA")}},YwJH:function(e,t){e.exports='<Tab.Container id="left-tabs-example" defaultActiveKey="first">\n  <Row>\n    <Col sm={3}>\n      <Nav variant="pills" className="flex-column">\n        <Nav.Item>\n          <Nav.Link eventKey="first">Tab 1</Nav.Link>\n        </Nav.Item>\n        <Nav.Item>\n          <Nav.Link eventKey="second">Tab 2</Nav.Link>\n        </Nav.Item>\n      </Nav>\n    </Col>\n    <Col sm={9}>\n      <Tab.Content>\n        <Tab.Pane eventKey="first">\n          <Sonnet />\n        </Tab.Pane>\n        <Tab.Pane eventKey="second">\n          <Sonnet />\n        </Tab.Pane>\n      </Tab.Content>\n    </Col>\n  </Row>\n</Tab.Container>;\n'},"Z/LK":function(e,t){e.exports='<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">\n  <Tab eventKey="home" title="Home">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="profile" title="Profile">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="contact" title="Contact" disabled>\n    <Sonnet />\n  </Tab>\n</Tabs>;\n'},eGDG:function(e,t){e.exports='<Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">\n  <Tab eventKey="home" title="Home">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="profile" title="Profile">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="contact" title="Contact" disabled>\n    <Sonnet />\n  </Tab>\n</Tabs>;\n'},"r+yI":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("9VmF");var n=a("mXGw"),l=a.n(n),o=a("Snbm"),i=a("aArQ");function c(e){return function(t){var a=t.location.pathname,n=i.a;return(a.startsWith("/getting-started")||a.startsWith("/layout")||a.startsWith("/components")||a.startsWith("/utilities"))&&(n=o.a),l.a.createElement(n,{location:t.location},l.a.createElement(e,t))}}}}]);
//# sourceMappingURL=component---src-pages-components-tabs-js-d0888da590b767235ad2.js.map