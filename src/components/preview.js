import styled from "styled-components";

const FontSizes = () => (
  <>
    <p style={{ fontSize: 12}}>small font size 12 <b>& bold</b></p>
    <p style={{ fontSize: 14}}>medium font size 14 <b>& bold</b></p>
    <p style={{ fontSize: 18}}>large font size 18 <b>& bold</b></p>
    <p style={{ fontSize: 24}}>extra large font size 24 <b>& bold</b></p>
  </>
)

export default function Preview({ color1, color2 }) {
  return (
    <Wrap>
      <Block bg={color1} color={color2}>
        <p>
          Text: {color2} Background: {color1}
        </p>
        <FontSizes />
      </Block>
      <Block bg={color2} color={color1}>
        <p>
          Text: {color1} Background: {color2}
        </p>
        <FontSizes />
      </Block>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Block = styled.div`
  background-color: ${props => props.bg};
  color: ${props => props.color};
  padding: 1rem;
  flex: 1;
  margin: 1px;

  p {
    margin: 10px 0;
  }
`;
