import React from 'react';
import './App.css';
//import './assets/css/plugins.css'
//import './assets/css/style.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/';
import RecipeDetail from './pages/RecipeDetail';

const App = () => {
  return (
    <div>
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/recipe-detail/:id" element={<RecipeDetail />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
};

export default App;
