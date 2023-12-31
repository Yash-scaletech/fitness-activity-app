import { useEffect, useState } from 'react';

import Lottie from 'lottie-react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
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

import heart_rate from '../JSON/heartRate.json';

import { NextArrow } from 'shared/icons/icons';

import yoga from '../../../assets/images/yoga.png';
import walking from '../../../assets/images/walking.png';
import burn from '../../../assets/images/burn.png';
import water from '../../../assets/images/water.png';

import { IActivity, IDataSet, IUser } from '../interface/dashboard';

import 'react-circular-progressbar/dist/styles.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);

interface IProps {
	userData: IUser;
	activityData: IActivity[];
}

const DashboardData: React.FC<IProps> = (props) => {
	const { userData, activityData } = props;

	const [data, setData] = useState<IDataSet>({
		steps: [],
		calories: [],
		waterTaken: [],
		avgHeartRate: [],
		maxHeartRate: [],
		date: [''],
		popup: ''
	});

	const { steps, calories, waterTaken, avgHeartRate, maxHeartRate, date, popup } = data;

	useEffect(() => {
		const datanew = activityData.map((data) => data.steps);
		const caloriesdata = activityData.map((data) => data.calories_burned);
		const labels = activityData.map((data) => data.date);
		const water = activityData.map((data) => data.water_taken);
		const avgHeartRate = activityData.map((data) => data.heart_rate.average);
		const maxHeartRate = activityData.map((data) => data.heart_rate.max);

		setData({
			steps: datanew,
			calories: caloriesdata,
			waterTaken: water,
			avgHeartRate: avgHeartRate,
			maxHeartRate: maxHeartRate,
			date: labels,
			popup: ''
		});
	}, [activityData]);

	const chartData = (label: string, data: number[], backgroundColor: string) => ({
		labels: date,
		datasets: [
			{
				label: label,
				data: data,
				backgroundColor: backgroundColor,
				borderRadius: 15
			}
		]
	});

	const stepsData = chartData('Steps', steps, '#ED8E61');
	const caloriesData = chartData('Calories (kcal)', calories, '#ED8E61');
	const waterData = chartData('Water (liters)', waterTaken, '#ED8E61');

	const combineData = {
		labels: date,
		datasets: [
			{
				label: 'Steps',
				data: steps,
				backgroundColor: '#ED8E61',
				borderRadius: 15
			},
			{
				label: 'Calories (kcal)',
				data: calories,
				backgroundColor: 'white',
				borderRadius: 15
			},
			{
				label: 'Water (liters)',
				data: waterTaken,
				backgroundColor: '#2e1700',
				borderRadius: 15
			}
		]
	};

	const heartRateData = {
		labels: date,
		datasets: [
			{
				label: 'Average Heart Rate (bpm)',
				data: avgHeartRate,
				backgroundColor: '#ED8E61',
				borderRadius: 15
			},
			{
				label: 'Maximum Heart Rate (bpm)',
				data: maxHeartRate,
				backgroundColor: 'white',
				borderRadius: 15
			}
		]
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const,

				labels: {
					color: 'white',
					usePointStyle: true,
					padding: 20
				}
			},
			title: {
				display: true,
				text: `Fitness Activity`,
				color: 'white'
			},
			tooltip: {
				displayColors: false
			}
		},
		scales: {
			x: {
				ticks: {
					color: 'white',
					display: false
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
			<div className='name-wrapper flex align-items--center width--full mt--30'>
				<div className='width--70 p--10 ml--25'>
					<h1 className='line-height--70 font--medium'>
						<span className='font--48 font-size--48 text--secondary'>Hello</span> {userData.name},
					</h1>
					<p className='font--xxl font-size--xxl line-height--25 font--regular mt--15'>
						Have a nice day and don't forget to take <br /> care of your health!
					</p>
				</div>
				<div className='width--30 mr--15'>
					<img src={yoga} alt='profile' className='width--full yoga-image' />
				</div>
			</div>
			<div className='dashboard-wrapper mt--30'>
				<div className='data-wrapper flex width--full justify-content--evenly'>
					<div className='activity-box flex justify-content--center width--33 mr--30'>
						<div className='image-wrapper flex align-items--center justify-content--center'>
							<img src={walking} alt='walking' />
						</div>
						<div className='max-width--100'>
							<p className='font--30 font-size--30 line-height--50 font--semi-bold'>
								{activityData[0].steps}
							</p>
							<div
								className='flex align-items--center cursor--pointer'
								onClick={() => {
									setData({
										...data,
										popup: 'steps'
									});
								}}
							>
								<p className='font--22 font-size--22 line-height--30 font--regular mr--10'>
									Steps taken
								</p>
								<NextArrow />
							</div>
						</div>
						{popup === 'steps' && (
							<div className='position--absolute steps-detail overflow--auto'>
								<span
									className='font--28 font-size--28 font--semi-bold cursor--pointer float-right mr--15 mt--5'
									onClick={() => {
										setData({
											...data,
											popup: ''
										});
									}}
								>
									X
								</span>
								<div className='individual-chart-wrapper mr--30'>
									<Bar data={stepsData} options={options} />
								</div>
							</div>
						)}
					</div>
					<div className='flex justify-content--center width--33 activity-box mr--30'>
						<div className='image-wrapper flex align-items--center justify-content--center'>
							<img src={burn} alt='burn' className='burn-image' />
						</div>
						<div className='max-width--100'>
							<p className='font--30 font-size--30 line-height--50 font--semi-bold'>
								{activityData[0].calories_burned} <span>kcal</span>
							</p>
							<div
								className='flex align-items--center cursor--pointer'
								onClick={() => {
									setData({
										...data,
										popup: 'calories'
									});
								}}
							>
								<p className='font--22 font-size--22 line-height--30 font--regular mr--10'>
									Calories burned
								</p>
								<NextArrow />
							</div>
						</div>
						{popup === 'calories' && (
							<div className='position--absolute steps-detail overflow--auto'>
								<span
									className='font--28 font-size--28 font--semi-bold cursor--pointer float-right mr--15 mt--5'
									onClick={() => {
										setData({
											...data,
											popup: ''
										});
									}}
								>
									X
								</span>
								<div className='individual-chart-wrapper mr--30'>
									<Bar data={caloriesData} options={options} />
								</div>
							</div>
						)}
					</div>
					<div className='flex justify-content--center width--33 activity-box'>
						<div className='image-wrapper flex align-items--center justify-content--center'>
							<img src={water} alt='water' />
						</div>
						<div className='max-width--100'>
							<p className='font--30 font-size--30 line-height--50 font--semi-bold'>
								{activityData[0].water_taken} <span>liters</span>
							</p>
							<div
								className='flex align-items--center cursor--pointer'
								onClick={() => {
									setData({
										...data,
										popup: 'water'
									});
								}}
							>
								<p className='font--22 font-size--22 line-height--30 font--regular mr--10'>
									Water taken
								</p>
								<NextArrow />
							</div>
						</div>
						{popup === 'water' && (
							<div className='position--absolute steps-detail overflow--auto'>
								<span
									className='font--28 font-size--28 font--semi-bold cursor--pointer float-right mr--15 mt--5'
									onClick={() => {
										setData({
											...data,
											popup: ''
										});
									}}
								>
									X
								</span>
								<div className='individual-chart-wrapper mr--30'>
									<Bar data={waterData} options={options} />
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className='heart-chart-wrapper flex mt--30'>
				<div className='bar-chart-wrapper mr--30'>
					<Bar data={combineData} options={options} />
				</div>
				<div className='heart-box flex justify-content--center align-items--center font--semi-bold'>
					<div className='heart-wrapper mt--10'>
						<CircularProgressbar
							value={activityData[0].heart_rate.average}
							maxValue={180}
							text={`${activityData[0].heart_rate.average}bpm`}
							styles={buildStyles({
								textSize: '20px',
								pathTransitionDuration: 0.5,
								pathColor: `#ED8E61`,
								textColor: '#ffffff',
								trailColor: '#ffffff',
								backgroundColor: '#ffffff'
							})}
						/>
						<div className='flex align-items--center mt--20'>
							<Lottie animationData={heart_rate} loop={true} />
							<div
								className='flex align-items--center cursor--pointer'
								onClick={() => {
									setData({
										...data,
										popup: 'heartrate'
									});
								}}
							>
								<p className='font--22 font-size--22 line-height--30 font--regular mr--10'>
									Heart rate
								</p>
								<NextArrow />
							</div>
							{popup === 'heartrate' && (
								<div className='position--absolute steps-detail overflow--auto'>
									<span
										className='font--28 font-size--28 font--semi-bold cursor--pointer float-right mr--15 mt--5'
										onClick={() => {
											setData({
												...data,
												popup: ''
											});
										}}
									>
										X
									</span>
									<div className='individual-chart-wrapper mr--30'>
										<Bar data={heartRateData} options={options} />
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardData;
