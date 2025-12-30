'use client'

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
