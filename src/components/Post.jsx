import { useContext } from "react";
import { PostListObj } from "../store/Post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListObj);
  // console.log(post);
  return (
    <div
      className="card text-bg-primary mb-3 post-card"
      style={{ maxWidth: " 18rem" }}
    >
      <span className=" bg-danger reations">{post.reactions}</span>

      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={() => deletePost(post.id)}
      >
        <i className="fa-solid fa-trash"></i>
      </span>
      <div className="card-body">
        <h5 className="card-title">{post.title} </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span
            className="badge rounded-pill text-bg-dark hash-tags "
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Post;
