const connection = require("./db/connection");
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
  unsetMovie,
} = require("./utils/index");
const command = process.argv.slice(2);

const app = async () => {
  if (command[0] === "add") {
    const newMovie = {
      name: command[1],
      genre: command[2],
      year: command[3],
    };

    await connection(addMovie, newMovie);
  }

  if (command[0] === "list") {
    await connection(listMovies);
  }

  if (command[0] === "update") {
    const query = {
      [command[1]]: command[2],
    };
    const updateContent = {
      $set: {},
    };

    for (let i = 3; i < command.length; i += 2) {
      updateContent.$set[command[i]] = command[i + 1];
    }
    await connection(updateMovie, query, updateContent);
  }

  if (command[0] === "delete") {
    const query = {
      [command[1]]: command[2],
    };
    await connection(deleteMovie, query);
  }

  if (command[0] === "unset") {
    const query = {
      [command[1]]: command[2],
    };
    const field = { $unset: {} };
    for (let i = 3; i < command.length; i++) {
      field.$unset[command[i]] = "";
    }
    await connection(unsetMovie, query, field);
  }
};

app();
