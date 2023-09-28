import './App.css';
import BookingApp from './components/BookingApp';
import JobList from './components/JobList';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

function App() {
  const [jobs] = useState([
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'ABC Tech',
      location: 'New York',
      description: 'We are looking for a talented frontend developer to join our team.',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'XYZ Solutions',
      location: 'San Francisco',
      description: 'Join our backend development team and work on exciting projects.',
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      company: 'Design Innovators',
      location: 'Los Angeles',
      description: 'We are seeking a creative UX/UI designer with a passion for user experience.',
    },
    {
      id: 4,
      title: 'Data Analyst',
      company: 'Data Insights Corp',
      location: 'Chicago',
      description: 'Join our data analytics team and help turn data into actionable insights.',
    },
    {
      id: 5,
      title: 'Product Manager',
      company: 'Tech Innovations Inc',
      location: 'Seattle',
      description: 'Seeking an experienced product manager to drive product development.',
    },
    {
      id: 6,
      title: 'Software Engineer',
      company: 'Code Wizards Ltd',
      location: 'Boston',
      description: 'Join a team of skilled software engineers and build innovative solutions.',
    },
    {
      id: 7,
      title: 'Marketing Specialist',
      company: 'Digital Marketers Co.',
      location: 'Miami',
      description: 'We need a marketing specialist to create and execute marketing campaigns.',
    },
    {
      id: 8,
      title: 'DevOps Engineer',
      company: 'Cloud Solutions LLC',
      location: 'Austin',
      description: 'Join our DevOps team and automate and streamline our development processes.',
    },
    {
      id: 9,
      title: 'Graphic Designer',
      company: 'Creative Designs Studio',
      location: 'Denver',
      description: 'We are looking for a talented graphic designer to create stunning visuals.',
    },
    {
      id: 10,
      title: 'Data Scientist',
      company: 'Data Science Experts',
      location: 'San Diego',
      description: 'Seeking a data scientist to analyze complex data sets and generate insights.',
    }
  ])
  const [searchQuery, setSearchQuery] = useState('');
  const filteredJobes = jobs.filter((job)=>
  job.title.toLowerCase().includes(searchQuery.toLowerCase()))

  
  return (  
   <>
    <Nav/>
    <BookingApp />
    <SearchBar onSearch = {setSearchQuery}/>
    {
      filteredJobes.length===0?(<p className='No-data-style'>No data fount</p>)
      :<JobList jobs={filteredJobes}/>
    }
   </>
  );
}

export default App;
