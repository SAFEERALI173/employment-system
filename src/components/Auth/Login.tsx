
import React, {  useState } from 'react'

const Login = () => {
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e:any) => {
    e.preventDefault()
    console.log('email:',email)
    console.log('password:',password)
    
    setEmail('email')
    setPassword('password')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-black text-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-100">Login</h2>
        
        <form 
         onSubmit={(e)=>{
          handleSubmit(e)
         }}
         className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-100">Email</label>
            <input 
            value={email}
             onChange={(e)=> {
                setEmail(e.target.value)
              }
             }
              type="email" 
              className="mt-1 w-full p-2 border border-emerald-300 rounded focus:ring-2 focus:ring-emerald-600 outline-none"
              placeholder="email@example.com"
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-100">Password</label>
            <input 
             value={password}
             onChange={(e)=> {
              setPassword(e.target.value)
             }}
              type="password" 
              className="mt-1 w-full p-2 border border-emerald-300 rounded focus:ring-2 focus:ring-emerald-600 outline-none"
              placeholder="••••••••"
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-emerald-300 text-black py-2 rounded-full  hover:bg-emerald-600 transition font-semibold"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-500">
          Don't have an account? <a href="#" className="text-gray-100 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;