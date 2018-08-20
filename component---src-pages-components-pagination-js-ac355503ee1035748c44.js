webpackJsonp(["component---src-pages-components-pagination-js"],{"./node_modules/babel-loader/lib/index.js??ref--0-0!./src/pages/components/pagination.js":function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){var a=e.data;return i.a.createElement("div",{className:"bs-docs-section"},i.a.createElement("h2",{className:"page-header"},i.a.createElement(r.a,{id:"pager"},"Pager")," ",i.a.createElement("small",null,"Pager, Pager.Item")),i.a.createElement("p",null,"Quick previous and next links."),i.a.createElement("h3",null,i.a.createElement(r.a,{id:"pager-default"},"Centers by default")),i.a.createElement(s.a,{codeText:c.a}),i.a.createElement("h3",null,i.a.createElement(r.a,{id:"pager-aligned"},"Aligned")),i.a.createElement("p",null,"Set the ",i.a.createElement("code",null,"previous")," or ",i.a.createElement("code",null,"next")," prop to"," ",i.a.createElement("code",null,"true"),", to align left or right."),i.a.createElement(s.a,{codeText:p.a}),i.a.createElement("h3",null,i.a.createElement(r.a,{id:"pager-disabled"},"Disabled")),i.a.createElement("p",null,"Set the ",i.a.createElement("code",null,"disabled")," prop to ",i.a.createElement("code",null,"true")," to disable the link."),i.a.createElement(s.a,{codeText:P.a}),i.a.createElement("h3",null,i.a.createElement(r.a,{id:"pager-props"},"Props")),i.a.createElement("h4",null,i.a.createElement(r.a,{id:"pager-props-pager"},"Pager"),i.a.createElement(o.a,{component:a.Pager.displayName})),i.a.createElement(l.a,{metadata:a.Pager}),i.a.createElement("h4",null,i.a.createElement(r.a,{id:"pager-props-pager-item"},"Pager.Item"),i.a.createElement(o.a,{component:a.PagerItem.displayName})),i.a.createElement(l.a,{metadata:a.PagerItem}),i.a.createElement("h2",{className:"page-header"},i.a.createElement(r.a,{id:"pagination"},"Pagination")," ",i.a.createElement("small",null,"Pagination")),i.a.createElement("p",null,"A set of ",i.a.createElement("em",null,"presentational")," components for building pagination UI."),i.a.createElement("div",{className:"bs-callout bs-callout-info"},i.a.createElement("h4",null,"Migration Details"),i.a.createElement("p",null,'In previous versions of ReactBootstrap, the Pagination components contained "business" logic related to pagination. Considering logic of this sort is almost always application and use-case specific we\'ve removed it in favor of purely presentational components (just like vanilla bootstrap).'),i.a.createElement("p",null,"In order to help migration we've provided a drop-in replacement for the old component at:"," ",i.a.createElement("a",{href:"https://www.npmjs.com/package/@react-bootstrap/pagination"},"@react-bootstrap/pagination"))),i.a.createElement(s.a,{codeText:E.a}),i.a.createElement("h4",null,i.a.createElement(r.a,{id:"pagination-more"},"More options")),i.a.createElement("p",null,'For building more complex pagination UI, there are few convenient sub-components for adding "First", "Previous", "Next", and "Last" buttons, as well as an ',i.a.createElement("code",null,"Ellipsis")," item for indicating previous or continuing results."),i.a.createElement(s.a,{codeText:b.a}),i.a.createElement(l.a,{metadata:a.Pagination}))},n.d(a,"query",function(){return I});var t=n("./node_modules/react/index.js"),i=n.n(t),r=n("./src/components/Anchor.js"),o=n("./src/components/LinkToSource.js"),l=n("./src/components/PropTable.js"),s=n("./src/components/ReactPlayground.js"),m=n("./src/examples/PagerDefault.js"),c=n.n(m),g=n("./src/examples/PagerAligned.js"),p=n.n(g),d=n("./src/examples/PagerDisabled.js"),P=n.n(d),u=n("./src/examples/PaginationBasic.js"),E=n.n(u),f=n("./src/examples/PaginationAdvanced.js"),b=n.n(f);var I="** extracted graphql fragment **"},"./src/examples/PagerAligned.js":function(e,a){e.exports='<Pager>\n  <Pager.Item previous href="#">\n    &larr; Previous Page\n  </Pager.Item>\n  <Pager.Item next href="#">\n    Next Page &rarr;\n  </Pager.Item>\n</Pager>;\n'},"./src/examples/PagerDefault.js":function(e,a){e.exports='<Pager>\n  <Pager.Item href="#">Previous</Pager.Item>{\' \'}\n  <Pager.Item href="#">Next</Pager.Item>\n</Pager>;\n'},"./src/examples/PagerDisabled.js":function(e,a){e.exports='<Pager>\n  <Pager.Item previous href="#">\n    &larr; Previous\n  </Pager.Item>\n  <Pager.Item disabled next href="#">\n    Next &rarr;\n  </Pager.Item>\n</Pager>;\n'},"./src/examples/PaginationAdvanced.js":function(e,a){e.exports="<Pagination>\n  <Pagination.First />\n  <Pagination.Prev />\n  <Pagination.Item>{1}</Pagination.Item>\n  <Pagination.Ellipsis />\n\n  <Pagination.Item>{10}</Pagination.Item>\n  <Pagination.Item>{11}</Pagination.Item>\n  <Pagination.Item active>{12}</Pagination.Item>\n  <Pagination.Item>{13}</Pagination.Item>\n  <Pagination.Item disabled>{14}</Pagination.Item>\n\n  <Pagination.Ellipsis />\n  <Pagination.Item>{20}</Pagination.Item>\n  <Pagination.Next />\n  <Pagination.Last />\n</Pagination>;\n"},"./src/examples/PaginationBasic.js":function(e,a){e.exports='let active = 7;\nlet items = [];\nfor (let number = 1; number <= 10; number++) {\n  items.push(\n    <Pagination.Item active={number === active}>{number}</Pagination.Item>\n  );\n}\n\nconst paginationBasic = (\n  <div>\n    <Pagination bsSize="large">{items}</Pagination>\n    <br />\n\n    <Pagination bsSize="medium">{items}</Pagination>\n    <br />\n\n    <Pagination bsSize="small">{items}</Pagination>\n  </div>\n);\n\nrender(paginationBasic);\n'}});
//# sourceMappingURL=component---src-pages-components-pagination-js-ac355503ee1035748c44.js.map