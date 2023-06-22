import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';

import data from '../JSON/activityData.json';

import { BurgerMenuIcon, CrossIcon, Home } from 'shared/icons/icons';
import Spinner from 'shared/components/spinner/spinner';

import runWhite from '../../../assets/images/run-white.png';

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
	const [isSideMenu, setIsSideMenu] = useState(false);

	const navigate = useNavigate();

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
					<div className='hide mt--10 flex justify-content--end float-rught p--10'>
						<div onClick={() => setIsSideMenu(!isSideMenu)}>
							{isSideMenu ? (
								<CrossIcon className='cross-icon' />
							) : (
								<BurgerMenuIcon className='burger-menu--icon' />
							)}
						</div>
					</div>
					{isSideMenu && (
						<div className='sidemenu-wrapper'>
							<div className='personal-detail'>
								<div className='mt--10'>
									<p className='font--24 font-size--24 font--semi-bold'>{userData.name}</p>
									<p className='font--md font-size--md font--regular mt--5'>{userData.email}</p>
								</div>
								<div className='width--full flex justify-content--evenly mt--30 mb--20'>
									<div className='width--33 info'>
										<p className='font--md font-size--md font--medium'>Age</p>
										<p className='mt--5 font--light'>{userData.age} years</p>
									</div>
									<div className='width--33 info'>
										<p className='font--md font-size--md font--medium'>Height</p>
										<p className='mt--5 font--light'>{userData.height} cm</p>
									</div>
									<div className='width--33'>
										<p className='font--md font-size--md font--medium'>Weight</p>
										<p className='mt--5 font--light'>{userData.weight} kg</p>
									</div>
								</div>
							</div>
							<div className='nav-wrapper'>
								<div
									className={`flex align-items--center p--20 font--bold cursor--pointer`}
									onClick={() => {
										dashboardToggle(true);
										setIsSideMenu(!isSideMenu);
										navigate('/dashboard');
									}}
								>
									<Home width='25' height='25' className={`fill--white mr--5`} />
									<span className='font--md font-size--md font--bold'>Dashboard</span>
								</div>
								<div
									className={`flex align-items--center p--20 font--bold cursor--pointer`}
									onClick={() => {
										dashboardToggle(false);
										setIsSideMenu(!isSideMenu);
										navigate('/activity');
									}}
								>
									<img src={runWhite} alt='run' className='run-image mr--5' />
									<span className='font--md font-size--md font--bold'>Activity</span>
								</div>
							</div>
						</div>
					)}
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
