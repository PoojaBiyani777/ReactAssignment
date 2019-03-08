import React, {Component} from 'react';
import Modal from '../components/Modal';
import '../CSS/Modal.css';
import ToDoItem from './ToDoItem';
import Tasks from './Tasks/Tasks';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      isShowing: false,
      fromChild: '',
    };
    this.handleData = this.handleData.bind(this);
  };

  openModalHandler = () => {
    console.log("Modal opened");
       this.setState({
           isShowing: true
       });
   };

   closeModalHandler = () => {
       this.setState({
           isShowing: false
       });
   };

   handleData = (data) => {
      this.setState({fromChild: data});
    //  console.log("Data from child : "+data);
    this.props.handleData(data);
   }

  render(){
      return (
        <div>
        <div style={{backgroundColor: "white", height: 70}}>
        <img style={{ paddingTop:20,paddingBottom:0,marginLeft:50}} src="https://img.icons8.com/metro/26/000000/menu.png"/>
        <button className="open-modal-btn" onClick={this.openModalHandler}>New</button>
        </div>
        <div style={{display:this.state.isShowing? "inline": "none"}}>
                <Modal
                      show = {this.state.isShowing}
                      close = {this.closeModalHandler}
                      handlerFromParent = {this.handleData}>
                </Modal>
        </div>
        </div>
            );
  }
};
export default Header;
