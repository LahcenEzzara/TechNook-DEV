exports = function (arg) {
  let collection = context.services
    .get("mongodb-atlas")
    .db("store")
    .collection("products");
  return collection.findOne({ _id: BSON.ObjectId(arg) });
};
