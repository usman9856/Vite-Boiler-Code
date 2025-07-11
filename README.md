# React + TypeScript + Vite Boilerplate

**Version:** 1.0.0  
_Last updated: July 11, 2025_

This boilerplate provides a ready-to-use setup for building React applications with TypeScript, Vite, Redux Toolkit (state management), RTK Query (data fetching), Tailwind CSS, and basic route protection.

---

## Key Features

1. **Vite Integration**  
   Utilizes Vite for fast builds, efficient development, and HMR (Hot Module Replacement).

2. **React with Tailwind CSS**  
   Pre-configured Tailwind CSS setup for rapid UI development.

3. **Redux Toolkit State Management**  
   Modern Redux setup with Redux Toolkit for efficient state management and reduced boilerplate.

4. **RTK Query for Data Fetching**  
   Powerful data fetching and caching solution with automatic request lifecycle management.

5. **TypeScript Support**  
   Full TypeScript integration with proper type definitions for Redux state and API responses.

6. **Layout Management**  
   Features a customizable layout system in the `layout/` folder, including `Layout.tsx` and `ProtectedRoute.tsx`.

7. **Route Protection**  
   Provides route protection using roles, demonstrated in `ProtectedRoute.tsx`.

8. **Role-Based Access Control**  
   Several dummy users with different roles to test authentication and role-based access.

9. **Developer Experience**  
   Includes ESLint, Prettier, and Redux DevTools for enhanced development workflow.

---

## Folder Structure and File Purposes

The project uses a flexible and customizable folder structure. Below is the default structure:

c:/Users/TechTiesIbrahim/Desktop/Vite Setup Boiler Code/
├── .env.development # Environment variables for development
├── .eslintrc.json # ESLint configuration for code linting
├── .gitignore # Ignored files for Git
├── .prettierrc # Prettier configuration for formatting
├── eslint.config.js # ESLint plugin configuration
├── index.html # Main HTML entry point for Vite
├── LICENSE.txt # Project license
├── node_modules/ # Node dependencies (ignored)
├── package-lock.json # Lockfile for npm
├── package.json # Project metadata and dependencies
├── public/  
| └── vite.svg # Public assets
├── README.md # Project documentation
├── src/ # Source code directory  
├── App.css # Global app-specific CSS  
├── App.tsx # Main App component
├── assets/ # Static assets like images and icons
├── icon/ # Icon files  
├── image/ # Image assets
├── react.svg # React logo
│ └── svg/ # SVG files
├── components/ # Reusable components  
│ └── users/ # User-specific components
├── User.tsx # Example user component  
│ └── users.constants.ts # Constants for user module
├── constants/ # Project-wide constants
├── index.ts # Shared constants  
│ └── permissionsRole.ts # Role-based permissions
├── index.css # Global CSS imports
├── layout/ # Layout and route protection components
├── Layout.tsx # Base layout component  
│ └── ProtectedRoute.tsx # Route protection logic
├── main.tsx # Entry point for the React app
├── redux/ # Redux state management  
├── api.ts # API integration for Redux
├── store.ts # Redux store setup  
│ └── user/ # Example Redux slice for users
├── user.api.ts # User-specific API integrations
│ └── user.slice.ts # User state slice
├── utils/ # Utility functions
│ └── vite-env.d.ts # TypeScript environment definitions
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.app.json # TypeScript app-specific configuration
├── tsconfig.json # TypeScript base configuration
├── tsconfig.node.json # TypeScript node-specific configuration
└── vite.config.ts # Vite configuration

---

## Development Setup

### Prerequisites
Ensure you have the following tools installed:

