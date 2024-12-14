# Shora Cloud SDK

[![npm version](https://img.shields.io/npm/v/@shoracloud/sdk.svg?style=flat)](https://www.npmjs.com/package/@shoracloud/sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

The official SDK for Shora Cloud Platform - A headless, API-first commerce solution.

## 🚀 Features

- 🔥 Full TypeScript Support
- 🔐 Authentication & Authorization
- 📦 Product Management
- 🛍️ Order Processing
- 📊 Analytics Integration
- 🤖 AI Features
- 📱 Mobile Support

## 📦 Installation

```bash
npm install @shoracloud/sdk
# or
yarn add @shoracloud/sdk
# or
pnpm add @shoracloud/sdk
```

## 🔧 Quick Start

```typescript
import { ShoraCloud } from '@shoracloud/sdk';

const client = new ShoraCloud({
  apiKey: 'your-api-key',
  environment: 'production' // or 'staging'
});

// Example: Fetch products
const products = await client.products.list({
  limit: 10,
  category: 'electronics'
});
```

## 📚 Documentation

For detailed documentation, visit [docs.shoracloud.com](https://docs.shora.cloud)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Support

- 📧 Email: support@shora.cloud
- 💬 Discord: [Join our community](https://discord.gg/shoracloud)
- 🐦 Twitter: [@ShoraCloud](https://twitter.com/shoracloud)

## 🏢 Company

Shora Cloud is developed by Svenca LTD
