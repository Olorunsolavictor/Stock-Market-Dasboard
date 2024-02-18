import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface CandleStickData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

const CandleStickChart: React.FC<{ data: CandleStickData[] }> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || data.length === 0) return;
    const svt = d3.select(svgRef.current);

    // Clear existing contents of the SVG
    svt.selectAll("*").remove();

    // Define SVG dimensions and margins
    const width = svgRef.current.clientWidth;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    // Define scales for x, y-axis (price), and y-axis (volume)
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.date))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScalePrice = d3
      .scaleLinear()
      .domain([d3.min(data, (d) => d.low) || 0, d3.max(data, (d) => d.high) || 100])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const yScaleVolume = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.volume) || 0])
      .nice()
      .range([height - margin.bottom, height / 2]); // Adjust the range for volume bars

    // Define candlestick colors
    const color = (d: CandleStickData) => (d.open > d.close ? "red" : "green");

    // Create SVG container
    const svg = d3.select(svgRef.current);
    

    // Draw volume bars
    svg
      .selectAll(".volume-bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "volume-bar")
      .attr("x", (d) => xScale(d.date)! + xScale.bandwidth() / 2 - 2) // Adjust the positioning
      .attr("y", (d) => yScaleVolume(d.volume))
      .attr("width", 4) // Adjust the width of the volume bars
      .attr("height", (d) => height - margin.bottom - yScaleVolume(d.volume))
      .attr("fill", "steelblue");
      

    // Draw candlesticks
    svg
      .selectAll(".candlestick")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "candlestick")
      .attr("x", (d) => xScale(d.date)! + xScale.bandwidth() / 4)
      .attr("y", (d) => Math.min(yScalePrice(d.open), yScalePrice(d.close)))
      .attr("width", xScale.bandwidth() / 2)
      .attr("height", (d) => Math.abs(yScalePrice(d.open) - yScalePrice(d.close)))
      .attr("fill", color)
      .attr("rx", 2) 
      .attr("ry", 2);

    // Draw wicks
    svg
      .selectAll(".wick")
      .data(data)
      .enter()
      .append("line")
      .attr("class", "wick")
      .attr("x1", (d) => xScale(d.date)! + xScale.bandwidth() / 2)
      .attr("y1", (d) => yScalePrice(d.high))
      .attr("x2", (d) => xScale(d.date)! + xScale.bandwidth() / 2)
      .attr("y2", (d) => yScalePrice(d.low))
      .attr("stroke", color);

    // Draw x axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    // Draw y axis for price
    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScalePrice));

    // Draw y axis for volume
    svg
      .append("g")
      .attr("transform", `translate(${width - margin.right}, 0)`)
      .call(d3.axisRight(yScaleVolume));
  }, [data]);

  return (
    <svg
      ref={svgRef}
      className="w-full  flex overflow-x-auto justify-center items-center h-auto p-6  shadow-lg rounded-lg"
      viewBox={`0 0 ${svgRef.current?.clientWidth} 300`}
    ></svg>
  );
};

export default CandleStickChart;
