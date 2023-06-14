import { useState } from 'react';

import { Home } from 'shared/icons/icons';

import profile from '../../../assets/images/yash-profile.jpg';
import runBlack from '../../../assets/images/run-black.png';
import runWhite from '../../../assets/images/run-white.png';

const ProfileNav = () => {
	const [isDashboard, setIsDashboard] = useState(true);

	return (
		<div>
			<div className='text--center'>
				<div className='mt--20'>
					<img src={profile} alt='profile' className='profile-image' />
				</div>
				<div className='mt--10'>
					<p className='font-size--24 font--bold'>YASH UPADHYAY</p>
					<p className='font-size--md font--medium mt--5'>yash.upadhyay@scaletech.xyz</p>
				</div>
				<div className='width--full flex justify-content--evenly mt--20 mb--20'>
					<div className='width--33 info'>
						<p className='font-size--md font--medium'>Age</p>
						<p className='mt--5'>22 years</p>
					</div>
					<div className='width--33 info'>
						<p className='font-size--md font--medium'>Height</p>
						<p className='mt--5'>180 cm</p>
					</div>
					<div className='width--33'>
						<p className='font-size--md font--medium'>Weight</p>
						<p className='mt--5'>75 kg</p>
					</div>
				</div>
			</div>
			<div className='nav-wrapper pt--25'>
				<div
					className={`flex align-items--center p--20 ml--20 text--black font--bold cursor--pointer ${
						isDashboard && 'nav-item'
					}`}
					onClick={() => setIsDashboard(true)}
				>
					<Home width='25' height='25' className={`${isDashboard && 'fill--white'} fill--black mr--5`} />
					<span className='font-size--md font--bold'>Dashboard</span>
				</div>
				<div
					className={`flex align-items--center p--20 ml--20 text--black font--bold cursor--pointer ${
						!isDashboard && 'nav-item'
					}`}
					onClick={() => setIsDashboard(false)}
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