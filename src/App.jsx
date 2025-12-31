
import { useState } from 'react'
import './index.css'
import ProjectsSidebar from './components/ProjectsSidebar'
import NoProjectSelected from './components/NoProjectSelected'
import Button from './components/Button'
import NewProject from './components/NewProject'
import SelectedProject from './components/SelectedProject'

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });
 
  function handleStartAddProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleSelectProject(id) {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  function handleAddTask(text) {
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = (
    <SelectedProject 
      project={selectedProject} 
      tasks={projectsState.tasks.filter(task => task.projectId === projectsState.selectedProjectId)}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <div className='bg-gray-200 min-h-screen flex flex-row w-full'>
     <ProjectsSidebar 
       onStartAddProject={handleStartAddProject}
       projects={projectsState.projects} 
       onSelectProject={handleSelectProject}
       selectedProjectId={projectsState.selectedProjectId}
     />
     <div className='flex-1 flex flex-col gap-4 items-center justify-center min-h-screen w-full '>
        {content}
     </div>
     
    </div>
  )
}

export default App
