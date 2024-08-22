"use strict";

exports.__esModule = true;
exports.default = void 0;
var _core = require("@superset-ui/core");
var _buildQuery = _interopRequireDefault(require("./buildQuery"));
var _controlPanel = _interopRequireDefault(require("./controlPanel"));
var _transformProps = _interopRequireDefault(require("./transformProps"));
var _thumbnailRose = _interopRequireDefault(require("../images/thumbnailRose.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; } // Rename 'controlPanel' to 'ControlPanel'
class RoseChartPlugin extends _core.ChartPlugin {
  // Rename 'LiquidChartPlugin' to 'RoseChartPlugin'
  /**
   * The constructor is used to pass relevant metadata and callbacks that get
   * registered in respective registries that are used throughout the library
   * and application. A more thorough description of each property is given in
   * the respective imported file.
   *
   * It is worth noting that `buildQuery` is optional, and only needed for
   * advanced visualizations that require either post-processing operations
   * (pivoting, rolling aggregations, sorting, etc.) or submitting multiple queries.
   */
  constructor() {
    var metadata = new _core.ChartMetadata({
      description: 'A plugin for circumnplex Chart',
      name: (0, _core.t)('CircumPlex2 Chart'),
      // Change the chart name to 'Rose Chart'
      thumbnail: _thumbnailRose.default,
      exampleGallery: [{
        url: _thumbnailRose.default,
        caption: (0, _core.t)('Basic Circumplex')
      }
      //{ url: example2, caption: t('Diamond') },
      //{ url: example3, caption: t('Pin') },
      //{ url: example4, caption: t('Triangle') },
      ]
    });
    super({
      buildQuery: _buildQuery.default,
      controlPanel: _controlPanel.default,
      loadChart: () => Promise.resolve().then(() => _interopRequireWildcard(require('../RoseChart'))),
      // Use the renamed 'RoseChart'
      metadata,
      transformProps: _transformProps.default
    });
  }
}
exports.default = RoseChartPlugin;