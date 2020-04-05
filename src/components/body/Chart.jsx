import React from 'react';
import ReactDOM from 'react-dom';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

//Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'area2d',// The chart type
    width: '100%', // Width of the chart
    height: '100%', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: '../../assets/resources/OilData.json',
};

//Your react component
class Chart extends React.Component {
  //Create the button
  render() {
    return (
      <div>
        <ReactFC {...chartConfigs} />
        
      </div>
    );
  }
}

export default Chart;

