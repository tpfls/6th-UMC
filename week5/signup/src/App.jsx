import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import GlobalStyle from './styles/GlobalStyle';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import PopularPage from './pages/PopularPage';
import NowPlayingPage from './pages/NowPlayingPage';
import TopRatedPage from './pages/TopRatedPage';
import UpComing from './pages/UpComingPage';
import MovieDetailPage from './pages/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/popular" element={<PopularPage/>} />
          <Route path="/now" element={<NowPlayingPage/>} />
          <Route path="/top" element={<TopRatedPage/>} />
          <Route path="/up" element={<UpComing/>} />
          <Route path="/movie/:id" element={<MovieDetailPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;