import React, {Component} from 'react';

class Messages extends Component {
    render() {
        return (
            <div className="form-group">
                <input type="text" className="form-control" id="name" placeholder="Enter text here..."/>
                <button type="button" className="btn btn-primary">Send</button>
            </div>
        )
    }
}

export default Messages;
