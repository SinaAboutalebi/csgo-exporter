//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const prometheus = require("prom-client");
const { Gauge } = prometheus;

const csgoRegistry = new prometheus.Registry();
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Mtrics

const metrics = {
  status: new Gauge({
    name: "srcds_status",
    help: "The server's status, 0 = offline/bad password, 1 = online",
    registers: [csgoRegistry],
  }),
  cpu: new Gauge({
    name: "srcds_cpu",
    help: "The server's CPU usage",
    registers: [csgoRegistry],
  }),
  netin: new Gauge({
    name: "srcds_netin",
    help: "The server's netin usage",
    registers: [csgoRegistry],
  }),
  netout: new Gauge({
    name: "srcds_netout",
    help: "The server's netout usage",
    registers: [csgoRegistry],
  }),
  uptime: new Gauge({
    name: "srcds_uptime",
    help: "The server's uptime",
    registers: [csgoRegistry],
  }),
  maps: new Gauge({
    name: "srcds_maps",
    help: "The server's current map",
    registers: [csgoRegistry],
  }),
  fps: new Gauge({
    name: "srcds_fps",
    help: "The server's current FPS",
    registers: [csgoRegistry],
  }),
  players: new Gauge({
    name: "srcds_players",
    help: "The server's current players",
    registers: [csgoRegistry],
  }),
  svms: new Gauge({
    name: "srcds_svms",
    help: "The server's current SVMs",
    registers: [csgoRegistry],
  }),
  varms: new Gauge({
    name: "srcds_varm",
    help: "The server's current VARMs",
    registers: [csgoRegistry],
  }),
  tick: new Gauge({
    name: "srcds_tick",
    help: "The server's current tick",
    registers: [csgoRegistry],
  }),
};

module.exports = {
  registries,
  metrics,
};
