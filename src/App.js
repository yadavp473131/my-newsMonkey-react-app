import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route} from "react-router-dom"; 
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  c='john';
  
  pageSize=15;
  //It also replaces " and ; added in process.env.REACT_APP_NEWS_API
   apiKey= process.env.REACT_APP_NEWS_API.replace(/["';\s]/g, "")
  
  
  state={
    progress:0
  }
  
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  
  render() {
  

    return (
      <div>
        <Navbar/>
        <LoadingBar color="#f11946"
        progress={this.state.progress}/>
       {/* {this.c} */}
            
        <Routes>
          
        <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="general"/>}></Route>
        <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="business"/>}></Route>
        <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="entertainment"/>}></Route>
        <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="sports"/>}></Route>
        <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="technology"/>}></Route>
        <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="health"/>}></Route>
        <Route exact path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="general"/>}></Route>
        <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="health"/>}></Route>
       
        </Routes>
       
      </div>
    )
  }
}

// import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
