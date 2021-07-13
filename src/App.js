import Checker from "./components/checker";
import styled from "styled-components";
import GlobalStyle from "./components/global_style";

export default function App() {
  return (
    <Wrap>
      <GlobalStyle />
      <header>
        <h1>A11Y Color Contrast Checker</h1>
      </header>
      <main>
        <Checker />
      </main>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 1rem;
  text-align: center;
  max-width: 1000px;
  margin: auto;
`;
