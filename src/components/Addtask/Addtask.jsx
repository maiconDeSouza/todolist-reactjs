import { PlusIcon } from 'lucide-react'
import styles from './Addtask.module.css'

export function Addtask(){
    return (
        <div className={styles.container}>
            <div className={styles.input}>
                <label htmlFor="add">Task</label>
                <input type="text" name='add' id='add'/>
            </div>
            <div className={styles.category}>
                <label htmlFor="cate">Categoria</label>
                <select name="cate" id="cate">
                    <option value="Padaria">Padaria</option>
                    <option value="Mercado">Mercado</option>
                </select>
            </div>
            <div className={styles.button}>
                <button>
                    <PlusIcon />
                </button>
            </div>
        </div>
    )
}