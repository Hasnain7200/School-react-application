import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sports from '../src/assets/sports-day.jpg'
import Cultural from '../src/assets/Cultural-fest.jpeg'
import ScienceExebition from '../src/assets/Science-Exebition.jpeg'
import classrooms from '../src/assets/Classroom.jpeg'
import Library from '../src/assets/Library.jpeg'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const ACADEMICS = [
  {
    year: "Primary",
    role: "Grade(1-5)",
    subjects: `English, Mathematics, Science, Social Studies, Art, Physical Education`,

  },
  {
    year: "Secondary",
    role: "Grade(6-10)",
    subjects: ` English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art`,
  },
  {
year: "Senior Secondary",
    role: "Grade(11-12)",
    subjects: `  Physics, Chemistry, Biology, Mathematics, Computer Science, English`,
  },
  {
    year: "Teaching Methodologies",
    subjects: `We use a blend of traditional and modern teaching techniques to cater to different learning styles."`,
  },
  {
    year: "Educational Resources",
    subjects: `Digital classrooms, interactive learning modules, and access to online educational platforms.`,
  },
];


export const FACULTY = [
  {
    name: "Sports Day Event",
    image: Sports,
    description:
       "Students participating in various sports events.",
  },
  {
    name: "Science Exebition",
    image: ScienceExebition,
    description:
    "Students presenting their science projects.",
    
  },
  {
    name: "Cultural Fest",
    image: Cultural,
    description:
      "Students performing in the cultural fest."

  },
  {
    name: "Clasrooms of our school",
    image:classrooms,
    description:
      "A glimpse of our interactive classrooms.",
  
  },
  {
    name: "Library of our School",
    image:Library,
    description:
       "Students reading and studying in the school library.",
  },

];

