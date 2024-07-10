import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Missing from "./components/Missing";
import Footer from "./components/Footer";

const App = () => {
  const search = useSelector((state) => state.posts.search);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header title="React JS Blog" />
          <Nav search={search} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<NewPost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
