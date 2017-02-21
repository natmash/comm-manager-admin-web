import React, {Component} from 'react';

class Groups extends Component {
    render() {
        return <div className="animated fadeIn">
            <div className="row">
                <div className="col-lg">
                    <div className="card">
                        <div className="card-header">
                            <i className="fa fa-align-justify"></i> Mobile Groups
                        </div>
                        <div className="card-block">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Group</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Men's Ministry</td>
                                    <td>Helping men to further connect with God.</td>
                                    <td>
                                        <span className="badge badge-success">Active</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Middle School Ministry</td>
                                    <td>For all students grade 5-8.</td>
                                    <td>
                                        <span className="badge badge-success">Active</span>
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

export default Groups;
