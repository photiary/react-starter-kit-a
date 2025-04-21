- USER-001) 사용자를 조회한다.
  - domain: user
  - url: /api/user/{id} 
  - method: get
  - response body:
    ```
    {
      code: number
      message: string
      data: {
        id: number,
        name: string,
        email: string,
        createDate: string,
        updateDate: string,
      }
    }
    ```
- USER-002) 사용자를 갱신한다.
- USER-003) 사용자를 삭제한다.
- USER-004) 사용자 목록을 조회한다.