import '@/styles/globals.css'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
	return (
		<>
			<nav
				style={{
					padding: '16px',
					width: '100%',
				}}
			>
				<ul
					style={{
						display: 'flex',
						gap: '16px',
						marginBottom: '16px',
						listStyleType: 'none',
					}}
				>
					<li>Switch locale:</li>
					<li>
						<Link href="/" locale="de" prefetch={false}>
							de
						</Link>
					</li>
					<li>
						<Link href="/" locale="en" prefetch={false}>
							en
						</Link>
					</li>
					<li>
						<Link href="/" locale="nl" prefetch={false}>
							nl
						</Link>
					</li>
				</ul>
				<ul
					style={{
						display: 'flex',
						gap: '16px',
						marginBottom: '16px',
						listStyleType: 'none',
					}}
				>
					<li>Non existing pages:</li>
					<li>
						<Link href="/not-exiting" prefetch={false}>
							not-existing
						</Link>
					</li>
					<li>
						<Link href="/another/not-exiting" prefetch={false}>
							another not-existing
						</Link>
					</li>
					<li>
						<Link href="/post/2" prefetch={false}>
							Post page with id 2
						</Link>
					</li>
				</ul>
				<ul
					style={{
						display: 'flex',
						gap: '16px',
						marginBottom: '16px',
						listStyleType: 'none',
					}}
				>
					<li>Redirect with link:</li>
					<li>
						<Link href="/post" prefetch={false}>
							Post overview (no redirect)
						</Link>
					</li>
					<li>
						<Link href="/postings" prefetch={false}>
							Postings overview (redirect)
						</Link>
					</li>
					<li>
						<Link href="/post/1" prefetch={false}>
							Post 1
						</Link>
					</li>
					<li>
						<Link href="/post/3" prefetch={false}>
							Post 3
						</Link>
					</li>
				</ul>
				<ul
					style={{
						display: 'flex',
						gap: '16px',
						marginBottom: '16px',
						listStyleType: 'none',
					}}
				>
					<li>Regular, works fine:</li>
					<li>
						<Link href="/post/1" prefetch={false}>
							Post 1
						</Link>
					</li>
					<li>
						<Link href="/post/3" prefetch={false}>
							Post 3
						</Link>
					</li>
				</ul>
			</nav>
			<hr />
			<main
				style={{
					padding: '16px',
				}}
			>
				<Component {...pageProps} />
			</main>
		</>
	)
}
