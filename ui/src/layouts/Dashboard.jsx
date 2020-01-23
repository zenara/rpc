/**
 * CMDP - Main layout
 *
 * @author    Amil Waduwawara
 *            Rajitha Kumarapeli
 * @version   1.0.0 2019-July-15
 * @copyright Omobio (Pvt.) Ltd., Sri Lanka.
 */
import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';

import 'perfect-scrollbar/css/perfect-scrollbar.css';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import AlertDialog, { show as showAlert } from '../components/Dialog/AlertDialog';

import appStyle from 'assets/jss/styles/layouts/dashboardStyle';

import image from 'assets/img/sidebar.jpg';
import logo from 'assets/img/logo-white.svg';

import Helper from 'utils/Helper';


// Begin: Menu based items -----------------------------------------------------
// @material-ui/icons -- required for menu/routes
import IconDashboard from '@material-ui/icons/Dashboard';
import IconSettings from '@material-ui/icons/Settings';
import IconPeople from '@material-ui/icons/People';
import IconWorkorder from '@material-ui/icons/Work';
import IconAdd from '@material-ui/icons/Add';
import IconReports from '@material-ui/icons/BarChart';
import IconAccess from '@material-ui/icons/Security';
import IconLocation from '@material-ui/icons/LocationOn';
import IconCategories from '@material-ui/icons/AccountBalance';
import IconWorkflows from '@material-ui/icons/DeviceHub';
import IconUsers from '@material-ui/icons/GroupAdd';
import IconPrefes from '@material-ui/icons/Person';
import IconConfigs from '@material-ui/icons/Build';

// Components -- required for menu/routes
import CompDummy from '../views/pages/Dummy';
import CompDashboard from '../views/pages/Dashboard';
import CompUserManger from '../features/user/Manager';
import CompWoNew from '../features/workorder/NewRequest';
import WorkFlowManagment from '../features/workorder/forms/workFlowManagment';
import CompWoHistory from '../features/workorder/Manager';
import CompPreferences from '../features/user/preferences/Preferences';
import DetailPreview from '../features/workorder/response/DetailPreview';
import CategoryManagement from '../features/category/CategoryManagement';
import DesignationManagement from '../features/category/DesignationManagement';
import LocationManagement from '../features/category/LocationManagement';
import RoleManagement from '../features/role/RoleManagement';
import Reports from '../features/reports/ReportView';
import ConfigurationManagement from '../features/configurations/Manager'

// Depends on response data of action, `api/menu`
const routeItemsAll = {
	'dashboard':      {icon: IconDashboard, path: '/main/dashboard',     component: CompDashboard},
	'wo':             {icon: IconWorkorder, path: '/main/workorders',    component: CompWoHistory},
	'wo::new':        {icon: IconAdd,       path: '/main/newrequest',    component: CompWoNew},
	'setup':          {icon: IconSettings,  path: '/dummy1',             component: CompDummy},
	'setup::users':   {icon: IconUsers,     path: '/main/users',         component: CompUserManger},
	'setup::wf':	  {icon: IconWorkflows, path: '/main/workflows',     component: WorkFlowManagment},
	'setup::access':  {icon: IconAccess, 	path: '/main/access',        component: RoleManagement},
	'prefs':          {icon: IconPrefes,    path: '/main/prefs',         component: CompPreferences},
	'detailview':     {icon: IconPeople,    path: '/main/response',      component: DetailPreview},
	'setup::des':     {icon: IconPeople, 	path: '/main/designations',  component: DesignationManagement },
	'setup::loc':     {icon: IconLocation, 	path: '/main/locations', 	 component: LocationManagement },
	'setup::cat':     {icon: IconCategories,path: '/main/categories', 	 component: CategoryManagement },
	'setup::conf': 	  {icon: IconConfigs,	path: '/main/configurations',component: ConfigurationManagement },
	'reports':        {icon: IconReports,   path: '/main/reports',       component: Reports},
};
// End: Menu based items -------------------------------------------------------


let ps;

class Dashboard extends Component {
	state = {
		dashboardRoutes: [],
		switchRoutes: [],
		mobileOpen: false,
		miniActive: false
	};

	routeItems = {};

	oUser = JSON.parse(localStorage.getItem('user'));


