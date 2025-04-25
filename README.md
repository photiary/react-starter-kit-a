# React Starter kit

### 사용 패키지

React + TypeScript + Vite + ESLint + Prettier + Redux + Axios + Vitest + Tailwindcss

### React

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# 🍟 Prettier

- https://prettier.io/docs/en/install

```shell
pnpm add --save-dev --save-exact prettier

# .prettierrc 에서 prettier.config.js 로 수정
node --eval "fs.writeFileSync('prettier.config.js','')"

node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
```

`prettier.config.js` 리소스에 규칙 추가

- https://prettier.io/docs/en/configuration

```javascript
/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  singleQuote: true,
  trailingComma: 'es5',
  endOfLine: 'auto', // LF|CRLF 자동으로 개행문자 사용 https://prettier.io/docs/en/options.html#end-of-line
}

export default config
```

### eslint-config-prettier ESLint와 충돌나는 규칙을 위해 설치

- https://prettier.io/docs/en/integrating-with-linters
- https://github.com/prettier/eslint-config-prettier

```shell
pnpm add -D eslint-config-prettier
```

### eslint-plugin-prettier Prettier 규칙을 ESLint로 실행하기 위해 설치

- https://github.com/prettier/eslint-plugin-prettier?tab=readme-ov-file#installation

```shell
pnpm add -D eslint-plugin-prettier
```

### 설치 후 확인

스크립트를 실행하여 리소스를 초기 규칙에 맞게 수정되는 것을 확인한다. (IDE의 자동 포맷은 IDE prettier 설정 필요)

- Intellij는 "Settings > Prettier > run for files"에 `.md` 확장자 추가

```shell
pnpm prettier . --write
```

# Redux

- https://redux.js.org/introduction/installation#complementary-packages

```shell
pnpm add @reduxjs/toolkit

pnpm add react-redux
```

- `@` import 에서 참조할 수 있도록 추가

```shell
pnpm add -D @types/node
```

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')  // src 폴더를 @로 사용
        }
    }
})
```

`tsconfig.app.json`
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### template 리소스

- https://github.com/reduxjs/redux-templates/tree/master/packages/vite-template-redux

# 🥓 Axios

- https://axios-http.com/docs/intro

```shell
pnpm add axios
```

### axios-mock-adapter

- https://www.npmjs.com/package/axios-mock-adapter

```shell
pnpm add -D axios-mock-adapter
```

# 🧂 Vitest

- https://vitest.dev/guide/

```shell
pnpm add -D vitest
```

# 💨 Tailwindcss

- https://tailwindcss.com/docs/installation/using-vite
- https://github.com/tailwindlabs/prettier-plugin-tailwindcss

```shell
pnpm add tailwindcss @tailwindcss/vite

pnpm add -D prettier prettier-plugin-tailwindcss
```