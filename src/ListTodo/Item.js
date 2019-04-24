import React from 'react';
import { ListGroupItem, InputGroup, InputGroupAddon, InputGroupText, Button, Input } from 'reactstrap';

class Item extends React.Component {
    render() {
        return (
            <ListGroupItem>

                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <Input
                                addon
                                type="checkbox"
                                defaultChecked={this.props.isCompleted}
                                onChange={() => this.props.onToggleComplete(this.props.index)}
                            />
                        </InputGroupText>
                    </InputGroupAddon>

                    <Input
                        type="input"
                        disabled={this.state.isDisabled}
                        value={this.props.todoName}
                        onChange={(event) => this.props.onEditTodo(this.props.index, event.target.value)}
                    />

                    <InputGroupAddon addonType="append">
                        <Button size="sm" onClick={() => this.props.onDeleteTodo(this.props.index)} color="danger"><i className="far fa-trash-alt"></i></Button>
                    </InputGroupAddon>
                </InputGroup>

            </ListGroupItem>
        )
    }
}

export default Item;