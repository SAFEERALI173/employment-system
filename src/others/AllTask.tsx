import { BABox } from 'basuite'

const AllTask = () => {
  return (
    <BABox className='bg-[#1c1c1c] p-5 rounded-lg mt-5'>
      
      {/* Table Header */}
      <div className='bg-red-400 mb-2 py-3 px-4 flex justify-between rounded-md'>
        <h2 className='text-lg font-bold w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-bold w-1/5 text-center'>Task Title</h3>
        <h5 className='text-lg font-bold w-1/5 text-right'>Status</h5>
      </div>

      {/* Task List Container */}
      <div className='flex flex-col gap-3'>
        
        {/* Task Row 1 */}
        <div className='border-[1px] border-emerald-500 py-3 px-4 flex justify-between rounded-lg bg-emerald-500/10'>
          <h2 className='text-lg font-semibold w-1/5 text-white'>Safeer Ali</h2>
          <h3 className='text-lg font-medium w-1/5 text-center text-gray-200'>Make a UI Design</h3>
          <h5 className='text-lg font-bold w-1/5 text-right text-emerald-400'>Completed</h5>
        </div>

        {/* Task Row 2 */}
        <div className='border-[1px] border-blue-500 py-3 px-4 flex justify-between rounded-lg bg-blue-500/10'>
          <h2 className='text-lg font-semibold w-1/5 text-white'>Ahmed Raza</h2>
          <h3 className='text-lg font-medium w-1/5 text-center text-gray-200'>Fix API Auth</h3>
          <h5 className='text-lg font-bold w-1/5 text-right text-blue-400'>In Progress</h5>
        </div>

        {/* Task Row 3 */}
        <div className='border-[1px] border-yellow-500 py-3 px-4 flex justify-between rounded-lg bg-yellow-500/10'>
          <h2 className='text-lg font-semibold w-1/5 text-white'>Zainab Bibi</h2>
          <h3 className='text-lg font-medium w-1/5 text-center text-gray-200'>Client Meeting</h3>
          <h5 className='text-lg font-bold w-1/5 text-right text-yellow-400'>Pending</h5>
        </div>

        {/* Task Row 4 */}
        <div className='border-[1px] border-purple-500 py-3 px-4 flex justify-between rounded-lg bg-purple-500/10'>
          <h2 className='text-lg font-semibold w-1/5 text-white'>Bilal Khan</h2>
          <h3 className='text-lg font-medium w-1/5 text-center text-gray-200'>Database Backup</h3>
          <h5 className='text-lg font-bold w-1/5 text-right text-purple-400'>Active</h5>
        </div>

        {/* Task Row 5 */}
        <div className='border-[1px] border-red-500 py-3 px-4 flex justify-between rounded-lg bg-red-500/10'>
          <h2 className='text-lg font-semibold w-1/5 text-white'>Sara Shah</h2>
          <h3 className='text-lg font-medium w-1/5 text-center text-gray-200'>Bug Report</h3>
          <h5 className='text-lg font-bold w-1/5 text-right text-red-400'>Failed</h5>
        </div>

        {/* Task Row 6 */}
        <div className='border-[1px] border-pink-500 py-3 px-4 flex justify-between rounded-lg bg-pink-500/10'>
          <h2 className='text-lg font-semibold w-1/5 text-white'>Usman Ali</h2>
          <h3 className='text-lg font-medium w-1/5 text-center text-gray-200'>Logo Branding</h3>
          <h5 className='text-lg font-bold w-1/5 text-right text-pink-400'>Active</h5>
        </div>

      </div>
    </BABox>
  )
}

export default AllTask