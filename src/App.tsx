import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { increment, selectCount } from '@/features/counter/counterSlice.ts'
import { useAppDispatch, useAppSelector } from '@/app/hooks.ts'

function App() {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://prettier.dev" target="_blank">
          <img
            src="https://prettier.io/icon.png"
            className="logo prettier"
            alt="Prettier logo"
          />
        </a>
      </div>
      <h1>Vite + React + Prettier</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
