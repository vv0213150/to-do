import React from "react"
const API = 'https://practice-1-92911-default-rtdb.asia-southeast1.firebasedatabase.app/'

export const useHooks = () => {
    // const [isLoadingPost, setIsLoadingPost] = React.useState(false)
    // const [isLoadingGet, setIsLoadingGet] = React.useState(false)
    const [todos, setTodos] = React.useState(null)

    async function postTodo(resourse, body) {
        try {
                // setIsLoadingPost(true)
                await fetch(`${API}${resourse}.json`, {
                method: 'POST',
                body: JSON.stringify(body)
            })
        } catch (error) {
            console.log(error + 'some errors in postTodo function')
        } finally {
            // setIsLoadingPost(false)
        }
    }
    
    async function getTodo(resourse) {
        try {
        // setIsLoadingGet(true)
            const response = await fetch(`${API}${resourse}.json`)
            const data = await response.json()
            const tasks = Object.entries(data).map(([id, task]) => ({
            id,
            ...task,
        }))
        setTodos(tasks)
        } catch (error) {
            console.log(error + 'some error in getTodo function')
    
        } finally {
            // setIsLoadingGet(false)
        }
    }

    async function deleteTodo(resourse, id) {
        try {
            await fetch(`${API}${resourse}/${id}.json`, {
                method: 'DELETE'
            })
        } catch(error) {
            console.log(error + 'some error in deleteTodo function')
        }
        
    } 

    async function editTodo(resourse, id, body) {
        try {
            await fetch(`${API}${resourse}/${id}.json`, {
                method: 'PUT',
                body: JSON.stringify(body)
            })
        } catch (error)  {
            console.log(error + 'some error in editTodo function')
            
        }
    }

    return {
        get: {
            // isLoadingGet,
            todos,
            getTodo,
        },
        post: {
            // isLoadingPost,
            postTodo,
        },
        delete: {
            deleteTodo
        },
        edit: {
            editTodo
        }
    }
}