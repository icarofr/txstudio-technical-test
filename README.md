# LiqTrade - Technical Test for TXStudio

LiqTrade is a financial services interface built as part of a technical test for TXStudio, showcasing responsive UI development and data visualization using Next.js and Tailwind CSS.

## Project Overview

This implementation focuses on pixel-perfect UI integration from provided designs. The project showcases:

- Responsive layout for both mobile and desktop views
- Modern UI components using Tailwind CSS and Headless UI
- Interactive dashboard with financial charts and transaction tracking
- Clean component structure with proper separation of concerns

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technical Choices

### TypeScript Considerations

For this integration test, TypeScript was primarily used for configuration files and some component definitions, while most UI components were built with JSX for rapid development. However, I want to emphasize that **full TypeScript integration is recommended** for production to ensure type safety, maintainability, and better developer experience.

### Library Choices

- **Chart.js**: Used for financial data visualization
- **@headlessui/react**: Accessible UI components that integrate with Tailwind
- **@heroicons/react**: SVG icon library for consistent design language

## Project Structure

```
/src
  /components
    /common        - Reusable UI elements (Button, FeatureCard, etc.)
    /dashboard     - Dashboard-specific components
    /layout        - Layout components (Navbar)
    /sections      - Page section components
  /data           - Mock data for dashboard visualization
  /pages          - Next.js page components
  /styles         - Global styles
  /utils          - Utility functions
/public
  /assets         - Static assets (images, logos)
```

## Features

- **Landing Page**: Showcasing LiqTrade's financial services
- **Dashboard**: Interactive financial dashboard with:
  - Transaction tracking and status
  - Financial charts and visualizations
  - Risk assessment tools
  - Account management interface

## Future Improvements

Potential future improvements could include:
- Complete TypeScript integration for all components
- Unit and integration tests using Jest and React Testing Library
- State management with React Context or Redux for more complex interactions
- Internationalization support
- Enhanced accessibility features

## Deployment

This project can be deployed on Vercel for optimal Next.js compatibility, or follow the [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for other hosting options.

---

Thank you for the opportunity to demonstrate my frontend development skills. I look forward to discussing this implementation further.