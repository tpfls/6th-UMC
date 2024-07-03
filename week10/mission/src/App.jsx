import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import useMediaQuery from './styles/MediaQuery';

import Navbar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar/Navbar2';
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
  const isTablet = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <GlobalStyle/>
      <Router>
        {isTablet ? <Navbar2 /> : <Navbar />}
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/login/auth" element={<LoginPage />} />
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