# Prompt for Notification domain API generate

## Basic feature

- domain: notification

## API features

- NOTIFICATION-001) 알림 목록을 조회한다. createDate DESC.

  - /api/notification/list
  - get
  - query params
    ```
    {
      rows: number
      pageNo: number
    }
    ```
  - response
    ```
    {
      code: number
      message: string
      data: {
        id: number,
        title: string,
        subTitle: string,
        content: string,
        isRead: boolean,
        createDate: string,
      }
    }
    ```

- NOTIFICATION-002) 읽지 않은 알림 개수를 조회한다.

  - /api/notification/newCount
  - get
  - response

  ```
  {
    code: number,
    message: string,
    data: {
      count: number
    }
  }
  ```

- NOTIFICATION-003) 알림 읽음 상태를 갱신한다.

  - /api/notification/read/{id}
  - put
