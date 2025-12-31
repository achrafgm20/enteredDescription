import React from 'react'

export default function ProjectsSidebar({onStartAddProject, projects, onSelectProject, selectedProjectId}) {
  return (
    <div className='bg-stone-900 min-h-screen flex flex-col w-auto p-6 text-white'>
      <h1>Your Projects</h1>
      <button onClick={onStartAddProject} className='bg-stone-500 p-2 px-4  text-white rounded-2xl cursor-pointer hover:bg-stone-700'>+ add Project</button>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (project.id === selectedProjectId) {
            cssClasses += ' bg-stone-800 text-stone-200'
          } else {
            cssClasses += ' text-stone-400'
          }

          return (
            <li key={project.id}>
              <button 
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>

    </div>
  )
}
