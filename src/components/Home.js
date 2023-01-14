import React, { useEffect } from "react";

const Home = () => {
  useEffect(()=>{
    document.title="Home || Courses"
  },[])
  return (
    <div style={{background:"#e9ecef"}} className="jumbotron jumbotron-fluid text-center">
      <div className="container">
          <h1 className="display-3">Courses</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal space
            of its parent.
          </p>
        </div>
    </div>
  );
};

export default Home;
