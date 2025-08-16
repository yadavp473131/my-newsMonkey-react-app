import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, {useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
const App = () => {
  const pageSize = 5;
  //It also replaces " and ; added in process.env.REACT_APP_NEWS_API
  const apiKey= process.env.REACT_APP_NEWS_API.replace(/["';\s]/g, "")  
  const [progress, setProgress] = useState(0)

  
    return (
      
      <div>
      <Router > 
        <NavBar/>
      
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}   key="general" pageSize={pageSize} country="us" category="general"/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}   key="business" pageSize={pageSize} country="us" category="business"/>} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}   key="entertainment" pageSize={pageSize} country="us" category="entertainment"/>} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}   key="general" pageSize={pageSize} country="us" category="general"/>} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}   key="health" pageSize={pageSize} country="us" category="health"/>} />
          <Route exact path="/sciece" element={<News setProgress={setProgress} apiKey={apiKey}   key="science" pageSize={pageSize} country="us" category="sciece"/>} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}   key="sports" pageSize={pageSize} country="us" category="sports"/>} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}   key="technology" pageSize={pageSize} country="us" category="technology"/>} />
        </Routes>
        </Router>  
      </div>
      
    )
  }
  
  export default App
