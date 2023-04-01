import React, { useEffect, useState } from "react";
import { url } from "../App";

import axios from "axios";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function PieChart() {
  const [listdata, setListdata] = useState([]);

  let token = sessionStorage.getItem("token");

  let getData = async () => {
    let res = await axios.get(`${url}/chart-details`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    setListdata(res?.data.leads);
  };

  useEffect(() => {
    if (token) {
      getData();
    }
  }, [token, listdata]);

  return (
    <>
      <LineChart
        width={500}
        height={300}
        data={listdata}
        key={listdata?.map((d, i) => i)}
        margin={{
          top: 6,
          right: 30,
          left: 20,
          bottom: 6,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="_id" />
        <YAxis dataKey="count" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </>
  );
}

export default PieChart;
