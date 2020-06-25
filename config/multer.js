import multer from 'multer'

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./uploads")
  },

  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname)
  }
})

const filterFile = (req, file, cb) => {
  if (
    file.mimetype === 'audio/mpeg' || 
    file.mimetype === 'audio/wave' || 
    file.mimetype === 'audio/wav' || 
    file.mimetype === 'audio/mp3' 
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: filterFile
})

export default upload