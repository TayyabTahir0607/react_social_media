import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListObj } from "../store/Post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import Spinner from "./Spinner";
const PostList = () => {
  const { postList, addPosts } = useContext(PostListObj);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <Spinner></Spinner>}
      {!loading && postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {!loading &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};
export default PostList;
