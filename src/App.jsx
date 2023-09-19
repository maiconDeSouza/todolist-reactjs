import styles from './App.module.css'
import { Addtask } from './components/Addtask/Addtask'
import { Todo } from './components/Todo/Todo'



export function App() {
  return (
    <>
      <header className={styles.top}></header>
      <div className={styles.wrapper}>
        <section className={styles.addtask}>
          <h1>Adicionar nova task</h1>
          <Addtask />
        </section>
        <main className={styles.inProgress}>
          <h2>Em Processo...</h2>
          <section className={styles.tasks}>
            <Todo />
            <Todo />
          </section>
        </main>
        <footer className={styles.concluded}>
          <h2>Concluídos</h2>
            <Todo />
            <Todo />
        </footer>
      </div>
    </>
  )
}


