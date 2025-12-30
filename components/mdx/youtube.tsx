export default function YouTube({
	id,
	title = 'Video',
}: {
	id: string
	title?: string
}) {
	return (
		<div>
			<iframe
				className="aspect-video w-full"
				src={`https://www.youtube.com/embed/${id}`}
				title={title}
				allowFullScreen
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			/>
		</div>
	)
}
