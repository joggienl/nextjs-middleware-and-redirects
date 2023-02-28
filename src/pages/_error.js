function CustomErrorComponent({ statusCode }) {
	return (
		<p>
			{statusCode
				? `An error ${statusCode} occurred on server`
				: 'An error occurred on client'}
		</p>
	)
}

CustomErrorComponent.getInitialProps = async (contextData) => {
	const { res, err } = contextData
	const statusCode =
		res && res?.statusCode
			? res.statusCode
			: err && err?.statusCode
			? err.statusCode
			: 404
	return { statusCode }
}

export default CustomErrorComponent
