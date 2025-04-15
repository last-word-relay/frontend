// components/WriteSection.jsx
import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  minwidth: 300px;
  maxwidth: 500px;
  height: wrap-content;
  justifycontent: "center";
  align-items: center; /* 세로 방향 가운데 정렬 (선택 사항) */
  background-color: "red";
`;

const SearchContainer = styled.div`
  width: 100%;
  minWidth: 300px;
  justifyContent: 'center';
  align-items: center; /* 세로 방향 가운데 정렬 (선택 사항) */
  gap: 10px; /* 요소 사이
`;

const Search = styled.input`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
  minwidth: 200px;
  minheight: 50px;
  width: 300px;
  box-shadow: 2px 2px 5px #eee; /* 그림자 효과 */

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Button = styled.button`
  background-color: #4f46e5;
  color: white;
  font-size: 1rem;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  minwidth: 50px;
  minheight: 50px;
  width: 100%;

  &:hover {
    background-color: #4338ca;
  }
`;

export const SearchSection = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [media, setMedia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return;

    onSubmit({ title, body, media, date: new Date().toLocaleString() });

    setTitle("");
    setBody("");
    setMedia("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchContainer>
        <div>
          <Search
            type="text"
            name="keyworkd"
            value="무덤의 위치를 입력해주세요."
          />
        </div>
        <div>
          <Button>Dig</Button>
        </div>
      </SearchContainer>
    </Form>
  );
};
