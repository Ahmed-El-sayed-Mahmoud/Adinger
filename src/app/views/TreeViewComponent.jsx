"use client";

import React, { useEffect, useRef } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const COLOR_PALETTES = {
    0: '#3366CC',   // first level - Blue
    1: '#DC3912',   // second level - Red
    2: '#FF9900',   // third level - Orange
    3: '#109618',   // fourth level - Green
    4: '#990099'    // fifth level - Purple

};

const TreeChart = ({ 
  data, 
  height = "500px", 
  width = "100%",
  mode = 'light'
}) => {
  const chartRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const root = am5.Root.new(chartRef.current);
    rootRef.current = root;

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    const zoomableContainer = root.container.children.push(
      am5.ZoomableContainer.new(root, {
        width: am5.p100,
        height: am5.p100,
        wheelable: true,
        pinchZoom: true
      })
    );

    zoomableContainer.children.push(am5.ZoomTools.new(root, {
      target: zoomableContainer
    }));

    const series = zoomableContainer.contents.children.push(
      am5hierarchy.Tree.new(root, {
        singleBranchOnly: false,
        downDepth: 1,
        initialDepth: 10,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        orientation: "horizontal"
      })
    );

    series.circles.template.adapters.add("fill", function(fill, target) {
        const depth = target.dataItem.get("depth");
        return am5.color(getNodeColor(depth));
      });
    // Function to get color based on node depth
    const getNodeColor = (depth) => {
      const palette = COLOR_PALETTES;
      return am5.color(palette[depth]);
    };


    const nodeTemplate = series.nodes.template;
    nodeTemplate.setAll({
      cornerRadius: 10,
      fillOpacity: 0.8,
      strokeOpacity: 0.8,
      setStateOnChildren: true,
      cursorHoverEnabled: true,
      cursor: "pointer",
    });

    series.labels.template.setAll({
      text: "{name}",
      fontSize: 10,
      fill: mode === 'dark' ? am5.color(0xffffff) : am5.color(0x000000),
        align: "center",
        verticalAlign: "middle",
        textOverflow: "ellipsis",
        ellipsis: true,

    });

    // Set the data
    series.data.setAll([data]);

    series.set("selectedDataItem", series.dataItems[0]);

    series.appear(1000, 100);

    // Cleanup
    return () => {
      root.dispose();
    };
  }, [data, mode]);

  return (
    <div 
      ref={chartRef} 
      style={{ 
        width: width, 
        height: height, 
        position: "relative",
        borderRadius: '10px',
        overflow: 'hidden',
      }} 
    />
  );
};

export default TreeChart;