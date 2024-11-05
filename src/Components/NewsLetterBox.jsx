import React from 'react'

const NewsLetterBox = () => {
  const onSubmitHandler=(event)=>{
    event.preventDefault();
  }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% Off</p>
      <p className='text-gray-400 mt-3'>Stay in the loop! Subscribe to our newsletter for exclusive updates, insider tips, and early access to special offers.</p>
      <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' onSubmit={onSubmitHandler}>
        <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required/>
        <button type="submit" className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox