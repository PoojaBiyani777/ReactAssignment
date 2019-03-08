import React, { Component } from 'react';
import Layout from './Layout';
import DisplayTask from './DisplayTask';
import "./DisplayTask.css";

class DisplayTasks extends Component{
  render(){
    return (
      <div className="DisplayTask">
      <h2>All Tasks</h2>
      {this.props.tasks.map((item, key) => {
              return (
                <DisplayTask  key={key}
                              item={item}
                              />);
        }
      )}
      </div>
    );
  }

};
export default DisplayTasks;
