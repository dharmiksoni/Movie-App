import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../api';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 0 40px 40px 60px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: 'form-control'
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: 'btn btn-primary'
})`
  margin: 15px 15px 15px 15px;
`;

const CancelButton = styled.a.attrs({
  className: 'btn btn-danger'
})`
  margin: 15px 15px 15px 15px;
`;

const MoviesInsert = () => {
  const [name, SetName] = useState('');
  const [rating, SetRating] = useState('');
  const [time, SetTime] = useState('');
  const [url, SetUrl] = useState('');

  const handleChangeInputName = async event => {
    const name = event.target.value;
    SetName(name);
  };

  const handleChangeInputRating = async event => {
    const rating = event.target.value;
    SetRating(rating);
  };

  const handleChangeInputTime = async event => {
    const time = event.target.value;
    SetTime(time);
  };

  const handleChangeInputUrl = async event => { 
    const url = event.target.value;
    SetUrl(url);
  }

  const handleIncludeMovie = async () => {
    const arrayTime = time.split('/');
    const payload = { name, rating, time: arrayTime, url };

    await api.insertMovie(payload).then(res => {
      window.alert('Movie inserted successfully');
    });
  };

  return (
    <Wrapper>
      <Title>Create Movie</Title>
      <Label>Name</Label>
      <InputText type='text' value={name} onChange={handleChangeInputName} />

      <Label>Rating</Label>
      <InputText type='number' step='0.1' min='0' max='10' value={rating} onChange={handleChangeInputRating} />

      <Label>Time</Label>
      <InputText type='text' value={time} onChange={handleChangeInputTime} />

      <Label>Url</Label>
      <InputText type='text' value={url} onChange={handleChangeInputUrl} />

      <Button onClick={handleIncludeMovie}>Add Movie</Button>
      <CancelButton href={'/  '}>Cancel</CancelButton>
    </Wrapper>
  );
};

export default MoviesInsert;
