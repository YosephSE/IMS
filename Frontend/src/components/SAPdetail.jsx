import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HorizontalBarChart = () => {
  const [salesData, setSalesData] = useState(null);
  const [purchaseData, setPurchaseData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch sales data
//   const fetchSalesData = async () => {
//     try {
//       const response = await fetch('https://api.example.com/sales');
//       const data = await response.json();
//       setSalesData(data);
//     } catch (error) {
//       console.error('Error fetching sales data:', error);
//     }
//   };

const fetchSalesData = async () => {
    setSalesData({total: 2000});
    }

  // Fetch purchases data
//   const fetchPurchaseData = async () => {
//     try {
//       const response = await fetch('https://api.example.com/purchases');
//       const data = await response.json();
//       setPurchaseData(data);
//     } catch (error) {
//       console.error('Error fetching purchase data:', error);
//     }
//   };
const fetchPurchaseData = async () => {
    setPurchaseData({total: 1000});
    }

  useEffect(() => {
    // Fetch data from APIs
    const fetchData = async () => {
      await fetchSalesData();
      await fetchPurchaseData();
      setLoading(false);
    };
    fetchData();
  }, []);

  // Data for the horizontal bar chart
  const data = {
    labels: ['Purchases', 'Sales'], // Y-axis categories
    datasets: [
      {
        label: 'Purchases vs Sales',
        data: [purchaseData?.total || 0, salesData?.total || 0], // Use fetched data or 0 if not yet loaded
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
        borderWidth: 1,
      },
    ],
  };

  // Configuration for the chart
  const options = {
    indexAxis: 'y', // This makes the bar chart horizontal
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  // Show loading text while data is being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  return <Bar data={data} options={options} />;
};

export default HorizontalBarChart;
