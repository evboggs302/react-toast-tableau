import React, { useEffect } from "react";
import "tableau-api";

function Test2() {
  useEffect(() => {
    initViz2();
    return () => {
      viz.dismiss();
    };
  }, []);

  var viz, workbook, sheet;

  var options = {
    // height: 500,
    // width: 5000
    // margin: 20
    // filter_name: filter_value
  };

  const initViz2 = () => {
    // const vizUrl = `http://public.tableau.com/views/RegionalSampleWorkbook/Storms`;
    const vizUrl = `https://public.tableau.com/views/WojBombs/WojBombs?:display_count=n&:origin=viz_share_link`;
    // const vizUrl = `https://public.tableau.com/views/MigrantdeathsanddisappearancesintheMediterranean/MigrantsintheMediterranean?:display_count=n&:origin=viz_share_link`;
    const vizContainer = document.getElementById("vizContainer");
    viz = new window.tableau.Viz(vizContainer, vizUrl, options);
  };

  return (
    <div>
      <div id={"vizContainer"}></div>
    </div>
  );
}

export default Test2;
