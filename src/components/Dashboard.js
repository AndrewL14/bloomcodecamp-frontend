import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import parseJwt from '../assets/utils/jwtUtils';
import fetcher from '../assets/utils/fetcherUtils';

function Dashboard(props) {
  const assignments1 = [
    { id: 1, 
      number: 101, 
      stat: "pending",
      githubUrl: "https://github.com/BloomTechBackend/bd-java-fundamentals-project-TheProgrammer18"},
    { id: 2, 
      number: 201, 
      stat: "completed",
      githubUrl: "https://github.com/BloomTechBackend/bd-futures-found-me-AndrewL14" },
    { id: 3, 
      number: 301, 
      stat: "completed",
      githubUrl: "https://github.com/BloomTechBackend/bd-in-memory-caching-amazon-gaming-membership-AndrewL14" },
    { id: 4, 
      number: 401, 
      stat: "pending",
      githubUrl: "https://github.com/BloomTechBackend/bd-intro-to-hardware-and-operating-systems-AndrewL14" }
  ];

  const navigate = useNavigate();

  const [assignments, setAssignments] = useState(null);

  useEffect(() => {
    fetcher("api/assignments", "get", props.data)
      .then((assignmentsData) => {
        setAssignments(assignmentsData);
      })
  }, [props.data]);

  function createAssignment(e) {
    e.preventDefault();
    fetcher("api/assignments", "post", props.data)
      .then((assignment) => {
        navigate(`/assignments/${assignment.id}`);
      });
  };

  
  return (
    <div>
      <h1>Dashboard</h1>
      <h3> Welcome {props.data ? parseJwt(props.data)['sub'] : <></>}</h3>
      <button className="create-btn" onClick={(e) => createAssignment(e)}>Make New Assignment</button>
      <div className='assignmentsContainer'>
        {
          assignments1?.map((item) => {
            return (
              <div className='assignmentCard' key={item.id}>
                <h2> Assignment #{item.number}</h2>
                <h5> Status: {item.stat}</h5>
                <p>Github URL: {item.githubUrl}</p>
                <button className="edit-btn">Edit</button>
              </div>
            )
          })
        }
      </div>
      <button className="logout-button" onClick={() => {window.location.href = "http://localhost:3000/"}}>
        <span>Logout</span>
        <i></i>
      </button>
    </div>
  )
}

export default Dashboard;