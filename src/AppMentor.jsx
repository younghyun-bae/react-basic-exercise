import React from 'react';
import { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: 'Younghyun',
    title: 'Developer',
    mentor: {
      name: 'Christopher',
      title: 'Senior Developer',
    },
  });

  return (
    <div>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <p>
        {person.name}'s mentor is {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson(person => ({...person, mentor: {...person.mentor, name } }))
        }}
      >
        change the name of a mentor
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson(person => ({...person, mentor: {...person.mentor, title } }))
        }}
      >
        change the title of a mentor
      </button>
    </div>
  );
}

