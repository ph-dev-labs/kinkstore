import React from "react";
import styled from "styled-components";
import { useGetCategoriesProductQuery } from "../redux/api/api";
import { Link } from "react-router-dom";

function CreateList({ data , toogle}) {

  return (
    <Container>
      <ul>
        {data.map(({ id, choice }) => (
          <p key={id}>
            <i>
              <Link onClick ={toogle} to={`/category/${id}`}>{choice}</Link>
            </i>
          </p>
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
  margin-bottom: 2rem;
  height: 30%;
  ul p {
    color: inherit;
    cursor: pointer;
    padding-left: 0.5rem;
    position: relative;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

export default CreateList;
