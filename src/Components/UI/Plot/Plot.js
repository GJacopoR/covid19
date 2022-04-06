import React, { useRef, useLayoutEffect } from 'react';
import './Plot.module.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default function Plot(props) {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create("plot", am4charts.XYChart);

    // x.paddingRight = 20;

    x.data = props.data;

    let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    const keys = Object.keys(props.data[0]).slice(1) // to obtain all the keys name but the date one

    keys.forEach((key) => {
        let graphLine = x.series.push(new am4charts.LineSeries());
        graphLine.dataFields.dateX = "date";
        graphLine.dataFields.valueY = key;
        // graphLine.tooltipText = "{valueY.value}";
        graphLine.name = key;
    })

    x.cursor = new am4charts.XYCursor();

    x.legend = new am4charts.Legend();

    // let scrollbarX = new am4charts.XYChartScrollbar();
    // scrollbarX.series.push(series);
    // x.scrollbarX = scrollbarX;

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  useLayoutEffect(() => {
    chart.current.data = props.data;
  }, [props.data]);

  return (
    <div id="plot" style={{ width: "100%", height: "500px" }}></div>
  );
}