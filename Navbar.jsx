import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/category/${search}`);
      setSearch("");
    }
  };

  return (
    <nav className="navbar">
      <h2>News Hub</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/category/business">Business</Link>
        <Link to="/category/sports">Sports</Link>
        <Link to="/category/technology">Technology</Link>
        <Link to="/about">About</Link>
      </div>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
