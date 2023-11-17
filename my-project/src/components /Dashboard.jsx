import React from "react";
import Chart from "./Chart";
function Dashboard() {
  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full">
      <h2 className=" text-2xl ">Dashboard</h2>

      <div className="flex space-x-8 py-6 gap-11">
        <div className="flex flex-col rounded-md border w-[400px] h-[150px] p-8 justify-center">
          <h2>Prathmesh Patil</h2>
          <p className="text-gray-500 mt-3">Your Expenses: Rs20000</p>
        </div>
        <div className="flex flex-col rounded-md border w-[400px] h-[150px] p-8 justify-center">
          <h2>Prathmesh Patil</h2>
          <p className="text-gray-500 mt-3">Your Savings: Rs100000</p>
        </div>
      </div>

      {/* Graph component */}
      <div className="flex space-x-8 py-6">
        <div className="flex flex-col rounded-md border w-full p-8 justify-center">
          Expenses Graph
          <Chart />
        </div>
      </div>

      <div className="flex space-x-8 py-6 gap-12 ">
        <div className="flex flex-col rounded-md border  w-[400px] h-[200px] p-8 justify-center">
          <h2>Your Activity</h2>
          <li className="text-gray-500 mt-3">Sent Rs 10000 to Aayush</li>
        </div>
        <div className="flex flex-col rounded-md border w-[400px] h-[200px] p-8 justify-center">
          <h2>Pending Bills</h2>
          <li className="text-gray-500 mt-3">Wifi bill: Rs 3000</li>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
