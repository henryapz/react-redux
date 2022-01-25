import { Link } from "react-router-dom";

const Footer = () => (
  <div>
    <Link to="/">All</Link>
    {/* <Link to="/active">Pending</Link> */}
    <Link to="/completed">Completed</Link>
  </div>
);

export default Footer;
