import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors({
    origin: '*'
}))

app.get('/', (req, res) => {
    setTimeout(() => {
        res.json({ id: 1, name: "bob", age: 50 })
    }, 3000);
})

app.listen(port, () => {
    console.log(`Example app lisening on port ${port}`)
})