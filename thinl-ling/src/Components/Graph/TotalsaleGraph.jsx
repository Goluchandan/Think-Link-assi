import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  import "./totalsale.css";
  const pdata = [
    {
      name: "Mon",
      price: 0,
    },
    {
      name: "TUE",
      price: 2,
    },
    {
      name: "WED",
      price: 3,
    },
    {
      name: "THU",
      price: 2,
    },
    {
      name: "FRI",
      price: 3.6,
    },
    {
      name: "SAT",
      price: 6,
    },
    {
      name: "SUN",
      price: 8,
    },
  ];
  
  function TotalsaleGraph() {
    return (
      <div>
        <ResponsiveContainer aspect={4}>
          <LineChart
            data={pdata}
            width={500}
            height={300}
            margin={{ top: 5, right: 0, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              interval={"preserveStartEnd"}
              tickFormatter={(value) => value}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#2FCA72"
              activeDot={{ r: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
  export default TotalsaleGraph;
  