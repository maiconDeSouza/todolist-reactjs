import { PlusIcon } from 'lucide-react'
import styles from './Addtask.module.css'
import { useState } from 'react'

export function Addtask({createdTask, setTaskList, taskList}){
    const [task, setTask] = useState('')
    const [valueCate, setValueCate] = useState('')
    
    function handleValueTask(event){
        setTask(event.target.value)
    }

    function handleValueCate(event){
        setValueCate(event.target.value)
    }

    function handleClick(event){
        event.preventDefault()
       const newTask = createdTask(task, valueCate)
        setTaskList([...taskList, newTask])
        setTask('')
    }
    return (
        <div className={styles.container}>
            <div className={styles.input}>
                <label htmlFor="add">Task</label>
                <input type="text" name='add' id='add'onChange={handleValueTask} value={task}/>
            </div>
            <div className={styles.category}>
                <label htmlFor="cate">Categoria</label>
                <select name="cate" id="cate" onChange={handleValueCate}>
                    <option value="">---</option>
                    <option value="Padaria">Padaria</option>
                    <option value="Mercado">Mercado</option>
                </select>
            </div>
            <div className={styles.button}>
                <button onClick={handleClick}>
                    <PlusIcon />
                </button>
            </div>
        </div>
    )
}