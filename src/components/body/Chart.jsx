import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

//Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'area2d',// The chart type
    width: '100%', // Width of the chart
    height: '60%', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
   
        "chart": {
            "caption": "",
            "subCaption": "",
            "xAxisName": "",
            "yAxisName": "",
            "numberSuffix": "",
            "theme": "fusion",
            "showlabels": "1",
            "chartBottomMargin": "2",
            "chartLeftMargin": "0"
        },

        "data": [{
            "label": "Jan",
            "value": "20"
        }, {
            "label": "Feb",
            "value": "70"
        }, {
            "label": "Mar",
            "value": "50"
        }, {
            "label": "Apr",
            "value": "100"
        }, {
            "label": "May",
            "value": "15"
        }, {
            "label": "Jun",
            "value": "100"
        }]
        
    },
};

//Your react component
class Chart extends React.Component {
  //Create the button
  render() {
    return (
      <div>
        <div className="row my-3">
            <div className="col-md-7">
                <div className="d-flex align-items-center">
                    <h5 style={{ fontSize: "0.87rem"}}> Today: 5, Aug 2018 </h5>
                </div>
            </div>
            <div className="col-md-5">
                <div className="row">
                    <div className="col-6">
                        <select className="browser-default custom-select"> 
                            <option value='1'> Jan 1 - Jun 1 </option>
                            <option value='2'> Jun 1 - Jun 2 </option>
                        </select>
                    </div>
                    <div className="col-6">
                        <div className="button-control">
                            <button className="btn previous-tab"><i className="fas fa-angle-left"></i></button>
                            <button className="btn next-tab"><i className="fas fa-angle-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ReactFC {...chartConfigs} />
      </div>
    );
  }
}

export default Chart;

