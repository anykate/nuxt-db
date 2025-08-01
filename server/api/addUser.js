export default defineEventHandler(async (e) => {
    const requestBody = await readBody(e);
    const db = useDatabase("myDB");

    await db.sql`CREATE TABLE IF NOT EXISTS users
    (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      Name TEXT,
      Email TEXT
    )
  `;

    await db.sql`INSERT INTO users (Name, Email) VALUES \
      (${requestBody.name}, ${requestBody.email})`;
});
