import './App.css';
import axios from 'axios'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{

state ={advice:''};

componentDidMount(){
  this.fetchAdvice();
}


 fetchAdvice=()=>{

  axios.get("https://api.adviceslip.com/advice").then((response)=>{
    const {advice}=response.data.slip;
    
    this.setState({advice})
  }).catch((error)=>{
    console.log(error);
  });
}

 render()
  
 {
  const {advice}=this.state;

  return(
  
    <div className="app">
      <div className='main'>
          <h1>{advice}</h1>
          <br/>
          <button className='btn btn-dark' onClick={this.fetchAdvice}>Get a Tip</button>
          <br/>
          <br/>
    </div>
    
    </div>
  
  )
 }
}

export default App;