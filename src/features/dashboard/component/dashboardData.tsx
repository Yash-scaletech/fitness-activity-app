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

import { IActivity, IUser } from '../interface/dashboard';

import 'react-circular-progressbar/dist/styles.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);

interface IProps {
	userData: IUser;
	activityData: IActivity[];
}

const DashboardData: React.FC<IProps> = (props) => {
	const { userData, activityData } = props;

	const [steps, setSteps] = useState<any>([]);
	const [calories, setcalories] = useState<number[]>([]);
	const [waterTaken, setWaterTaken] = useState<number[]>([]);
	const [avgHeartRate, setAvgHeartRate] = useState<number[]>([]);
	const [maxHeartRate, setMaxHeartRate] = useState<number[]>([]);
	const [date, setDate] = useState<string[]>(['']);
	const [popup, setPopup] = useState<string>('');

	useEffect(() => {
		const datanew = activityData.map((data) => {
			return data.steps;
		});
		setSteps(datanew);

		const caloriesdata = activityData.map((data) => {
			return data.calories_burned;
		});
		setcalories(caloriesdata);

		const labels = activityData.map((data) => {
			return data.date;
		});
		setDate(labels);

		const water = activityData.map((data) => {
			return data.water_taken;
		});
		setWaterTaken(water);

		const avgHeartRate = activityData.map((data) => {
			return data.heart_rate.average;
		});
		setAvgHeartRate(avgHeartRate);

		const maxHeartRate = activityData.map((data) => {
			return data.heart_rate.max;
		});
		setMaxHeartRate(maxHeartRate);
	}, []);

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

	const stepsData = {
		labels: date,
		datasets: [
			{
				label: 'Steps',
				data: steps,
				backgroundColor: '#ED8E61',
				borderRadius: 15
			}
		]
	};

	const caloriesData = {
		labels: date,
		datasets: [
			{
				label: 'Calories (kcal)',
				data: calories,
				backgroundColor: '#ED8E61',
				borderRadius: 15
			}
		]
	};

	const waterData = {
		labels: date,
		datasets: [
			{
				label: 'Water (liters)',
				data: waterTaken,
				backgroundColor: '#ED8E61',
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
			<div className='name-wrapper flex align-items--center width--full mt--30'>
				<div className='width--70 p--10 ml--25'>
					<h1 className='line-height--70 font--medium'>
						<span className='font-size--48 text--secondary'>Hello</span> {userData.name},
					</h1>
					<p className='font-size--xxl line-height--25 font--regular mt--15'>
						Have a nice day and don't forget to take <br /> care of your health!
					</p>
				</div>
				<div className='width--30 mr--15'>
					<img src={yoga} alt='profile' className='width--full yoga-image' />
				</div>
			</div>
			<div className='mt--30'>
				<div className='flex width--full justify-content--evenly'>
					<div className='flex justify-content--center width--33 activity-box mr--30'>
						<div className='image-wrapper flex align-items--center justify-content--center'>
							<img src={walking} alt='walking' />
						</div>
						<div>
							<p className='font-size--30 line-height--50 font--semi-bold'>{activityData[0].steps}</p>
							<div
								className='flex align-items--center cursor--pointer'
								onClick={() => {
									setPopup('steps');
								}}
							>
								<p className='font-size--22 line-height--30 font--regular mr--10'>Steps taken</p>
								<NextArrow />
							</div>
						</div>
						{popup === 'steps' && (
							<div className='position--absolute steps-detail overflow--auto'>
								<span
									className='font-size--30 font--semi-bold cursor--pointer float-right mr--15 mt--5'
									onClick={() => setPopup('')}
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
						<div>
							<p className='font-size--30 line-height--50 font--semi-bold'>
								{activityData[0].calories_burned} <span>kcal</span>
							</p>
							<div
								className='flex align-items--center cursor--pointer'
								onClick={() => {
									setPopup('calories');
								}}
							>
								<p className='font-size--22 line-height--30 font--regular mr--10'>Calories burned</p>
								<NextArrow />
							</div>
						</div>
						{popup === 'calories' && (
							<div className='position--absolute steps-detail overflow--auto'>
								<span
									className='font-size--30 font--semi-bold cursor--pointer float-right mr--15 mt--5'
									onClick={() => setPopup('')}
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
						<div>
							<p className='font-size--30 line-height--50 font--semi-bold'>
								{activityData[0].water_taken} <span>liters</span>
							</p>
							<div
								className='flex align-items--center cursor--pointer'
								onClick={() => {
									setPopup('water');
								}}
							>
								<p className='font-size--22 line-height--30 font--regular mr--10'>Water taken</p>
								<NextArrow />
							</div>
						</div>
						{popup === 'water' && (
							<div className='position--absolute steps-detail overflow--auto'>
								<span
									className='font-size--30 font--semi-bold cursor--pointer float-right mr--15 mt--5'
									onClick={() => setPopup('')}
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
			<div className='flex mt--30'>
				<div className='bar-chart-wrapper mr--30'>
					<Bar data={combineData} options={options} />
				</div>
				<div className='heart-box flex justify-content--center align-items--center font--semi-bold'>
					<div className='heart-wrapper'>
						<CircularProgressbar
							value={activityData[0].heart_rate.average}
							maxValue={180}
							text={`${activityData[0].heart_rate.average}bpm`}
							styles={buildStyles({
								textSize: '20px',
								pathTransitionDuration: 0.5,
								pathColor: `rgba(237, 142, 97, 1)`,
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
									setPopup('heartrate');
								}}
							>
								<p className='font-size--22 line-height--30 font--regular mr--10'>Heart rate</p>
								<NextArrow />
							</div>
							{popup === 'heartrate' && (
								<div className='position--absolute steps-detail overflow--auto'>
									<span
										className='font-size--30 font--semi-bold cursor--pointer float-right mr--15 mt--5'
										onClick={() => setPopup('')}
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
