import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import ConnectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

const app = express()
await ConnectDB()

//middleware
app.use(cors())
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send('API Working...')
})
app.post('/clerk', clerkWebhooks)

//PORT
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server running at PORT http://localhost:${PORT}`);
})