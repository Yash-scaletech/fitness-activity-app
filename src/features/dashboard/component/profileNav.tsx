import { Home } from 'shared/icons/icons';

import profile from '../../../assets/images/yash-profile.jpg';
import runBlack from '../../../assets/images/run-black.png';
import runWhite from '../../../assets/images/run-white.png';

interface IProps {
	isDashboard: boolean;
	dashboardToggle: (toggle: boolean) => void;
}

const ProfileNav: React.FC<IProps> = (props) => {
	const { isDashboard, dashboardToggle } = props;

	return (
		<div>
			<div className='text--center'>
				<div className='mt--30'>
					<img src={profile} alt='profile' className='profile-image' />
				</div>
				<div className='mt--10'>
					<p className='font-size--24 font--semi-bold'>YASH UPADHYAY</p>
					<p className='font-size--md font--regular mt--5'>yash.upadhyay@scaletech.xyz</p>
				</div>
				<div className='width--full flex justify-content--evenly mt--30 mb--20'>
					<div className='width--33 info'>
						<p className='font-size--md font--medium'>Age</p>
						<p className='mt--5 font--light'>22 years</p>
					</div>
					<div className='width--33 info'>
						<p className='font-size--md font--medium'>Height</p>
						<p className='mt--5 font--light'>180 cm</p>
					</div>
					<div className='width--33'>
						<p className='font-size--md font--medium'>Weight</p>
						<p className='mt--5 font--light'>75 kg</p>
					</div>
				</div>
			</div>
			<div className='nav-wrapper pt--25'>
				<div
					className={`flex align-items--center p--20 ml--20 text--black font--bold cursor--pointer ${
						isDashboard && 'nav-item'
					}`}
					onClick={() => dashboardToggle(true)}
				>
					<Home width='25' height='25' className={`${isDashboard && 'fill--white'} fill--black mr--5`} />
					<span className='font-size--md font--bold'>Dashboard</span>
				</div>
				<div
					className={`flex align-items--center p--20 ml--20 text--black font--bold cursor--pointer ${
						!isDashboard && 'nav-item'
					}`}
					onClick={() => dashboardToggle(false)}
				>
					{isDashboard && <img src={runBlack} alt='run' className='run-image mr--5' />}
					{!isDashboard && <img src={runWhite} alt='run' className='run-image mr--5' />}
					<span className='font-size--md font--bold'>Activity</span>
				</div>
			</div>
		</div>
	);
};

export default ProfileNav;
