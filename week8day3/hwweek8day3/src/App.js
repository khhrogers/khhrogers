import React, { useState } from 'react';


const initialData= {
  students: [
    {
      name: 'Cait Yomorta',
      bio: ' I am from Mars....',
      scores: [
        { date: '2018-02-08', score: 77 },
        { date: '2018-04-22', score: 92 },
        { date: '2018-09-15', score: 68 }
      ]
    },
    {
      name: 'Holly Baird',
      bio: 'I am from Jupiter...',
      scores: [
        { date: '2018-12-14', score: 88 },
        { date: '2019-01-09', score: 79 },
        { date: '2019-02-23', score: 91 },
        { date: '2019-03-01', score: 95 }
      ]
    },
    {
      name: 'Wes Mungia',
      bio: 'I am from Venus...',
      scores: [
        { date: '2018-10-11', score: 62 },
        { date: '2018-11-24', score: 74 },
        { date: '2018-12-19', score: 85 }
      ]
    }
  ]
}

function App() {
  const [studentData, setStudentData] = useState(initialData);
  return (
    <div className="App">
      <h1>Homework Week 8 day 3 </h1>
    
  
      <ul>
      {studentData.students.map((student, index) => {
        return (
          <li key={index}>
            <h2>{student.name}</h2>
            <p>{student.bio}</p>
            <ul>
              {student.scores.map((scoreItem, scoreIndex) => (
                <li key={scoreIndex}>{scoreItem.date}: {scoreItem.score}</li>
              ))}
            </ul>
          </li>
        );
      })} </ul>







    </div>
  );
}
export default App;

