// components/Header.jsx
//

import styled from "styled-components";

const HeaderContainer = styled.header`
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
`;

const Title = styled.h1`
  font-family: 'Noto Sans KR', sans-serif; /* 나눔고딕, sans-serif 계열 폰트 */
  font-weight: 700; /* 볼드 처리 */
  font-size: 2.5em; /* 글자 크기 */
  color: #333; /* 글자 색상 */
  margin-bottom: 20px; /* 아래 여백 */
  text-align: center; /* 가운데 정렬 (선택)
  minwidth: 300px;
`;

export const Header = () => (
  <HeaderContainer>
    <Title>Last Word Relay</Title>
  </HeaderContainer>
);
