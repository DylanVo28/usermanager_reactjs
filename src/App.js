import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Search from './component/Search';
import TableData from './component/TableData';
import AddUser from './component/AddUser';
import DataUser from './component/Data.json'
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      hienThiForm:true,
      data:[],
      dataInput:"",
      hienThiEdit:false,
      userEditObject:{}
    }
  }
  
  componentWillMount() {
    if(localStorage.getItem('createData')==null){
      localStorage.setItem('createData',JSON.stringify(DataUser));
    }
    else{
      var temp=JSON.parse(localStorage.getItem('createData'));
      this.setState({
        data:temp
      });
    }
  }
      
      
    
  
  
  deleteUser(idUser){
    var tempData=this.state.data;
    tempData=tempData.filter(item => item.id!=idUser);
    this.setState({
      data:tempData
    });
    localStorage.setItem('createData',JSON.stringify(tempData));
  
  }
  getDataUser=(ten,sdt,quyen)=>{
    var item={};
    item.id=uuidv4();
    item.ten=ten;
    item.sdt=sdt;
    item.quyen=quyen;
    var items=this.state.data;
    items.push(item);
    this.setState({
      data:items
    });
    localStorage.setItem('createData',JSON.stringify(this.state.data));
  }
  trangThai=()=>{
    this.setState({hienThiForm:!this.state.hienThiForm})
  }
  getInput=(dl)=>{
    this.setState({
      dataInput:dl
    });
  }
  editUser=(user)=>{
    this.setState({
      hienThiEdit: !this.state.hienThiEdit,
      userEditObject:user
    });
    localStorage.setItem('createData',JSON.stringify(this.state.data));
  }
  getEditUser(user){
    
    this.state.data.forEach((value,key)=>{
      
      if(value.id==user.id){

        value.ten=user.ten;
        value.sdt=user.sdt;
        value.quyen=user.quyen;
      }
    })
  }
  
  render(){
    var ketqua=[];
    this.state.data.forEach((item)=>{
      if(item.ten.indexOf(this.state.dataInput)!==-1){
        ketqua.push(item);
      }
    })
  return (
    <div className="App">
      <Header/>
      <div className="container">
  <div className="row">
    <div className="col-5">
      <Search getEditUser={(user)=>this.getEditUser(user)} userEditObject={this.state.userEditObject} editUser={()=>this.editUser()} hienThiEdit={this.state.hienThiEdit} getInput={(dl)=>this.getInput(dl)} ketNoi={()=>this.trangThai()} hienThiForm={this.state.hienThiForm}/>
    </div>
    <div className="col-7" />
    <div className="col-12">
      <hr />
    </div>
    <div className="col text-left">
      <TableData deleteUser={(idUser)=>this.deleteUser(idUser)} editUser={(user)=>this.editUser(user)} data={ketqua}/>
    </div>
      <AddUser add={(ten,sdt,quyen)=> this.getDataUser(ten,sdt,quyen)} hienThiForm={this.state.hienThiForm}/>
    
    </div>
    </div>
    </div>
  );
}
}

export default App;
