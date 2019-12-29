/* eslint-disable no-console */
import express from 'express'
import chalk from 'chalk'
import SwaggerUI from 'swagger-ui-express'
import bodyParser from 'body-parser'
import cors from 'cors'
import SwaggerJsdoc from 'swagger-jsdoc'
import api from './api'
import { options } from './helpers/utils'

const specs = SwaggerJsdoc(options)

const app = express()
const PORT = 8000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/swagger', SwaggerUI.serve, SwaggerUI.setup(specs))
api(app)

app.listen(PORT, () => console.log(chalk.green(`Server is running on http://localhost:${PORT}`)))
