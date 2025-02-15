# TaePay Node SDK
NodeJS Typescript SDK for accessing TaePay API

## Installation
### NPM
```bash
npm install @taepay/sdk
```

### PNPM
```bash
pnpm add @taepay/sdk
```

### Bun
```bash
bun add @taepay/sdk
```

## Usage
### Collection
```ts
const taepay = new Taepay(apiKey, apiSecret);

const response = taepay.authorize().collect(
  operator,
  provider,
  {
    firstName: '',
    lastName: ''
  }
);
```
