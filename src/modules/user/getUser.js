// @flow

export default async (req, res) => {
  try {
    res.send(req.user)

    // res.json(post)
  } catch (e) {
    console.log(e)
  }
}
