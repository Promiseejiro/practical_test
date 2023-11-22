import { IoMdSearch } from "react-icons/io";

import "./search.css";
const Search = () => {
  return (
    <div className="input_controller">
      <input type="text" placeholder="movie name" />
      <span>
        <IoMdSearch />
      </span>
    </div>
  );
};

export default Search;
