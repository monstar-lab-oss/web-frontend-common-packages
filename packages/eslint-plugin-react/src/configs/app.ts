import cloneDeep from 'lodash/cloneDeep'
import core from './core'

const app = cloneDeep<any>(core)

app.rules = {
  ...app.rules,
  "import/no-extraneous-dependencies": [
    "error",
    { devDependencies: ["**/*.stories.tsx"] },
  ],
  "no-restricted-imports": [
    "error",
    {
      patterns: ["@app/features/*/*/*"],
    },
  ],
}

app.overrides.push({
  files: ["src/index.tsx", "src/reportWebVitals.ts", "src/setupTests.ts"],
  rules: {
    "filenames/match-regex": "off",
  },
})


export default app