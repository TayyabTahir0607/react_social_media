import { createContext, useReducer } from "react";
import { useState, useEffect } from "react";

export const PostListObj = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  loading: false,
});
const PostListReducer = (state, action) => {
  let newList = state;
  if (action.type === "DELETE") {
    newList = state.filter((post) => post.id !== action.payload.ID);
  } else if (action.type === "ADD_POST") {
    newList = [action.payload.post, ...state];
    console.log(newList);
    console.log(action.payload.post);
  } else if (action.type === "ADD_POSTS") {
    newList = action.payload.posts;
  }
  return newList;
};
const PostListProvider = ({ children }) => {
  let [loading, setLoading] = useState(false);
  const addPost = (post) => {
    dispatchPosList({
      type: "ADD_POST",
      payload: {
        post,
      },
    });
  };
  const addPosts = (posts) => {
    dispatchPosList({
      type: "ADD_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (ID) => {
    dispatchPosList({ type: "DELETE", payload: { ID } });
  };
  const [postList, dispatchPosList] = useReducer(PostListReducer, []);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        setLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <PostListObj.Provider value={{ postList, addPost, deletePost, loading }}>
      {children}
    </PostListObj.Provider>
  );
};

export default PostListProvider;
