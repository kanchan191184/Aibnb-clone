var express = require("express");
var router = new express.Router();

// var app = express();

const { Client } = require("pg");

(async () => {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "FirstDB",
    password: "kanchu21",
    port: 5432,
  });

  await client.connect();

  const query = "SELECT * FROM users";

  //   const res = await client.query(query);
  //   console.log(res.rows);
  //   res.send({ value: res.rows });

  client.query(query, (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res.rows);
      router.get("/", (req, res1, next) => {
        res1.send(res.rows);
      });
      client.end();
    }
  });

  //   await client.end();
})().catch(console.error);

router.post("/userData", async (req, res) => {
  console.log(req.body);
  console.log("hello");
  const { email, password } = req.body;
  try {
    console.log("Hello");
    console.log({ email, password });
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/userData", function (req, res, next) {
  console.log("server");
  console.log(req.body);
});

module.exports = router;
