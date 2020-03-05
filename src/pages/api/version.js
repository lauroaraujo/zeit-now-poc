const VERSION = process.env.API_VERSION

export default (req, res) => {
  res.status(200).json({
    version: VERSION
  })
}
