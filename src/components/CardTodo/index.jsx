import React from 'react'
import { useHooks } from '../../api'
import { useForm } from 'react-hook-form'

import cls from './index.module.css'

const CardTodo = ({ title, description, id, isDone }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const {
    delete: {
      deleteTodo
    },
    edit: {
      editTodo
    }
  } = useHooks()

  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
        title,
        description
    }
  })

  const handleDelete = (id) => {
    deleteTodo('todos', id)
  }

  const handleDone = (id) => {
    const doneTask = { title, description, isDone: !isDone }

    editTodo('todos', id, doneTask)
  }

  const changeTodo = (data) => {
    const changeTask = {...data, isDone }

    editTodo('todos', id, changeTask)
  }

  return (
    <div className={cls.card_todo}>
    {
        isOpen ? (
        <div >
            <div className={cls.edi_field}>
                <input
                    {...register('title', {
                        required: 'обязательное поле',
                        minLength: {
                        value: 3,
                        message: 'Минимум 3 символа'
                        }
                    })}
                    type="text"
                />
                <input
                    {...register('description', {
                        required: 'обязательное поле',
                        minLength: {
                        value: 3,
                        message: 'Минимум 3 символа'
                        }
                    })}
                    type="text"
                />
            </div>
            <div className={cls.main_btn}>
                <div className={cls.edi_field_btn}>
                    <button onClick={() => setIsOpen(false)}>назад</button>
                </div>
                <div className={cls.edi_field_btn}>
                    <button onClick={handleSubmit(changeTodo)} >отправить</button>
                </div>
            </div>
        </div>
        ) : (
        <>

            <h1>{title}</h1>
                
            <p>{description}</p>
                
            <div className={cls.btn}>
                <button  onClick={() => handleDelete(id)}>delete</button>
                <button  onClick={() => handleDone(id)}>{!isDone ? <>выполнен</> : <> не выполнен </>}</button>
                <button  onClick={() => setIsOpen(true)}>изменить</button>
            </div>
        </>
        )
    }
    </div>
  )
}

export default CardTodo