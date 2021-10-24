import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mf/navigation",
  app: () => System.import("@mf/navigation"),
  activeWhen: ["/"],
  customProps: () => {
    return { myPet: "dog" };
  },
});
registerApplication({
  name: "@mf/dogs",
  app: () => System.import("@mf/dogs"),
  activeWhen: ["/dogs"],
  customProps: () => {
    return { myPet: "dog" };
  },
});

start({
  urlRerouteOnly: true,
});
