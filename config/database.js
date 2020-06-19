import dotenv from 'dotenv'
dotenv.config()

const database = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-kleby.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

export default database
