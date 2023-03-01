import Head from 'next/head'
import { useRouter } from 'next/router'

export default function SinglePostPage({ pageId }) {
	const router = useRouter()

	if (router.isFallback) {
		return <p>loading...</p>
	}

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
		fallback: true,
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
