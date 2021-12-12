import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { ButtonStyled } from '../../componentsStyled/ButtonStyledComponent';
import { DETAIL_USER, NUMBER_ONE, NUMBER_TWO } from '../../text/textApp';
import { requestViewAllUsers } from '../App/actions';
import ButtonHome from '../ButtonHome/ButtonHome';
import { requestDetailsUser } from './actions';
import './assets/index.scss';

const ListUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.userReducer.users);
  const usersMemo = useMemo(() => users, [users]);

  const handleOnClickDetails = (id) => {
    dispatch(requestDetailsUser(id));
    navigate(DETAIL_USER);
  };

  const handleClickPage = (page) => {
    dispatch(requestViewAllUsers(page));
  };

  const viewCards = () => {
    const cards = [];
    if (usersMemo && usersMemo.length) {
      usersMemo.forEach((it) => {
        cards.push(
          <Card
            sx={{ maxWidth: 345 }}
            key={it.id}
            onClick={() => handleOnClickDetails(it.id)}
            className="card-style"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={it.avatar}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {`${it.first_name}${' '}${it.last_name}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {it.email}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      });
    }
    return cards;
  };

  return (
    <>
      <ButtonHome />
      {users && <div className="card-images">{viewCards()}</div>}
      <div className="card-pagination">
        <ButtonStyled variant="contained" onClick={() => handleClickPage(1)}>
          {NUMBER_ONE}
        </ButtonStyled>
        <ButtonStyled variant="contained" onClick={() => handleClickPage(2)}>
          {NUMBER_TWO}
        </ButtonStyled>
      </div>
    </>
  );
};
export default ListUsers;
