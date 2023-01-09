import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "./actions/user";
import AdminPanel from "./components/Admin/AdminPanel";
import Timeline from "./components/Admin/Timeline";
import Youtube from "./components/Admin/Youtube";
import Project from "./components/Admin/Project";
import Loader from "./components/Loader/Loader";

function App() {
  // const dispatch = useDispatch();

  // const { isAuthenticated } = useSelector((state) => state.login);
  // const { loading, user } = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(getUser());
  //   dispatch(loadUser());
  // }, [dispatch]);

  return (
    <Router>
       
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home/>
                
              }
            />
            <Route path="/about" element={<About/>} />
          </Routes>
          
         <Footer/>
        </>
     
    </Router>
  );
}

export default App;
