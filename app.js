//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const express = require("express");
const dotenv = require("dotenv").config();
const { connect } = require("@unyxos/working-rcon");
const csgo = require('./src/csgo');
const app = express();

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//MiddleWares

app.use(cors({ methods: ["GET", "POST"] }));

app.get("/metrics", async (req, res) => {
  const { ip, port, password, game } = req.query;

  try {
    const client = await connect(ip, port, password, 5 * 1000);

    const status = await client.command("status");
    const stats = await client.command("stats");

    await client.disconnect();
    const response = csgo.setMetrics(
      { stats, status },
      { ip, port, game }
    );

    res.end(response);
  } catch (err) {
    const response = csgo.setNoMetrics({ ip, port, game });
    res.end(response);
  }
});

app.use("*", (req, res) => {
  res.status(401).send({
    status: 401,
    error: "Unauthorized",
    message: "client failed to authenticate with the server",
  });
});

app.listen(process.env.PORT || 9591, async () => {
    console.log("[📶]Server Is Running Properly ....");
    console.log("[⚙️]Port : ", process.env.PORT || 9591);
  });

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//