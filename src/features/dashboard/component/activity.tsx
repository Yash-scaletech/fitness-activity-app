import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { NextArrow } from 'shared/icons/icons';

import { IActivity } from '../interface/dashboard';
import CustomModal from 'shared/modal/modal';

interface IProps {
	activityData: IActivity[];
}

const ACTIVITY_CLASSNAME =
	'activity-details-box flex flex--column justify-content--center align-items--center width--30 flex--wrap font--22 font-size--22 line-height--30 font--regular mr--10';
const ACTIVITY_HEAD_CLASS = 'font--30 font-size--30 line-height--50 font--semi-bold';

const Activity: React.FC<IProps> = (props) => {
	const { activityData } = props;
	const [isPopup, setIsPopup] = useState<boolean>(false);

	const activityId = useParams();
	const navigate = useNavigate();

	const activityDetails = activityData.find((activity) => activity.id === Number(activityId.id));

	return (
		<div className='position--relative'>
			<div className='flex flex--wrap width--full justify-content--evenly align-items--center mt--20'>
				{activityData.map((data) => (
					<>
						<div
							className='activity-name width--30 flex justify-content--center align-items--center cursor--pointer p--10 m--10'
							onClick={() => {
								setIsPopup(true);
								navigate(`/activity/${data.id}`);
							}}
						>
							<p className='width--50 font--28 font-size--28 line-height--50 font--semi-bold mr--10'>
								{data.name}
							</p>
							<NextArrow width='30' height='30' fill='#ed8e61' />
						</div>
					</>
				))}
			</div>
			{isPopup && (
				<CustomModal show={isPopup} handleClose={() => setIsPopup(true)} className='activity-modal'>
					<div className='activity-wrapper'>
						<div className='mb--20'>
							<span className={`${ACTIVITY_HEAD_CLASS} text--center`}>{activityDetails?.name}</span>
							<span
								className='font--28 font-size--28 font--semi-bold cursor--pointer text--white float-right mr--15 mt--5'
								onClick={() => {
									setIsPopup(false);
									navigate('/activity');
								}}
							>
								X
							</span>
						</div>
						<div className='activity-details flex flex--wrap width--full text--white'>
							<p className={`${ACTIVITY_CLASSNAME}`}>
								Date <span className={`${ACTIVITY_HEAD_CLASS}`}>{activityDetails?.date}</span>
							</p>
							<p className={`${ACTIVITY_CLASSNAME}`}>
								Duration{' '}
								<span className={`${ACTIVITY_HEAD_CLASS}`}>{activityDetails?.duration} min</span>
							</p>
							<p className={`${ACTIVITY_CLASSNAME}`}>
								Water Taken{' '}
								<span className={`${ACTIVITY_HEAD_CLASS}`}>{activityDetails?.water_taken} liters</span>
							</p>
							<p className={`${ACTIVITY_CLASSNAME}`}>
								Calories Burned{' '}
								<span className={`${ACTIVITY_HEAD_CLASS}`}>
									{activityDetails?.calories_burned} kcal
								</span>
							</p>
							<p className={`${ACTIVITY_CLASSNAME}`}>
								Average Heart Rate{' '}
								<span className={`${ACTIVITY_HEAD_CLASS}`}>
									{activityDetails?.heart_rate.average} bpm
								</span>
							</p>
							<p className={`${ACTIVITY_CLASSNAME}`}>
								Maximum Heart Rate{' '}
								<span className={`${ACTIVITY_HEAD_CLASS}`}>{activityDetails?.heart_rate.max} bpm</span>
							</p>
							{activityDetails?.distance && (
								<p className={`${ACTIVITY_CLASSNAME}`}>
									Distance{' '}
									<span className={`${ACTIVITY_HEAD_CLASS}`}>{activityDetails?.distance} km</span>
								</p>
							)}
							{activityDetails?.steps && (
								<p className={`${ACTIVITY_CLASSNAME}`}>
									Steps <span className={`${ACTIVITY_HEAD_CLASS}`}>{activityDetails?.steps}</span>
								</p>
							)}
							{activityDetails?.pace && (
								<p className={`${ACTIVITY_CLASSNAME}`}>
									Average Pace{' '}
									<span className={`${ACTIVITY_HEAD_CLASS}`}>{activityDetails?.pace.average}</span>
								</p>
							)}
							{activityDetails?.pace && (
								<p className={`${ACTIVITY_CLASSNAME}`}>
									Best Pace{' '}
									<span className={`${ACTIVITY_HEAD_CLASS}`}>{activityDetails?.pace.best}</span>
								</p>
							)}
							{activityDetails?.elevation_gain && (
								<p className={`${ACTIVITY_CLASSNAME}`}>
									Elevation Gain{' '}
									<span className={`${ACTIVITY_HEAD_CLASS}`}>{activityDetails?.elevation_gain}</span>
								</p>
							)}
							{activityDetails?.speed && (
								<p className={`${ACTIVITY_CLASSNAME}`}>
									Average Speed{' '}
									<span className={`${ACTIVITY_HEAD_CLASS}`}>
										{activityDetails?.speed.average} km/hr
									</span>
								</p>
							)}
							{activityDetails?.speed && (
								<p className={`${ACTIVITY_CLASSNAME}`}>
									Maximum Speed{' '}
									<span className={`${ACTIVITY_HEAD_CLASS}`}>{activityDetails?.speed.max} km/hr</span>
								</p>
							)}
							{activityDetails?.reps && (
								<p className={`${ACTIVITY_CLASSNAME}`}>
									Reps Average Per Set{' '}
									<span className={`${ACTIVITY_HEAD_CLASS}`}>
										{activityDetails?.reps.average_per_set} km/hr
									</span>
								</p>
							)}
							{activityDetails?.reps && (
								<p className={`${ACTIVITY_CLASSNAME}`}>
									Reps Sets{' '}
									<span className={`${ACTIVITY_HEAD_CLASS}`}>{activityDetails?.reps.sets}</span>
								</p>
							)}
							{activityDetails?.reps && (
								<p className={`${ACTIVITY_CLASSNAME}`}>
									Reps Total{' '}
									<span className={`${ACTIVITY_HEAD_CLASS}`}>{activityDetails?.reps.total}</span>
								</p>
							)}
							{activityDetails?.weight_lifted && (
								<p className={`${ACTIVITY_CLASSNAME}`}>
									Weight Lifted Average Per Rep{' '}
									<span className={`${ACTIVITY_HEAD_CLASS}`}>
										{activityDetails?.weight_lifted.average_per_rep} kg
									</span>
								</p>
							)}
							{activityDetails?.weight_lifted && (
								<p className={`${ACTIVITY_CLASSNAME}`}>
									Weight Lifted Total{' '}
									<span className={`${ACTIVITY_HEAD_CLASS}`}>
										{activityDetails?.weight_lifted.total} kg
									</span>
								</p>
							)}
							{activityDetails?.laps && (
								<p className={`${ACTIVITY_CLASSNAME}`}>
									Laps <span className={`${ACTIVITY_HEAD_CLASS}`}>{activityDetails?.laps}</span>
								</p>
							)}
							{activityDetails?.pool_length && (
								<p className={`${ACTIVITY_CLASSNAME}`}>
									Pool Length{' '}
									<span className={`${ACTIVITY_HEAD_CLASS}`}>
										{activityDetails?.pool_length} meter
									</span>
								</p>
							)}
							{activityDetails?.strides && (
								<p className={`${ACTIVITY_CLASSNAME}`}>
									Strides <span className={`${ACTIVITY_HEAD_CLASS}`}>{activityDetails?.strides}</span>
								</p>
							)}
							{activityDetails?.strokes && (
								<p className={`${ACTIVITY_CLASSNAME}`}>
									Strokes <span className={`${ACTIVITY_HEAD_CLASS}`}>{activityDetails?.strokes}</span>
								</p>
							)}
						</div>
					</div>
				</CustomModal>
			)}
		</div>
	);
};

export default Activity;
