import React from "react";
import styled from "styled-components";
import { useGetCategoriesProductQuery } from "../redux/api/api";
import { Link } from "react-router-dom";

function CreateList({ data }) {

  return (
    <Container>
      <ul>
        {data.map(({ id, choice }) => (
          <li key={id}>
            <i>
              <Link to={`/category/${id}`}>{choice}</Link>
            </i>
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: #677279;
  ul li {
    list-style-type: circle;
    text-transform: capitalize;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

export default CreateList;
