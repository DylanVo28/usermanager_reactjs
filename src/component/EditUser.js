import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props){
    super(props);
    this.state={
      id:this.props.userEditObject.id,
      ten:this.props.userEditObject.ten,
      sdt:this.props.userEditObject.sdt,
      quyen:this.props.userEditObject.quyen
    }
  }
  isChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    this.setState({
      [name]:value
    });
    
  }
  saveEditUser=()=>{
    var editUser={};
    editUser.id=this.state.id;
    editUser.ten=this.state.ten;
    editUser.sdt=this.state.sdt;
    editUser.quyen=this.state.quyen;
   
    this.props.getEditUser(editUser);
    this.props.editUser();
  }
    render() {
      
        return (
            <div className="col-12 text-left">
          <form>
        <h6>Thêm user</h6>
      <div className="form-group">
      <label htmlFor="exampleFormControlInput1">Họ và tên</label>
      <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.ten} name="ten" className="form-control" id="exampleFormControlInput1" placeholder="Điền họ và tên" />
    </div>
    <div className="form-group">
      <label htmlFor="exampleFormControlInput2">sổ điện thoại</label>
      <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.sdt} name="sdt" className="form-control" id="exampleFormControlInput2" placeholder="Nhập sđt" />
    </div>
    <div className="form-group">
      <label htmlFor="exampleFormControlSelect3">Quyền</label>
      <select onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.quyen} className="form-control" id="exampleFormControlSelect3"   name="quyen">
        <option value={1}>Admin</option>
        <option value={2}>Employee</option>
        <option value={3}>Guard</option>
      </select>
    </div>
    <input  onClick={this.saveEditUser} type="button" className="btn btn-block btn-primary mb-2" value="Lưu"/>
    </form>
    </div>
        );
    }
}

export default EditUser;