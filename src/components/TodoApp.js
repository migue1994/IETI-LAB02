import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {TodoList} from "./TodoList";
import React, {useState} from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    textField: {
        width: '50%'
    }
}));

export default function TodoApp() {

    const style = useStyles();
    const [item, setItem] = useState({dueDate: moment()});
    const [items, setItems] = useState([]);

    function handleChange(e) {
        setItem({...item, [e.target.name]: e.target.value});
    }

    function handleDateChange(date) {
        setItem({...item, dueDate: date});
    }

    function handleSubmit(e) {

        e.preventDefault();

        if (!item.text || !item.priority)
            return;

        const newItem = {
            text: item.text,
            priority: item.priority,
            dueDate: item.dueDate,

        };
        setItems(prevState => items.concat(newItem));
        setItem({dueDate: moment(), text: '', priority: 0});
    }

    return (
        <div>
            {localStorage.getItem('isLoggedIn') ? (
                    <div>
                        <form onSubmit={handleSubmit} className="todo-form">
                            <h3>New TODO</h3>
                            <TextField
                                className={style.textField}
                                name={'text'}
                                onChange={handleChange}
                                label={'text'}
                                size={"small"}
                                value={item.text ? item.text : ''}
                            />
                            <TextField
                                className={style.textField}
                                name={'priority'}
                                onChange={handleChange}
                                label={'priority'}
                                size={"small"}
                                type={'number'}
                                value={item.priority ? item.priority : ''}
                            />
                            <DatePicker
                                id="due-date"
                                className="date"
                                selected={item.dueDate}
                                placeholderText="Due date"
                                onChange={handleDateChange}>
                            </DatePicker>
                            <Button type={'submit'} variant="contained" color="primary">Add #{items.length + 1}</Button>
                        </form>
                        <TodoList todoList={items}/>
                    </div>
                ) :
                <h1>You aren't logged yet!</h1>
            }
        </div>
    )
}
