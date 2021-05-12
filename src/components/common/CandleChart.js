import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from 'recharts';

const colors = [
  '#1f77b4',
  '#ff7f0e',
  '#2ca02c',
  '#d62728',
  '#9467bd',
  '#8c564b',
  '#e377c2',
  '#7f7f7f',
  '#bcbd22',
  '#17becf',
];

const rawData = [
  {
    high: 7.18811,
    low: 7.18127,
    open: 7.18631,
    close: 7.183,
    ts: 1562790720,
  },
  {
    high: 7.21184,
    low: 7.20139,
    open: 7.20139,
    close: 7.21138,
    ts: 1562790780,
  },
  {
    high: 7.21808,
    low: 7.21524,
    open: 7.2168,
    close: 7.21675,
    ts: 1562790840,
  },
  {
    high: 7.19661,
    low: 7.19343,
    open: 7.19633,
    close: 7.1936,
    ts: 1562790900,
  },
  {
    high: 7.18131,
    low: 7.17473,
    open: 7.17819,
    close: 7.18131,
    ts: 1562790960,
  },
  {
    high: 7.17874,
    low: 7.17475,
    open: 7.17874,
    close: 7.17604,
    ts: 1562791020,
  },
  {
    high: 7.19077,
    low: 7.18493,
    open: 7.18684,
    close: 7.19077,
    ts: 1562791080,
  },
  {
    high: 7.1837,
    low: 7.17899,
    open: 7.1792,
    close: 7.18246,
    ts: 1562791140,
  },
  {
    high: 7.18788,
    low: 7.18098,
    open: 7.18338,
    close: 7.18788,
    ts: 1562791200,
  },
  {
    high: 7.20103,
    low: 7.19715,
    open: 7.19778,
    close: 7.19715,
    ts: 1562791260,
  },
  {
    high: 7.21353,
    low: 7.20752,
    open: 7.20873,
    close: 7.21116,
    ts: 1562791320,
  },
];

const Candlestick = (props) => {
  const {
    fill,
    x,
    y,
    width,
    height,
    low,
    high,
    openClose: [open, close],
  } = props;
  const isGrowing = open < close;
  const color = isGrowing ? 'green' : 'red';
  const ratio = Math.abs(height / (open - close));
  console.log(props);
  return (
    <g stroke={color} fill={color} strokeWidth="2">
      <path
        d={`
          M ${x},${y}
          L ${x},${y + height}
          L ${x + width},${y + height}
          L ${x + width},${y}
          L ${x},${y}
        `}
      />
      {/* bottom line */}
      {isGrowing ? (
        <path
          d={`
            M ${x + width / 2}, ${y + height}
            v ${(open - low) * ratio}
          `}
        />
      ) : (
        <path
          d={`
            M ${x + width / 2}, ${y}
            v ${(close - low) * ratio}
          `}
        />
      )}
      {/* top line */}
      {isGrowing ? (
        <path
          d={`
            M ${x + width / 2}, ${y}
            v ${(close - high) * ratio}
          `}
        />
      ) : (
        <path
          d={`
            M ${x + width / 2}, ${y + height}
            v ${(open - high) * ratio}
          `}
        />
      )}
    </g>
  );
};

const prepareData = (data) => {
  return data.map(({ open, close, ...other }) => {
    return {
      ...other,
      openClose: [open, close],
    };
  });
};

const CustomShapeBarChart = () => {
  const data = prepareData(rawData);
  data.reduce((acc, item) => console.log(item), 0);
  const minValue = data.reduce((minValue, { low, openClose: [open, close] }) => {
    const currentMin = Math.min(low, open, close);
    return minValue === null || currentMin < minValue ? currentMin : minValue;
  }, null);
  const maxValue = data.reduce((maxValue, { high, openClose: [open, close] }) => {
    const currentMax = Math.max(high, open, close);
    return currentMax > maxValue ? currentMax : maxValue;
  }, minValue);

  //console.log(data);
  //console.log(minValue, maxValue);

  const CustomizedAxisTick = (props) => {
    const { x, y, stroke, payload } = props;

    return (
      <g className="hidden" transform={`scale(0)`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="openClose"
            fill="#8884d8"
            shape={<Candlestick />}
            // label={{ position: 'top' }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
          <YAxis domain={[minValue, maxValue]} orientation="right" />
          <XAxis dataKey="ts" tick={<CustomizedAxisTick />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomShapeBarChart;
