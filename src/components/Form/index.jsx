import React from 'react'
import { useForm } from 'react-hook-form'
import { useHooks } from '../../api'
import cls from './index.module.css'

const FormTodo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = useForm()

  const {
    post: {
      isLoadingPost,
      postTodo,
    }
  } = useHooks()


  const createTodo = (data) => {
    postTodo('todos', data)
    reset()
  }

  if(isLoadingPost) return <p>loading...</p>

  return (
    <form className={cls.main}>
      <div className={cls.inputcss}>
        <input
          {...register('title', {
            required: 'Обязательное поле',
            minLength: {
              message: 'Минимум 3 символа',
              value: 3
            }
          })}
          placeholder='Введите заголовок'
        />
      </div>
      <p>{errors.title && errors.title.message}</p>
      <div className={cls.inputcss}>
        <input
          {...register('description', {
            required: 'Обязательное поле',
            minLength: {
              message: 'Минимум 3 символа',
              value: 3
            }
          })}
          placeholder='Введите задачу'
        />
      </div>
      <p>{errors.description && errors.description.message}</p>
      <button onClick={handleSubmit(createTodo)}>Создать</button>
    </form>
  )
}

export default FormTodo  