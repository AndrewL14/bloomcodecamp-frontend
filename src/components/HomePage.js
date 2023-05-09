import React from 'react';

function HomePage(props) {
  return (
    <div>
      <div className='container'>
        <div className='cloud' />
      </div>
      <h1 className="heading">Homepage</h1>
      <h3 className="subheading">Welcome Learners and CodeReviewers!</h3>
      <button className="homepage-button" onClick={() => {window.location.href = "http://localhost:3000/login"}}>
        <span>Login</span>
        <i></i>
      </button>
    </div>
  );
}

export default HomePage;