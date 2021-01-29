import React, { ReactNode } from "react";
import { Task,ItemTypes } from "../data";
import { TodoItem } from "./TodoItem";
import { useDrop } from "react-dnd";
import {changeTaskStatus} from '../helper'
interface Props {
  tasks: Task[];
  children?: ReactNode;
}

export const TodoColumns: React.FC<Task[]> = (tasks: Task[]) => {
    let task: Task[] = []
    tasks.forEach(ele=>task.push(ele))

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.TASK,
        drop: () => changeTaskStatus(id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      });

  return (
      
    <div ref={drop} style={{ border: "solid green 2px" }}>
        {task}
      {/* <TodoItem key={ele.id} deleteItem={this.deleteItem} task={ele} /> */}
      {isOver && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: "yellow",
          }}
        ></div>
      )}
    </div>
  );
};
