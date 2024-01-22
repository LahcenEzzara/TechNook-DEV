exports = function (arg) {
  let collection = context.services
    .get("mongodb-atlas")
    .db("store")
    .collection("products");

  let pipeline = [
    {
      $search: {
        index: "autoCompleteProducts",
        autocomplete: {
          query: arg,
          path: "name",
          tokenOrder: "sequential",
        },
      },
    },
    {
      $limit: 10,
    },
    {
      $project: {
        name: 1,
      },
    },
  ];

  return collection.aggregate(pipeline);
};
