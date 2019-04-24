import React, { Component } from 'react';
import ListTodo from '../ListTodo';

import { Button } from 'reactstrap';


class CompleteSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowTodoList: props.list.length > 0
        }
    }

    onToggleListItem = () => {
        this.setState({
            isShowTodoList: !this.state.isShowTodoList
        })
    }
    
    componentDidUpdate( prevProps, prevState ){
        if( prevState.isShowTodoList !== (this.props.list.length > 0) ){
            this.setState( { isShowTodoList : (this.props.list.length > 0) } );
        } 
    }
   

    render() {
        const { list, onToggleComplete, onEditTodo, onDeleteTodo } = this.props;
        return (
            <div>
                <div className="clearfix pt-2">
                    <Button outline color="secondary" size="sm" className="float-right" onClick={this.onToggleListItem}>
                        {this.state.isShowTodoList ? 'Hide' : 'Show'}
                    </Button>
                    {list.length} Completed
                </div>
                {this.state.isShowTodoList && <ListTodo list={list} onToggleComplete={onToggleComplete} onEditTodo={onEditTodo} onDeleteTodo={onDeleteTodo}/>}
            </div>
        )
    }
}

export default CompleteSection;