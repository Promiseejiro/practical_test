import "./select.css";

const Select = ({ handleFetch }) => {
  return (
    <div className="select_container">
      <fieldset>
        <legend>Filter by...</legend>
        <select defaultValue={"123"} onChange={handleFetch}>
          <option>All</option>
          <option>Popular</option>
          <option>Series</option>
        </select>
      </fieldset>
    </div>
  );
};

export default Select;
