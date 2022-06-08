import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  const submitHandler = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    // window.localStorage.setItem('username', name);
  };

  const changeHandler = (e: any) => {
    setName(e.target.value);
  };
  return (
    <div className='flex'>
      <div className='relative w-[60%]'>
        <div className='h-full w-full flex justify-center items-center p-10 text-3xl'>
          Oh, no, My account has just been suspended by an accident!
          <br /> Here is my contact number, until I fix the problem, let's keep
          in touch with this.
          <br /> Telegram: SmartK02 Gmail: smart.jamesjin@gmail.com
        </div>
        {/* <img src={background} alt='compnay' /> */}
      </div>
      <div className='mt-[100px] w-[40%] flex flex-col justify-center items-center'>
        <h2 className='text-[36px]'>Login Area</h2>
        <form
          // action='/dashboard'
          // method='post'
          className='mt-16 flex items-center flex-col gap-8'
          onSubmit={submitHandler}
        >
          <div className='flex gap-2 items-center text-2xl'>
            <label className='w-[30%]'>Username:</label>
            <input
              required
              value={name}
              onChange={changeHandler}
              name='username'
              className='w-[70%] p-[10px_30px] bg-darker rounded-full'
            ></input>
          </div>
          <div className='flex gap-2 items-center text-2xl'>
            <label className='w-[30%]'>Password:</label>
            <input
              required
              name='password'
              className='w-[70%] p-[10px_30px] bg-darker rounded-full'
            ></input>
          </div>
          <a
            href='/dashboard'
            className='mt-10 p-[15px_30px] bg-darker w-[300px] rounded-full'
          >
            Login
          </a>
        </form>
      </div>
    </div>
  );
};
export default Landing;
