import Button from "../../components/button/button";
import { RiMovieLine } from "react-icons/ri";

const Homepage = () => {
  return (
    <div>
      <Button label={"movie"} icon={<RiMovieLine />} type={"primary"} />
    </div>
  );
};

export default Homepage;
