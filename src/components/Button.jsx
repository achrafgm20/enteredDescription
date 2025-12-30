

export default function Button({setOnClick , onClick}) {
  
  return (
    <div onClick={()=>setOnClick(!onClick)} className='bg-stone-900 p-2 px-4  text-white rounded-2xl cursor-pointer hover:bg-stone-700'>Create new project</div>
  )
}
