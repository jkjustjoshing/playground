'use strict';

function BarChart(initData) {

  this.svg = d3.selectAll('body').append('svg');
  this.setData(initData, true);
};

BarChart.prototype.setData = function(data, init) {
  var dataPoints = this.svg.selectAll('rect').data(data);

  dataPoints.exit().transition().duration(500).attr('width', 0).remove();
  if(init) {
    dataPoints.enter().append('rect')
      .attr('height', function(data) { return data * 10; })
      .attr('width', 25)
      .attr('x', function(data) { return data * 10; })
      .attr('y', function(data) { return 200 - (data * 10)});
  } else {
    dataPoints.enter().append('rect')
      .attr('height', function(data) { return data * 10; })
      .attr('width', 0)
      .attr('y', function(data) { return 200 - (data * 10); })
      .attr('x', 0);

  }
  dataPoints
    .transition().duration(500)
      .attr('height', function(data) { return data * 10; })
      .attr('width', 25)
      .attr('y', function(data) { return 200 - (data*10); })
      .attr('x', function(data, index) { return index * 30; });
}