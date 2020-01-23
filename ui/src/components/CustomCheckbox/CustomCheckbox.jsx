import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Checkbox from '@material-ui/core/Checkbox';

// @material-ui/icons
import Check from '@material-ui/icons/Check';

// style for this view
import validationFormsStyle from 'assets/jss/styles/views/validationFormsStyle';


const CustomCheckbox = props => {
	const { classes } = props;

	return (
		<div>
			<Checkbox
				disabled={props.disabled}
				defaultChecked={props.checkStatus}
				checked={props.checked}
				tabIndex={-1}
				id={props.labelId}
				checkedIcon={<Check className={classes.checkedIcon} />}
				icon={<Check className={classes.uncheckedIcon} />}
				classes={{  root: classes.checkRoot }}
				onChange={(e) => props.handleToggle(e)}
			/>

			{props.labelName}
		</div>
	);
}


export default withStyles(validationFormsStyle)(CustomCheckbox);
