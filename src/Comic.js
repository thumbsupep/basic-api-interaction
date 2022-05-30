export const Comic = ({ comic, updateComic }) => {
  const deleteStory = (id) => {
    const newStories = comic.stories.filter((story) => story._id !== id);
    updateComic({ ...comic, stories: newStories });
  };

  return <div>
    <h1>{comic.name}</h1>
    { comic.stories.map((story, i) => (
      <li key={i}>
        <p>{story}</p>
        <button onClick={ deleteStory(story.id) }>Delete Story</button>
      </li>
    ))}
    {/* form to add a new story */}
  </div>
}