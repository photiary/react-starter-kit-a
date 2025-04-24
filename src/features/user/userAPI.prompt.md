# 고통 요구사항
- domain: user
- '이름' 등과 같은 param은 한글이 포함될 수 있다.

# 각 API 요구사항
- USER-001) 사용자를 조회한다.
  - /api/user/{id} 
  - get
  - response:
    ```
    {
      code: number(200)
      message: string(success)
      data: {
        id: string(임의 24자 문자열),
        name: string(홍길동),
        email: string,
        createDate: string,
        updateDate: string,
      }
    }
    ```

- USER-002) 사용자를 갱신한다.
  - /api/user/{id}
  - put
  - request:
    ```
    {
      name: string,
      email: string,
    }
    ```

- USER-003) 사용자를 삭제한다.
  - /api/user/{id}
  - delete

- USER-004) 사용자 목록을 조회한다.
  - /api/users
  - get
  - query params
    ```
    {
      name: string(길동)
    }
    ```
  - response
    ```
    {
      code: number
      message: string
      data: {
        total: number
        list: [
          {
            id: number,
            name: string,
            email: string,
            createDate: string,
            updateDate: string,
          }
        ]
      }
    }
    ```