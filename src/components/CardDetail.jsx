import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CardDetail({film}) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
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
      <Button as={Link} to={`/`}>Back</Button>
    </Card>
  );
}
