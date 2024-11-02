import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Submothandler = (e) => {
    e.preventDefault();
    console.log("Hello guys, form submitted");
    console.log("Email:", email, "Password:", password);
    setEmail('');
    setPassword('');
  };

  return (
    <> 
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="border-2 border-white-600 p-10 rounded-lg">
          <form onSubmit={(e) => { Submothandler(e); }} className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl my-5 me-auto">Log In</h1> 
            <input 
              required 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="rounded-lg mt-5 bg-transparent border-2 outline-none py-2 border-red-600 text-white px-5 min-w-[400px] placeholder:text-white"
            />
            <input 
              required 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password" 
              className="rounded-lg mt-5 bg-transparent border-2 outline-none border-red-600 text-white min-w-[400px] px-5 py-2 placeholder:text-white"
            />
            <button 
              className="mt-5 bg-emerald-400 border-2 py-2 border-green-600 text-white min-w-[200px] rounded-full transform transition-transform duration-300 ease-in-out hover:bg-emerald-500 hover:scale-105 hover:border-emerald-700"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
