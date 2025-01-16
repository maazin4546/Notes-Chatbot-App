import prisma from "../../lib/db/prisma"
import { auth } from "@clerk/nextjs"

export const metadata = {
  title: "Chatbot - Notes"
}

const Notes = async () => {

  const { userId } = auth()

  if (!userId) throw Error("userId undefined")

  const allNotes = await prisma.note.findMany({ where: { userId } })

  return (
    <div> {JSON.stringify(allNotes)}</div>
  )
}

export default Notes