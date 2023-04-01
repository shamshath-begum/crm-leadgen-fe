import React, { useEffect, useState ,useCallback} from 'react'
import { url } from '../App'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";


function PieChart() {
    // const data = [
    //   {
    //     name: "Page A",
    //     uv: 4000,
    //     pv: 2400,
    //     amt: 2400
    //   },
    //   {
    //     name: "Page B",
    //     uv: 3000,
    //     pv: 1398,
    //     amt: 2210
    //   },
    //   {
    //     name: "Page C",
    //     uv: 2000,
    //     pv: 9800,
    //     amt: 2290
    //   },
    //   {
    //     name: "Page D",
    //     uv: 2780,
    //     pv: 3908,
    //     amt: 2000
    //   },
    //   {
    //     name: "Page E",
    //     uv: 1890,
    //     pv: 4800,
    //     amt: 2181
    //   },
    //   {
    //     name: "Page F",
    //     uv: 2390,
    //     pv: 3800,
    //     amt: 2500
    //   },
    //   {
    //     name: "Page G",
    //     uv: 3490,
    //     pv: 4300,
    //     amt: 2100
    //   }
    // ];

    const[listdata,setListdata]=useState([])



    let token=sessionStorage.getItem('token')

let[leads,setLeads]=useState([])
let[cards,setCards]=useState([])
let[selectedStatus,setSelectedStatus]=useState("")
  let navigate=useNavigate()

 let getData=async()=>{
  
  let res=await axios.get(`${url}/chart-details`,{
    headers:{
      authorization:`Bearer ${token}`
    }

  })
  console.log(res.data.leads)
  setListdata(res.data.leads)
  }

 useEffect(()=>{
     if(token){
      getData()
    }
    // else{ 
    //         handleLogout() 
    //        }
   
  },[])
  console.log(listdata)
  return <>
  <LineChart
      width={500}
      height={300}
      data={listdata}
      margin={{
        top: 6,
        right: 30,
        left: 20,
        bottom: 6
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="_id" />
      <YAxis  dataKey="count"/>
      <Tooltip />
      <Legend />
       <Line
        type="monotone"
        dataKey="count"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      /> 
      {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
    </LineChart>

  </>
}

export default PieChart