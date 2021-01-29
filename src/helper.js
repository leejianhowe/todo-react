

  export const changeTaskStatus = (id,props)=> {
    const changedTask = props.tasks.map((ele) => {
      if (ele.id === id) {
        ele.completed = !ele.completed;
      }
      return ele;
    });
    props.setTasks([...changedTask]);
  }