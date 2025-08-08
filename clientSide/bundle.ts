import * as esbuild from "npm:esbuild";

await esbuild.build({
  entryPoints: ["./clientSide/index.ts"],
  bundle: true,
  outfile: "./public/scripts/index.js",
  treeShaking: false,
  format: "esm",
  platform: "browser",
  minify: false,
});

esbuild.stop();
