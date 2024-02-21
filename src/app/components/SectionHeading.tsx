interface PropTypes {
  children: React.ReactNode;
  number: number;
  small?: boolean;
}

const SectionHeading = ({ children, number, small }: PropTypes) => {
  return (
    <h2 className={`col-span-12 text-6xl font-bold ${small && 'col-span-6 '}`}>
      <span className='align-top text-2xl text-blue-400'>_0{number} </span>
      {children}
    </h2>
  );
};

export default SectionHeading;
