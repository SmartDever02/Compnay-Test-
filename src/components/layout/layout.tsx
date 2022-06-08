import Header from '../header/Header';

const Layout = ({ children }: any) => {
  return (
    <div className='min-w-screen min-h-screen'>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
