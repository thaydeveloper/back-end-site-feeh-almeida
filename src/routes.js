const Scheduling = require("./models/schedulingSchema");
const express = require("express");
const routes = express();

/* routes.get("/user/:id", async (req, res) => {
  const user = await Scheduling.findOne(id);
  console.log(user);
  return res.send("tudo ok");
}); */

routes.get("/user/:id", async (req, res) => {
  const userId = req.params.id;
  const user = await Scheduling.findById(userId);
  if (!user) {
    return res.status(404).send("Usuário não encontrado");
  }

  return res.send(user);
});

routes.post("/scheduling", async (req, res) => {
  try {
    const data = req.body;
    const { name, phone, time, date, services, id } = data;
    const user = await Scheduling.findOneAndUpdate(
      { id },
      {
        name,
        phone,
        date,
        time,
        services,
      },
      {
        upsert: true,
        returnDocument: "after",
      }
    );
    res.status(200).json(user);
  } catch (error) {
    console.log("erro aqui---->", error);
  }
});

module.exports = routes;
