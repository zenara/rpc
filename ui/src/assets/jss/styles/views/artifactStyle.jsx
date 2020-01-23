/**
 * CMDP - Artifact Styles
 *
 * @author    Chathurika Senani
 *            Amil Waduwawara
 * @version   1.0.0 2019-Jun-16
 * @copyright Omobio (Pvt.) Ltd., Sri Lanka.
 */
import {
	infoColor,
	primaryColor,
	successColor,
	dangerColor,
	warningColor,
	roseColor
} from 'assets/jss/styles';

const chatviewStyle = theme => ({
	chatBar: {
		position: 'absolute',
		top: 'auto',
		bottom: 10
	},

	messageList: {
//		position: 'fixed'
	},

	content: {
		height: '100px',
		flexGrow: 1,
		padding: 2 * 3,
		width: '400px'
	},

	messagebar: {
		paddingRight: '20px',
//		backgroundColor: 'red',
		overflowX: 'hidden'
	},

	messagelist: {
		height: '540px',
		overflow: 'auto',
		overflowX: 'hidden'
	},

	currentUser: {
//		float: 'right',
		paddingLeft: '10px',
		borderRadius: '12px',
		padding: '5px 12px',
		textTransform: 'uppercase',
		fontSize: '10px',
		fontWeight: '700',
		lineHeight: '1',
		color: '#fff',
		textAlign: 'center',
		verticalAlign: 'baseline',
		display: 'inline-block'
	},

	otherUser: {
//		float: 'right',
		paddingLeft: '10px',
		borderRadius: '12px',
		padding: '5px 12px',
		textTransform: 'uppercase',
		fontSize: '10px',
		fontWeight: '700',
		lineHeight: '1',
		color: roseColor,
		textAlign: 'center',
		verticalAlign: 'baseline',
		display: 'inline-block'
	},

	currentUserContent: {
		color: '#FFFFFF',
		paddingLeft: '10px',
		fontSize: '12px'
	},

	otherUserContent: {
		color: '#000000',
		paddingLeft: '10px'
	},

	currentUserTimeLine: {
		marginTop: '10px',
		marginBottom: '5px',
		fontSize: '10px',
		color: '#FFFFFF',
		paddingLeft: '10px'
	},

	otherUserTimeLine: {
		marginTop: '10px',
		marginBottom: '5px',
		color: '#b2b0b0',
		paddingLeft: '10px',
		borderRadius: '12px',
		padding: '5px 12px',
		textTransform: 'uppercase',
		fontSize: '10px',
		fontWeight: '700',
		lineHeight: '1',
//		color: roseColor,
		textAlign: 'center',
		verticalAlign: 'baseline',
		display: 'inline-block'
	},

	currentUserAttachment: {
		fontSize: 30,
		color: '#FFFFFF'
	},

	otherUserAttachment: {
		fontSize: 30,
		color: roseColor,
		transform: 'rotate(45deg)',
	},

	otherUserAttachmentMsg: {
		fontSize: 30,
		color: roseColor
	},
	// From Timeline

	timeline: {
		[theme.breakpoints.down('sm')]: {
			'&:before': {
				left: '5% !important'
			}
		},

		listStyle: 'none',
		padding: '20px 0 20px',
		position: 'relative',
		marginTop: '30px',

		'&:before': {
			top: '50px',
			bottom: '0',
			position: 'absolute',
			content: " ",
			width: '3px',
			backgroundColor: '#E5E5E5',
			left: '50%',
			marginLeft: '-1px'
		}
	},

	timelineSimple: {
		marginTop: '30px',
		padding: '0 0 20px',

		'&:before': {
			left: '5%'
		}
	},

	item: {
		marginBottom: '20px',
		position: 'relative',

		'&:before,&:after': {
			content: " ",
			display: 'table'
		},

		'&:after': {
			clear: 'both'
		}
	},

	timelineBadge: {
		[theme.breakpoints.down('sm')]: {
			left: '5% !important'
		},

		color: '#FFFFFF',
		width: '50px',
		height: '50px',
		lineHeight: '51px',
		fontSize: '1.4em',
		textAlign: 'center',
		position: 'absolute',
		top: '16px',
		left: '50%',
		marginLeft: '-24px',
		zIndex: '100',
		borderTopRightRadius: '50%',
		borderTopLeftRadius: '50%',
		borderBottomRightRadius: '50%',
		borderBottomLeftRadius: '50%'
	},

	timelineSimpleBadge: {
		left: '5%'
	},

	info: {
		backgroundColor: infoColor,
		boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 188, 212, 0.4)'
	},

	success: {
		backgroundColor: successColor,
		boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4)'
	},

	danger: {
		backgroundColor: dangerColor,
		boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(244, 67, 54, 0.4)'
	},

	warning: {
		backgroundColor: warningColor,
		boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)'
	},

	primary: {
		backgroundColor: primaryColor,
		boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)'
	},

	badgeIcon: {
		width: '24px',
		height: '51px'
	},

	timelinePanel: {
		[theme.breakpoints.down('sm')]: {
			float: 'right !important',
			width: '86% !important',

			'&:before': {
				borderLeftWidth: '0 !important',
				borderRightWidth: '15px !important',
				left: '-15px !important',
				right: 'auto !important'
			},

			'&:after': {
				borderLeftWidth: '0 !important',
				borderRightWidth: '14px !important',
				left: '-14px !important',
				right: 'auto !important'
			}
		},

		width: '45%',
		float: 'left',
		padding: '20px',
		marginBottom: '20px',
//		marginRight: '50px',
		position: 'relative',
		boxShadow: '0px 10px 20px #D0D0D0',

//		boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
		borderRadius: '10px',
		color: 'rgba(0, 0, 0, 0.87)',
//		background: roseColor,
		background: 'linear-gradient(60deg, #ec407a, #d81b60)',

//		'&:before': {
//			position: 'absolute',
//			top: '26px',
//			right: '-15px',
//			display: 'inline-block',
//			borderTop: '15px solid transparent',
//			borderLeft: '15px solid #e4e4e4',
//			borderRight: '0 solid #e4e4e4',
//			borderBottom: '15px solid transparent',
//			content: '' ''
//		},
//
//		'&:after': {
//			position: 'absolute',
//			top: '27px',
//			right: '-14px',
//			display: 'inline-block',
//			borderTop: '14px solid transparent',
//			borderLeft: '14px solid' + roseColor,
//			borderRight: '0 solid #FFFFFF',
//			borderBottom: '14px solid transparent',
//			content: '' ''
//		}
	},

	timelineSimplePanel: {
		width: '86%',
		marginLeft: '50px',
		paddingLeft: '15px !important'
	},

	timelinePanelInverted: {
		[theme.breakpoints.up('sm')]: {
			float: 'right',
			background: '#FFFFFF',
			marginRight: '50px',
			paddingLeft: '15px !important',

			'&:before': {
				borderLeftWidth: '0',
				borderRightWidth: '15px',
				left: '-15px',
				right: 'auto'
			},

			'&:after': {
				borderLeftWidth: '0',
				borderRightWidth: '14px',
				left: '-14px',
				right: 'auto'
			}
		}
	},

	timelineHeading: {
		marginBottom: '15px'
	},

	timelineBody: {
		fontSize: '14px',
		lineHeight: '21px'
	},

	timelineFooter: {
		zIndex: '1000',
		position: 'relative',
		float: 'left'
	},

	footerTitle: {
		color: '#333333',
		fontWeight: '400',
		margin: '10px 0px 0px'
	}
});


export default chatviewStyle;
