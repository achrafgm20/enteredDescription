

export default function Button({children, ...props}) {
  
  return (
    <button className='bg-stone-900 p-2 px-4  text-white rounded-2xl cursor-pointer hover:bg-stone-700' {...props}>{children}</button>
  )
}
