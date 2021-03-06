import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { ButtonGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  ACEPT,
  CANCEL,
  LIST_USERS,
  TEXT_LOGIN_MODAL,
  TITLE_LOGIN_MODAL,
} from '../../text/textApp';
import './assets/index.scss';
import { requestViewAllUsers } from '../App/actions';
import { requestLogin } from './actions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '15em',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DEFAULT_PAGE = 1;

const ModalLogin = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginToken = useSelector((state) => state.loginReducer.token);

  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });

  const handleClose = () => {
    props.isVisibleModal(false);
  };

  const handleAcept = async () => {
    dispatch(requestLogin(loginDetails));
  };

  const handleInputOnChange = (event) => {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (loginToken) {
      props.isVisibleModal(false);
      dispatch(requestViewAllUsers(DEFAULT_PAGE));
      navigate(LIST_USERS);
    }
  }, [loginToken]);

  return (
    <Modal open={props.open} onClose={handleClose}>
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          {TITLE_LOGIN_MODAL}
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {TEXT_LOGIN_MODAL}
        </Typography>
        <form className="login-form">
          <input
            className="login-inputs"
            placeholder="Email"
            type="email"
            id="email-login"
            name="email"
            onChange={handleInputOnChange}
          />
          <input
            placeholder="Password"
            className="login-inputs"
            id="password"
            name="password"
            onChange={handleInputOnChange}
          />
        </form>
        <ButtonGroup className="info-container_buttons">
          <Button onClick={() => handleAcept()}>{ACEPT}</Button>
          <Button onClick={() => handleClose()}>{CANCEL}</Button>
        </ButtonGroup>
      </Box>
    </Modal>
  );
};

ModalLogin.propTypes = {
  open: PropTypes.bool.isRequired,
  isVisibleModal: PropTypes.func.isRequired,
};

export default ModalLogin;
