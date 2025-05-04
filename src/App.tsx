import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { incrementAsync, selectCount } from '@/features/counter/counterSlice.ts'
import { useAppDispatch, useAppSelector } from '@/app/hooks.ts'
import { CounterButton } from '@/features/counter/components/ui/CounterButton.tsx'
import { CounterButtonGroup } from '@/features/counter/components/CounterButtonGroup.tsx'

function App() {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)

  return (
    <>
      <div className="flex flex-row justify-center gap-4">
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
        <a href="https://redux.js.org" target="_blank">
          <img
            src="https://redux.js.org/img/redux.svg"
            className="logo redux"
            alt="Redux logo"
          />
        </a>
        <a href="https://axios-http.com" target="_blank">
          <img src="/axios.svg" className="logo axios" alt="Axios logo" />
        </a>
        <a href="https://vitest.dev" target="_blank">
          <img
            src="https://vitest.dev/logo.svg"
            className="logo vitest"
            alt="Vitest logo"
          />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          <img
            src="/tailwindcss.svg"
            className="logo tailwindcss"
            alt="Tailwindcss logo"
          />
        </a>
        <a href="https://storybook.js.org" target="_blank">
          <img
            src="/storybook.svg"
            className="logo storybook"
            alt="Storybook logo"
          />
        </a>
        <a href="https://ui.shadcn.com" target="_blank">
          <img src="/shadcn.svg" className="logo ui" alt="shadcn/ui logo" />
        </a>
        <a href="https://lucide.dev" target="_blank">
          <img
            src="/logo.light.svg"
            className="logo lucide"
            alt="lucide logo"
          />
        </a>
      </div>
      <h1>
        Vite + React + Prettier + Redux + Axios + Vitest + Tailwindcss +
        Storybook + shadcn/ui + lucide
      </h1>
      <div className="card">
        <CounterButton
          className="mb-4"
          amount={count}
          onClick={() => dispatch(incrementAsync(1))}
        ></CounterButton>
        <CounterButtonGroup></CounterButtonGroup>
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
