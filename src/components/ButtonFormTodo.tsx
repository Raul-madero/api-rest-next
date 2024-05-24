'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'
import { FaSpinner } from'react-icons/fa'

const ButtonFormTodo = () => {
    const {pending, data, method, action} = useFormStatus()
  return (
    <button type='submit' className='border border-gray-400 rounded p-2'>
        {
            pending? (
                <span>
                    <FaSpinner className='animate-spin' />
                </span>
            ) : 'Agregar'
        }
    </button>
  )
}

export default ButtonFormTodo
