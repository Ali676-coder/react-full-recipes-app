import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div>
      <Link to="/" className="nav">
        <GiKnifeFork />
        <span className="logo-text">Delicious</span>
      </Link>
    </div>
  );
};

export default Logo;
