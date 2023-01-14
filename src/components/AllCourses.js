import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import Course from "./Course";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    document.title = "All Courses || Courses";
  }, []);

  const getAllCourseFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        // for success
        console.log(response.data);
        toast.success("course has been loaded !");
        setCourses(response.data);
      },
      (error) => {
        // for error
        toast.error("something went wrong !");
      }
    );
  };

  // calling loading courses function
  useEffect(() => {
    getAllCourseFromServer();
  }, []);

  const realTimeRemoveCourse = (id) => {
    setCourses(courses.filter((c) => c.id != id));
  };

  return (
    <div>
      <Card>
        <CardBody style={{background:"#e9ecef"}}>
          <h1 className="display-3 text-center">All Courses</h1>
        </CardBody>
      </Card>

      {courses.length > 0
        ? courses.map((item) => (
            <Course
              key={item.id}
              course={item}
              realTimeRemove={realTimeRemoveCourse}
            />
          ))
        : "No Courses"}
    </div>
  );
};
export default AllCourses;
