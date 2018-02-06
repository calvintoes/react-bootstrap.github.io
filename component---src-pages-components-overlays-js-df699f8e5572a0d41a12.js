webpackJsonp([74086763614190],{454:function(e,t){"use strict";e.exports='class Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.getTarget = this.getTarget.bind(this);\n    this.handleToggle = this.handleToggle.bind(this);\n\n    this.state = {\n      show: true\n    };\n  }\n\n  getTarget() {\n    return ReactDOM.findDOMNode(this.target);\n  }\n\n  handleToggle() {\n    this.setState({ show: !this.state.show });\n  }\n\n  render() {\n    const sharedProps = {\n      container: this,\n      target: this.getTarget,\n      show: this.state.show\n    };\n\n    return (\n      <div style={{ height: 100, paddingLeft: 150, position: \'relative\' }}>\n        <Button\n          ref={button => {\n            this.target = button;\n          }}\n          onClick={this.handleToggle}\n        >\n          Click me!\n        </Button>\n\n        <Overlay {...sharedProps} placement="left">\n          <Tooltip id="overload-left">Tooltip overload!</Tooltip>\n        </Overlay>\n        <Overlay {...sharedProps} placement="top">\n          <Tooltip id="overload-top">Tooltip overload!</Tooltip>\n        </Overlay>\n        <Overlay {...sharedProps} placement="right">\n          <Tooltip id="overload-right">Tooltip overload!</Tooltip>\n        </Overlay>\n        <Overlay {...sharedProps} placement="bottom">\n          <Tooltip id="overload-bottom">Tooltip overload!</Tooltip>\n        </Overlay>\n      </div>\n    );\n  }\n}\n\nrender(<Example />);\n'},455:function(e,t){"use strict";e.exports="function CustomPopover({ style }) {\n  return (\n    <div\n      style={{\n        ...style,\n        position: 'absolute',\n        backgroundColor: '#EEE',\n        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',\n        border: '1px solid #CCC',\n        borderRadius: 3,\n        marginLeft: -5,\n        marginTop: 5,\n        padding: 10\n      }}\n    >\n      <strong>Holy guacamole!</strong> Check this info.\n    </div>\n  );\n}\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleToggle = this.handleToggle.bind(this);\n\n    this.state = {\n      show: true\n    };\n  }\n\n  handleToggle() {\n    this.setState({ show: !this.state.show });\n  }\n\n  render() {\n    return (\n      <div style={{ height: 100, position: 'relative' }}>\n        <Button\n          ref={button => {\n            this.target = button;\n          }}\n          onClick={this.handleToggle}\n        >\n          I am an Overlay target\n        </Button>\n\n        <Overlay\n          show={this.state.show}\n          onHide={() => this.setState({ show: false })}\n          placement=\"right\"\n          container={this}\n          target={() => ReactDOM.findDOMNode(this.target)}\n        >\n          <CustomPopover />\n        </Overlay>\n      </div>\n    );\n  }\n}\n\nrender(<Example />);\n"},522:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.data;return r.default.createElement("div",{className:"bs-docs-section"},r.default.createElement("h2",{className:"page-header"},r.default.createElement(i.default,{id:"custom-overlays"},"Custom overlays")," ",r.default.createElement("small",null,"Overlay")),r.default.createElement("p",null,"The ",r.default.createElement("code",null,"OverlayTrigger")," component is great for most use cases, but as a higher level abstraction it can lack the flexibility needed to build more nuanced or custom behaviors into your Overlay components. For these cases it can be helpful to forgo the trigger and use the"," ",r.default.createElement("code",null,"Overlay")," component directly."),r.default.createElement(h.default,{codeText:m.default}),r.default.createElement("h4",null,r.default.createElement(i.default,{id:"custom-overlays-overlay"},"Use Overlay instead of Tooltip and Popover")),r.default.createElement("p",null,"You don't need to use the provided ",r.default.createElement("code",null,"Tooltip")," or"," ",r.default.createElement("code",null,"Popover")," components. Creating custom overlays is as easy as wrapping some markup in an ",r.default.createElement("code",null,"Overlay")," component."),r.default.createElement(h.default,{codeText:v.default}),r.default.createElement("h3",null,r.default.createElement(i.default,{id:"custom-overlays-props"},"Props")),r.default.createElement(u.default,{metadata:t.Overlay}))}t.__esModule=!0,t.query=void 0,t.default=a;var l=n(1),r=o(l),s=n(12),i=o(s),d=n(14),u=o(d),c=n(13),h=o(c),p=n(454),m=o(p),g=n(455),v=o(g);t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-components-overlays-js-df699f8e5572a0d41a12.js.map