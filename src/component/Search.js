import React, { Component } from 'react';
import AddUser from './AddUser'
import EditUser from './EditUser';

class Search extends Component {
  constructor(props){
    super(props);
    this.state={
      dataInput:'',
      userEditObj:{}
    }
  }
  
  hienThiNut=()=>{
    if(this.props.hienThiForm==true){
      return <button type="button" className="btn btn-block btn-outline-secondary" onClick={this.props.ketNoi}>Đóng lại</button>
    }
    else{
      return <button type="button" className="btn btn-block btn-outline-primary" onClick={this.props.ketNoi}>Thêm mới</button>
    }
  }
  leyTextSearch=(event)=>{
    const value = event.currentTarget.value;
    this.setState({
      dataInput:value

    });
    this.props.getInput(this.state.dataInput)
  }
  getEditUser=(user)=>{
    this.setState({
      userEditObj:user
    });
    this.props.getEditUser(user);
  }
  checkHienThiEdit=()=>{
    if(this.props.hienThiEdit==true){
      
      return <EditUser getEditUser={(user)=>this.getEditUser(user)} userEditObject={this.props.userEditObject} editUser={this.props.editUser}/>;
    }
    
  }
  
    render() {
     
        return (
          <div>
            {this.checkHienThiEdit()}
            <div className="input-group md-form form-sm form-1 pl-0">
        <a onClick={(dl)=>this.props.getInput(this.state.dataInput)} href="#" className="input-group-prepend" >
          <span className="input-group-text cyan lighten-2" id="basic-text1"><i className="fas fa-search text-white" aria-hidden="true" /></span>
        </a>
        <input className="form-control my-0 py-1" onKeyUp={(event)=>this.leyTextSearch(event)} type="text" placeholder="Search" aria-label="Search" />
      </div>
          {this.hienThiNut()}
      
          </div>
        );
    }
}

export default Search;