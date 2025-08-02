export default defineEventHandler(async () => {
	const db = useDatabase('myDB')

	try {
		const users = await db.prepare('SELECT * FROM users').all()
		return users
	}
	catch {
		return []
	}
})
