import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppContextProvider } from '../AppContextProvider';
import Content1 from '../Content1/Content1';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import './App.css';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <div id="app-container" data-testid="app-container">
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/content1" exact component={Content1} />
            <Route
              path="/reactjs"
              exact
              component={() => (window.location.href = 'https://reactjs.org')}
            />
            <Route render={() => window.location.replace('/')} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
