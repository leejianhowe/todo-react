import React from "react";
import { Task } from "../data";
import UserContext from "../UserContext";
import { TodoItem } from "./TodoItem";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


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
interface State {}
export default class Todolist extends React.Component<Props, State> {
  static contextType = UserContext;



  deleteItem = (
    id: number,
    $event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const newTasks = this.props.tasks.filter((ele) => ele.id !== id);
    this.props.setTasks([...newTasks]);
  };
  render() {
    const completed = this.props.tasks.filter((ele) => ele.completed === true);
    const incomplete = this.props.tasks.filter((ele) => ele.completed !== true);
    const { user, avatar } = this.context;
    return (
      <div className="container">
        <div className="row mt-3 mr-3 d-flex align-items-center">
          <img src={avatar} alt="" className="mr-3" />
          <h3>{user}</h3>
        </div>
        <DndProvider backend={HTML5Backend}>
          <div className="row mt-3 ">
            <div className="col-6 d-flex justify-content-center">
              <h3>Completed</h3>

              {/* {completed.map((ele) => {
                const [{ isOver }, drop] = useDrop({
                  accept: ItemTypes.TASK,
                  drop: () => this.changeTaskStatus(ele.id),
                  collect: (monitor) => ({
                    isOver: !!monitor.isOver(),
                  }),
                });
                return (
                  <div ref={drop} style={{ border: "solid green 2px" }}>
                    <TodoItem
                      key={ele.id}
                      deleteItem={this.deleteItem}
                      task={ele}
                    />
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
                      />
                    )}
                  </div>
                );
              })} */}
            </div>
            <div className="col-6 d-flex justify-content-center">
              <h3>Incomplete</h3>
              {incomplete.map((ele) => {
                
                return (
                  <div style={{ border: "solid red 2px" }} >
                    <TodoItem
                      key={ele.id}
                      deleteItem={this.deleteItem}
                      task={ele}
                    />
                    
                  </div>
                );
              })}
            </div>
          </div>
        </DndProvider>
      </div>
    );
  }
}
