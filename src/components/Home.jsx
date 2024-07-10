import React from "react";
import { useSelector } from "react-redux";
import { selectSearchResults } from "../store/features/postsSlice";

const Home = () => {
  const searchResults = useSelector(selectSearchResults);
  return (
    <main className="Home">
      {searchResults.length ? (
        searchResults.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
          </article>
        ))
      ) : (
        <p>No posts to display</p>
      )}
    </main>
  );
};

export default Home;
