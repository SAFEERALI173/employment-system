import { BABox, BAButton, BAPera} from 'basuite'

const Header = () => {
  return (
   
    <BABox className='text-white flex items-end justify-between'>

        <BAPera className='text-2xl'> <b>Hello </b>, <br /><b className='text-3xl'>Safeer Ali</b> 👋</BAPera>
        <BAButton label="Log Out" className='w-full py-3 '/>
    </BABox>
  )
}

export default Header