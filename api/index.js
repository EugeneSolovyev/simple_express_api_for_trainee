import Reflection from './controllers'

export default app => {
  /**
   * @swagger
   *
   * /api/v1/reflections:
   *   post:
   *     description: create new reflection object
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: success
   *         description: Optional field
   *         in: formData
   *         required: true
   *         type: string
   *       - name: lowPoint
   *         description: Optional field
   *         in: formData
   *         required: true
   *         type: string
   *       - name: takeAway
   *         description: Optional field
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       400:
   *          description: All fields are required
   *       201:
   *         description: New reflection object
   */
  app.post('/api/v1/reflections', Reflection.create)
  /**
   * @swagger
   *
   * /api/v1/reflections:
   *   get:
   *     description: Get all reflections
   *     produces:
   *       - application/json
   *     responses:
   *       201:
   *         description: Get all reflections
   */
  app.get('/api/v1/reflections', Reflection.getAll)
  /**
   * @swagger
   *
   * /api/v1/reflections/{id}:
   *   get:
   *     description: get reflection by ID
   *     parameters:
   *        - name: id
   *          in: path
   *          description: Reflection's ID
   *          required: true
   *          type: string
   *     produces:
   *       - application/json
   *     responses:
   *       201:
   *         description: Reflection object
   */
  app.get('/api/v1/reflections/:id', Reflection.getOne)
  /**
   * @swagger
   *
   * /api/v1/reflections/{id}:
   *   put:
   *     description: get reflection by ID
   *     parameters:
   *        - name: id
   *          in: path
   *          description: Reflection's ID
   *          required: true
   *          type: string
   *        - name: success
   *          description: Success field
   *          in: formData
   *          required: true
   *          type: string
   *        - name: lowPoint
   *          description: Low point field
   *          in: formData
   *          required: true
   *          type: string
   *        - name: takeAway
   *          description: Take away field
   *          in: formData
   *          required: true
   *          type: string
   *     produces:
   *       - application/json
   *     responses:
   *       404:
   *         description: Reflection not found
   *       201:
   *         description: Update Reflection by ID
   */
  app.put('/api/v1/reflections/:id', Reflection.update)
  /**
   * @swagger
   *
   * /api/v1/reflections/{id}:
   *   delete:
   *     description: get reflection by ID
   *     parameters:
   *        - name: id
   *          in: path
   *          description: Reflection's ID
   *          required: true
   *          type: string
   *     produces:
   *       - application/json
   *     responses:
   *       404:
   *         description: Reflection not found
   *       204:
   *         description: Remove Reflection by ID
   */
  app.delete('/api/v1/reflections/:id', Reflection.delete)
}
