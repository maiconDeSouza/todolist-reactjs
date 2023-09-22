import { Trash } from 'lucide-react'
import styles from './Todo.module.css'

export function Todo({task, tag, taskId, progress, setConcluded, deleteTask}){
    const styleProgress = styles[progress]
    return (
        <div className={styles.container}>
            <div className={`${styles.status} ${styleProgress}`} onClick={() => setConcluded(taskId)}></div>
            <div className={styles.content}>
                <p>{task}</p>
                <span>{tag}</span>
            </div>
            <div className={styles.trash} onClick={() => deleteTask(taskId)}>
                <Trash size={22}/>
            </div>
        </div>
    )
}