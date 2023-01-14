import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import base_url from "../api/bootapi";

const Course = ({ course, realTimeRemove }) => {
  //delete function
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("Course deleted Successfully !");
        realTimeRemove(id);
      },
      (error) => {
        toast.error("Something Went Wrong !");
      }
    );
  };

  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.description}</p>
        <div className="text-center">
          <button
            onClick={() => {
              deleteCourse(course.id);
            }}
            className="btn btn-danger mr-3"
          >
            Delete
          </button>
          <Link to={`/updateCourse/${course.id}`} className="btn btn-warning">Update</Link>
        </div>
      </div>
    </div>
  );
};
export default Course;
