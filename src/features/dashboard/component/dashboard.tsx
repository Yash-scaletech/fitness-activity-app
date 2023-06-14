// import activityData from '../JSON/activityData.json';
import DashboardData from './dashboardData';
import ProfileNav from './profileNav';

import '../style/dashboard.scss';

const Dashboard = () => {
	return (
		<div className='container flex width--full height--full-viewport'>
			<div className='profile width--20'>
				<ProfileNav />
			</div>
			<div className='width--80'>
				<DashboardData />
			</div>
		</div>
	);
};

export default Dashboard;
