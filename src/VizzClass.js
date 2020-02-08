import React, { Component } from "react";
import "tableau-api";

class Test extends Component {
  componentDidMount() {
    this.state = {
      viz: ""
    };
    this.initViz();
  }

  initViz() {
    const vizUrl =
      "http://public.tableau.com/views/RegionalSampleWorkbook/Storms";
    const vizContainer = this.vizContainer;
    this.state.viz = new window.tableau.Viz(vizContainer, vizUrl);
  }

  render() {
    return (
      <div>
        <div
          ref={div => {
            this.vizContainer = div;
          }}
        ></div>
      </div>
    );
  }
}

export default Test;
