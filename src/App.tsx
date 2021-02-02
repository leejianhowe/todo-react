import React, { useState,useEffect } from "react";
import axios, { AxiosResponse } from "axios";

// components
import {Todolist} from "./components/Todolist";
import { TodoItem } from "./components/TodoItem";
import { NewTodo } from "./components/NewTodo";
import Navbar from "./components/Navbar";
// data
import { data, User,user } from "./data";
// styles
import "./App.css";
// context
import { UserProvider } from "./UserContext";
// react-redux
import {RootStateOrAny, useSelector} from 'react-redux'
// router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// dnd
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [tasks, setTasks] = useState(data);
  const [userData, setUserData] = useState(user)
  const tasksRedux = useSelector((state:RootStateOrAny) => state.modifyTasks)
  console.log(tasksRedux)
  const URL = "/auth/user";
  useEffect(() => {
    axios.get(URL).then((result) => {
      console.log(result.data);
      setUserData(result.data);
    });
  }, [])
  
  return (
    <div className="container">
      <UserProvider value={userData}>
        <Router>
          <Navbar />  
          <Switch>
            <Route path="/form">
              <NewTodo tasks={tasks} setTasks={setTasks} />
            </Route>
            <Route path="/" exact>
            <DndProvider backend={HTML5Backend}>
              <Todolist tasksRedux={tasksRedux} tasks={tasks} setTasks={setTasks} />
              </DndProvider>
            </Route>
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
