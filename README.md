# React Component Library Lab 9.1

In this lab, I built three reusable React components with TypeScript using Vite:
- **AlertBox**: Displays alert banners (success, error, warning, info) with a close button and message text.
- **UserProfileCard**: Shows user details (name, role, email, avatar image) with an Edit button.
- **ProductDisplay**: Shows a product card (image, price, stock status) with an Add to Cart button.

---

## What I Learned & Problems I Solved

### 1. TypeScript Import Error (`verbatimModuleSyntax`)
* **Problem**: When I imported my types (`UserProfileCardProps`, `AlertBoxProps`, `User`, `Product`), TypeScript gave me an error saying they must be imported using a type-only import.
* **Fix**: I learned that in this Vite setup, interfaces and types need the `type` keyword when importing them:
  ```tsx
  import type { UserProfileCardProps } from '../../types';
  import type { User, Product } from './types';