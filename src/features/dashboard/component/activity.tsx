import { useState } from 'react';

import { NextArrow } from 'shared/icons/icons';

import { IActivity } from '../interface/dashboard';

interface IProps {
	activityData: IActivity[];
}

const Activity: React.FC<IProps> = (props) => {
	const { activityData } = props;
	const [isPopup, setIsPopup] = useState<boolean>(false);

	return (
		<div className='flex flex--wrap width--full justify-content--center align-items--center mt--20'>
			{activityData.map((data) => (
				<div className='activity-wrapper width--30 flex justify-content--center align-items--center p--10 m--10'>
					<p className='font-size--28 line-height--50 font--semi-bold mr--10'>{data.name}</p>
					<NextArrow width='30' height='30' />
					{/* <div>{data.date}</div>
					<div>{data.duration}</div>
					<div>{data.water_taken}</div>
					<div>{data.calories_burned}</div>
					<div>{data.heart_rate.average}</div>
					<div>{data.heart_rate.max}</div>
					{data.distance && <div>{data.distance}</div>}
					{data.steps && <div>{data.steps}</div>}
					{data.pace && <div>{data.pace.average}</div>}
					{data.pace && <div>{data.pace.best}</div>}
					{data.elevation_gain && <div>{data.elevation_gain}</div>}
					{data.speed && <div>{data.speed.average}</div>}
					{data.speed && <div>{data.speed.max}</div>}
					{data.reps && <div>{data.reps.average_per_set}</div>}
					{data.reps && <div>{data.reps.sets}</div>}
					{data.reps && <div>{data.reps.total}</div>}
					{data.weight_lifted && <div>{data.weight_lifted.average_per_rep}</div>}
					{data.weight_lifted && <div>{data.weight_lifted.total}</div>}
					{data.laps && <div>{data.laps}</div>}
					{data.pool_length && <div>{data.pool_length}</div>}
					{data.strides && <div>{data.strides}</div>}
					{data.strokes && <div>{data.strokes}</div>} */}
				</div>
			))}
		</div>
	);
};

export default Activity;
