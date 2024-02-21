interface PropTypes {
  children: React.ReactNode;
  name: string;
}

const Tag = ({ children, name }: PropTypes) => {
  return (
    <>
      &lt;<span className='text-red-400'>{name}</span>&gt;
      {children}
      &lt;/<span className='text-red-400'>{name}</span>&gt;
    </>
  );
};

export default Tag;
