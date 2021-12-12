import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { ButtonGroup } from '@mui/material';
import {
  ACEPT,
  CANCEL,
  TEXT_CONFIRM_MODAL,
  TITLE_CONFIRM_MODAL,
} from '../../../text/textApp';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalConfirm = (props) => {
  const handleClose = () => props.isVisibleModal(false);
  const handleAcept = () => {
    props.onConfirm();
    props.isVisibleModal(false);
  };
  return (
    <div>
      <Modal open={props.open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            {TITLE_CONFIRM_MODAL}
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {TEXT_CONFIRM_MODAL}
          </Typography>
          <ButtonGroup className="info-container_buttons">
            <Button onClick={() => handleAcept()}>{ACEPT}</Button>
            <Button onClick={() => handleClose()}>{CANCEL}</Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </div>
  );
};

ModalConfirm.propTypes = {
  open: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  isVisibleModal: PropTypes.func.isRequired,
};

export default ModalConfirm;
