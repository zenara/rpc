/**
 * Alert Dialog
 *
 * @author    Amil Waduwawara
 * @version   1.0.0 2019-Jun-16
 * @copyright Omobio (Pvt.) Ltd., Sri Lanka.
 */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


let fnShow = null;

const AlertDialog = ({ ...props }) => {
	const { title, body, options, handleOption } = props;

	const [ open, setOpen ] = useState(props.open);

	const handleClickOpen = () => {
		setOpen(true);
	}

	const handleClose = (option) => {
		setOpen(false);
		handleOption(option);
	}

	fnShow = handleClickOpen;

	const buttons = options.map((option) => (
		<Button id={option.id} key={option.text} color="primary" onClick={() => handleClose(option.value)} autoFocus={option.focus}>{option.text}</Button>
	));


	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
			<DialogContent><DialogContentText id="alert-dialog-description">{body}</DialogContentText></DialogContent>
			<DialogActions>{buttons}</DialogActions>
		</Dialog>
	);
}

export function show() {
	fnShow();
}

export default AlertDialog;
