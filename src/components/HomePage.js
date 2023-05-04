import React from 'react';

function HomePage(props) {
  return (
    <div>
      <h1 className="heading">HOMEPAGE</h1>
      <h3 className="subheading">Welcome Learners and CodeReviewers!</h3>
      <button className="login-button" onClick={() => {window.location.href = "http://localhost:3000/login"}}>Login</button>
    </div>
  );
}

export default HomePage;