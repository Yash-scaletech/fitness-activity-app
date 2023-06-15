import yoga from '../../../assets/images/yoga.png';

const DashboardData = () => {
	return (
		<div className='name-wrapper flex align-items--center width--full mt--20'>
			<div className='width--70 p--10 ml--25'>
				<h1 className='line-height--70 font--medium'>
					<span className='font-size--48 text--secondary'>Hello</span> Yash Upadhyay,
				</h1>
				<p className='font-size--md line-height--25 font--regular'>
					Have a nice day and don't forget to take <br /> care of your health!
				</p>
			</div>
			<div className='width--30 mr--15'>
				<img src={yoga} alt='profile' className='width--full yoga-image' />
			</div>
		</div>
	);
};

export default DashboardData;
