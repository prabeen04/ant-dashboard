import React, { Component, useState } from "react";
import "./progressLine.css";

function ProgressLine(props) {
  const [data, setData] = useState([
    {
      id: 1,
      title: "value1",
      progress: 5,
      loading: false,
      touched: false,
      days: 4
    },
    {
      id: 2,
      title: "value2",
      progress: 20,
      loading: false,
      touched: false,
      days: 0
    },
    {
      id: 3,
      title: "value3",
      progress: 10,
      loading: false,
      touched: false,
      days: 2
    },
    {
      id: 4,
      title: "value4",
      progress: 25,
      loading: false,
      touched: false,
      days: 12
    },
    {
      id: 5,
      title: "value5",
      progress: 30,
      loading: false,
      touched: false,
      days: 1
    },
    {
      id: 6,
      title: "value6",
      progress: 10,
      loading: false,
      touched: false,
      days: 3
    }
  ]);
  function handleClick(item, i) {
    let newData = data.map((element, index) => {
      return index <= i
        ? { ...element, loading: true, touched: true }
        : { ...element, loading: true, touched: false };
    });
    setData({
      data: newData
    });
  }
  const renderProgress = data.map((item, index) => {
    const flexBasis = `${item.progress}%`;
    const backgroundColor = item.touched ? "rgb(1, 172, 30)" : "#fff";
    const color = item.touched ? "#fff" : "#444";
    return (
      <div
        key={index}
        className="progress-item"
        style={{ flexBasis, backgroundColor }}
        onClick={() => handleClick(item, index)}
      >
        <h4 style={{ color }}>{item.title}</h4>
        {item.touched && <span className="progress-days">{item.days}days</span>}
        {/* {item.loading ? 'Loading...' : item.title} */}
      </div>
    );
  });
  return (
    <div className="progress-line-wrapper">
      <div className="progress-line">{renderProgress}</div>
    </div>
  );
}

export default ProgressLine;