	componentDidMount = () => {
		// TODO: when user refresh redirect to this page
		if (this.oUser) {
			if (this.oUser.alert) {
				this.props.history.push('/main/prefs');
			} else {
				this.props.history.push('/main/workorders');
			}
		} else {
			this.props.history.push('/workorders');
			return;
		}

		if (this.oUser.alert) {
			this.routeItems = { prefs: routeItemsAll.prefs };
		} else {
			this.routeItems = { ...routeItemsAll };
		}

		Helper.http.jsonGet('api/menu')
			.then((response) => {
				const data = [
					// Prefix
					//					{key: 'dashboard', name: 'Dashboard'},

					// Static routes
					{ key: 'detailview' },
					{ key: 'wo::new' },

					...response.data.views,

					// Suffix
					{ redirect: true, path: '/', pathTo: '/main/', name: 'Dashboard' }
				];

				let _views = [];
				let _c = null;

				const _dashboardRoutes = data.map((prop, _key) => {
					if (prop.redirect) {
						return undefined;
					}

					if (!prop.name) {
						return undefined;
					}

					_views = [];

					if (prop.collapse) {
						_views = prop.views.map((prop, _key) => {
							_c = this.routeItems[prop.key];

							if (undefined !== _c) {
								return {
									path: _c.path,
									name: prop.name,
									icon: _c.icon,
									collapse: prop.collapse,
									component: _c.component
								};
							}

							return undefined;
						}).filter((prop, key) => (undefined !== prop));
					}

					_c = this.routeItems[prop.key];

					if (undefined !== _c) {
						return {
							path: _c.path,
							name: prop.name,
							icon: _c.icon,
							component: _c.component,
							collapse: prop.collapse,
							views: _views
						};
					}

					return undefined;
				}).filter((prop, key) => (undefined !== prop));

				const _switchRoutes = (
					<Switch>
						{data.map((prop, key) => {
							if (prop.redirect) {
								return <Redirect key={key} from={prop.path} to={prop.pathTo} />;
							}

							if (prop.collapse) {
								return prop.views.map((prop, key) => {
									_c = this.routeItems[prop.key];

									if (undefined !== _c) {
										return (<Route key={prop.key} path={_c.path} component={_c.component} />);
									}

									return undefined;
								}).filter((prop, key) => (undefined !== prop));
							}

							_c = this.routeItems[prop.key];

							if (undefined !== _c) {
								return <Route key={prop.key} path={_c.path} component={_c.component} />;
							}

							return undefined;
						}).filter((prop, key) => (undefined !== prop))}
					</Switch>
				);


				this.setState({ dashboardRoutes: _dashboardRoutes });
				this.setState({ switchRoutes: _switchRoutes });
			})
			.catch(exception => {
				console.log(exception);

				switch (exception.code) {
					case 401:
						localStorage.clear();
						this.props.history.push('/');
						break;

					default:
						// TODO: Better UI
						alert(exception.error);
						break;
				}
			});

		if (-1 < navigator.platform.indexOf('Win')) {
			ps = new PerfectScrollbar(this.refs.mainPanel, {
				suppressScrollX: true,
				suppressScrollY: false
			});

			document.body.style.overflow = 'hidden';
		}

		window.addEventListener('resize', this.handleWindowResize);
	}

	componentWillUnmount = () => {
		if (-1 < navigator.platform.indexOf('Win')) {
			ps.destroy();
		}

		window.removeEventListener('resize', this.handleWindowResize);
	}

	componentDidUpdate = (e) => {
		if (e.history.location.pathname !== e.location.pathname) {
			this.refs.mainPanel.scrollTop = 0;

			if (this.state.mobileOpen) {
				this.setState({ mobileOpen: false });
			}
		}
	}


	handleDrawerToggle = () => {
		this.setState({ mobileOpen: !this.state.mobileOpen });
	}

	sidebarMinimize = () => {
		this.setState({ miniActive: !this.state.miniActive });
	}

	handleWindowResize = () => {
		if (960 <= window.innerWidth) {
			this.setState({ mobileOpen: false });
		}
	}

	handleAlertOption = (option) => {
		if (true !== option) {
			return;
		}

		Helper.http.jsonPost('api/logout')
			.then((response) => {
				localStorage.clear();
				this.props.history.push('/');
			})
			.catch(exception => {
				console.log(exception);
			});
	}

	handleLogout = () => {
		showAlert();
	}


	render = () => {
		const { classes, ...rest } = this.props;
		const mainPanel = classes.mainPanel + ' ' + cx({
			[classes.mainPanelSidebarMini]: this.state.miniActive,
			[classes.mainPanelWithPerfectScrollbar]: (-1 < navigator.platform.indexOf('Win'))
		});

		return (
			<div className={classes.wrapper}>
				<AlertDialog
					open={false}
					title='Sign Out'
					body='Do you want to Sign out?'
					options={[{ id: 'btnNo', text: 'No', value: false, focus: true }, { id: 'btnYes', text: 'Yes', value: true, focus: false }]}
					handleOption={this.handleAlertOption}
				/>
				<Sidebar
					routes={this.state.dashboardRoutes}
					logoText={Helper.config.title}
					logo={logo}
					image={image}
					handleDrawerToggle={this.handleDrawerToggle}
					handleLogout={this.handleLogout}
					open={this.state.mobileOpen}
					color='blue'
					bgColor='black'
					miniActive={this.state.miniActive}
					userDetails={this.oUser}
					{...rest}
				/>
				<div className={mainPanel} ref='mainPanel'>
					<Header
						sidebarMinimize={this.sidebarMinimize}
						miniActive={this.state.miniActive}
						routes={this.state.dashboardRoutes}
						handleDrawerToggle={this.handleDrawerToggle}
						{...rest}
					/>
					<div className={classes.content}>
						<div className={classes.container}>{this.state.switchRoutes}</div>
					</div>
					<Footer fluid />
				</div>
			</div>
		);
	}
}

Dashboard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(appStyle)(Dashboard));
