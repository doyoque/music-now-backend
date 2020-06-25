import express from 'express'
import musicController from './../controller/musicController.js'
import upload from './../../config/multer.js'

const router = express.Router()

router.get('/', musicController.getAllMusics)
router.post('/', upload.single('music'), musicController.addNewMusic)
router.delete('/:musicId', musicController.deleteMusic)

export default router