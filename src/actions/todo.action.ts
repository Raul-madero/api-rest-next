'use server'
import { revalidatePath } from "next/cache"
import { prisma } from '../../libs/prismadb'

export const createTodo = async (title: string) => {
    const newTodo = await prisma.todo.create({
        data: {
            title
        }
    })
    revalidatePath('/todo')
}