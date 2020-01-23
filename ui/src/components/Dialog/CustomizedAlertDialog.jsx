import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const CustomizedAlertDialog = (props) => {

  return (
    <div>
      <Dialog
        open={props.openState}
        onClose={() => props.closeButton()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.disagreeButton()} color="primary">
          {props.disagreeLabel}
          </Button>
          <Button onClick={() => props.agreeButton()} color="primary" autoFocus>
            {props.agreeLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CustomizedAlertDialog;