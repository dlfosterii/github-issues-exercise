import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import IssueList from './components/IssueList';
import IssueDetail from './components/IssueDetail';


function App() {

  return (
    <BrowserRouter>
      <div className="App">

      <Switch>
        <Route exact path='/' component={IssueList}/>
        <Route path='/issues/:issueNumber' component={IssueDetail}/>
        <Route>
          <h1>Error! 404 - Not Found</h1>
        </Route>

      </Switch>
    
      </div>

      </BrowserRouter>
  );

}










export default App;
