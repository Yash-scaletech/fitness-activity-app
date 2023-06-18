import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

import data from '../JSON/activityData.json';

import Spinner from 'shared/components/spinner/spinner';

import DashboardData from '../component/dashboardData';
import ProfileNav from '../component/profileNav';
import Activity from '../component/activity';

import { IActivity, IUser } from '../interface/dashboard';

import '../style/dashboard.scss';

const Dashboard = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isDashboard, setIsDashboard] = useState<boolean>(true);
	const [userData, setUserData] = useState<IUser>(data.user);
	const [activityData, setActivityData] = useState<IActivity[]>(data.activities);

	const dashboardToggle = (toggle: boolean) => {
		setIsDashboard(toggle);
	};

	useEffect(() => {
		setUserData(data.user);
		setActivityData(data.activities);
		setIsLoading(false);
	}, []);

	return (
		<div className='container flex width--full height--full'>
			{isLoading && (
				<div className='display-flex-center'>
					<Spinner />
				</div>
			)}
			{!isLoading && isEmpty(data) && (
				<div className='display-flex-center min-height--380px'>
					<p className='text--white font--medium font-size--25 line-height--30px'>No Data Found</p>
				</div>
			)}
			{!isLoading && !isEmpty(data) && (
				<>
					<div className='profile position--fixed width--20'>
						<ProfileNav isDashboard={isDashboard} dashboardToggle={dashboardToggle} userData={userData} />
					</div>
					<div className='dashboard-activity width--80 ml--40 mr--20'>
						{isDashboard && <DashboardData userData={userData} activityData={activityData} />}
						{!isDashboard && <Activity activityData={activityData} />}
					</div>
				</>
			)}
		</div>
	);
};

export default Dashboard;
