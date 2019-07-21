import React, { Component } from 'react';

class NotFoundPage extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="alert alert-warning" role="alert">
                    Không tìm thấy trang!
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>

        );
    }
}

export default NotFoundPage;