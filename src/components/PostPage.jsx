import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, selectPosts } from "../store/features/postsSlice";

const PostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector(selectPosts);
  const post = posts.find((post) => post.id === Number(id));

  const handleDelete = () => {
    dispatch(deletePost(Number(id)));
    navigate("/");
  };

  return (
    <main className="PostPage">
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.datetime}</p>
          <p>{post.body}</p>
          <button onClick={handleDelete}>Delete Post</button>
        </>
      ) : (
        <p>Post not found</p>
      )}
    </main>
  );
};

export default PostPage;
