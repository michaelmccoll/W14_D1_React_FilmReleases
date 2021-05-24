import './App.css';
import FilmReleases from './containers/FilmReleases';

function App() {
  return (
    <>
      <h1>Upcomming Film Releases in UK</h1>
      <hr></hr>
        <FilmReleases/>
      <hr></hr>
      <form action="https://www.imdb.com/calendar/?region=gb">
        <input type="submit" value="View more upcomming releases" />
      </form>
    </>
  );
}

export default App;
