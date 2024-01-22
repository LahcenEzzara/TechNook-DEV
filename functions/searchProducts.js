exports = function (arg) {
  let collection = context.services
    .get("mongodb-atlas")
    .db("store")
    .collection("products");

  let pipeline = [
    {
      $search: {
        index: "searchProducts",
        text: {
          query: arg,
          path: {
            wildcard: "*",
          },
          fuzzy: {},
        },
      },
    },
  ];

  return collection.aggregate(pipeline);
};
