export default function TvShowTab({ character }) {
  return (
    <>
      <ul>
        {character.tvShows?.length > 0 ? (
          character.tvShows.map((tvShow) => <li key={tvShow}>{tvShow}</li>)
        ) : (
          <li>List is empty</li>
        )}
      </ul>
    </>
  );
}
