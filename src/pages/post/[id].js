import Head from 'next/head'

export default function SinglePostPage({ pageId }) {
	return (
		<>
			<Head>
				<title>A single post page</title>
			</Head>
			<p>Hello for {pageId}</p>
		</>
	)
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking',
	}
}
export async function getStaticProps({ params }) {
	if (Number(params.id) === 2) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			pageId: params.id,
			revalidate: 60,
		},
	}
}
