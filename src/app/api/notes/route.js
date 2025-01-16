import prisma from "@/lib/db/prisma"
import { createNoteSchema } from "@/lib/validation/note"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const body = await req.body()
        const parseResult = createNoteSchema.safeParse(body)

        if (!parseResult.success) {
            console.error(parseResult.error)
            return NextResponse.json({ error: "Invalid Input" }, { status: 400 })
        }

        const { title, content } = parseResult.data

        const { userId } = auth()

        if (!userId) {
            return NextResponse.json({ error: "Unauthorize" }, { status: 401 })
        }

        const note = await prisma.note.create({
            data: {
                title,
                content,
                userId,
            }
        })

        return NextResponse.json({ note }, { status: 201 })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}