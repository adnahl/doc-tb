'use client'

/**
 * YouTube component for embedding YouTube videos in MDX files. 
 * @param id - The YouTube video ID.
 * @param title - The title of the video (optional, defaults to 'Video').
 * @returns A React component that renders an iframe for the specified YouTube video.
 * @example <YouTube id="wDjeBNv6ip0" /> 
 */
export default function YouTube({
	id,
	title = 'Video',
}: {
	id: string
	title?: string
}) {
	return (
		<iframe
			width="100%"
			height="315"
			src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&mute=0`}
			title={title}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowFullScreen
			style={{ border: 0 }}
		/>
	)
}
