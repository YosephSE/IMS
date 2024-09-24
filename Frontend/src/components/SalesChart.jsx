import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

const DoughnutChartComponent = (sales, purchase) => {
    const data = {
        labels: ["Sales", "Purchase"],
        datasets: [
            {
                label: 'Sales',
                data: [sales.sales, sales.purchase],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',  
                    'rgba(54, 162, 235, 0.2)',  
            
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                   
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: 'bottom', 
            },
            tooltip: {
                enabled: true, 
            },
        },
    };

    return (
        <div style={{ width: '90%', margin: '0 auto' }}>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DoughnutChartComponent;
