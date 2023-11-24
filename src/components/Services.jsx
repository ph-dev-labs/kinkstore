import React from "react";
import styled from "styled-components";
import Service from "./Service.jsx";
import json from "../services.json";

function Services() {
  return (
    <Container>
      {json.map(({ serviceHeading, serviceRendered, id }) => {
        // if the text serviceRendered includes a #, then serviceRendered is a text of the form (email#contact)
        if (serviceRendered.includes(`#`)) {
            // we use the string method "split" to split the string. This returns an array with two elements.
            // first element of the array will be an email and the second element with be a phone-no.
          const array = serviceRendered.split("#");
          return (
            <>
              <Service
                serviceHeading={serviceHeading}
                serviceRendered={array[0]}
                email={array[0]}
                contact={array[1]}
                index={id}
                key={id}
              />
            </>
          );
        } if (serviceRendered.includes(`%`)) {
          const array = serviceRendered.split("%");
          return (
            <Service
              serviceHeading={serviceHeading}
              serviceRendered={array[0]}
              extra={array[1]}
              index={id}
              key={id}
            />
          );
        } 
          return (
            <Service
              serviceHeading={serviceHeading}
              serviceRendered={serviceRendered}
              key={id}
              index={id}
              extra={id}
            />
          );
        }
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
`;

export default Services;
