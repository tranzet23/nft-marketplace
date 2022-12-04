import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import './App.css';
import theme from './theme/Theme';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Home />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
