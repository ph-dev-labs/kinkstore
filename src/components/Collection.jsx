import React from "react";
import styled from 'styled-components'

function Collection() {
  return (
    <div>
      <Button>click me</Button>
    </div>
  );
}

// const Button =styled.button<{ $isClicked?: boolean; }>`
//   color: ({isClcked})=> isClicked ? 'red': 'orange';
// `;


const Button = styled.button`
color: ${props => props.text ? "red": "orange"};
`

export default Collection;
