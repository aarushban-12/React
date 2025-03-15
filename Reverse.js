import React, {useState, useMemo} from 'react';

const MyComponent = () => {
  const [value, setValue] = useState('');
  const [length, setLength] = useState(0);
  const reversedValue = useMemo(() => {
    console.log('Computing reversed value...');
    return value.split('').reverse().join('');
  }, [value]);

  return (
    <div>
      <input type='text' value={value} onChange={(e) => {
        setValue(e.target.value);
        setLength(e.target.value.length);
      }}/>
      <p>Original Value: {value}</p>
      <p>Reversed Value: {reversedValue}</p>
      <p>Length: {length}</p>
    </div>
  );
}

export default MyComponent;
