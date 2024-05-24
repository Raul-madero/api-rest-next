'use client'
import React from 'react'
import { createTodo } from '@/actions/todo.action'
import { useRef } from 'react'

const FormTodo = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const handleSubmit = async (data: FormData) => {
        const title = data.get('title') as string
        await createTodo(title)
        formRef.current?.reset()
    }
    return (
        <form ref={formRef} action={handleSubmit}>
            <input type="text" name='title' className='border border-gray-400 rounded p-2 mr-2' />
            <button type='submit' className='border border-gray-400 rounded p-2'>Submit</button>
        </form>
    )
}

export default FormTodo
