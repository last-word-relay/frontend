// components/Footer.jsx

import styled from "styled-components";

const RootContainer = styled.div``;

const FooterText = styled.footer`
  text-align: center;
`;

export const Footer = () => (
  <RootContainer>
    <FooterText className="text-center text-sm text-gray-500 p-4 mt-10">
      &copy; {new Date().getFullYear()} Final Word Relay All rights reserved.
    </FooterText>
  </RootContainer>
);
