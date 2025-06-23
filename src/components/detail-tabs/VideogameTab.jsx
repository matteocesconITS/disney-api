export default function VideogamesTab({ character }) {
  return (
    <>
      <ul>
        {character.videoGames?.length > 0 ? (
          character.videoGames.map((videoGame) => (
            <li key={videoGame}>{videoGame}</li>
          ))
        ) : (
          <li>List is empty</li>
        )}
      </ul>
    </>
  );
}
