import React from 'react';
import { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState(initialPerson);
  
  const handleUpdate = () => {
    const prev = prompt(`Whose name would you like to change?`);
    const current = prompt(`What is the name you would like to change?`);

    setPerson(person => ({
      ...person, 
      mentors: person.mentors.map((mentor => {
        if(mentor.name === prev) {
          return {...mentor, name: current};
        }
        return mentor;
      })),
    }));
  };
  const handleAdd = () => {
    const name = prompt(`What's the name of a mentor?`);
    const title = prompt(`What's the position of a mentor?`)
    setPerson(person => ({
      ...person, 
      mentors: [...person.mentors, { name, title }],
      // [{ name, title }, ...person.mentors] 배열 맨 앞에 추가
    }));
  };
  const hadnleDelete = () => {
    const name = prompt(`Whose name would you like to delete?`);
    setPerson(person => ({
      ...person, 
      mentors: person.mentors.filter((m) => m.name !== name),
    }));
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
