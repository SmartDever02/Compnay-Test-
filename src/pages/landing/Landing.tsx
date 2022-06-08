const Landing = () => {
  const submitHandler = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = '/dashboard';
  };
  return (
    <div className='flex'>
      <div className='relative w-[60%]'>
        {/* <img src={background} alt='compnay' /> */}
      </div>
      <div className='mt-[100px] w-[40%] flex flex-col justify-center items-center'>
        <h2 className='text-[36px]'>Login Area</h2>
        <form
          action='dashboard'
          method='post'
          className='mt-4 flex items-center flex-col gap-4'
          onSubmit={submitHandler}
        >
          <div className='flex gap-2 items-center text-2xl'>
            <label className='w-[30%]'>Username:</label>
            <input
              name='username'
              className='w-[70%] p-[10px_15px] bg-darker rounded-full'
            ></input>
          </div>
          <div className='flex gap-2 items-center text-2xl'>
            <label className='w-[30%]'>Password:</label>
            <input
              name='password'
              className='w-[70%] p-[10px_15px] bg-darker rounded-full'
            ></input>
          </div>
          <button className='p-[15px_30px] bg-darker w-[300px] rounded-full'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Landing;
