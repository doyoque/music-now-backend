import Music from './../model/Music.js'

const getAllMusics = async (req, res) => {
  try {
    let music = await Music.find()
    res.status(200).json(music)
  } catch (err) {
    res.status(500).json(err)
  }
}

const addNewMusic = async (req, res) => {
  try {
    const music = new Music({
      title: req.body.title,
      artist: req.body.artist,
      music: req.file
    })

    let newMusic = await music.save()
    res.status(200).json({ data: newMusic })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

const deleteMusic = async (req, res) => {
  try {
    const id = req.params.musicId
    let result = await Music.remove({ _id: id })
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err)
  }
}

export default { getAllMusics, addNewMusic, deleteMusic }