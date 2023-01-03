import React from 'react'
import ReactDOM from 'react-dom/client'
import Tooltip from './Tooltip'

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (<div>
    <button onClick={() => setCount(count + 1)}>
      Click me!
    </button>
    <div>Count: {count}
    </div>
  </div>)
}

const Main = () => {
  return (<div>
    <Tooltip>
      <Counter />
    </Tooltip>
  </div>)
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
