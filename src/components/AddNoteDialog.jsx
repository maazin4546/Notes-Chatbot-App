import { createNoteSchema } from '../lib/validation/note'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const AddNoteDialog = ({ oprn, setOpen }) => {

    const form = useForm({
        resolver: zodResolver(createNoteSchema)
    })

    async function onSubmit(input) {
        console.log(input)
    }

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Note</DialogTitle>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onsubmit)} className='space-y-3'>
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Note Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Note title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Note Title</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Note title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNoteDialog