import { IActivity } from '../interface/dashboard';

interface IProps {
	activityData: IActivity[];
}

const Activity: React.FC<IProps> = (props) => {
	const { activityData } = props;

	return <div>Activity</div>;
};

export default Activity;
