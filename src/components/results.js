import styled from "styled-components"

export default function Results({large, small}) {
  return (
    <Wrap>
      <Item color={large.aa.toString()}>large text AA: {large.aa ? "pass" : "fail"}</Item>
      <Item color={large.aaa.toString()}>large text AAA: {large.aaa ? "pass" : "fail"}</Item>
      <Item color={small.aa.toString()}>small text AA: {small.aa ? "pass" : "fail"}</Item>
      <Item color={small.aaa.toString()}>small text AAA: {small.aa ? "pass" : "fail"}</Item>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  padding:
  1rem;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`

const Item = styled.div`
  color: white;
  background-color: ${props => props.color === 'true' ? "green" : "red"};
  padding: 20px;
  margin: 1rem;
`
