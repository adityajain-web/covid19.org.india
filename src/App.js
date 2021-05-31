import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Statistics, Symptoms, BookATest, Vaccination, Header, Footer } from './Component/Components';
import './App.css';

const App = () => {
  return (<>
    <Header />
    <Switch>
      <Route exact path="/" component={Statistics}></Route>
      <Route exact path="/Symptoms" component={Symptoms}></Route>
      <Route exact path="/BookATest" component={BookATest}></Route>
      <Route exact path="/Vaccination" component={Vaccination}></Route>
      <Redirect to="/" component={Statistics} />
    </Switch>
    <Footer />
  </>);
}

export default App;