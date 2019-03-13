import React, {Component} from 'react';

class Show extends Component{
    
    render(){
        var taskArr = [];
        
       var x= this.props.taskfromApp;
       taskArr.push(x);
       console.log("show arr" , taskArr);
        console.log(taskArr[0].length);
        return(
            <div>
                {taskArr[0].map((item,index) => {
                    
                    return <p key = {index}>{item} </p>
                })}
            </div>
        )
    }


    
    
    
    
    
};

export default Show;    