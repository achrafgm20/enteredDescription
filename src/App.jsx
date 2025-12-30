

import { useState } from 'react'
import './index.css'
import ProjectsSidebar from './components/ProjectsSidebar'
import NoProjectSelected from './components/NoProjectSelected'
import Tasks from './components/Tasks'
import Button from './components/Button'
import NewProject from './components/NewProject'

function App() {
  const [onClick , setOnClick] = useState((false))
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });
 
  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      };
    });
    setOnClick(false);
  }

 console.log(onClick)
  return (
    <div className='bg-gray-200 min-h-screen flex flex-row w-full'>
     <ProjectsSidebar 
       onClick={onClick} 
       setOnClick={setOnClick} 
       projects={projectsState.projects} 
     />
     <div className='flex flex-col gap-4 items-center justify-center min-h-screen w-full '>
         
         {onClick ? 
        <NewProject 
          onAdd={handleAddProject}
          onClick={onClick} 
          setOnClick={setOnClick} /> 
        :
        <>
          <NoProjectSelected/>
          <Button  onClick={onClick} setOnClick={setOnClick} /> 
        </>
        
        }
        <Tasks />
     </div>
     
    </div>
  )
}

export default App
