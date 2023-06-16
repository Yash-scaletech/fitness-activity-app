import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	LineElement,
	Title,
	Tooltip,
	Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import yoga from '../../../assets/images/yoga.png';
import walking from '../../../assets/images/walking.png';
import burn from '../../../assets/images/burn.png';
import water from '../../../assets/images/water.png';
import { useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);

const DashboardData = () => {
	const [hourlyTemp, setHourlyTemp] = useState<any>([]);

	const data: any = {
		labels: ['Mon', 'tue', 'thus', 'thus', 'thus', 'thus'],
		datasets: [
			{
				label: 'Temperature (°C)',
				data: [
					{
						id: 1,
						year: 2016,
						userGain: 80000,
						userLost: 823
					},
					{
						id: 2,
						year: 2017,
						userGain: 45677,
						userLost: 345
					},
					{
						id: 3,
						year: 2018,
						userGain: 78888,
						userLost: 555
					},
					{
						id: 4,
						year: 2019,
						userGain: 90000,
						userLost: 4555
					},
					{
						id: 5,
						year: 2020,
						userGain: 4300,
						userLost: 234
					}
				],
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)'
			},
			{
				label: '369',
				data: ['3', '6', '9'],
				backgroundColor: 'aqua',
				borderColor: 'black',
				borderWidth: 1
			}
		]
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const,
				fontColor: 'blue'
			},
			title: {
				display: true,
				text: `Today's Temperature`,
				color: 'white'
			}
		},
		scales: {
			x: {
				ticks: {
					color: 'white'
				}
			},
			y: {
				ticks: {
					color: 'white'
				}
			}
		}
	};

	return (
		<div>
			<div className='name-wrapper flex align-items--center width--full mt--20'>
				<div className='width--70 p--10 ml--25'>
					<h1 className='line-height--70 font--medium'>
						<span className='font-size--48 text--secondary'>Hello</span> Yash Upadhyay,
					</h1>
					<p className='font-size--xxl line-height--25 font--regular'>
						Have a nice day and don't forget to take <br /> care of your health!
					</p>
				</div>
				<div className='width--30 mr--15'>
					<img src={yoga} alt='profile' className='width--full yoga-image' />
				</div>
			</div>
			<div className='mt--25'>
				<div className='flex width--full justify-content--evenly'>
					<div className='flex justify-content--center width--33 activity-box mr--30'>
						<div className='image-wrapper flex align-items--center justify-content--center'>
							<img src={walking} alt='walking' />
						</div>
						<div>
							<p className='font-size--26 line-height--50 font--semi-bold'>1000/1500</p>
							<p className='font-size--22 line-height--30 font--regular'>steps taken</p>
						</div>
					</div>
					<div className='flex justify-content--center width--33 activity-box mr--30'>
						<div className='image-wrapper flex align-items--center justify-content--center'>
							<img src={burn} alt='burn' className='burn-image' />
						</div>
						<div>
							<p className='font-size--26 line-height--50 font--semi-bold'>
								500 <span>kcal</span>
							</p>
							<p className='font-size--22 line-height--30 font--regular'>Calories burned</p>
						</div>
					</div>
					<div className='flex justify-content--center width--33 activity-box'>
						<div className='image-wrapper flex align-items--center justify-content--center'>
							<img src={water} alt='water' />
						</div>
						<div>
							<p className='font-size--26 line-height--50 font--semi-bold'>
								30 <span>liters</span>
							</p>
							<p className='font-size--22 line-height--30 font--regular'>water taken</p>
						</div>
					</div>
				</div>
			</div>
			<div className='mt--25'>
				<div className='bar-chart-wrapper'>
					<Bar data={data} options={options} />
				</div>
			</div>
		</div>
	);
};

export default DashboardData;
