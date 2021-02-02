import React from "react";
import { Task, ItemTypes } from "../data";

import { TodoColumn } from "./TodoColumn";

import UserContext from "../UserContext";
import { useDrop } from "react-dnd";
import { changeTaskStatus } from "../helper";
import { TodoItem } from "./TodoItem";

interface Props {
  tasks: Task[];
  tasksRedux:Task[];
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

export const Todolist = (props: Props) => {
  const deleteItem = (
    id: number,
    $event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const newTasks = props.tasksRedux.filter((ele) => ele.id !== id);
    props.setTasks([...newTasks]);
  };
  const completed = props.tasksRedux.filter((ele) => ele.completed === true);
  const incomplete = props.tasksRedux.filter((ele) => ele.completed !== true);

  return (
    <div className="container">
      <div className="row mt-3 ">
        <div
          style={{
            border: "dotted green 2px",
            height: "100%",
            width: "100%",
          }}
          className="col-6 justify-content-center"
        >
          <h3>Completed</h3>
          <TodoColumn state={true} task={props.tasksRedux} setTasks={props.setTasks} deleteItem={deleteItem}>{completed}</TodoColumn>
        </div>
        <div
          style={{ border: "dotted red 2px", height: "100%", width: "100%" }}
          className="col-6 justify-content-center"
        >
          <h3>Incomplete</h3>
          <TodoColumn task={props.tasksRedux} state={false} setTasks={props.setTasks} deleteItem={deleteItem}>{incomplete}</TodoColumn>
        </div>
      </div>
    </div>
  );
};
