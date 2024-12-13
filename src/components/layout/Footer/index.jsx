import React from 'react'
import cls from './index.module.css'
import { Link } from 'react-router-dom'

const HeaderTwo = () => {
  return (
    <>
      <div className={cls.header}>
        <h1>To-DO</h1>
        <Link to={'/'} ><button>Назад</button></Link>
      </div>
    </>
  )
}

export default HeaderTwo