import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieModal from "../MovieModal/MovieModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

import fetchMovies from "../../services/movieService";
import type { Movie } from "../../types/movie";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSearch(query: string) {
    setMovies([]);
    setError(false);
    setLoading(true);

    try {
      const data = await fetchMovies(query);

      if (data.length === 0) {
        toast.error("No movies found for your request.");
        return;
      }

      setMovies(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function handleSelectMovie(movie: Movie) {
    setSelectedMovie(movie);
  }

  function handleCloseModal() {
    setSelectedMovie(null);
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />

      {loading && <Loader />}

      {error && <ErrorMessage />}

      {!loading && !error && movies.length > 0 && (
        <MovieGrid movies={movies} onSelect={handleSelectMovie} />
      )}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}

      <Toaster />
    </>
  );
}
