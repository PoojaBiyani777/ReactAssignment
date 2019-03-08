import React,{ Component } from 'react';
import Aux from '../../hoc/Aux';
import '../../CSS/Layout.css';
import Header from '../Header';
import ToDo from '../ToDo';
import Tasks from '../Tasks/Tasks';
import DisplayTasks from "./DisplayTasks";
class Layout extends Component
{
  constructor(props){
    super(props);
    this.state = {
      myList: [
        {
        "group": "All Tasks",
        "tasks":[]
        },
        {
        "group": "Personal",
          "tasks":[]
        },
        {
        "group": "Work",
          "tasks":[]
        },
        {
        "group": "Grocery List",
          "tasks":[]
        }
      ],

    }
  };
  handleData(data)
  {
    console.log("Layout"+data);
    var myList=this.state.myList.slice();
    myList[0].tasks.push(data);
    this.setState({
      myList:myList
    })
    console.log(this.state.myList);
  }
  addNewItem(data)
  {
    //console.log(data);
    var tasks=[];
    var group=data;
    var myList=this.state.myList.slice();
    myList.push({
      "group":group,
      "tasks":tasks
    })
    this.setState({
      myList:myList
    })
  }

render(){
      return(
        <Aux>
          <Header handleData={this.handleData.bind(this)}/>
            <DisplayTasks tasks={this.state.myList[0].tasks}/>
          <ToDo addNewItem={this.addNewItem.bind(this)} list={this.state.myList}/>
        </Aux>
      );
}

};

export default Layout;
