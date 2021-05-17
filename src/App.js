import { Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './components/sideBar';
import Settings from './components/settings/main';
import SettingDate from './components/settings/settingDate';
import WifiSetup from './components/settings/wifi/wifiSetup';
import Updation from './components/settings/systemUpdate';
import HomeWhite from './components/assets/home-white.png';
import TilesWhite from './components/assets/tiles-white.png';
import BalanceWhite from './components/assets/balance-white.png';
import SettingWhite from './components/assets/setting-white.png';
import HomeBrown from './components/assets/home-brown.png';
import TilesBrown from './components/assets/tiles-brown.png';
import BalanceBrown from './components/assets/balance-brown.png';
import SettingBrown from './components/assets/setting-brown.png';
import './App.css';
function App() {
	const sideBarList = [
		{
			brownIcon: HomeBrown,
			whiteIcon: HomeWhite,
			path: '',
		},
		{
			brownIcon: TilesBrown,
			whiteIcon: TilesWhite,
			path: 'tiles',
		},
		{
			brownIcon: BalanceBrown,
			whiteIcon: BalanceWhite,
			path: 'balance',
		},
		{
			brownIcon: SettingBrown,
			whiteIcon: SettingWhite,
			path: '/',
		},
	];
	return (
		<div className='App'>
			<Row>
				<Col lg={1} md={1} className='text-center pr-0'>
					<SideBar list={sideBarList} />
				</Col>
				<Col lg={11} md={11} className='pl-0'>
					<Router>
						<Switch>
							<Route path='/' exact component={Settings} />
							<Route path='/setting-date' component={SettingDate} />
							<Route path='/wifi-setup' component={WifiSetup} />
							<Route path='/system' component={Updation} />
						</Switch>
					</Router>
				</Col>
			</Row>
		</div>
	);
}

export default App;
