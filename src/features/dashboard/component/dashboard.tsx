import { useState } from 'react';

// import activityData from '../JSON/activityData.json';

import DashboardData from './dashboardData';
import ProfileNav from './profileNav';
import Activity from './activity';

import '../style/dashboard.scss';

const Dashboard = () => {
	const [isDashboard, setIsDashboard] = useState(true);

	const dashboardToggle = (toggle: boolean) => {
		setIsDashboard(toggle);
	};

	return (
		<div className='container flex width--full height--full-viewport'>
			<div className='profile width--20'>
				<ProfileNav isDashboard={isDashboard} dashboardToggle={dashboardToggle} />
			</div>
			<div className='width--80 ml--40 mr--20'>
				{isDashboard && <DashboardData />}
				{!isDashboard && <Activity />}
			</div>
		</div>
	);
};

export default Dashboard;
