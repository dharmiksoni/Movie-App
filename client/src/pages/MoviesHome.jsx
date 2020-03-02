import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';
import api from '../api';
import '../index.css';

const Wrapper = styled.div`
  padding: 0 40px 40px 60px;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  margin: 25px 25px 25px 25px;
  border-radius: 25px;
  display: block;
`;

const H6 = styled.h6`
  font-size: 1.5em;
  line-height: 0.8;
  text-align: center;
  color: palevioletred;
`;

const Grid = styled.div`
  display: grid
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px
`;

const MoviesHome = props => {
  const [movies, SetMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await api.getAllMovies();
      // console.log('apiResponse:', apiResponse);
      SetMovies(apiResponse.data.data);
    };
    fetchData();
  }, []);

  const handleClick = cardClick => {
    console.log('movie clicked', cardClick);

    // props.history.push({"/movies/details")
    props.history.push({
      pathname: "/movies/details",
      state: {
        movie_name: cardClick
      }
    });
  };

  return (
    <div className='App'>
      <Wrapper>
        <Grid>
          {movies.map(print => {

            let name = localStorage.setItem('name', print.name);
            console.log("url:", print.url);
            
            return (
              <React.Fragment>
                <div>
                  <Image src={print.url} onClick={() => handleClick(print.name)} />
                </div>
              </React.Fragment>
            );
          })}
        </Grid>
      </Wrapper>
    </div>
  );
};

export default MoviesHome;
