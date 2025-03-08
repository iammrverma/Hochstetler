import { useLocation, useNavigate } from "react-router-dom";
import { capitalize, convertToTitle } from "../util";

const Breadcrumbs = ({ text, to }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathParts = location.pathname.split("/").filter(Boolean); // Remove empty parts
  const lastTwoParts = pathParts.slice(-2); // Get last two elements

  return (
    <div className="bredcrumbs" style={{ fontSize: "1rem" }}>
      <span className="pointer" onClick={() => navigate("/")}>
        Home
      </span>
      {lastTwoParts.length > 0 && " > "}

      {lastTwoParts.length === 2 && (
        <>
          <span
            className="pointer"
            onClick={() => navigate(to ? to : `/${lastTwoParts[0]}`)}
          >
            {text ? text : capitalize(lastTwoParts[0].replace(/-/g, " "))}
          </span>{" "}
          {` > `}
        </>
      )}

      <span className="text-neutral-light">
        {convertToTitle(
          lastTwoParts[lastTwoParts.length - 1].replace(/-/g, " ")
        )}
      </span>
    </div>
  );
};

export default Breadcrumbs;
