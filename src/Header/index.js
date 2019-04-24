import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <div className="clearfix pt-2 pb-2">
                <Button color="warning" size="sm" className="float-right mt-2" onClick={this.props.onCreateTodo}>New</Button>
                <h1>New Todo</h1>
            </div>
        )
    }
}

export default Header;