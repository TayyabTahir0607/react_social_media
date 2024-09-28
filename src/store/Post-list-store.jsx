import { createContext, useReducer } from "react";
export const PostListObj = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addPosts: () => {},
});
const PostListReducer = (state, action) => {
  let newList = state;
  if (action.type === "DELETE") {
    newList = state.filter((post) => post.id !== action.payload.ID);
  } else if (action.type === "ADD_POST") {
    newList = [action.payload, ...state];
  } else if (action.type === "ADD_POSTS") {
    newList = action.payload.posts;
  }
  return newList;
};
const PostListProvider = ({ children }) => {
  const addPost = (title, body, hashtag, reactions, userId) => {
    dispatchPosList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title,
        body,
        reactions,
        userId,
        tags: hashtag,
      },
    });
  };
  const addPosts = (posts) => {
    // console.log(posts);
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
  return (
    <PostListObj.Provider value={{ postList, addPost, deletePost, addPosts }}>
      {children}
    </PostListObj.Provider>
  );
};

export default PostListProvider;
