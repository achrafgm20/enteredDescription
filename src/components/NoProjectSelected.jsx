import React from 'react'
import img from '../assets/image.png'
import Button from './Button'

export default function NoProjectSelected({onStartAddProject}) {
  return (
    <div className='flex flex-col gap-4 items-center justify-center w-full'>
      <img src={img} alt="img" className='w-16 h-16' />
      <h2>No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <Button onClick={onStartAddProject}>Create new project</Button>
    </div>
  )
}
