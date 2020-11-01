import React, { Component } from 'react';

class TableRow extends Component {
    changeQuyen=(quyen)=>{
        if(quyen==1){
            return "Quản Trị"
        }
        else if(quyen==2){
            return "Nhân viên"
        }
        else{
            return "Bảo vệ"
        }
    }
    getIdUser=(idUser)=>{
        this.props.deleteUser(idUser);
    }
    render() {
        
        return (
            <tr>
                <th scope="row">{this.props.stt+1}</th>
        <td>{this.props.ten}</td>
                <td>{this.props.sdt}</td>
                <td>{this.changeQuyen(this.props.quyen)}</td>
                <td>
                  <div className="btn-group"> <button className="btn btn-warning" onClick={this.props.editUser}>Sửa</button>
                    <button className="btn btn-danger" onClick={(idUser)=>this.getIdUser(this.props.id)}>Xóa</button></div>
                </td>
              </tr>
        );
    }
}

export default TableRow;