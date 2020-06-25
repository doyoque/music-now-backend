import multer from 'multer'

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./uploads")
  },

  filename: (req, file, cb) => {
    cb(null, formatDate(new Date()) +'_'+ file.originalname.replace(/ /g, '_'))
  }
})

const formatDate = (date) => {
  let dates = new Date(), 
      month = '' + (dates.getMonth() + 1),
      day = '' + dates.getDate(),
      year = dates.getFullYear()
  
  if (month.length < 2) 
    month = '0' + month
  if (day.length < 2)
    day = '0' + day
  
  return [year, month, day].join('')
}

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