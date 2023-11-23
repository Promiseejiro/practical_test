import { IoMdSearch } from "react-icons/io";

import "./search.css";
const Search = ({ onChangeHandler }) => {

  const handleChange = (e) => {
    onChangeHandler(e.target.value);
  };

  return (
    <div className="input_controller">
      <input type="text" placeholder="movie name" onChange={handleChange} />
      <span>
        <IoMdSearch />
      </span>
    </div>
  );
};

export default Search;
