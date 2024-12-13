import React from 'react'
import cls from './indx.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className={cls.header}>
        <h1>To-DO</h1>
        <Link to={'/'} ><button>Назад</button></Link>
      </div>
    </>
  )
}

export default Header