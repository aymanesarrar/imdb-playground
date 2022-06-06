interface Ivideo {
	id?: string
}

export const Video = ({id}: Ivideo) => {
	return (
    <iframe
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="w-1/2 h-96"
    ></iframe>
  );
}