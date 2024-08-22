"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _core = require("@superset-ui/core");
var _plots = require("@ant-design/plots");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
// Import the RoseProps interface

// Define the Styles component with height and width props
var Styles = _core.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  height: ", "px;\n  width: ", "px;\n"])), _ref => {
  var {
    height
  } = _ref;
  return height;
}, _ref2 => {
  var {
    width
  } = _ref2;
  return width;
});
var CircumplexChart = props => {
  var {
    data,
    xField,
    yField,
    seriesField,
    height,
    width
  } = props;

  //const data = [
  //  {
  //    type: 'Hello',
  //    value: 27,
  //  },
  //  {
  //    type: 'Bye',
  //    value: 25,
  //  },
  //  {
  //    type: 'Bop',
  //    value: 18,
  //  },
  //  {
  //    type: 'Mew',
  //    value: 15,
  //  },
  //  {
  //    type: 'Hey',
  //    value: 10,
  //  },
  //  {
  //    type: 'Piu',
  //    value: 5,
  //  },
  //];

  // Define the AntV config using the provided props
  var config = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    radius: 0.9,
    label: {
      offset: -15
    },
    legend: {
      position: 'bottom'
    },
    width,
    height,
    autoFit: false
  };
  return /*#__PURE__*/_react.default.createElement(Styles, {
    height: height,
    width: width
  }, /*#__PURE__*/_react.default.createElement(_plots.Rose, config));
};
var _default = CircumplexChart;
exports.default = _default;