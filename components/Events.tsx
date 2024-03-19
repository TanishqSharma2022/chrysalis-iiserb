import React from 'react'
import { Separator } from './ui/separator'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../components/ui/dialog"

const Events = () => {
    const events =[
        {
            title: "Concepts at 3 Levels",
            img: "/events/ca3l.jpg",
            description: "This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        },{
            title: "Sci-Comm Workshop",
            img: "/events/scicomm.jpg",
            description: "This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        }
    ]
  return (
    <div className="w-full md:px-24 py-12 p-8">
    <h1 className="font-sfheavy text-5xl ">Events</h1>
    <Separator />
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 mt-4">
        {events.map((event, index) => (
                <Dialog key={index}>
        <DialogTrigger>
            <div className='relative hover:scale-110 transition-all'>
                <div className='w-full h-full  absolute bg-black/50 grid place-items-center rounded-xl'>
                    <p className='font-sfbold text-white text-3xl'>{event.title}</p>
                </div>
                <img src={event.img} className='rounded-xl aspect-video' />
            </div>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>
            )
        )}
        </div>
    

  </div>
  )
}

export default Events
