import React from 'react';
// react component plugin for creating a beautiful datetime dropdown picker
import Datetime from 'react-datetime';
// material-ui components
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';

import extendedFormsStyle from './../../assets/jss/styles/views/extendedFormsStyle';
import datetime from './../../assets/scss/styles/plugins/_plugin-react-datetime.scss';


const DateTimePicker = ({ ...props }) => {
	const formater = (value) => {
		if (10 > value) {
			return '0' + value;
		}

		return value;
	};

	const getIsValidDate = (swich) => {
		var yesterday = Datetime.moment().subtract(1, 'day');
		var valid = function (current) {
			switch (swich) {
				case 'isAfter':
					return current.isAfter(yesterday);

				case 'isBefore':
					return current.isBefore(yesterday);

				default:
					return current;
			}
		};

		return valid;
	}

	const changeIt = (e) => {
		let d = new Date(e['_d']),
			month = (1 + d.getMonth()),
			day = d.getDate(),
			year = d.getFullYear();

		props.changeIt(formater(day) + '-' + formater(month) + '-' + year);
	};

	return (
		<GridContainer>
			<GridItem xs={12} sm={12}>
				<FormControl fullWidth>
					<Datetime
						isValidDate={getIsValidDate(props.rangeCount)}
						defaultValue={props.defaultValue}
						timeFormat={props.timeFormat}
						inputProps={{ placeholder: props.placeholder, disabled: props.disabled }}
						onChange={(e) => changeIt(e)}
					/>
				</FormControl>
			</GridItem>
		</GridContainer>
	);
}

export default withStyles(extendedFormsStyle, datetime)(DateTimePicker);
