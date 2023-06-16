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
	const [date, setDate] = useState<string[]>(['']);

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
	}, []);

	const percentage = 120;

	const data = {
		labels: date,
		datasets: [
			{
				label: 'Steps',
				data: steps,
				backgroundColor: '#ED8E61',
				borderRadius: 10
			},
			{
				label: 'Calories (kcal)',
				data: calories,
				backgroundColor: 'white',
				borderRadius: 10
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
							<p className='font-size--30 line-height--50 font--semi-bold'>1000/1500</p>
							<p className='font-size--22 line-height--30 font--regular'>Steps taken</p>
						</div>
					</div>
					<div className='flex justify-content--center width--33 activity-box mr--30'>
						<div className='image-wrapper flex align-items--center justify-content--center'>
							<img src={burn} alt='burn' className='burn-image' />
						</div>
						<div>
							<p className='font-size--30 line-height--50 font--semi-bold'>
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
							<p className='font-size--30 line-height--50 font--semi-bold'>
								30 <span>liters</span>
							</p>
							<p className='font-size--22 line-height--30 font--regular'>Water taken</p>
						</div>
					</div>
				</div>
			</div>
			<div className='flex mt--30'>
				<div className='bar-chart-wrapper'>
					<Bar data={data} options={options} />
				</div>
				<div className='heart-box flex justify-content--center align-items--center position--relative font--semi-bold'>
					<div className='heart-wrapper'>
						<CircularProgressbar
							value={percentage}
							maxValue={180}
							text={`${percentage}bpm`}
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
							<p className='font-size--22 line-height--30 font--regular'>Heart rate</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardData;
