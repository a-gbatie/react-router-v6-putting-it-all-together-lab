# 🎬 Movie Directory App

## Description

The Movie Directory App is a React application that allows users to browse directors, view their movies, add new directors, and add movies to existing directors.

This project was built to practice client-side routing using React Router v6, along with React state management, nested routes, forms, and API requests.

## Features

- Navigate between Home, About, and Directors pages.
- View a list of directors.
- Click a director to view their biography and movies.
- View individual movie details, including duration and genres.
- Add new directors using a form.
- Add movies to existing directors.
- Automatically navigate to newly created directors and movies.
- Display error messages for invalid director or movie IDs.

## Technologies Used

- React
- JavaScript (JSX)
- React Router v6
- React Hooks (`useState`, `useEffect`)
- JSON Server
- Fetch API
- UUID
- Vitest
- React Testing Library

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/a-gbatie/react-router-v6-putting-it-all-together-lab
cd react-router-v6-putting-it-all-together-lab
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start JSON Server

Start the JSON Server backend using the script configured in `package.json`.

The application expects the directors API at:

```text
http://localhost:4000/directors
```

Make sure JSON Server is running before testing the application's data-related features.

### 4. Start the React Application

Open another terminal and run:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## Application Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/about` | About page |
| `/directors` | Displays all directors |
| `/directors/new` | Form for adding a director |
| `/directors/:id` | Displays a specific director |
| `/directors/:id/movies/new` | Form for adding a movie |
| `/directors/:id/movies/:movieID` | Displays a specific movie |

## Project Structure

```text
src/
├── components/
│   └── NavBar.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── DirectorContainer.jsx
│   ├── DirectorList.jsx
│   ├── DirectorCard.jsx
│   ├── DirectorForm.jsx
│   ├── MovieCard.jsx
│   └── MovieForm.jsx
├── __tests__/
│   └── App.test.jsx
└── App.jsx
```

## Testing

The project uses Vitest and React Testing Library.

Run the test suite with:

```bash
npm test -- --run
```

The nine tests cover:

1. Rendering the Home page.
2. Navigating to the About page.
3. Displaying the directors list.
4. Navigating to the new director form.
5. Displaying a specific director.
6. Navigating to the new movie form.
7. Displaying movie details.
8. Handling an invalid director ID.
9. Handling an invalid movie ID.
