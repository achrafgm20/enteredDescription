
import { useRef } from 'react';

export default function NewProject({onAdd, onClick , setOnClick}) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  
  function handleSave(e){
    e.preventDefault();
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });
    console.log(enteredTitle, enteredDescription, enteredDueDate);
  }
  return (
    <div className='flex  flex-col gap-4 items-center justify-center min-h-screen w-auto  p-6'>
      
      <form onSubmit={handleSave} className="flex flex-col gap-3">
        <div className='flex gap-3'>
        <button type="button" onClick={()=>setOnClick(!onClick)}> Cancel</button>
        <button className='text-white p-2 px-4 bg-amber-900 rounded-2xl'> Save</button>
      </div>
        <label htmlFor="title">Title</label>
        <input ref={title} type="text" placeholder='app Management' className='bg-white' />
        <label htmlFor="description">DESCRIPTION</label>
        <textarea ref={description} className='bg-white' />
        <label htmlFor="title">DUE DATE</label>
        <input ref={dueDate} type="date" placeholder='app Management'className='bg-white' />
      </form>
      
      </div>
  )
}
