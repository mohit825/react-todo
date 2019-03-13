import React, { Component } from 'react';
import Input from './Input';    
import Show from './Show';
import './App.css';


class App extends Component {

  state = {
    taskArr : [],
    

  }

  submitData = (e) => {
      e.preventDefault();
      var task =e.target.elements[0].value;
      console.log("first task " , task);

      // this.state.taskArr.push(task);
      this.setState({ 
        taskArr: [...this.state.taskArr, task]
       
       })
       console.log("first task arr " , this.state.taskArr);
       console.log("after update task " , task);

  }
  
  render() {
    return (
      <div className="App">
        <Input
        whenSubmit={this.submitData}
        ></Input>
        <Show 
        taskfromApp = {this.state.taskArr}
        ></Show>
      </div>
    );
  };
  
  
}

export default App;
