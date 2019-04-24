import React from 'react';
import { ListGroupItem, InputGroup, InputGroupAddon, InputGroupText, Button, Input } from 'reactstrap';

const Item = (props) => {
    return (
        <ListGroupItem>


            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <Input
                            addon
                            type="checkbox"
                            defaultChecked={props.isCompleted}
                            onChange={() => props.onToggleComplete(props.index)}
                        />
                    </InputGroupText>
                </InputGroupAddon>

                <Input
                    type="input"
                    value={props.todoName}
                    onChange={(event) => props.onEditTodo(props.index, event.target.value)}
                />

                <InputGroupAddon addonType="append">
                    <Button size="sm" onClick={() => props.onDeleteTodo(props.index)} color="danger"><i className="far fa-trash-alt"></i></Button>
                </InputGroupAddon>
            </InputGroup>

        </ListGroupItem>
    )
};

export default Item;