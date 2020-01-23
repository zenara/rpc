import React, { Component } from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import headerLinksStyle from 'assets/jss/styles/components/headerLinksStyle';


class HeaderLinks extends Component {
	state = {
		open: false,

		notifications: [
			'Mike John responded to your email',
			'You have 5 new tasks',
			'You are now friend with Andrew',
			'Another Notification',
			'Another One'
		]
	};

	handleClick = () => {
		this.setState({ open: !this.state.open });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render = () => {
		return null;

/*
		const { classes, rtlActive } = this.props;
		const { open } = this.state;
		const searchButton = classes.top + ' ' + classes.searchButton + ' ' + classNames({
			[classes.searchRTL]: rtlActive
		});
		const dropdownItem = classNames(
			classes.dropdownItem,
			classes.primaryHover,
			{ [classes.dropdownItemRTL]: rtlActive }
		);
		const wrapper = classNames({
			[classes.wrapperRTL]: rtlActive
		});
		const managerClasses = classNames({
			[classes.managerClasses]: true
		});

		// Not required for the time being
		return (
			<div className={wrapper}>
				<CustomInput
					formControlProps={{className: classes.top + ' ' + classes.search}}
					inputProps={{placeholder: 'Search'}}
				/>
				<Button
					color='white'
					aria-label='edit'
					justIcon
					round
					className={searchButton}
				>
					<Search className={classes.headerLinksSvg + ' ' + classes.searchIcon} />
				</Button>
				<Button
					color='transparent'
					simple
					aria-label='Dashboard'
					justIcon
					className={classes.buttonLink}
				>
					<Dashboard className={classes.headerLinksSvg + ' ' + classes.links} />
					<Hidden mdUp implementation='css'>
						<span className={classes.linkText}>Dashboard</span>
					</Hidden>
				</Button>
				<div className={managerClasses}>
					<Button
						color='transparent'
						justIcon
						aria-label='Notifications'
						aria-owns={open ? 'menu-list' : null}
						aria-haspopup='true'
						onClick={this.handleClick}
						className={classes.buttonLink}
						buttonRef={node => {
							this.anchorEl = node;
						}}
					>
						<Notifications
							className={classes.headerLinksSvg + ' ' + classes.links}
						/>
						<span className={classes.notifications}>{this.state.notifications.length}</span>
						<Hidden mdUp implementation='css'>
							<span onClick={this.handleClick} className={classes.linkText}>Notification</span>
						</Hidden>
					</Button>
					<Popper
						open={open}
						anchorEl={this.anchorEl}
						transition
						disablePortal
						placement='bottom'
						className={classNames({
							[classes.popperClose]: !open,
							[classes.pooperResponsive]: true,
							[classes.pooperNav]: true
						})}
					>
						{({ TransitionProps, placement }) => (
							<Grow
								{...TransitionProps}
								id='menu-list'
								style={{ transformOrigin: '0 0 0' }}
							>
								<Paper className={classes.dropdown}>
									<ClickAwayListener onClickAway={this.handleClose}>
										<MenuList role='menu'>
											{this.state.notifications.map((elem, index) => {
												return (
													<MenuItem
														key={index}
														onClick={this.handleClose}
														className={dropdownItem}
													>
														{elem}
													</MenuItem>
												)
											})}
										</MenuList>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Popper>
				</div>
				<Button
					color='transparent'
					aria-label='Person'
					justIcon
					className={classes.buttonLink}
				>
					<Person className={classes.headerLinksSvg + ' ' + classes.links} />
					<Hidden mdUp implementation='css'>
						<span className={classes.linkText}>Profile</span>
					</Hidden>
				</Button>
			</div>
		);
*/
	}
}

HeaderLinks.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(headerLinksStyle)(HeaderLinks);
