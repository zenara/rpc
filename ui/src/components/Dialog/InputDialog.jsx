import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import pageStyle from 'assets/jss/styles/layouts/requestPreviewStyle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { withRouter } from 'react-router-dom';


const InputDialog = (props) => {
	const { open, left, right, title, content, label, handleCancel, handleSend } = props;

	return (
		<Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">{title}</DialogTitle>
			<DialogContent>
				<DialogContentText>
					{content}
				</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label={label}
					type="email"
					fullWidth
					onBlur={(e) => props.getComment(e.target.value)}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleCancel} color="primary">
					{left}
				</Button>
				<Button onClick={handleSend} color="primary" >
					{right}
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default withRouter(withStyles(pageStyle)(InputDialog));
