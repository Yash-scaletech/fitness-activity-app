import { useEffect, useState } from 'react';

import data from '../JSON/activityData.json';

import DashboardData from './dashboardData';
import ProfileNav from './profileNav';
import Activity from './activity';

import { IActivity, IUser } from '../interface/dashboard';

import '../style/dashboard.scss';

const Dashboard = () => {
	const [isDashboard, setIsDashboard] = useState(true);
	const [userData, setUserData] = useState<IUser>(data.user);
	const [activityData, setActivityData] = useState<IActivity[]>(data.activities);

	const dashboardToggle = (toggle: boolean) => {
		setIsDashboard(toggle);
	};

	useEffect(() => {
		setUserData(data.user);
		setActivityData(data.activities);
	}, []);

	return (
		<div className='container flex width--full height--full-viewport'>
			<div className='profile width--20'>
				<ProfileNav isDashboard={isDashboard} dashboardToggle={dashboardToggle} userData={userData} />
			</div>
			<div className='width--80 ml--40 mr--20'>
				{isDashboard && <DashboardData userData={userData} activityData={activityData} />}
				{!isDashboard && <Activity activityData={activityData} />}
			</div>
		</div>
	);
};

export default Dashboard;
