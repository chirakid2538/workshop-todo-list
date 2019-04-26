import React, { Component } from 'react';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

import Header from './Header';
import CompleteSection from './CompleteSection';
import ListTodo from './ListTodo';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lastId: 3,
            list: [
                {
                    title: 'Task 1',
                    isCompleted: true
                },
                {
                    title: 'Task 2',
                    isCompleted: false
                },
                {
                    title: 'Task 3',
                    isCompleted: false
                }
            ]
        }
    }

    onEditTodo = (index, name) => {
        this.setState(({ list }) => {
            const cloneTodo = _.cloneDeep(list);
            const newList = cloneTodo.find((iten, key) => key === index);
            newList.title = name;
            return { list: cloneTodo };
        });
    }

    onDeleteTodo = (index) => {
        this.setState(({ list }) => ({
            list: list.filter(function (item, key) {
                return (key !== index);
            })
        }));
    }

    onCreateTodo = () => {
        this.setState(({ list, lastId }) => ({
            list: [...list, {
                title: `Trask ${lastId + 1}`,
                isCompleted: false
            }],
            lastId: lastId + 1
        }));
    }

    onToggleComplete = (index) => {
        this.setState(({ list }) => {
            const cloneTodo = _.cloneDeep(list);
            const newList = cloneTodo.find((iten, key) => key === index);
            newList.isCompleted = !newList.isCompleted;
            return { list: cloneTodo };
        });
    }

    render() {
        const { list } = this.state;
        const todoCompleted = list.filter(function (item, index) {
            item.index = index;
            return item.isCompleted === true;
        });
        const todoUnComplete = list.filter(function (item, index) {
            item.index = index;
            return item.isCompleted === false;
        });


        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Header onCreateTodo={this.onCreateTodo} />
                        <CompleteSection
                            list={todoCompleted}
                            onToggleComplete={this.onToggleComplete}
                            onEditTodo={this.onEditTodo}
                            onDeleteTodo={this.onDeleteTodo}
                        />
                        <ListTodo
                            list={todoUnComplete}
                            onToggleComplete={this.onToggleComplete}
                            onEditTodo={this.onEditTodo}
                            onDeleteTodo={this.onDeleteTodo}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
