import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Views
import ListFilms from './views/ListFilms';
import DetailFilm from './views/DetailFilm';
import ContactForm from './views/ContactForm';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListFilms />} />
        <Route path="/films/:id" element={<DetailFilm />} />
        <Route path="/contacts" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}