import { registerApplication, start } from "single-spa";
import eventBus from "./eventBus";

registerApplication({
  name: "@mf/navigation",
  app: () => System.import("@mf/navigation"),
  activeWhen: ["/"],
  customProps: () => {
    return { eventBus };
  },
});
registerApplication({
  name: "@mf/dogs",
  app: () => System.import("@mf/dogs"),
  activeWhen: ["/dogs"],
  customProps: () => {
    return { eventBus };
  },
});

start({
  urlRerouteOnly: true,
});
