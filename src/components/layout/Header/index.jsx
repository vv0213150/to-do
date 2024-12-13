import React from 'react'
import cls from './index.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className={cls.header}>
        <h1>To-DO</h1>
        <Link to={'/todo'} ><button>Начало работы</button></Link>
      </div>
      <div className={cls.info}>
        <h1>TO-DO LIST</h1>
        <p>A list of tasks is not an obstacle, but a path to greater goals. Good luck on this journey!</p>
      </div>
    </>
  )
}

export default Header
