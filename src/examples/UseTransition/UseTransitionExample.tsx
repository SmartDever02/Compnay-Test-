import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';

import Container from '../../components/containers';

const UseTransition = () => {
  const [size, setSize] = useState(3);
  const [query, setQuery] = useState('');
  const [data, setData] = useState([
    { id: 'initial ID', username: 'James Jin' },
  ]);

  const fetchData = useCallback(() => {
    // console.log('fetch function triggered, size:', size);
    fetch(`https://random-data-api.com/api/users/random_user?size=${size}`)
      .then((res) => res.json())
      .then(setData);
    // .then(setRealDataFunc);
  }, [size]);

  useEffect(() => {
    console.log('effect by size', size, data);
    fetchData();
  }, [size]);

  useEffect(() => {
    console.log('effect by query', size, data);
  }, [query]);
  ``;
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('uery change log');
    // setQuery(e.target.value);
    setQuery(e.target.value);
    // setRealDataFunc();
  }, []);

  const handleChangeBounce = (e: React.ChangeEvent<HTMLInputElement>) => {
    const debounceFunc = debounce(handleChange, 1000);
    debounceFunc(e);
  };

  const handleSize = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(~~e.target.value);
  }, []);

  const handleSizeBounce = (e: React.ChangeEvent<HTMLInputElement>) => {
    const debouncedFunc = debounce(handleSize, 500);
    debouncedFunc(e);
  };

  return (
    <Container addClass='mt-32'>
      <div className='w-[50vw] flex flex-col gap-[20px]'>
        <div className='p-[10px_30px] bg-darker flex justify-between items-center text-lg'>
          <p>
            Number Of Users' Data From API:{' '}
            <input
              type='number'
              className='w-[100px] bg-primary rounded-full pl-[15px]'
              defaultValue={size}
              onChange={(e) => handleSizeBounce(e)}
            />
          </p>
          <button
            className='p-[10px_20px] bg-primary rounded-full'
            onClick={() => console.log(data)}
          >
            Add Data
          </button>
        </div>

        <input
          className='bg-[#ffffff30] p-[20px_40px] rounded-full'
          onChange={handleChangeBounce}
        />
        <div className='h-[60vh] bg-darker rounded-[32px] p-3'>
          <ul className='h-full rounded-[20px] overflow-x-hidden'>
            {data?.map((one, index) => (
              <li
                className='p-[10px_30px] bg-primary even:bg-darker rounded-[30px]'
                key={one?.id || index}
              >
                {one?.username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default UseTransition;
