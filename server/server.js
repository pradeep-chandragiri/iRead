import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import ConnectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'
import adminRouter from './routes/adminRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import connectCloudinary from './configs/cloudinary.js'

const app = express()
//connect to Database
await ConnectDB()
await connectCloudinary()

//middleware
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

//routes
app.get('/', (req, res) => {
    res.send('API Working...')
})
app.post('/user', clerkWebhooks)
app.use('/api/admin', adminRouter)

//PORT
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server running at PORT http://localhost:${PORT}`);
})