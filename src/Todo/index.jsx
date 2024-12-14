import React from 'react'
import { useHooks } from '../api'
import cls from './index.module.css'
import FormTodo from '../components/Form'
import CardTodo from '../components/CardTodo'
import HeaderTwo from '../components/layout/HeaderTwo'

export const Todo = () => {
  const {
    get: {
      getTodo,
      isLoadingGet,
      todos,
    }
  } = useHooks()

  React.useEffect(() => {
    getTodo('todos')
  }, [getTodo])
  
  if(isLoadingGet) return <p>Loading...</p>

  return (
    <div >
      <HeaderTwo />
      <FormTodo />
      <div className={cls.todo}>
        {!todos?.length && <p className={cls.p_text}>no item</p>}
        {todos?.map((item) => (<CardTodo {...item} key={item.id} />))}
      </div>
    </div>
  )
}
