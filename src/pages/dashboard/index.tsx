const Dashboard = () => {
  return (
    <div className='mt-[50px] px-[50px]'>
      <div className='flex gap-4 h-[50px]'>
        <input className='bg-darker w-[60%] h-full px-[20px]'></input>
        <button className='w-[20%] bg-darker'>Edit Record</button>
        <button className='w-[20%] bg-darker'>Label Record</button>
      </div>
      <div className='mt-[20px] bg-darker'>
        <div className='flex'>
          <div className='w-full p-[10px_0px_10px_20px]'>Col1</div>
          <div className='w-full p-[10px_0px_10px_20px]'>Col2</div>
          <div className='w-full p-[10px_0px_10px_20px]'>Col3</div>
          <div className='w-full p-[10px_0px_10px_20px]'>Col4</div>
          <div className='w-full p-[10px_0px_10px_20px]'>Col5</div>
        </div>
        <div className='bg-[#43434d] h-[350px] flex justify-center items-center'>
          No Data Found
        </div>
      </div>
      <div className='mt-[20px] p-4 flex gap-[15px]'>
        <span className='cursor-pointer bg-darker rounded-full w-[50px] h-[50px] flex justify-center items-center'>
          1
        </span>
        <span className='cursor-pointer bg-darker rounded-full w-[50px] h-[50px] flex justify-center items-center'>
          2
        </span>
        <span className='cursor-pointer bg-darker rounded-full w-[50px] h-[50px] flex justify-center items-center'>
          3
        </span>
        <span className='cursor-pointer bg-darker rounded-full w-[50px] h-[50px] flex justify-center items-center'>
          4
        </span>
        <span className='cursor-pointer bg-darker rounded-full w-[50px] h-[50px] flex justify-center items-center'>
          {`>>`}
        </span>
        <span className='cursor-pointer bg-darker rounded-full w-[50px] h-[50px] flex justify-center items-center'>
          55
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
