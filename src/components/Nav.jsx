import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../store/features/postsSlice";

const Nav = ({ search }) => {
  const dispatch = useDispatch();
  return (
    <nav className="Nav">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input
          id="search"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </form>
    </nav>
  );
};

export default Nav;
