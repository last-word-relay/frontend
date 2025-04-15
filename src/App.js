// App.jsx
import React, { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SearchSection } from "./components/SearchSection.jsx";
import styled from "styled-components";

const RootContainer = styled.div`
  width: auto;
  height: auto;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  minwidth: 300px;
  width: auto;
  height: 200px; /* 부모 요소의 높이 (예시) */
`;

export default function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <RootContainer>
      <Header />
      <SearchContainer>
        <SearchSection />
      </SearchContainer>
      <Footer />
    </RootContainer>
  );
}
