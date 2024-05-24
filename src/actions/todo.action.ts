'use server'
import { revalidatePath } from "next/cache"
import { prisma } from '../../libs/prismadb'

export const createTodo = async (title: string) => {
    if (!title || !title.trim()) {
        return {
            error: 'Title is required'
        }
    }
    try {
        await prisma.todo.create({
            data: {
                title
            }
        })
        revalidatePath('/todo')
        return {
            success: true
        }
    } catch (error) {
        return {
            error: "Error al crear el todo"
        }
    }
}