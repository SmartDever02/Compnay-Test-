import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import SearchExample from './Examples';
const UseTransition = lazy(
  () => import('../../examples/UseTransition/UseTransitionExample')
);

//import JSON data
import data from './data';

const Elements = [<SearchExample />, <UseTransition />];

const ExampleRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {data.map((one, index) => (
          <Route key={one.route} path={one.route} element={Elements[index]} />
        ))}
      </Routes>
    </Suspense>
  );
};
export default ExampleRoutes;
