# 🎬 Movie Search
A movie search application built with React and TypeScript using the TMDB API.
The application allows users to search for movies by keyword, browse paginated results, and view detailed information about a selected movie.

## 📌 About the Project
This project was created as part of a React course to practice working with REST APIs, asynchronous requests, state management, pagination, forms, modals, and TypeScript.
The application uses the TMDB API to fetch movie data and displays search results in a responsive movie gallery.

## ✨ Features
🔎 Search movies by keyword
🎞️ Display movie posters and titles
📄 Paginated search results
⏳ Loading state while fetching data
⚠️ Error handling for failed HTTP requests
🔔 User notifications with React Hot Toast
🪟 Movie details modal
⌨️ Close modal with the ESC key
🖱️ Close modal by clicking outside it
🔒 Prevent page scrolling while the modal is open
🔄 Clear previous search results when starting a new search
📱 Responsive layout
🔐 API authentication using an environment variable
⚡ Server-state management and caching with TanStack Query

## 🛠️ Technologies
• React
• TypeScript
• Vite
• TanStack Query
• Axios
• React Paginate
• React Hot Toast
• React DOM Portal
• CSS Modules
• TMDB API

## 🔌 API
The application uses the TMDB API to search for movies.
The API request includes:
- search query
- current page
- authorization token
Movie images are loaded from the TMDB image service.

## 🧩 Main Components
*SearchBar*
Provides the search form and passes the entered query to the parent component.
The form uses React Form Actions and validates that the search field is not empty.
*MovieGrid*
Displays the list of movies returned by the API. Each movie card contains:
- movie poster
- movie title
Clicking a movie opens the details modal.
*MovieModal*
Displays detailed information about the selected movie:
poster/backdrop
title
overview
release date
rating
The modal is rendered using createPortal and supports closing with:
close button
ESC key
click outside the modal
*Loader*
Displays a loading message while the movie request is in progress.
*ErrorMessage*
Displays an error message when the API request fails.

## 📄 Pagination
The application uses React Paginate to navigate through TMDB search results.
Pagination is displayed only when more than one page of results is available.
Changing the page triggers a new API request and updates the displayed movies.

## ⚡ State Management
TanStack Query is used to manage server state and handle:
- fetching movie data
- caching responses
- loading states
- error states
- refetching data
The Query Client is configured at the application's top level in main.tsx, while movie queries are handled directly in App.

## 📱 Responsive Design
The application uses CSS Modules and the provided responsive styles to provide a convenient experience across different screen sizes.

## 🎯 Learning Outcomes
While working on this project, I practiced:
- working with REST APIs
- making HTTP requests with Axios
- handling asynchronous operations
- using environment variables
- typing API responses with TypeScript
- managing server state with TanStack Query
- implementing pagination
- creating reusable React components
- working with forms and Form Actions
- creating modal windows with React Portals
- handling keyboard and mouse events
- managing component state and side effects
- working with CSS Modules
