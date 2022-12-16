import React from 'react';
import { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentor() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`Whose name would you like to change?`);
    const current = prompt(`What is the name you would like to change?`);
    dispatch({ type: 'updated', prev, current });
  };
  const handleAdd = () => {
    const name = prompt(`What's the name of a mentor?`);
    const title = prompt(`What's the position of a mentor?`)
    dispatch({ type: 'added', name, title });
  };
  const hadnleDelete = () => {
    const name = prompt(`Whose name would you like to delete?`);
    dispatch({ type: 'deleted', name });
  };


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
      <button onClick={handleUpdate}>
        change the name of a mentor
      </button>
      <button onClick={handleAdd}>
        add a mentor
      </button>
      <button onClick={hadnleDelete}>
        delete a mentor
      </button>
    </div>
  );
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
