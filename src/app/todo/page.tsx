import React from 'react'
import { prisma } from '../../../libs/prismadb'
import FormTodo from '@/components/FormTodo'

const ToDoPage = async () => {

    const todos = await prisma.todo.findMany()


  return (
    <div className='container p-10'>
      <h1 className="text-center text-3xl my-10">Todos</h1>
      <FormTodo />
      <pre>
        {JSON.stringify(todos, null, 2)}
      </pre>
    </div>
  )
}

export default ToDoPage
