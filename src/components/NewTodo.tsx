import React, { useState } from "react";
import { Task } from "../data";
import { Link } from "react-router-dom";
import {useDispatch}from 'react-redux'
import {modifyTasks} from '../reducers/reducers'
import {addTask} from '../actions/actions'
interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
        completed: boolean;
        date: string;
      }[]
    >
  >;
}
export const NewTodo: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    name: "",
    date: new Date().toISOString().substr(0, 10),
  });

  const handleChange = ($event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [$event.target.name]: $event.target.value });
  };

  const handleSubmit = (
    // not needed if not using
    $event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    // $event.preventDefault()
    const id = new Date().getTime();
    dispatch(addTask({ ...form, id: id, completed: false }))
    props.setTasks([...props.tasks, { ...form, id: id, completed: false }]);
  };
  return (
    <form>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />
      <Link onClick={handleSubmit} to="/" className="btn btn-primary">
        Add
      </Link>
    </form>
  );
};
