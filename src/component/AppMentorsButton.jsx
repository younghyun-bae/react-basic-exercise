import React from 'react';
import { memo, useCallback, useMemo, useReducer } from 'react';
import personReducer from '../reducer/person-reducer';

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt(`Whose name would you like to change?`);
    const current = prompt(`What is the name you would like to change?`);
    dispatch({ type: 'updated', prev, current });
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt(`What's the name of a mentor?`);
    const title = prompt(`What's the position of a mentor?`)
    dispatch({ type: 'added', name, title });
  }, []);

  const hadnleDelete = useCallback(() => {
    const name = prompt(`Whose name would you like to delete?`);
    dispatch({ type: 'deleted', name });
  }, []);


  return (
    <div>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text='change the name of a mentor' onClick={handleUpdate} />
      <Button text='add a mentor' onClick={handleAdd} />
      <Button text='delete a mentor' onClick={hadnleDelete} />
    </div>
  );
}

const Button = memo(({ text, onClick }) => {
  console.log('Button', text, 're-rendering...')
  const result = useMemo(() => calculateSomething(), []);
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log('😀');
  }
  return 10;
}

const initialPerson = {
  name: 'Younghyun',
  title: 'Developer',
  mentors: [
    {
      name: 'Christopher',
      title: 'Senior Developer',
    },
    {
      name: 'James',
      title: 'Senior Developer',
    },
    {
      name: 'Firas',
      title: 'Senior Developer',
    },
  ]
}
