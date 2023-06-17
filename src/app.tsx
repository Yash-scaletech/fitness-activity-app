import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'hoc/layout/layout';
import Dashboard from 'features/dashboard/container/dashboard';

const App: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/activity' element={<Dashboard />} />
			</Routes>
		</Layout>
	);
};

export default App;
