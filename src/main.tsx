import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@/app/store.ts'
import { RouterProvider } from 'react-router'
import { router } from '@/app/routes.ts'

if (import.meta.env.VITE_ENABLE_AXIOS_MOCK === 'true') {
  // 동적 모듈 가져오기로 Mock 관련 리소스는 클라이언트에 다운로드되지 않도록 한다.
  // `build`의 Rollup 에서도 제외된다.
  await import('./app/mock')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
