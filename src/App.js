import Checker from './components/checker'
import styled from 'styled-components'

export default function App() {
  return (
    <Wrap>
      <header>
        <h1>A11Y Color Contrast Checker</h1>
      </header>
      <main>
        <Checker />
      </main>
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 1rem;
  text-align: center;
`
