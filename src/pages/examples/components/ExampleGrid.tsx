import { Link } from 'react-router-dom';

import { examples } from '../../../data/structure';
import ExampleItem from './ExampleItem';
const ExampleGrid = () => {
  return (
    <div className='mt-20 grid grid-cols-4'>
      {examples.map((example) => (
        <Link key={example.value} to={'/examples' + example.link}>
          <ExampleItem data={example} />
        </Link>
      ))}
    </div>
  );
};

export default ExampleGrid;
