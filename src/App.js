import React from 'react';
import './App.css';
import IssueList from './components/IssueList'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>👋Want to contribute to facebook/create-react-app?
          </p>
        <p>If you have a bug or an idea, read the contributing guidelines before opening an issue.<br />
          If you're ready to tackle some open issues, we've collected some good first issues for you.
          </p>
      </header>
  
  <IssueList/>
    
  
  
  
    </div>
  );

}










export default App;
