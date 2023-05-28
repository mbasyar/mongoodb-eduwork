const { ObjectId } = require("mongodb");
const db = require("../config/config");

const index = (req, res) => {
  db.collection("mahasiswa")
    .find()
    .toArray()
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};

const view = (req, res) => {
  const id = new ObjectId(req.params.id);
  db.collection("mahasiswa")
    .findOne({ _id: id })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};

const store = (req, res) => {
  const id = new ObjectId(req.params.id);
  db.collection("mahasiswa")
    .findOne({ _id: id })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};

module.exports = {
  index,
  view,
  store
};