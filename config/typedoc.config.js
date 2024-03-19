import { globSync } from "glob";

/** @type {import('typedoc').TypeDocOptions} */
export default {
  name: "@utilslib",
  // readme: "README.md",
  plugin: ["typedoc-plugin-markdown"],
  entryPoints: globSync("packages/*").map((item) => "../" + item),
  entryPointStrategy: "packages",
  hideGenerator: true,
  includeVersion: false,
  navigationLinks: {
    GitHub: "https://github.com/T-Tuan/utilslib",
  },
};
