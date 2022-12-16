import React from 'react';
import { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
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
  });

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
      <button
        onClick={() => {
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
        }}
      >
        change the name of a mentor
      </button>
    </div>
  );
}

