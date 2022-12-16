import React from 'react';
import { useImmer } from 'use-immer';

export default function AppMentorImmer() {
  const [person, updatePerson] = useImmer(initialPerson);
  
  const handleUpdate = () => {
    const prev = prompt(`Whose name would you like to change?`);
    const current = prompt(`What is the name you would like to change?`);
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };
  const handleAdd = () => {
    const name = prompt(`What's the name of a mentor?`);
    const title = prompt(`What's the position of a mentor?`)
    updatePerson((person) => person.mentors.push({ name, title }));
  };
  const hadnleDelete = () => {
    const name = prompt(`Whose name would you like to delete?`);
    updatePerson((person) => {
      const index = person.mentors.findIndex(m=> m.name === name);
      if(index < 0) return;
      person.mentors.splice(index, 1);
    });
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
