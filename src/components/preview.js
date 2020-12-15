import styled from 'styled-components'

export default function Preview({ color1, color2}) {
  return (
    <Wrap>
      <Block bg={color1} color={color2}>
        <p>Text: {color2} Background: {color1}</p>
      </Block>
      <Block bg={color2} color={color1}>
        <p>Text: {color1} Background: {color2}</p>
      </Block>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  
  @media(max-width: 768px) {
    flex-direction: column;
  }
`

const Block = styled.div`
  background-color: ${props => props.bg};
  color: ${props => props.color};
  padding: 1rem;
  flex: 1;
`
