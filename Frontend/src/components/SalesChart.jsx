// DoughnutChartComponent.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register components for Chart.js
ChartJS.register(ArcElement, Tooltip);

const DoughnutChartComponent = () => {
    const data = {
        labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
        datasets: [
            {
                label: 'Sales',
                data: [300, 50, 100, 75, 125], // Sales data for the products
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',   // Color for Product A
                    'rgba(54, 162, 235, 0.2)',   // Color for Product B
                    'rgba(255, 206, 86, 0.2)',   // Color for Product C
                    'rgba(75, 192, 192, 0.2)',   // Color for Product D
                    'rgba(153, 102, 255, 0.2)',  // Color for Product E
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: 'bottom', // Hide the legend
            },
            tooltip: {
                enabled: true, // Enable tooltips on hover
            },
        },
    };

    return (
        <div style={{ width: '50%', margin: '0 auto' }}>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DoughnutChartComponent;
