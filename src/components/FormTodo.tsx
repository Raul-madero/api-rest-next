'use client'
import React from 'react'
import { createTodo } from '@/actions/todo.action'
import { useRef } from 'react'
import ButtonFormTodo from './ButtonFormTodo'
import toast from 'react-hot-toast'

const FormTodo = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const handleSubmit = async (data: FormData) => {
        const title = data.get('title') as string
        if (!title || !title.trim()) {
            toast.error('Title is required')
            return
        }
        const res = await createTodo(title)
        if (res.error) {
            toast.error(res.error)
            return
        }
        formRef.current?.reset()
        toast.success('Todo creado correctamente')
    }
    return (
        <form className="flex" ref={formRef} action={handleSubmit}>
            <input type="text" name='title' className='border border-gray-400 rounded p-2 mr-2 w-full' />
            <ButtonFormTodo />
        </form>
    )
}

export default FormTodo
