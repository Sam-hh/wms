import React from "react";

import ChartCard from "../components/Chart/ChartCard";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import ChartLegend from "../components/Chart/ChartLegend";
import PageTitle from "../components/Typography/PageTitle";
import {
  doughnutOptions,
  lineOptions,
  barOptions,
  doughnutLegends,
  lineLegends,
  barLegends,
} from "../utils/demo/chartsData";

function Charts() {
  return (
    <>
      <PageTitle>Sales Statistics</PageTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Top Selling Categories (Today)">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Sales Value Comparison">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
        <ChartCard title="Top Selling Categories (Month)">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Monthy Sales Report">
          <Bar {...barOptions} />
          <ChartLegend legends={barLegends} />
        </ChartCard>
      </div>
    </>
  );
}

export default Charts;
