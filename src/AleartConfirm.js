import React, { Component } from 'react'
import { confirmAlert } from "react-confirm-alert";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

class AleartConfirm extends Component {
    render() {
        const submit3 = () => {
            confirmAlert({
              customUI: ({ onClose }) => {
                return (
                  <div className="custom-ui">
                    <Dialog
                      open={true}
                      onClose={onClose}
                      aria-labelledby="customized-dialog-title"
                      disableBackdropClick
                      disableEscapeKeyDown
                      maxWidth="xs"
                    >
                      <DialogTitle id="customized-dialog-title" onClose={onClose}>
                        CowCert Add Confirmation
                      </DialogTitle>
                      <DialogContent dividers>
                        <Typography gutterBottom>
                          Cras mattis consectetur purus sit amet fermentum. Cras justo
                          odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                          risus, porta ac consectetur ac, vestibulum at eros.
                        </Typography>
                        <Typography gutterBottom>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue laoreet
                          rutrum faucibus dolor auctor.
                        </Typography>
                        <Typography gutterBottom>
                          Aenean lacinia bibendum nulla sed consectetur. Praesent
                          commodo cursus magna, vel scelerisque nisl consectetur et.
                          Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                          fringilla.
                        </Typography>
                      </DialogContent>
                      <DialogActions>
                        <Button autoFocus onClick={onClose} color="primary">
                          OK
                        </Button>
                        <Button autoFocus onClick={onClose} color="primary">
                          Cancel
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                );
              }
            });
          };
        return (
            <>
                <button onClick={submit3}>Confirm custom dialog</button>
            </>
        )
    }
}

export default AleartConfirm;


