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
			src={`https://www.youtube.com/embed/${id}?autoplay=1`}
			title={title}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
			allowFullScreen
		/>
	)
}
