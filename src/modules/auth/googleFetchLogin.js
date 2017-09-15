// @flow

export default async (req, res) => {
  try {
    res.redirect('http://localhost:3001')
  } catch (e) {
    res.status(404).send()
  }
}
