// ##############################
// // // ValidationForms view styles
// #############################

import {
	cardTitle,
	dangerColor
} from "assets/jss/styles";
import customCheckboxRadioSwitch from "assets/jss/styles/customCheckboxRadioSwitch";

const validationFormsStyle = {
	...customCheckboxRadioSwitch,
	cardTitle: {
		...cardTitle,
		color: "#FFFFFF"
	},
	cardIconTitle: {
		...cardTitle,
		marginTop: "15px",
		marginBottom: "0px"
	},
	formCategory: {
		marginBottom: "0",
		color: "#999999",
		fontSize: "14px",
		padding: "10px 0 10px"
	},
	center: {
		textAlign: "center"
	},
	justifyContentCenter: {
		justifyContent: "center"
	},
	registerButton: {
		float: "right"
	},
	danger: {
		color: dangerColor + "!important"
	},
	attachmentbox: {
		marginTop:5,
		backgroundColor: '#f5f5f5',
		padding: '2px 15px !important',
		borderRadius: '5px',
		textAlign: 'center',
	},
	closeBtnBox: {
		marginTop:5,
		padding: '2px !important',
	},
	closeBtn: {
		padding:'0 !important',
		width: '20px',
		height: '21px',
		color: 'white',
		textAlign: 'center',
		borderRadius: '5px',
	},
	closeDownIco:{
		width: '20px',
		height: '21px',
	},
	attachedHeadcon:{
		padding:'0 !important',
	},
	attachedHead:{
		margin: 0,
    fontSize: '14px',
    color: 'darkslategray',
	}
};

export default validationFormsStyle;
