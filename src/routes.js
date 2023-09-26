const Scheduling = require("./models/SchedulingSchema");
const express = require("express");
const routes = express();
const auth = require("../src/services/auth");
const senhaJtw = require("../src/services/jwt");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

routes.post("/adm", async (req, res) => {
  try {
    const data = req.body;
    const { nameAdm, password } = data;
    const senhaCrypt = await bcrypt.hash(auth.senha, 10);
    const senhaValida = await bcrypt.compare(password, senhaCrypt);
    if (!senhaValida) {
      return res.status(400).json({ message: "Senha invalida" });
    }
    if (nameAdm !== auth.name) {
      return res.status(400).json({ message: "Nome invalido" });
    }

    const token = jwt.sign({ nome: auth.name, senha: senhaCrypt }, senhaJtw, {
      expiresIn: "8h",
    });
    res.status(200).json(token);
  } catch (error) {
    console.log("erro aqui---->", error);
  }
});
routes.post("/scheduling", async (req, res) => {
  try {
    const data = req.body;
    const { name, phone, time, date, services, id, day, servicesAdditional } =
      data;
    const user = await Scheduling.findOneAndUpdate(
      { id },
      {
        name,
        phone,
        date,
        time,
        services,
        servicesAdditional,
        day,
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

routes.get("/users", async (req, res) => {
  try {
    const users = await Scheduling.find();

    if (!users) {
      return res.status(404).send("Usuários não encontrado");
    }

    return res.send(users);
  } catch (error) {
    console.log("mensagem de erooo ------>", error);
  }
});

module.exports = routes;
