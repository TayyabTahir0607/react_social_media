import { useContext, useRef } from "react";
import { PostListObj } from "../store/Post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListObj);
  const titleElement = useRef();
  const bodyElement = useRef();
  const userIdElement = useRef();
  const hashtagElement = useRef();
  const reactionElement = useRef();
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const hashtag = hashtagElement.current.value.split(" ");
    const reactions = reactionElement.current.value;
    const userId = userIdElement.current.value;
    titleElement.current.value = "";
    bodyElement.current.value = "";
    hashtagElement.current.value = "";
    reactionElement.current.value = "";
    userIdElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: hashtag,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        addPost(res);
        console.log(res);
      });
  };
  return (
    <form className="my-post" onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label"></label>
        Title
        <input
          ref={titleElement}
          placeholder="Enter your title"
          type="text"
          className="form-control"
          id="Email1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Body
        </label>
        <input
          ref={bodyElement}
          placeholder="Enter your caption"
          type="text"
          className="form-control"
          id="body"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Hashtags
        </label>
        <input
          ref={hashtagElement}
          placeholder="Enter your hashtag separated with spaces"
          type="text"
          className="form-control"
          id="body"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          User Id
        </label>
        <input
          ref={userIdElement}
          placeholder="Enter your Id"
          type="text"
          className="form-control"
          id="body"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Reactions
        </label>
        <input
          ref={reactionElement}
          placeholder="Enter your reactions"
          type="text"
          className="form-control"
          id="body"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
