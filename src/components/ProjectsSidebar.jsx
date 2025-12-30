import React from 'react'

export default function ProjectsSidebar({onClick, setOnClick, projects}) {
  return (
    <div className='bg-stone-900 min-h-screen flex flex-col w-auto p-6 text-white'>
      <h1>Your Projects</h1>
      <button onClick={() => setOnClick(!onClick)} className='bg-stone-500 p-2 px-4  text-white rounded-2xl cursor-pointer hover:bg-stone-700'>+ add Project</button>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">{project.title}</button>
          </li>
        ))}
      </ul>

    </div>
  )
}
