import React, { ReactNode } from "react";
import { Task, ItemTypes } from "../data";
import { TodoItem } from "./TodoItem";
import { useDrop } from "react-dnd";
import { canChangeTask, changeTaskStatus } from "../helper";

interface Props {
  state:boolean,
  task:Task[]
  deleteItem: (
    id: number,
    $event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  children: Task[];
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

export const TodoColumn = (props: Props): JSX.Element => {
  const [{ isOver,canDrop }, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item: any) => {
      console.log(item);
      changeTaskStatus(item.id, props.task, props.setTasks);
    },
    canDrop:(item)=>canChangeTask(props.state,item.completed),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop:!!monitor.canDrop(),
    }),
  });
  return (
    <div
      className="container mb-3"
      ref={drop}
      style={{ position:'relative', border: "solid black 2px", minHeight: "500px", minWidth: "500px" }}
    >
      <div className="row row-cols-5">
      {props.children.map((ele,index) => (
        <TodoItem index={index} key={ele.id} deleteItem={props.deleteItem}>
          {ele}
        </TodoItem>
      ))}
      </div>
      {isOver && canDrop &&(
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />
      )}
      {isOver && !canDrop &&(
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'red',
          }}
        />
      )}

    </div>
  );
};
