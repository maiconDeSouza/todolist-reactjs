import { Trash } from 'lucide-react'
import styles from './Todo.module.css'

export function Todo(){
    return (
        <div className={styles.container}>
            <div className={styles.status}></div>
            <div className={styles.content}>
                <p>Fazer Compras</p>
                <span>tag</span>
            </div>
            <div className={styles.trash}>
                <Trash size={22}/>
            </div>
        </div>
    )
}