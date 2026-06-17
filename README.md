# Admin Dashboard Application

## Overview

This project is a responsive Admin Dashboard built as part of a Frontend Technical Assessment. The application allows administrators to manage users and products through an intuitive interface. It includes authentication, user management, product management, search functionality, pagination, and state management using Zustand.

The application is developed using Next.js, Material UI, Axios, and Zustand, while leveraging the DummyJSON API for data and authentication.

## Features

### Authentication

* User login using DummyJSON authentication API
* Protected routes for authenticated users
* Token storage using browser localStorage

### Dashboard

* Centralized dashboard interface
* Quick navigation to Users and Products modules

### User Management

* View all users
* Search users
* Pagination support
* View detailed user information

### Product Management

* View all products
* Search products
* Filter products by category
* Pagination support
* View detailed product information

### State Management

* Global state management using Zustand
* Centralized API handling and caching


## Technology Stack

* Next.js 15
* React
* Material UI (MUI)
* Zustand
* Axios
* DummyJSON API


## Project Structure

```text
src
│
├── app
│   ├── login
│   ├── dashboard
│   ├── users
│   └── products
│
├── components
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── UserCard.jsx
│   └── ProductCard.jsx
│
├── services
│   └── api.js
│
└── store
    ├── authStore.js
    ├── userStore.js
    └── productStore.js
```


## Installation

### Clone the Repository

```bash
git clone <repository-url>
cd project-name
```

### Install Dependencies

```bash
npm install
```

---

## Running the Application

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```


## Building for Production

Create an optimized production build:

```bash
npm run build
```

Run the production server:

```bash
npm start
```


## Environment Variables

This project uses the DummyJSON API and stores authentication tokens in localStorage. No mandatory environment variables are required.

If you want to configure the API URL through environment variables, create a file named:

```text
.env.local
```

Add the following variable:

```env
NEXT_PUBLIC_API_URL=https://dummyjson.com
```

You can then access it in the application using:

```javascript
process.env.NEXT_PUBLIC_API_URL
```


## Demo Credentials

Use the following credentials for testing:

```text
Username: emilys
Password: emilyspass
```


## API Endpoints Used

### Authentication

```text
POST /auth/login
```

### Users

```text
GET /users
GET /users/{id}
GET /users/search?q=
```

### Products

```text
GET /products
GET /products/{id}
GET /products/search?q=
GET /products/category/{category}
```


## State Management

Zustand is used to manage application state across authentication, users, and products modules.

Stores included:

* authStore.js
* userStore.js
* productStore.js

## Note

// When i download code from the repo from git hub it show sr are missing then remove src from code then run in jsconfig.json .
```json
 {
   "compilerOptions": {
     "baseUrl": ".",
     "paths": {
       "@/*": ["./*"]
     }
   }
}
```


## Author

**Aditya Kumar**

B.Tech – Computer Science Engineering

Frontend Technical Assessment Submission
