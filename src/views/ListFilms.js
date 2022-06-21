import React, { useEffect, useState } from "react";
import CardFilm from "../components/CardFilm";
import Grid from '@mui/material/Grid';
import { allApi } from "../api/api";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ListFilms() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    allApi("films").then(res => {
      const lists = res.results;
      console.log("lists: ", lists);
      setFilms(lists);
    })
    .catch((error) => console.error("Error: ", error));
  }, []);

  return (
    <div className="main">
      <Header/>
      <Grid container spacing={3}>
        {films.map((film, index) => {
          return (
            <Grid item md={6}>
              <CardFilm film={film} key={index} /> 
            </Grid>
          )
        })}
      </Grid>
      <Footer />
    </div>
  );
}

export default ListFilms;
