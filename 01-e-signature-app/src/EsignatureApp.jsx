import React, { useState } from 'react';
import Title from './components/Title';

export default function EsignatureApp() {
  const [name, setName] = useState('Your Signature');
  const [date, setDate] = useState('');

  const nameChangeHandler = e => {
    setName(e.target.value);
  };

  const dateChangeHandler = e => {
    setDate(e.target.value);
  };

  const inputStyle = {
    border: 'none',
    borderBottom: '2px dotted',
    outline: 'none',
    padding: '.35rem 0',
  };

  document.body.style.background = '#eee';

  return (
    <div className='container text-center'>
      <Title classes={'title'} text={name} />
      <Title classes={'main-title mb-4'} text={!date ? 'DoB' : date} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto
        ab praesentium dicta eos officia consectetur eius, suscipit illo quod
        esse tenetur vitae nam nemo officiis ullam aliquid asperiores
        consequuntur!
      </p>
      <footer
        className='d-flex'
        style={{
          justifyContent: 'space-around',
          position: 'relative',
          top: '40vh',
        }}
      >
        <input
          type='date'
          style={inputStyle}
          value={date}
          onChange={dateChangeHandler}
        />
        <input
          type='text'
          style={inputStyle}
          value={name}
          onChange={nameChangeHandler}
        />
      </footer>
    </div>
  );
}
