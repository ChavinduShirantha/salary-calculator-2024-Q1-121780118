import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';  // Necessary for Chart.js

function getChartData(tasks) {
    let highCount = tasks.filter(function(task) {
        return task.priority === 'HIGH';
    }).length;
    let mediumCount = tasks.filter(function(task) {
        return task.priority === 'MEDIUM';
    }).length;
    let lowCount = tasks.filter(function(task) {
        return task.priority === 'LOW';
    }).length;

    return {
        labels: ['High', 'Medium', 'Low'],
        datasets: [
            {
                data: [highCount, mediumCount, lowCount],
                backgroundColor: ['#EB5757', '#F2C94C', '#2F80ED'],
            },
        ],
    };
}

function getChartOptions() {
    return {
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                },
            },
        },
    };
}

function PriorityChart() {
    var _useState = useState([]),
        tasks = _useState[0],
        setTasks = _useState[1];

    useEffect(function() {
        fetchData();
    }, []);

    function fetchData() {
        axios.get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do')
            .then(function(response) {
                setTasks(response.data);
            })
            .catch(function(error) {
                console.error('There was an error fetching the data!', error);
            });
    }

    return (
        <div className="p-2">
            <h1 className="bg-[#FFFFFF] font-medium mb-0 text-[16px] p-3 border-1 border-[#E4E7EC] rounded-top-2">Tasks Priorities</h1>
            <div className="flex justify-content-center bg-[#FFFFFF] font-normal mb-0 text-[14px] p-3 border-1 border-[#E4E7EC] rounded-2">
                <div style={{ width: '250px', height: '250px' }}>
                    <Doughnut data={getChartData(tasks)} options={getChartOptions()} />
                </div>
            </div>
        </div>
    );
}

export default PriorityChart;
