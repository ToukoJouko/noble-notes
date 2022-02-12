import React from "react";

const Bottle = (props) => {
  return (
    <div>
      <svg
        width="210mm"
        height="297mm"
        version="1.1"
        viewBox="0 0 210 297"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#000" stroke-width=".26458">
          <rect
            x="53.968"
            y="74.339"
            width="127.59"
            height="165.12"
            ry="0"
            fill="#f60"
          />
          <rect
            x="67.906"
            y="88.278"
            width="100.79"
            height="138.31"
            fill="#d3bc5f"
          />
        </g>
        <foreignObject x="60" y="80" width="160" height="160">
          <div>
            <h3>{props.title}</h3>
            <div className="test">
              <div>{props.content}</div>
            </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default Bottle;