import React from 'react'
import { prisma } from '../../../libs/prismadb'

const ToDoPage = async () => {

    const todos = await prisma.todo.findMany()
    console.log(todos)

    const createTodo = async () => {
        'use server'
        console.log("server action")
    }

  return (
    <div>
      <h1 className="text-center text-3xl">Todos</h1>
      <form action={createTodo}>
        <input type="text" name='title' className='border rounded-md border-gray-500 mx-10' />
        <button type='submit' className='border rounded-lg border-gray-500 mr-2 p-2'>Submit</button>
      </form>
      <pre>
        {JSON.stringify(todos, null, 2)}
      </pre>
    </div>
  )
}

export default ToDoPage
