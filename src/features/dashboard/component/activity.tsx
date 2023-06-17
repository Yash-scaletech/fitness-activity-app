import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { NextArrow } from 'shared/icons/icons';

import { IActivity } from '../interface/dashboard';

interface IProps {
	activityData: IActivity[];
}

const ACTIVITY_CLASSNAME = 'font-size--22 line-height--30 font--regular mr--10';

const Activity: React.FC<IProps> = (props) => {
	const { activityData } = props;
	const [isPopup, setIsPopup] = useState<boolean>(false);

	const activityId = useParams();
	const navigate = useNavigate();

	const activityDetails = activityData.find((activity) => activity.id === Number(activityId.id));

	return (
		<div className='position--relative'>
			<div className='flex flex--wrap width--full justify-content--center align-items--center mt--20'>
				{activityData.map((data) => (
					<>
						<div
							className='activity-name width--30 flex justify-content--center align-items--center cursor--pointer p--10 m--10'
							onClick={() => {
								setIsPopup(true);
								navigate(`/activity/${data.id}`);
							}}
						>
							<p className='font-size--28 line-height--50 font--semi-bold mr--10'>{data.name}</p>
							<NextArrow width='30' height='30' />
						</div>
					</>
				))}
			</div>
			{isPopup && (
				<div className='position--absolute activity-wrapper p--20'>
					<span
						className='font-size--28 font--semi-bold cursor--pointer float-right mr--15 mt--5'
						onClick={() => {
							setIsPopup(false);
							navigate('/activity');
						}}
					>
						X
					</span>
					<div className='activity-details'>
						<p className={`${ACTIVITY_CLASSNAME}`}>name: {activityDetails?.name}</p>
						<p className={`${ACTIVITY_CLASSNAME}`}>date: {activityDetails?.date}</p>
						<p className={`${ACTIVITY_CLASSNAME}`}>duration: {activityDetails?.duration}</p>
						<p className={`${ACTIVITY_CLASSNAME}`}>water_taken: {activityDetails?.water_taken}</p>
						<p className={`${ACTIVITY_CLASSNAME}`}>calories_burned: {activityDetails?.calories_burned}</p>
						<p className={`${ACTIVITY_CLASSNAME}`}>
							average heart_rate: {activityDetails?.heart_rate.average}
						</p>
						<p className={`${ACTIVITY_CLASSNAME}`}> max heart_rate: {activityDetails?.heart_rate.max}</p>
						{activityDetails?.distance && (
							<p className={`${ACTIVITY_CLASSNAME}`}>distance: {activityDetails?.distance}</p>
						)}
						{activityDetails?.steps && (
							<p className={`${ACTIVITY_CLASSNAME}`}>steps: {activityDetails?.steps}</p>
						)}
						{activityDetails?.pace && (
							<p className={`${ACTIVITY_CLASSNAME}`}>average pace: {activityDetails?.pace.average}</p>
						)}
						{activityDetails?.pace && (
							<p className={`${ACTIVITY_CLASSNAME}`}>best pace: {activityDetails?.pace.best}</p>
						)}
						{activityDetails?.elevation_gain && (
							<p className={`${ACTIVITY_CLASSNAME}`}>elevation_gain: {activityDetails?.elevation_gain}</p>
						)}
						{activityDetails?.speed && (
							<p className={`${ACTIVITY_CLASSNAME}`}>average speed: {activityDetails?.speed.average}</p>
						)}
						{activityDetails?.speed && (
							<p className={`${ACTIVITY_CLASSNAME}`}>max speed: {activityDetails?.speed.max}</p>
						)}
						{activityDetails?.reps && (
							<p className={`${ACTIVITY_CLASSNAME}`}>
								reps.average_per_set: {activityDetails?.reps.average_per_set}
							</p>
						)}
						{activityDetails?.reps && (
							<p className={`${ACTIVITY_CLASSNAME}`}>reps.sets: {activityDetails?.reps.sets}</p>
						)}
						{activityDetails?.reps && (
							<p className={`${ACTIVITY_CLASSNAME}`}>reps.total: {activityDetails?.reps.total}</p>
						)}
						{activityDetails?.weight_lifted && (
							<p className={`${ACTIVITY_CLASSNAME}`}>
								weight_lifted.average_per_rep: {activityDetails?.weight_lifted.average_per_rep}
							</p>
						)}
						{activityDetails?.weight_lifted && (
							<p className={`${ACTIVITY_CLASSNAME}`}>
								weight_lifted.total: {activityDetails?.weight_lifted.total}
							</p>
						)}
						{activityDetails?.laps && (
							<p className={`${ACTIVITY_CLASSNAME}`}>laps: {activityDetails?.laps}</p>
						)}
						{activityDetails?.pool_length && (
							<p className={`${ACTIVITY_CLASSNAME}`}>pool_length: {activityDetails?.pool_length}</p>
						)}
						{activityDetails?.strides && (
							<p className={`${ACTIVITY_CLASSNAME}`}>strides: {activityDetails?.strides}</p>
						)}
						{activityDetails?.strokes && (
							<p className={`${ACTIVITY_CLASSNAME}`}>strokes: {activityDetails?.strokes}</p>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default Activity;
