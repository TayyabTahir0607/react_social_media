import { useContext } from "react";
import Post from "./Post";
import { PostListObj } from "../store/Post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import Spinner from "./Spinner";
const PostList = () => {
  const { postList, loading } = useContext(PostListObj);
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
