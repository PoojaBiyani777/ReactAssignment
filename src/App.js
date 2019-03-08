import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MenuContainer from "./components/MenuContainer";
import Layout from './components/Layout/Layout';
import TasksBuilder from './containers/TasksBuilder/TasksBuilder';
import ToDoItem from './components/ToDoItem';


class App extends Component {

render() {
    return (
      <div>

          <Layout>
          
          </Layout>
      </div>
    );
  }
}

export default App;
