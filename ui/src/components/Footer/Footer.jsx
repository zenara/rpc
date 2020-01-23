import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import footerStyle from 'assets/jss/styles/components/footerStyle';


const Footer = ({ ...props }) => {
	const { classes, fluid, white } = props;
	const container = cx({
		[classes.container]: !fluid,
		[classes.containerFluid]: fluid,
		[classes.whiteColor]: white
	});
	const anchor = classes.a + cx({
		[' ' + classes.whiteColor]: white
	});

	return (
		<footer className={classes.footer}>
			<div className={container}>
				<p className={classes.right}>
					&copy; {new Date().getFullYear()}&nbsp;
					<a href="https://www.dialog.lk" target="_blank" rel="noopener noreferrer" className={anchor}>Dialog Axiata PLC</a>
				</p>
			</div>
		</footer>
	);
}

Footer.propTypes = {
	classes: PropTypes.object.isRequired,
	fluid: PropTypes.bool,
	white: PropTypes.bool,
	rtlActive: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
