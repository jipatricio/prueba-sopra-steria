import React from 'react';
import { useNavigate } from 'react-router';
import { ButtonStyled } from '../../componentsStyled/ButtonStyledComponent';
import { GO_HOME, HOME } from '../../text/textApp';

const ButtonHome = () => {
  const navigate = useNavigate();

  return (
    <ButtonStyled variant="contained" onClick={() => navigate(HOME)}>
      {GO_HOME}
    </ButtonStyled>
  );
};

export default ButtonHome;
