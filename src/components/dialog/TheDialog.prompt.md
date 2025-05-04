# Prompt for Common UI Component generate

## 요구 사항

- fileName: `src/components/dialog/TheDialog.tsx`
- 'shadcn/ui' component `src/components/ui/alert-dialog.tsx`를 이용하여 생성한다.
- props: title, description, okButtonLabel, cancelButtonLabel
- props: isRightCancelButton okButton과 cancelButton을 좌우 변경
- okButton 과 cancelButton 의 가로 사이즈는 7:3
- Storybook 생성
- cancelButton의 Label 왼쪽에 `<CircleX />` 추가
- okButton의 Label 왼쪽에 `<CircleCheck x/>` 추가