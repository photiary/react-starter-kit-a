# Prompt for Common UI Component generate

## 요구 사항

- fileName: `src/components/dialog/TheDialog.tsx`
- 'shadcn/ui' component `src/components/ui/alert-dialog.tsx`를 이용하여 생성한다.
- props: title, description, okButtonLabel, cancelButtonLabel
- props: isRightCancelButton- okButton과 cancelButton을 좌우 변경
- okButton 과 cancelButton 의 가로 사이즈는 7:3
- Storybook 생성
- cancelButton의 Label 왼쪽에 `<CircleX />` lucide 추가
- okButton의 Label 왼쪽에 `<CircleCheck x/>` lucide 추가
- props: type 'warning|error|info'- warning은 title 오렌지색, error는 붉은색, info는 초록색
- `<Info />` lucide 추가(size 48px, position left top, translate(-50%, -50%))
- type을 표시하는 아이콘 바탕은 하얀색
- type이 warning은 `<CircleAlert size={48} />` error는 `<Ban size={48} />`
- type을 표시하는 아이콘에 y축 회전 transition 1000ms, ease-out, repeat delay 500ms