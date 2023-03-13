const Lista1 = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ul>
      {items.map((item, key) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
};

export default Lista1;
