const Container = (props: PropType) => {
  return (
    <div
      className={`max-w-screen overflow-x-hidden sm:px-[2%] md:px-[5%] ${props?.addClass}`}
    >
      {props.children}
    </div>
  );
};

interface PropType {
  children: any;
  addClass?: string;
}

export default Container;
