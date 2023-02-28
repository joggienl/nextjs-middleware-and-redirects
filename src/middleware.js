import { NextResponse } from 'next/server'

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 */
		'/',
		'/((?!api|_next/static|_next/image).*)',
	],
}

export async function middleware() {
	return NextResponse.next()
}
