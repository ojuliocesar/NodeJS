const validateEmpty = (data, name) => {

  if (!data) {
    return res.json({
      "return": false,
      "message": `Campo ${name} não foi preenchido!`
    })
  }
}

module.exports = {
  validateEmpty
}