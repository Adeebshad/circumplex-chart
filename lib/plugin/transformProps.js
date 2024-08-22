"use strict";

exports.__esModule = true;
exports.default = transformProps;
function transformProps(chartProps) {
  var {
    width,
    height,
    formData,
    queriesData
  } = chartProps;
  var {
    data
  } = queriesData[0];

  // Extracting the groupby and metric fields from the formData
  var {
    groupby,
    metric
  } = formData;

  // Transform the data into the format expected by the Rose Chart
  var transformedData = data.map(row => ({
    type: row[groupby],
    value: row[metric]
  }));

  // Return the transformed props
  return {
    data: transformedData,
    height,
    width
  };
}