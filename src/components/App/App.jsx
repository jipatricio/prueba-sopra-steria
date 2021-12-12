import React, { useState } from 'react';
import { ButtonStyled } from '../../componentsStyled/ButtonStyledComponent';
import { VIEW_USERS } from '../../text/textApp';
import ModalLogin from '../Login/Login';

const App = () => {
  const [modalLoginVisible, setModalLoginVisible] = useState(false);

  const handleViewAllUsers = () => {
    setModalLoginVisible(true);
  };

  return (
    <div>
      <ButtonStyled variant="contained" onClick={() => handleViewAllUsers(1)}>
        {VIEW_USERS}
      </ButtonStyled>
      <ModalLogin
        open={modalLoginVisible}
        isVisibleModal={setModalLoginVisible}
      />
    </div>
  );
};

export default App;
