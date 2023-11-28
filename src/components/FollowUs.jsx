import React from "react";
import styled from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function FollowUs() {
  return (
    <Container>
      <p>Follow Us</p>
      <Socials>
        <div>
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
      </Socials>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 0.5rem;
  color: inherit;
  p {
    text-align: start;
    color: inherit;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #677279;
`;

const Facebook = styled(FacebookOutlinedIcon)`
  color: inherit;
`;
const Twitter = styled(TwitterIcon)`
  color: inherit;
`;
const Instagram = styled(InstagramIcon)`
  color: inherit;
`;
export default FollowUs;
