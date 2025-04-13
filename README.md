# React + TypeScript + Vite Boilerplate

**Version:** 1.0.0  
_Last updated: April 13, 2025_

This boilerplate provides a ready-to-use setup for building React applications with TypeScript, Vite, Redux, Tailwind CSS, and basic route protection.

---

## Key Features

1. **Vite Integration**  
   Utilizes Vite for fast builds, efficient development, and HMR (Hot Module Replacement).

2. **React with Tailwind CSS**  
   Pre-configured Tailwind CSS setup for rapid UI development.

3. **React Redux-Based Architecture**  
   Built-in Redux setup with example user slice to manage state effectively.

4. **Boilerplate for Redux Testing**  
   Includes an example `user` folder with `user.api.ts` and `user.slice.ts` to demonstrate Redux functionality.

5. **Layout Management**  
   Features a customizable layout system in the `layout/` folder, including `Layout.tsx` and `ProtectedRoute.tsx`.

6. **Route Protection**  
   Provides route protection using roles, demonstrated in `ProtectedRoute.tsx`.

7. **Dummy Users**  
   Several dummy users with roles are included to test authentication and role-based access.

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

## Dummy Users

The project includes predefined dummy users with different roles for testing but have been:

- **TOKEN_USER_1** Has full access to all routes and functionalities.
- **TOKEN_USER_2** Limited access based on role restrictions.
- **TOKEN_USER_3** Read-only access to certain routes.

You can find role definitions in `constants/permissionsRole.ts`.
