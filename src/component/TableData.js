import React, { Component } from 'react';
import TableRow from './TableRow';

class TableData extends Component {
    totalUserTable=()=>{
      return this.props.data.map((value,key)=>(
        <TableRow deleteUser={(idUser)=>this.props.deleteUser(idUser)} editUser={(user)=>this.props.editUser(value)} key={key} stt={key} ten={value.ten} sdt={value.stt} quyen={value.quyen} id={value.id} sdt={value.sdt}/>
      ))
    }
    render() {
        return (
            <table className="table">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên</th>
                <th scope="col">Điện thoại</th>
                <th scope="col">Quyền</th>
                <th scope="col">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {this.totalUserTable()}
            </tbody>
          </table>
        );
    }
}

export default TableData;