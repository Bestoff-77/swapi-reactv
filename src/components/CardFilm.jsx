import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function CardFilm({film}) {

  const extraUrl = (url) => {
    var expUrl = url.split("/");
    return expUrl[expUrl.length - 2];
  };

  return (
    <Card>
      <CardContent>
        <Typography as={Link} to={`/films/${extraUrl(film.url)}`} gutterBottom variant="h5" component="div">
          <strong>title:</strong> {film.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>description:</strong> {film.opening_crawl}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>producer:</strong> {film.producer}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>date:</strong> {film.release_date}
        </Typography>
      </CardContent>
    </Card>
  );
}
