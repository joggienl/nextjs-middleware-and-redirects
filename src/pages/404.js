import Head from 'next/head'

export default function Custom404() {
	return (
		<>
			<Head>
				<title>Page Not Found</title>
			</Head>
			<p>The page your looking for does not exist!</p>
		</>
	)
}
