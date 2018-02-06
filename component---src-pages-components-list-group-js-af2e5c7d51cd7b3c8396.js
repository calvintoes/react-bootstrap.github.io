webpackJsonp([52966151951133],{431:function(e,t){"use strict";e.exports='<ListGroup>\n  <ListGroupItem href="#" active>\n    Link 1\n  </ListGroupItem>\n  <ListGroupItem href="#">Link 2</ListGroupItem>\n  <ListGroupItem href="#" disabled>\n    Link 3\n  </ListGroupItem>\n</ListGroup>\n'},432:function(e,t){"use strict";e.exports='function CustomComponent({ children }) {\n  return (\n    <li className="list-group-item" onClick={() => {}}>\n      {children}\n    </li>\n  );\n}\n\nrender(\n  <ListGroup componentClass="ul">\n    <CustomComponent>Custom Child 1</CustomComponent>\n    <CustomComponent>Custom Child 2</CustomComponent>\n    <CustomComponent>Custom Child 3</CustomComponent>\n  </ListGroup>\n);\n'},433:function(e,t){"use strict";e.exports="<ListGroup>\n  <ListGroupItem>Item 1</ListGroupItem>\n  <ListGroupItem>Item 2</ListGroupItem>\n  <ListGroupItem>...</ListGroupItem>\n</ListGroup>\n"},434:function(e,t){"use strict";e.exports='<ListGroup>\n  <ListGroupItem header="Heading 1">Some body text</ListGroupItem>\n  <ListGroupItem header="Heading 2" href="#">\n    Linked item\n  </ListGroupItem>\n  <ListGroupItem header="Heading 3" bsStyle="danger">\n    Danger styling\n  </ListGroupItem>\n</ListGroup>\n'},435:function(e,t){"use strict";e.exports='function alertClicked() {\n  alert(\'You clicked the third ListGroupItem\');\n}\n\nrender(\n  <ListGroup>\n    <ListGroupItem href="#link1">Link 1</ListGroupItem>\n    <ListGroupItem href="#link2">Link 2</ListGroupItem>\n    <ListGroupItem onClick={alertClicked}>Trigger an alert</ListGroupItem>\n  </ListGroup>\n);\n'},436:function(e,t){"use strict";e.exports='<ListGroup>\n  <ListGroupItem bsStyle="success">Success</ListGroupItem>\n  <ListGroupItem bsStyle="info">Info</ListGroupItem>\n  <ListGroupItem bsStyle="warning">Warning</ListGroupItem>\n  <ListGroupItem bsStyle="danger">Danger</ListGroupItem>\n</ListGroup>\n'},516:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.data;return o.default.createElement("div",{className:"bs-docs-section"},o.default.createElement("h2",{className:"page-header"},o.default.createElement(i.default,{id:"listgroup"},"List group")," ",o.default.createElement("small",null,"ListGroup, ListGroupItem")),o.default.createElement("p",null,"List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content."),o.default.createElement("h3",null,o.default.createElement(i.default,{id:"listgroup-default"},"Centers by default")),o.default.createElement(c.default,{codeText:f.default}),o.default.createElement("h3",null,o.default.createElement(i.default,{id:"listgroup-linked"},"Linked")),o.default.createElement("p",null,"Set the ",o.default.createElement("code",null,"href")," or ",o.default.createElement("code",null,"onClick")," prop on"," ",o.default.createElement("code",null,"ListGroupItem"),", to create a linked or clickable element."),o.default.createElement(c.default,{codeText:h.default}),o.default.createElement("h3",null,o.default.createElement(i.default,{id:"listgroup-styling-state"},"Styling by state")),o.default.createElement("p",null,"Set the ",o.default.createElement("code",null,"active")," or ",o.default.createElement("code",null,"disabled")," prop to"," ",o.default.createElement("code",null,"true")," to mark or disable the item."),o.default.createElement(c.default,{codeText:E.default}),o.default.createElement("h3",null,o.default.createElement(i.default,{id:"listgroup-styling-color"},"Styling by color")),o.default.createElement("p",null,"Set the ",o.default.createElement("code",null,"bsStyle")," prop to style the item"),o.default.createElement(c.default,{codeText:g.default}),o.default.createElement("h3",null,o.default.createElement(i.default,{id:"listgroup-with-header"},"With header")),o.default.createElement("p",null,"Set the ",o.default.createElement("code",null,"header")," prop to create a structured item, with a heading and a body area."),o.default.createElement(c.default,{codeText:y.default}),o.default.createElement("h3",null,o.default.createElement(i.default,{id:"listgroup-with-custom-children"},"With custom component children")),o.default.createElement("p",null,"When using ListGroupItems directly, ListGroup looks at whether the items have href or onClick props to determine which DOM elements to emit. However, with custom item components as children to"," ",o.default.createElement("code",null,"ListGroup"),", set the",o.default.createElement("code",null,"componentClass")," prop to specify which element"," ",o.default.createElement("code",null,"ListGroup")," should output."),o.default.createElement(c.default,{codeText:b.default}),o.default.createElement("h3",null,o.default.createElement(i.default,{id:"listgroup-props"},"Props")),o.default.createElement("h4",null,o.default.createElement(i.default,{id:"listgroup-props-group"},"ListGroup")),o.default.createElement(d.default,{metadata:t.ListGroup}),o.default.createElement("h4",null,o.default.createElement(i.default,{id:"listgroup-props-item"},"ListGroupItem")),o.default.createElement(d.default,{metadata:t.ListGroupItem}))}t.__esModule=!0,t.query=void 0,t.default=u;var r=l(1),o=n(r),a=l(12),i=n(a),s=l(14),d=n(s),m=l(13),c=n(m),p=l(433),f=n(p),L=l(435),h=n(L),G=l(431),E=n(G),I=l(436),g=n(I),C=l(434),y=n(C),k=l(432),b=n(k);t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-components-list-group-js-af2e5c7d51cd7b3c8396.js.map