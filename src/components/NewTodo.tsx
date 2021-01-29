import React, { useState } from "react";
import { Task } from "../data";
import { Link } from "react-router-dom";

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
  const [form, setForm] = useState({ name: "", date: "" });

  const handleChange = ($event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [$event.target.name]: $event.target.value });
  };

  const handleSubmit = (
    // not needed if not using
    // $event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const id = new Date().getTime();
    props.setTasks([...props.tasks, { ...form, id: id, completed: false }]);
  };
  return (
    <form>
      <input type="text" name="name" onChange={handleChange} />
      <input type="date" name="date" onChange={handleChange} />
      <Link onClick={handleSubmit} to="/" className="btn btn-primary">
        Add
      </Link>
    </form>
  );
};
