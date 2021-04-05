import Checker from './components/checker'
import styled from 'styled-components'
import Collections from './components/collections'

export default function App() {
  return (
    <Wrap>
      <header>
        <h1>A11Y Color Contrast Checker</h1>
      </header>
      <main>
        <Checker />
      </main>
      <Collections />
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 1rem;
  text-align: center;
  max-width: 1000px;
  margin: auto;
  background-color: #efefef;
`
