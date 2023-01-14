import Header from "./components/Header";
import Home from "./components/Home";
import { ToastContainer, toast } from "react-toastify";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";
import { Col, Container, Row } from "reactstrap";
import Menus from "./components/Menus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import UpdateForm from "./components/UpdateForm";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Container>
        <Header />
        <Row>
          <Col md={3}>
            <Menus />
          </Col>
          <Col md={9}>
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/add-course" element={<AddCourse />} exact />
              <Route path="/view-course" element={<AllCourses />} exact />
              <Route path="/about" element={<About />} exact />
              <Route path="/updateCourse/:id" element={<UpdateForm/>} exact />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
