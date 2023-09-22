import { v4 as uuidv4 } from 'uuid'
import styles from './App.module.css'
import { Addtask } from './components/Addtask/Addtask'
import { Todo } from './components/Todo/Todo'
import { useState } from 'react'


function createdTask(task, tag){
  return {
    id: uuidv4(),
    task,
    tag,
    concluded: false
  }
}


export function App() {
  const [taskList, setTaskList] = useState([])

  function setConcluded(id){
    const edTask = taskList.map(task => {
      if(task.id === id){
        task.concluded = !task.concluded
        return task
      }
      return task
    })

    setTaskList(edTask)
  }
  
  return (
    <>
      <header className={styles.top}></header>
      <div className={styles.wrapper}>
        <section className={styles.addtask}>
          <h1>Adicionar nova task</h1>
          <Addtask createdTask={createdTask} setTaskList={setTaskList} taskList={taskList}/>
        </section>
        <main className={styles.inProgress}>
          <h2>Em Processo...</h2>
          <section className={styles.tasks}>
            {
              taskList.map(task => {
                if(task.concluded === false){
                  return (
                    <Todo task={task.task} tag={task.tag} taskId={task.id} progress='inProgress' key={task.id} setConcluded={setConcluded}/>
                  )
                }
              })
            }
          </section>
        </main>
        <footer className={styles.concluded}>
          <h2>Concluídos</h2>
          {
              taskList.map(task => {
                if(task.concluded){
                  return (
                    <Todo task={task.task} tag={task.tag} taskId={task.id} progress='concluded' key={task.id} setConcluded={setConcluded}/>
                  )
                }
              })
            }
        </footer>
      </div>
    </>
  )
}


