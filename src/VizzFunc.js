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

  const initViz2 = () => {
    const vizUrl =
      "http://public.tableau.com/views/RegionalSampleWorkbook/Storms";
    const vizContainer = document.getElementById("vizContainer");
    viz = new window.tableau.Viz(vizContainer, vizUrl);
  };

  return (
    <div>
      <div id={"vizContainer"}></div>
    </div>
  );
}

export default Test2;
