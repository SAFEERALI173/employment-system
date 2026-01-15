import { BABox, BAButton } from 'basuite'
import React from 'react'

const CreateTask = () => {
  return (
 <BABox className='mt-8 bg-[#1c1c1c] p-10 rounded-xl shadow-2xl border border-gray-800'>
        <form className='flex flex-wrap w-full items-start justify-between gap-10'>
          
          {/* Left Column: Input Fields */}
          <div className='w-full lg:w-1/2 flex flex-col gap-5'>
            <div>
              <h3 className='text-sm text-gray-300 mb-1 font-medium'>Task Title</h3>
              <input 
                className='w-full py-2.5 px-4 rounded bg-transparent border-[1px] border-gray-600 outline-none focus:border-emerald-500 transition-all'
                type="text" 
                placeholder='Make a UI design' 
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-300 mb-1 font-medium'>Date</h3>
              <input 
                className='w-full py-2.5 px-4 rounded bg-transparent border-[1px] border-gray-600 outline-none focus:border-emerald-500 transition-all'
                type="date" 
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-300 mb-1 font-medium'>Assign to</h3>
              <input 
                className='w-full py-2.5 px-4 rounded bg-transparent border-[1px] border-gray-600 outline-none focus:border-emerald-500 transition-all'
                type="text" 
                placeholder='Employee name' 
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-300 mb-1 font-medium'>Category</h3>
              <input 
                className='w-full py-2.5 px-4 rounded bg-transparent border-[1px] border-gray-600 outline-none focus:border-emerald-500 transition-all'
                type="text" 
                placeholder='Design, Dev, etc.' 
              />
            </div>
          </div>

          {/* Right Column: Description & Button */}
          <div className='w-full lg:w-2/5 flex flex-col'>
            <h3 className='text-sm text-gray-300 mb-1 font-medium'>Description</h3>
            <textarea 
              className='w-full h-44 py-2 px-4 rounded bg-transparent border-[1px] border-gray-600 outline-none focus:border-emerald-500 transition-all'
              placeholder='Detailed description of the task...'
            ></textarea>

            <div className='mt-6'>
               <BAButton 
                  label="Create Task" 
                  className='w-full bg-emerald-500 hover:bg-emerald-600 py-3 rounded-lg font-semibold text-lg transition-all shadow-lg active:scale-95'
               />
            </div>
          </div>

        </form>
      </BABox>  )
}

export default CreateTask