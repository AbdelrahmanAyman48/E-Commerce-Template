import PropTypes from "prop-types";
import RedButton from "./RedBtn";
import { Link } from "react-router-dom";

const ViewAllBtn = ({ name }) => {
  return (
    <Link to="/allProducts">
      <RedButton name={name} />
    </Link>
  );
};

ViewAllBtn.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ViewAllBtn;
