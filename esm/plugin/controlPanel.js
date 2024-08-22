"use strict";

exports.__esModule = true;
exports.default = void 0;
var _core = require("@superset-ui/core");
var config = {
  // Basic control set
  controlPanelSections: [{
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [['groupby'], ['metric'], ['adhoc_filters'], ['row_limit']]
  }],
  // Control configuration
  controlOverrides: {
    groupby: {
      label: (0, _core.t)('Categories'),
      description: (0, _core.t)('The categories for the Rose Chart.')
    }
  }
};
var _default = config;
exports.default = _default;