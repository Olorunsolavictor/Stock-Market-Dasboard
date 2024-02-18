import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useAuth } from "configuration/AuthContext";

const Indices = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const { movingAverage } = useAuth();

  useEffect(() => {
    if (!svgRef.current || movingAverage.length === 0) return;

    const width = svgRef.current.clientWidth;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 20, left: 40 };

    const validMovingAverage = movingAverage.filter(
      (value: number | undefined): value is number => typeof value === "number"
    );

    const xScale = d3
      .scaleLinear()
      .domain([0, validMovingAverage.length - 1])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(validMovingAverage) || 0])
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line<number>()
      .x((_, i) => xScale(i))
      .y((d) => yScale(d))
      .curve(d3.curveMonotoneX);

    const svg = d3.select(svgRef.current);

    svg.selectAll("*").remove();

    svg
      .append("path")
      .datum(validMovingAverage)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", line);

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));
  }, [movingAverage]);

  return (<div className="shadow-lg rounded-lg p-6">
    <svg  ref={svgRef} width="100%" height="200"></svg>
  </div>)
};

export default Indices;
