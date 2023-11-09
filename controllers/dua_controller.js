const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./dua_main.sqlite", (err) => {
  if (err) {
    console.error("Error opening database", err);
  } else {
    console.log("Connected to the database");
  }
});

const getCats = (req, res) => {
  db.all("SELECT * FROM category", (err, categories) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log({ categories });
    res.json(categories);
  });
};

const getSubcatsByCat = (req, res) => {
  const { cat_id } = req.params;
  db.all(
    `SELECT * FROM sub_category WHERE cat_id = '${cat_id}'`,
    (err, subcat) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      console.log(subcat);
      res.json(subcat);
    }
  );
};

const getDuasBySubcat = (req, res) => {
  const { subcat_id } = req.params;
  db.all(`SELECT * FROM dua WHERE  subcat_id = '${subcat_id}'`, (err, dua) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    console.log(dua);
    res.json(dua);
  });
};

module.exports = { getCats, getDuasBySubcat, getSubcatsByCat };
