import React, { useEffect, useState } from 'react';
import omdb from 'omdbapi';
import styled, { css } from 'styled-components';

// import '../../index.css'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Wrapper = styled.section`
  //   padding: 14em;
  background-color: grey;
`;

const Image = styled.img`
  height: 410px;
  //   border: 1px solid red;
  width: 300px;
  margin: 0px;
  float: left;
`;

const Header = styled.div`
  margin: 30px;
  height: 500px;
  //   border: 1px solid black;
`;

const HeaderData = styled.div`
  // border: 1px solid red;
  height: 30px;
  margin: 9px 25px;
  font-size: 17px;
  color: #fff;
`;
const Footer = styled.div`
  background: #008bf6;
  // margin: 10px;
  height: 100px;
  color: #fff;
  display: block;
`;

const FooterData = styled.div`
  // margin: 9px 25px;
  height: 100px;
  font-size: 17px;
  color: #fff;
`;

const Boxnav = styled.div`
  height: 80px;
  border: 1px solid black;
  width: 100%;
  background-color: #666;
`;

const MovieName = styled.div`
  //   border: 1px solid red;
  height: 30px;
  margin: 5px 25px;
  font-size: 30px;
`;

const DescriptionData = styled.div`
  height: 100px;
  border: 1px solid red;
  height: 410px;
`;

const Plot = styled.div`
  height: 30px;
  margin: 30px 10px 10px 20px;
//   border: 1px solid red;
`;

const Director = styled.div`
  height: 30px;
  margin: 30px;
  //   margin: 30px 10px 10px 20px;
//   border: 1px solid red;
`;

const Writer = styled.div`
  height: 30px;
  //   margin: 30px 10px 10px 20px;
//   border: 1px solid red;
`;

const Actor = styled.div`
  height: 30px;
  margin: 30px 10px 10px 20px;
//   border: 1px solid red;
`;

// const Bold = ({ children }) => <Text style={{ fontWeight: 'bold' }}>{children}</Text>

const MakeRow = styled.div``;

const MovieDetail = props => {
  console.log('props: ', props.history.location.state.movie_name);

  const [get, SetGet] = useState(props.history.location.state.movie_name);
  const [movie, SetMovie] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await fetch(`http://www.omdbapi.com/?t=${get}&apikey=${'7bb50461'}`)
        .then(resp => resp)
        .then(resp => resp.json())
        .then(response => {
          SetMovie(response);
          console.log('Response: ', response);
        });
    };
    fetchData();
  }, [get]);

  return (
    <Header>
      {movie && (
        <React.Fragment>
          <Boxnav>
            <MovieName>{`${movie.Title} (${movie.Year})`}</MovieName>
            <HeaderData>{`${movie.Runtime} | ${movie.Genre} | ${movie.Released}`}</HeaderData>
          </Boxnav>
          <div>
            <Image src={movie.Poster}>{/* <DescriptionData></DescriptionData> */}</Image>
            <DescriptionData>
              <Plot>{movie.Plot}</Plot>
              <Director><bold>{`Director:`}</bold>{`${movie.Director}`}</Director>
              <Writer>{`Writer: ${movie.Writer}`}</Writer>
              <Actor>{`Actor: ${movie.Actors}`}</Actor>
            </DescriptionData>
          </div>

          <Footer>
            {`${movie.Awards}`}
            <FooterData>{`${movie.Language} | ${movie.Country}`}</FooterData>
          </Footer>
        </React.Fragment>
      )}
    </Header>
  );
};

export default MovieDetail;
