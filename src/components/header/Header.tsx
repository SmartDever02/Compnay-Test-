import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Header = () => {
  const [visible, setVisible] = useState(false);
  const path = window.location.pathname;
  const clickHandler = () => {
    setVisible(true);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  let username = searchParams.get('name');

  return (
    <>
      <header className='bg-[#151519] h-32 p-[10px_30px] flex items-center justify-between'>
        <p className='text-3xl'>Company Name</p>
        {path === '/dashboard' && (
          <div className='flex items-center gap-[20px]'>
            <div className='group relative w-[200px] h-[60px] flex justify-center items-center cursor-pointer'>
              Upload
              <ul className='hidden group-hover:block transition-all duration-200 absolute right-0 top-[60px]'>
                <li
                  onClick={clickHandler}
                  className='w-[150px] h-[60px] bg-darker hover:bg-dark flex justify-center items-center'
                >
                  Optum
                </li>
                <li className='w-[150px] h-[60px] bg-darker hover:bg-dark flex justify-center items-center'>
                  EMR
                </li>
              </ul>
            </div>
            <div>Welcome {username}!</div>
          </div>
        )}
      </header>
      {visible && (
        <>
          <div
            className='fixed w-full h-full top-0 left-0 bg-black opacity-60'
            onClick={() => setVisible(false)}
          ></div>
          <div className='absolute w-[750px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-darker p-[50px_60px] rounded-lg'>
            <div className='w-full h-[350px] border-dark border-2 flex justify-center items-center'>
              Select file or Dropdown
            </div>
            <div className='mt-[20px] flex'>
              <div className='ml-auto flex gap-4'>
                <button
                  onClick={() => setVisible(false)}
                  className='p-[10px_30px] border-dark border-2 hover:bg-dark'
                >
                  Select
                </button>
                <button
                  onClick={() => setVisible(false)}
                  className='p-[10px_30px] border-dark border-2 hover:bg-dark'
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