- [Node.js and npm](https://nodejs.org/): To run and build the project
- [Git](https://git-scm.com/): For version control

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url.git
   cd Vite-Setup-Boiler-Code
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the development server with live reloading:
```bash
npm run dev
```

### Building for Production
To build the project for production use:
```bash
npm run build
```

## Testing Your Application
You can write tests using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/):

- Place your test files alongside the components you are testing.
- Run your tests with:
  ```bash
  npm test
  ```

## Dummy Users

The project includes predefined dummy users with different roles for testing:

- **TOKEN_USER_1** Full access to all routes and functionalities.
- **TOKEN_USER_2** Limited access based on role restrictions.
- **TOKEN_USER_3** Read-only access to certain routes.

Role definitions are located in `constants/permissionsRole.ts`.

---

## Redux Architecture

### State Management
This project uses Redux Toolkit for state management with the following structure:

- **Store Configuration**: `src/redux/store.ts` - Central store configuration
- **Slices**: `src/redux/user/user.slice.ts` - Redux Toolkit slices for state management
- **API Integration**: `src/redux/user/user.api.ts` - RTK Query endpoints for data fetching
- **Base API**: `src/redux/api.ts` - Base API configuration with RTK Query

### Adding New State Slices
1. Create a new folder in `src/redux/` (e.g., `products/`)
2. Add your slice file (e.g., `product.slice.ts`):
   ```typescript
   import { createSlice, PayloadAction } from '@reduxjs/toolkit';
   
   interface ProductState {
     products: Product[];
     loading: boolean;
   }
   
   const initialState: ProductState = {
     products: [],
     loading: false,
   };
   
   const productSlice = createSlice({
     name: 'product',
     initialState,
     reducers: {
       setProducts: (state, action: PayloadAction<Product[]>) => {
         state.products = action.payload;
       },
       setLoading: (state, action: PayloadAction<boolean>) => {
         state.loading = action.payload;
       },
     },
   });
   
   export const { setProducts, setLoading } = productSlice.actions;
   export default productSlice.reducer;
   ```
3. Add the reducer to your store in `src/redux/store.ts`

### Using Redux in Components
```typescript
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setName } from '../redux/user/user.slice';

const MyComponent = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state: RootState) => state.user);
  
  const handleNameChange = (newName: string) => {
    dispatch(setName(newName));
  };
  
  return (
    <div>
      <p>Current name: {name}</p>
      <button onClick={() => handleNameChange('New Name')}>Update Name</button>
    </div>
  );
};
```

---

## Route Protection

This boilerplate includes a role-based route protection system:

### How It Works
1. **ProtectedRoute Component**: Wraps protected routes and checks user permissions
2. **Permission Constants**: Define user roles and their access levels
3. **Route Configuration**: Apply protection to specific routes in `App.tsx`

### Example Usage
```typescript
<Route
  path="/admin"
  element={
    <ProtectedRoute
      allowedRoles={[TOKEN_USER_3]}
      userRole={currentUserRole}
    />
  }
>
  <Route index element={<AdminPage />} />
</Route>
```

### Adding New Protected Routes
1. Define new user roles in `constants/permissionsRole.ts`
2. Use the `ProtectedRoute` component around your route
3. Specify the `allowedRoles` and `userRole` props

---

## Customization

### Tailwind CSS
The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-primary-color',
        secondary: '#your-secondary-color',
      },
    },
  },
};
```

### Environment Variables
Create a `.env.development` file for development-specific configurations:

```env
VITE_BASE_API_URL=http://localhost:3000/api
VITE_APP_NAME=My Awesome App
```

### ESLint and Prettier
Code formatting and linting are pre-configured. You can modify:
- ESLint rules in `eslint.config.js`
- Prettier settings in `.prettierrc`

---

## Best Practices

### Component Structure
- Keep components small and focused on a single responsibility
- Use TypeScript interfaces for props and state
- Implement proper error boundaries
- Use React.memo() for expensive components

### Redux Best Practices
- Use RTK Query for server state management
- Keep local UI state in component state when possible
- Use Redux DevTools for debugging
- Follow the Redux Toolkit patterns for immutable updates

### File Organization
- Group related files in feature folders
- Use barrel exports (`index.ts` files) for cleaner imports
- Keep utility functions in the `utils/` folder
- Place shared constants in the `constants/` folder

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

---

## Troubleshooting

### Common Issues

**Build Errors**
- Ensure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build`
- Verify ESLint configuration: `npm run lint`

**Redux Issues**
- Check if the store is properly configured
- Verify slice imports in `store.ts`
- Use Redux DevTools for debugging state changes

**Route Protection Issues**
- Ensure user roles are correctly defined
- Check the `currentUserRole` assignment in `App.tsx`
- Verify `ProtectedRoute` component props

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the `LICENSE.txt` file for details.

---

## Support

If you encounter any issues or have questions, please:
1. Check the troubleshooting section above
2. Search existing issues on GitHub
3. Create a new issue with detailed information about the problem

---

**Happy Coding! 🚀**
