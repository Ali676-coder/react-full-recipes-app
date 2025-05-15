import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div>
      <div className="nav">
        <GiKnifeFork />
        <Link to={"/"}>Delicious</Link>
      </div>
    </div>
  );
};

export default Logo;
