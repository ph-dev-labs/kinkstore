import React, { useEffect } from "react";
import "./DropNav.styles.css";
import { useGetCategoryQuery } from "../../redux/api/api";

const DropNav = () => {
  const { data, isLoading, isError, refetch } = useGetCategoryQuery();

  useEffect(() => {
    refetch();
  }, []);

  if(data) {
    console.log(data)
  }

  return (
    <div className="dropnav">
      <ul className="nav-items">
        <li className="nav-item">New</li>
        <li className="nav-item">FAQ</li>
        <select id="all-categories" className="categories-dropdown">
          {isLoading ? (
            <option>Loading...</option>
          ) : isError ? (
            <option>Error fetching categories</option>
          ) : (
            data?.map((item) => <option key={item.id} value={item.choice} className="option">{item.choice}</option>)
          )}
        </select>
      </ul>
    </div>
  );
};

export default DropNav;
