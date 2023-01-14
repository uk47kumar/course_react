import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Card, CardBody } from "reactstrap";
import base_url from "../api/bootapi";

const UpdateCourse = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [course, setCourse] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    document.title = "Update Course || Courses";

    const loadUser = async (e) => {
      await axios.get(`${base_url}/courses/${id}`).then(
        (response) => {
          toast.success("Course Loaded");
          console.log(response.data)
          setCourse(response.data);
        },
        (error) => {
          toast.error("Something Went Wrong");
        }
      );
    };
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${base_url}/courses/${id}`, course).then(
      (respones) => {
        toast.success("Course Updated Successfully");
        navigate("/view-course");
      },
      (error) => {
        toast.error("Something Went Wrong");
      }
    );
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Card className="text-center">
        <CardBody style={{ background: "#e9ecef" }}>
          <h1 className="display-3 text-center">Update Course</h1>
        </CardBody>
      </Card>
      <div className="form-group">
        <label htmlFor="title">Course Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter Course Title"
          defaultValue={course.title}
          onChange={(e) => {
            setCourse({ ...course, title: e.target.value });
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Course Description</label>
        <textarea
          className="form-control"
          id="description"
          rows={3}
          defaultValue={course.description}
          onChange={(e) => {
            setCourse({ ...course, description: e.target.value });
          }}
        />
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-success mr-3">
          Update
        </button>
        <button type="reset" className="btn btn-warning">
          Reset
        </button>
      </div>
    </form>
  );
};

export default UpdateCourse;
