import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Tasks from '../../components/Tasks/Tasks';

class TasksBuilder extends Component {
  render () {
    return (
      <Aux>
      <Tasks />
      <div>Tasks Controls</div>
      </Aux>
    );
  }
}
export default TasksBuilder;
