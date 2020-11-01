import React, { Component } from 'react';
import Search from './Search'
class AddUser extends Component {
  constructor(props){
    super(props);
    this.state={
      id:"",
      ten:"",
      std:"",
      quyen:1,
    }
  }
  isChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    this.setState({
      [name]:value
    });
    
  }
  hienThi=()=>{
    if(this.props.hienThiForm==true){
      return (
        <div className="col-12 text-left">
          <form>
        <h6>Thêm user</h6>
      <div className="form-group">
      <label htmlFor="exampleFormControlInput1">Họ và tên</label>
      <input onChange={(event)=>this.isChange(event)} name="ten" type="name" className="form-control" id="exampleFormControlInput1" placeholder="Điền họ và tên" />
    </div>
    <div className="form-group">
      <label htmlFor="exampleFormControlInput2">sổ điện thoại</label>
      <input onChange={(event)=>this.isChange(event)} name="sdt" type="email" className="form-control" id="exampleFormControlInput2" placeholder="Nhập sđt" />
    </div>
    <div className="form-group">
      <label htmlFor="exampleFormControlSelect3">Quyền</label>
      <select className="form-control" id="exampleFormControlSelect3"  onChange={(event)=>this.isChange(event)} name="quyen">
        <option value={1}>Admin</option>
        <option value={2}>Employee</option>
        <option value={3}>Guard</option>
      </select>
    </div>
    <input  onClick={(ten,sdt,quyen)=>this.props.add(this.state.ten,this.state.sdt,this.state.quyen)} type="reset" className="btn btn-block btn-primary mb-2" value="thêm"/>
    </form>
    </div>
        )
    }
    
  }
    render() {
        return (
           <div >
      
        {this.hienThi()}
      </div>
        );
    }
}

export default AddUser;