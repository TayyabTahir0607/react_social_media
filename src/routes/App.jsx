import "./App.css";
import Header from "./components/header";
import SideBar from "./components/SideBar";
import Foorter from "./components/Footer";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/Post-list-store";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList className></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Foorter></Foorter>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
