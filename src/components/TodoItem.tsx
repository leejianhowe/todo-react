import React, { ReactNode } from "react";
import { Task, ItemTypes } from "../data";
import { useDrag } from "react-dnd";

type Props = {
  deleteItem: (
    id: number,
    $event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  children: Task;
  index: number;
};

export const TodoItem: React.FC<Props> = (props: Props) => {
  const { id, name, date, completed } = props.children;
  const deleteItem = props.deleteItem;
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.TASK, id: id, completed: completed },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        border: "solid 1px orange",
        width: "100px",
        height: "100px",
      }}
      className="p-0 col"
    >
      <div className="container">
        <div className="div d-flex justify-content-between">
          <button
            style={{ padding: 0, border: "none", background: "none" }}
            onClick={deleteItem.bind(this, id)}
            // className="ml-3"
          >
            X
          </button>
          <div
            // className="mr-3 align-items-center "
            // style={{ verticalAlign: "center" }}
          >
            {props.index + 1}
          </div>
        </div>
        <h3 style={{ fontSize: "1rem" }}>{name}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
};
