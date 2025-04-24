# API 생성 Prompt

## 기본 규칙
- API 이름과 기능 설명을 명확히 작성.
- API Module은 `import { api, ApiResponse } from '@/app/api'`를 사용한다.
- API 함수 위에 JSDoc 주석을 반드시 작성하고, 다음 예제와 같은 형식으로 작성한다.
- 요구한 method, query string, request body, response body에 맞게 API function 생성한다.
- 요구한 Domain 내 `*API.ts`에 API 호출 function을 생성하고, `*Mock.ts`에 mock function을 생성한다.
- 생성한 API 호출 함수에 맞게 `*API.test.ts`에 `MockAdapter`를 이용하여 Unit test를 생성한다. 
- 아래와 같은 요구 형식에 맞게 작성했는지 반드시 검증한다.
- 생성된 API 함수에 맞게 mock function을 생성한다.
- 생성 시 반드시 아래와 같은 순서와 구조를 준수한다.
- 최우선으로 위의 기본 규칙을 지킨다.

## 요구 형식
- API 기능 설명
  - domain: 같은 비즈니스단위의 그룹 (src/features/domain)
  - [required] API URL
  - [required] get | post | put | delete
  - [optional] path params:
    ```
    { param: type(example) }
    ```
  - [optional] query params:
    ```
    { param: type(example) }
    ```
  - [optional] request:
    ```
    { param: type(ex) }
    ```
  - [optional] response:
    ```
    { data: type(example) }
    ``` 

## 예제
### Me
- 개수를 조회한다.
  - domain: counter
  - /api/count
  - get
  - query param:
    { amount: number(0) }
  - response body:
    { data: number(1) }

### AI Assistant
```typescript
// src/features/counter/counterAPI.ts
export interface Count {
    data: number
}

/**
 * 개수를 조회한다.
 *
 * @param amount 초기 개수
 * @returns Count
 */
export const fetchCount = async (amount: number = 1) => {
    const response = await api.get('/api/count', {
        params: { amount },
    })
    return response.data as ApiResponse<Count>
}

// 새로운 API를 생성한다.
```

```typescript
// src/features/counter/counterMock.ts
import { Count } from '@/features/counter/counterAPI.ts'

const countMocks = (mock: AxiosMockAdapter) => {
    mock.onGet('/api/count').reply((config) => {
        const data: ApiResponse<Count> = {
            code: 200,
            message: 'success',
            data: config.params?.amount || 1,
        }
        return [200, data]
    })

    // 새로운 API에 맞게 mock 생성한다.
}
```

```typescript
// src/features/counter/counterAPI.test.ts

import { describe, expect, test, beforeEach } from 'vitest'
import MockAdapter from 'axios-mock-adapter'
import { api } from '@/app/api'
import { fetchCount } from './counterAPI'

describe('counterAPI', () => {
    let mockApi: MockAdapter

    beforeEach(() => {
        mockApi = new MockAdapter(api)
    })

    test('개수 조회', async () => {
        const mockResponse = {
            code: 200,
            message: 'success',
            data: 5,
        }
        mockApi
            .onGet('/api/count', { params: { amount: 5 } })
            .reply(200, mockResponse)

        const result = await fetchCount(5)
        expect(result).toEqual(mockResponse)
    })

    test('개수 조회 500 에러 응답', async () => {
        const mockResponse = {
            code: 500100,
            message: '서버에서 에러가 발생하였습니다.',
        }
        mockApi.onGet('/api/count').reply(500, mockResponse)

        await expect(fetchCount()).rejects.toThrow()
    })
})
```