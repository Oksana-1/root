import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mf/navigation",
  app: () => System.import("//localhost:9001/js/app.js"),
  activeWhen: ["/"],
});
registerApplication({
  name: "@mf/dogs",
  app: () => System.import("//localhost:9002/js/app.js"),
  activeWhen: ["/dogs"],
});

start({
  urlRerouteOnly: true,
});
