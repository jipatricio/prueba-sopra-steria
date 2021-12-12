import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { AvatarStyledComponent } from '../../componentsStyled/AvatarStyledComponent';
import { ACEPT, CANCEL, DELETE, EDIT, HOME } from '../../text/textApp';
import ButtonHome from '../ButtonHome/ButtonHome';
import './assets/index.scss';
import { requestDeleteUser, requestEditUser } from './actions';
import ModalConfirm from './components/ModalConfirm';

const DetailUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const detailUser = useSelector((state) => state.detailUserReducer.user);
  const [isEdit, setIsEdit] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [newDetails, setNewDetails] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });

  useEffect(() => {
    if (!detailUser) {
      navigate(HOME);
    }
  }, []);

  const handleInputOnChange = (event) => {
    setNewDetails({
      ...newDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleConfirmDelete = () => {
    dispatch(requestDeleteUser(detailUser.id));
    setModalVisible(false);
    navigate(HOME);
  };
  const handleAceptEdit = () => {
    const userRequestEdit = {
      id: detailUser.id,
      first_name: newDetails.first_name
        ? newDetails.first_name
        : detailUser.first_name,
      last_name: newDetails.last_name
        ? newDetails.last_name
        : detailUser.last_name,
      email: newDetails.email ? newDetails.email : detailUser.email,
    };
    dispatch(requestEditUser(userRequestEdit));
    setIsEdit(true);
  };

  return (
    <div>
      <div>
        <ButtonHome />
      </div>
      {detailUser && (
        <div className="info-user">
          <AvatarStyledComponent src={detailUser.avatar} />
          <div className="info-detailContainer">
            <form className="info-formInputs">
              <input
                type="text"
                id="first_name"
                name="first_name"
                disabled={isEdit}
                className="info-userDetail"
                defaultValue={detailUser.first_name}
                onChange={handleInputOnChange}
              />
              <input
                type="text"
                id="last_name"
                name="last_name"
                disabled={isEdit}
                className="info-userDetail"
                defaultValue={detailUser.last_name}
                onChange={handleInputOnChange}
              />
              <input
                type="text"
                id="email"
                name="email"
                disabled={isEdit}
                className="info-userDetail"
                defaultValue={detailUser.email}
                onChange={handleInputOnChange}
              />
            </form>
            <ButtonGroup variant="contained" className="info-container_buttons">
              <Button onClick={() => setIsEdit(!isEdit)}>
                {isEdit ? EDIT : CANCEL}
              </Button>
              <Button onClick={() => setModalVisible(true)}>{DELETE}</Button>
              <Button disabled={isEdit} onClick={() => handleAceptEdit()}>
                {ACEPT}
              </Button>
            </ButtonGroup>
          </div>
        </div>
      )}
      <ModalConfirm
        open={modalVisible}
        onConfirm={handleConfirmDelete}
        isVisibleModal={setModalVisible}
      />
    </div>
  );
};

export default DetailUser;
