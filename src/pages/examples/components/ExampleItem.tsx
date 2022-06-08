import { memo } from 'react';

const ExampleItem = ({ data }: PropType) => {
  return <div className='h-48 bg-darker rounded-lg'></div>;
};

interface PropType {
  data: DataType;
}
interface DataType {
  value: string;
  description: string;
  link: string;
}

export default memo(ExampleItem);
