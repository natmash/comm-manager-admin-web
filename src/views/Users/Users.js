import React, {Component} from 'react';

class Users extends Component {
    render() {
        return <div className="animated fadeIn">
            <div className="row">
                <div className="col-lg">
                    <div className="card">
                        <div className="card-header">
                            <i className="fa fa-align-justify"></i> Mobile Users
                        </div>
                        <div className="card-block">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Date registered</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Matt Nash</td>
                                    <td>2012/01/01</td>
                                    <td>Member</td>
                                    <td>
                                        <span className="badge badge-success">Active</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nick Wilson</td>
                                    <td>2012/02/01</td>
                                    <td>Group Admin</td>
                                    <td>
                                        <span className="badge badge-success">Active</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Scotte Hansen</td>
                                    <td>2012/02/01</td>
                                    <td>Admin</td>
                                    <td>
                                        <span className="badge badge-default">Inactive</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ryan Brons</td>
                                    <td>2012/03/01</td>
                                    <td>Admin</td>
                                    <td>
                                        <span className="badge badge-warning">Pending</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">1</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">4</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Users;
