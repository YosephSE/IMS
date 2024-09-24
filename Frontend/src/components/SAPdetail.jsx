import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HorizontalBarChart = ({ sales, purchase }) => {
  console.log("Sales: ", sales);
  console.log("Purchase: ", purchase);
  const [salesData, setSalesData] = useState(null);
  const [purchaseData, setPurchaseData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchSalesData = async () => {
    setSalesData({ total: sales });
  };

  const fetchPurchaseData = async () => {
    setPurchaseData({ total: purchase });
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchSalesData();
      await fetchPurchaseData();
      setLoading(false);
    };
    fetchData();
  }, []);


  const data = {
    labels: ["Purchases", "Sales"], 
    datasets: [
      {
        label: "Purchases vs Sales",
        data: [purchaseData?.total || 0, salesData?.total || 0],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return <Bar data={data} options={options} />;
};

export default HorizontalBarChart;
