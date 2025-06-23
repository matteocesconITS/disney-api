export default function FilmTab({ character }) {
  return (
    <>
      <ul>
        {character.films?.length > 0 ? (
          character.films.map((film) => <li key={film}>{film}</li>)
        ) : (
          <li>List is empty</li>
        )}
      </ul>
    </>
  );
}
