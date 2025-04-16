import colors from "colors";
import express from "express";

const port = process.env.PORT || 4000
const app = express()

app.listen(port, () => {
    console.log(colors.cyan.bold( `API running on port: ${port}`))
})