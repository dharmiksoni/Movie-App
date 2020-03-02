import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import api from "../api";
import styled from "styled-components";

import "react-table-6/react-table.css";

const Wrapper = styled.div`
  padding: 0 40px 40px 60px;
`;

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`


const MoviesList = props => {

  console.log("Props: ", props);
  const [movies, SetMovies] = useState([]);
  const [column, SetColumn] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      SetIsLoading(true);
      const apiResponse = await api.getAllMovies();
      console.log("apiResponse:", apiResponse);
      SetMovies(apiResponse.data.data);
      SetIsLoading(false);
    };
    fetchData();
  }, []);

  const myDefaultCell = props => {
    if (!props) {
      return <span>Nothing</span>;
    }
    // else {
    //   return;
    //   props => {
    //     <span>{props.value.join(" / ")}</span>;
    //   };
    // }
  };

  const defaulColumn = {
    Cell: myDefaultCell(props)
  };

  // const DeleteMovie = () => {
  //   const deleteUser = event => {
  //     event.preventDefault()
  //   }

  //   if(window.confirm(`Do tou want to delete the movie ${props.id} permanently?`)) {
  //     api.deleteMovie(props.id);
  //     window.location.reload();
  //   }
  //   return(
  //     <div>
  //       <Delete onClick={deleteUser}>Delete</Delete>
  //     </div>
  //   )
  // }

  const columns = [
    {
      Header: "ID",
      accessor: "_id",
      filterable: true
    },
    {
      Header: "Name",
      accessor: "name",
      filterable: true
    },
    {
      Header: "Rating",
      accessor: "rating",
      filterable: true
    },
    {
    //   ...defaulColumn,
      Header: "Time",
      accessor: "time",
      //   Cell: myDefaultCell(props),
      Cell: props => <span>{props.value.join(" / ")}</span>
    },
    // {
    //   Header: '',
    //   accessor: '',
    //   Cell: function(props) {
    //       return (
    //           <span>
    //               <DeleteMovie id={props.original._id} />
    //           </span>
    //       )
    //   },
  // },
  ];

  let showTable = true;
  if (!movies.length) {
    showTable = false;
  }

  return (
    <Wrapper>
      {showTable && <ReactTable data={movies} columns={columns} loading={isLoading} defaultPageSize={10} showPageSizeOptions={true} minRows={16} />}
    </Wrapper>
  );
};

export default MoviesList;
