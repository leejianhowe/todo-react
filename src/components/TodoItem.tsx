import React from "react";
import { Task ,ItemTypes} from "../data";
import { useDrag } from "react-dnd";

type Props = {
  task: Task;
  deleteItem: (
    id: number,
    $event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

export const TodoItem: React.FC<Props> = (props: Props) => {
  const { id, name, date } = props.task;
  const deleteItem = props.deleteItem;
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.TASK },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        border: "solid 1px black",
        width: "200px",
        height: "200px",
      }}
      className="mr-3"
      draggable={true}
      key={id}
    >
      <div className="div d-flex justify-content-between">
        <button
          style={{ padding: 0, border: "none", background: "none" }}
          onClick={deleteItem.bind(this, id)}
        >
          X
        </button>
        <p>{id}</p>
      </div>
      <h3 style={{ fontSize: "1rem" }}>{name}</h3>
      <p>{date}</p>
    </div>
  );
};
