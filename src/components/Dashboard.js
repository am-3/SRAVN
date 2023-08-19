import React from 'react'
import "../styles/Dashboard.css"
import { FaBook } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend,LineElement, CategoryScale, LinearScale, PointElement);

export default function Dashboard() {
  const data1 = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'Report',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 1
    }]
  }
  const data2 = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'Report',
      data: [300, 50, 100],
      backgroundColor: 'rgb(0, 0, 0)',
      fill:true,
      borderColor:'black',
      tension:0.3,
      hoverOffset: 1
    }]
  }

  const options1 = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels:{
          padding:10
        }
      }
    }
  }
  const options2 = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels:{
          padding:10
        }
      }
    }
  }

  return (
    <div className='dash-cont'>
      <h2>Dashboard</h2>
      <div className="dash-cont2">
        <section className="overview">
          <ul>
            <li>
              <FaBook size={40} color='#fe5461' />
              <div>
                <h5>Total Books</h5>
                <h4>352</h4>
              </div>
            </li>
            <li>
              <MdPeopleAlt size={50} color='#33d565' />
              <div>
                <h5>Total Members</h5>
                <h4>400</h4>
              </div>
            </li>
          </ul>
        </section>
        <section className="charts">
          <section className="report1">
            <Doughnut data={data1} options={options1} />
          </section>
          <section className="report2">
            <Line data={data2} options={options2} />
          </section>
        </section>
        <section className="new">
          <section className="new-members">
            <h4>New Members</h4>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </section>
          <section className="new-books">
          <h4>New Books</h4>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </section>
        </section>
      </div>
    </div>
  )
}
