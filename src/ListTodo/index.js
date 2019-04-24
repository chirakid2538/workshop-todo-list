import React, { Component } from 'react';
import Item from './Item';
import { ListGroup } from 'reactstrap';

class ListTodo extends Component {

    render() {
        const { list, onToggleComplete , onEditTodo , onDeleteTodo } = this.props;
        return (
            <ListGroup className="mt-3">
                {list.map(function (item, index) {
                    return <Item 
                        key={item.index} 
                        index={item.index} 
                        todoName={item.title} 
                        isCompleted={item.isCompleted} 
                        onToggleComplete={onToggleComplete}
                        onEditTodo={onEditTodo}
                        onDeleteTodo={onDeleteTodo}
                         />
                })}
            </ListGroup>
        )
    }
}

export default ListTodo;