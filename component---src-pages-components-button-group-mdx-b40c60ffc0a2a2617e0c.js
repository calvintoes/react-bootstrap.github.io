(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0cJH":function(t,n){t.exports='<ButtonGroup>\n  <Button>1</Button>\n  <Button>2</Button>\n\n  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">\n    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>\n    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>\n  </DropdownButton>\n</ButtonGroup>;\n'},H1uq:function(t,n){t.exports='<ButtonGroup vertical>\n  <Button>Button</Button>\n  <Button>Button</Button>\n\n  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">\n    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>\n    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>\n  </DropdownButton>\n\n  <Button>Button</Button>\n  <Button>Button</Button>\n\n  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">\n    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>\n    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>\n  </DropdownButton>\n\n  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">\n    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>\n    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>\n  </DropdownButton>\n</ButtonGroup>;\n'},KIF8:function(t,n){t.exports='<ButtonToolbar aria-label="Toolbar with button groups">\n  <ButtonGroup className="mr-2" aria-label="First group">\n    <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>\n  </ButtonGroup>\n  <ButtonGroup className="mr-2" aria-label="Second group">\n    <Button>5</Button> <Button>6</Button> <Button>7</Button>\n  </ButtonGroup>\n  <ButtonGroup aria-label="Third group">\n    <Button>8</Button>\n  </ButtonGroup>\n</ButtonToolbar>;\n'},R0cR:function(t,n){t.exports='<>\n  <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">\n    <ButtonGroup className="mr-2" aria-label="First group">\n      <Button variant="secondary">1</Button>{\' \'}\n      <Button variant="secondary">2</Button>{\' \'}\n      <Button variant="secondary">3</Button>{\' \'}\n      <Button variant="secondary">4</Button>\n    </ButtonGroup>\n    <InputGroup>\n      <InputGroup.Prepend>\n        <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>\n      </InputGroup.Prepend>\n      <FormControl\n        type="text"\n        placeholder="Input group example"\n        aria-label="Input group example"\n        aria-describedby="btnGroupAddon"\n      />\n    </InputGroup>\n  </ButtonToolbar>\n\n  <ButtonToolbar\n    className="justify-content-between"\n    aria-label="Toolbar with Button groups"\n  >\n    <ButtonGroup aria-label="First group">\n      <Button variant="secondary">1</Button>{\' \'}\n      <Button variant="secondary">2</Button>{\' \'}\n      <Button variant="secondary">3</Button>{\' \'}\n      <Button variant="secondary">4</Button>\n    </ButtonGroup>\n    <InputGroup>\n      <InputGroup.Prepend>\n        <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>\n      </InputGroup.Prepend>\n      <FormControl\n        type="text"\n        placeholder="Input group example"\n        aria-label="Input group example"\n        aria-describedby="btnGroupAddon2"\n      />\n    </InputGroup>\n  </ButtonToolbar>\n</>;\n'},d7j5:function(t,n){t.exports='<>\n  <ButtonGroup size="lg" className="mb-2">\n    <Button>Left</Button>\n    <Button>Middle</Button>\n    <Button>Right</Button>\n  </ButtonGroup>\n  <br />\n  <ButtonGroup className="mb-2">\n    <Button>Left</Button>\n    <Button>Middle</Button>\n    <Button>Right</Button>\n  </ButtonGroup>\n  <br />\n  <ButtonGroup size="sm">\n    <Button>Left</Button>\n    <Button>Middle</Button>\n    <Button>Right</Button>\n  </ButtonGroup>\n</>;\n'},exVO:function(t,n){t.exports='<ButtonGroup aria-label="Basic example">\n  <Button variant="secondary">Left</Button>\n  <Button variant="secondary">Middle</Button>\n  <Button variant="secondary">Right</Button>\n</ButtonGroup>;\n'},yCrB:function(t,n,o){"use strict";o.r(n),o.d(n,"query",(function(){return G})),o.d(n,"_frontmatter",(function(){return g})),o.d(n,"default",(function(){return D}));o("rGqo"),o("yt8O"),o("Btvt"),o("RW0V"),o("91GP"),o("mXGw");var e=o("7ljp"),u=o("Snbm"),r=o("vXRK"),a=o("1u5/"),p=o("exVO"),d=o.n(p),i=o("0cJH"),l=o.n(i),B=o("d7j5"),m=o.n(B),c=o("R0cR"),s=o.n(c),b=o("KIF8"),x=o.n(b),w=o("H1uq"),y=o.n(w);var G="31226100",g={},j={query:G,_frontmatter:g},O=u.a;function D(t){var n=t.components,o=function(t,n){if(null==t)return{};var o,e,u={},r=Object.keys(t);for(e=0;e<r.length;e++)o=r[e],n.indexOf(o)>=0||(u[o]=t[o]);return u}(t,["components"]);return Object(e.mdx)(O,Object.assign({},j,o,{components:n,mdxType:"MDXLayout"}),Object(e.mdx)("h1",{id:"button-groups"},"Button groups"),Object(e.mdx)("p",{className:"lead"},"Group a series of buttons together on a single line with the button group."),Object(e.mdx)("h2",{id:"basic-example"},"Basic example"),Object(e.mdx)("p",null,"Wrap a series of ",Object(e.mdx)("inlineCode",{parentName:"p"},"<Button>"),"s in a ",Object(e.mdx)("inlineCode",{parentName:"p"},"<ButtonGroup>"),"."),Object(e.mdx)(a.a,{codeText:d.a,mdxType:"ReactPlayground"}),Object(e.mdx)("h2",{id:"button-toolbar"},"Button toolbar"),Object(e.mdx)("p",null,"Combine sets of  ",Object(e.mdx)("inlineCode",{parentName:"p"},"<ButtonGroup>"),"s into a ",Object(e.mdx)("inlineCode",{parentName:"p"},"<ButtonToolbar>")," for more complex components."),Object(e.mdx)(a.a,{codeText:x.a,mdxType:"ReactPlayground"}),Object(e.mdx)("p",null,"Feel free to mix input groups with button groups in your toolbars.\nSimilar to the example above, you’ll likely need some utilities though\nto space things properly."),Object(e.mdx)(a.a,{codeText:s.a,mdxType:"ReactPlayground"}),Object(e.mdx)("h2",{id:"sizing"},"Sizing"),Object(e.mdx)("p",null,"Instead of applying button sizing props to every button in a group, just\nadd  ",Object(e.mdx)("inlineCode",{parentName:"p"},"size ")," prop to the  ",Object(e.mdx)("inlineCode",{parentName:"p"},"<ButtonGroup>"),"."),Object(e.mdx)(a.a,{codeText:m.a,mdxType:"ReactPlayground"}),Object(e.mdx)("h2",{id:"nesting"},"Nesting"),Object(e.mdx)("p",null,"You can place other button types within the\n",Object(e.mdx)("inlineCode",{parentName:"p"},"<ButtonGroup>")," like ",Object(e.mdx)("inlineCode",{parentName:"p"},"<DropdownButton>"),"s."),Object(e.mdx)(a.a,{codeText:l.a,mdxType:"ReactPlayground"}),Object(e.mdx)("h2",{id:"vertical-variation"},"Vertical variation"),Object(e.mdx)("p",null,"Make a set of buttons appear vertically stacked rather than\nhorizontally, by adding ",Object(e.mdx)("inlineCode",{parentName:"p"},"vertical")," to the ",Object(e.mdx)("inlineCode",{parentName:"p"},"<ButtonGroup>"),".\n",Object(e.mdx)("strong",{parentName:"p"},"Split button dropdowns are not supported here.")),Object(e.mdx)(a.a,{codeText:y.a,mdxType:"ReactPlayground"}),Object(e.mdx)("h2",{id:"api"},"API"),Object(e.mdx)(r.a,{metadata:o.data.ButtonGroup,mdxType:"ComponentApi"}),Object(e.mdx)(r.a,{metadata:o.data.ButtonToolbar,mdxType:"ComponentApi"}))}D.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-button-group-mdx-b40c60ffc0a2a2617e0c.js.map