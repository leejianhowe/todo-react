export const changeTaskStatus = (id, tasks,setTasks) => {
  const changedTask = tasks.map((ele) => {
    console.log(ele.id)
    console.log(id)
    console.log(ele.completed)

    if (ele.id === id) {
      console.log('found',ele.id)
      ele.completed = !ele.completed;
    }
    return ele;
  });
  setTasks([...changedTask]);
};

export const canChangeTask = (state,taskStatus)=>{

  if(state === taskStatus){
    return false
  }
  return true

}