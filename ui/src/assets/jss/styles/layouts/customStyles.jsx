// ##############################
// // // App styles
// #############################
/*
import {
	drawerWidth,
	drawerMiniWidth,
	transition,
	containerFluid
} from 'assets/jss/styles';
*/

const appStyle = {
	refMsgTile: {
		padding: '40px',
		backgroundColor: '#FAFAFA'
	},

	successHead: {
		fontSize: '25px',
		color: 'green',
		margin: 0
	},

	refLable: {
		margin: 0,
		marginTop: '15px',
		color: '#e91e63'
	},

	from: {
		width: '100%'
	},

	menuItems: {
		marginTop: '15px'
	},

	plusIco: {
		width: '50px',
		position: 'absolute',
		right: '30px',
		marginTop: '10px',
		cursor: 'pointer'
	},

	removeIco: {
		width: '50px',
		position: 'absolute',
		right: '90px',
		marginTop: '10px',
		cursor: 'pointer'
	},

	textField: {
		marginTop: '0px'
	},

	cardTitle: {
		fontSize: '10px',
		color: 'red'
	},

	errornote: {
		color: 'red'
	},

	modal_sm: {
		minWidth: 335,
		minHeight: 45
	},

	modal_lg: {
		minWidth: '90%',
		minHeight: '90%'
	},
	modal_md: {
		minWidth: '50%',
		minHeight: '60%'
	},

	modal_Close: {
		cursor: 'pointer',
		position: 'absolute',
		right: 0,
		top: 0,
		backgroundColor: 'white',
		color: 'red',
		padding: '10px 20px',
		borderRadius: '0 0 0 10px',
		"&:hover": {
			cursor: 'pointer',
			position: 'absolute',
			right: 0,
			top: 0,
			backgroundColor: 'red',
			color: 'white',
			padding: '10px 20px',
			borderRadius: '0 0 0 10px',
		}
	},

	redioButton: {
		marginTop: 20
	},

	radio: {
		padding: 10
	},

	approv_posistion: {
		fontSize: '16px',
		color: 'gray',
		fontWeight: 100,
		margin: '10px 0 0 0'
	},

	approv_name: {
		fontSize: '16px',
		fontWeight: 100,
		margin: 0
	},

	nameBox: {
		textAlign: 'center',
		color: 'white',
		marginTop: '10px',
		fontSize: '15px',
		boxShadow: '1px 1px 5px 1px #ccc',
		backgroundColor: ' #9c27b0',
		padding: ' 8px 0'
	},
	nameBoxDisable: {
		textAlign: 'center',
		color: 'white',
		marginTop: '10px',
		fontSize: '15px',
		// boxShadow: '1px 1px 5px 1px #ccc',
		backgroundColor: '#ddd',
		padding: ' 8px 0'
	},

	Droppable: {
		color: '#AFAFAF',
		width: '44%',
		position: 'absolute',
		minHeight: '430px',
		margin: 0,
		padding: '8px 0',
		border: '3px #000 dashed',
		textAlign: 'center',
	},

	dragCol:{
		overflowY:'auto',
		height: '450px',
		padding: '8px 0',
		backgroundColor:'#fff',
	},

	catDroppable: {
		color: '#AFAFAF',
		width: '40%',
		position: 'absolute',
		minHeight: '330px',
		margin: 0,
		padding: '8px 0',
		border: '3px #000 dashed',
		textAlign: 'center',
	},

	catDragCol:{
		border:'2px solid #ccc',
		overflowY:'auto',
		height: '350px',
		padding: '8px 0',
		backgroundColor:'#fff',
	},

	flowOrder: {
		margin: '5px 0 0 0',
		padding: '8px',
		fontSize: '18px',
		textAlign: 'center',
		backgroundColor: 'gold'
	},

	arrowIco: {
		width: '50px',
		right: '30px',
		marginTop: '10px'
	},

	centr: {
		textAlign: 'center'
	},

	btnSaveWorkflow: {
		bottom: 0,
		right: 0,
		position: 'absolute'
	},

	closeBtn: {
		position: 'absolute',
		marginTop: '-30px',
		marginLeft: '20%',
		borderRadius: '27px',
		padding: 0,
		width: '20px',
		height: '20px',
	},

	closeBtn_cat: {
		marginLeft: '20%',
		borderRadius: '27px',
		padding: 0,
		width: '20px',
		height: '20px',
	},

	btnRoleTrans: {
		width: '100%',
		fontWeight: 'bold',
		border: 'none !important',
		color: 'white !important',
		marginTop: '10px',
		padding: '10px 0',
		backgroundColor: '#f50057',
	},

	btnRoleTransDisabled: {
		width: '100%',
		fontWeight: 'bold',
		border: 'none !important',
		color: 'white !important',
		marginTop: '10px',
		padding: '10px 0',
		backgroundColor: '#ccc',
	},

	roleType: {
		marginBottom: 20,
	},

	listPermission: {
		height: '500px',
		overflowY: 'auto'
	},

	permissionSaveBtn: {
		width: '100%',
		fontWeight: 'bold',
		border: 'none !important',
		color: 'white !important',
		marginTop: '10px',
		padding: '10px 0',
		backgroundColor: 'green',
	},

	datetimePick: {
	marginTop:'10px'
	},

	dateLable: {
		position: 'absolute'
	},
	dateLableRange: {
		marginTop: '-30px'
	},

	addPaddingTop: {
		paddingTop: '15px'
	},

	errorMsg:{ 
		fontSize: '14px',
    color: 'red',
    marginLeft: '15px',
	},

	customTile:{
		margin: 0,
    backgroundColor: 'green',
    color: 'white',
    padding: '2px 10px',
    borderRadius: '4px',
	}
};

export default appStyle;
