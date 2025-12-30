# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Using Environment Variables

This method is used to specify the full backend URL, especially for production deployment or when the proxy isn't suitable. Vite exposes environment variables through import.meta.env.

1. **Create .env files**: In the root of your React project, create .env.development and .env.production files.
   - Variables must be prefixed with VITE\_ to be exposed to your code.

```env
# .env.development
VITE_API_URL=http://localhost:3000

# .env.production
VITE_API_URL=https://api.yourwebsite.com
```

1. **Access the URL in React**: Use import.meta.env.VITE_API_URL in your code. Vite automatically loads the correct file based on whether you run npm run dev (development mode) or npm run build (production mode).

```js
// In your React component
const API_URL = import.meta.env.VITE_API_URL;

// Use the variable to construct your API calls
const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users`);
    const data = await response.json();
    // ... handle data
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
```
