exports.addMovie = async (collection, dataObj) => {
  const add = await collection.insertOne(dataObj);
  console.log(add);
};

exports.listMovies = async (collection) => {
  const findList = await collection.find({}).toArray();
  console.log(findList);
};

exports.updateMovie = async (collection, query, dataObj) => {
  const updateOne = await collection.updateOne(query, dataObj);
  console.log(updateOne);
};

exports.deleteMovie = async (collection, query) => {
  const deleteOne = await collection.deleteOne(query);
  console.log(deleteOne);
};

exports.unsetMovie = async (collection, query, field) => {
  const unset = await collection.updateOne(query, field);
  console.log(unset);
};
