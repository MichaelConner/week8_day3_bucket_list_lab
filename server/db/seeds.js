use bucket_list;
db.dropDatabase();

db.listitems.insertMany([
  {
    aspiration: "Pat a duck"
  },
  {
    aspiration: "Pass the PDA"
  },
  {
    aspiration: "Understand CSS"
  }
]);
