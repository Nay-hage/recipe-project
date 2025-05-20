# Next.js Recipe Web Application

This is a minimal **Next.js** frontend project that connects to a **Spring Boot API** backend to demonstrate API integration, form submission, and UI state management using React hooks.

## Project Structure

- **Login page**: Authenticates using hardcoded credentials:
  `Username: admin`  
  `Password: password`
- **Items page**:
  - Fetches and displays recipes from `GET /api/recipes`
  - Submits new recipes using `POST /api/recipes`
  - Displays cards for each recipe with title, ingredients, and instructions
- Uses **localStorage** to store login state
- Includes a **logout** function and error handling
- Styled with **Tailwind CSS** and a background image (`bg.jpg`)

## Technologies Used
- Next.js 15
- React & TypeScript
- Tailwind CSS
- RESTful API integration

## Setup Instructions

1. Clone the project or open in your IDE
2. Install dependencies: npm install 
3. Run the development server:npm run dev 
4. Access the frontend at: http://localhost:3000

## Make sure the Spring Boot backend is running on:
http://localhost:8080


## Deliverables Covered

-  Login page with frontend-only validation
-  Recipes display from API
-  Add new recipe via POST
-  UI built using Tailwind CSS
-  User-friendly error handling
-  Navigation and logout included

## Final Notes
- All recipes are stored in a **MongoDB** database through the backend API. 



