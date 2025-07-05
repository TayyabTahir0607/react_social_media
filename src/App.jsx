import "./App.css";
import Header from "./components/header";
import SideBar from "./components/SideBar";
import Foorter from "./components/Footer";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/Post-list-store";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar></SideBar>
        <div className="content">
          <Header></Header>
          <div className="container">
          <Outlet></Outlet>
          </div>
          <Foorter></Foorter>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
