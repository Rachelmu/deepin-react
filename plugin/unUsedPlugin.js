const fs = require("fs");
const path = require("path");
// import { Compiler, compilation } from 'webpack'

const PluginName = "UnusedModulesPlugin";

class UnusedModulesPlugin {
  constructor(options) {
    this.options = Object.assign(
      {
        sourceDir: "",
        compilationExclude: compilation => false,
        output: "unusedModules.json",
        exclude: [],
      },
      options
    );
  }

  apply(compiler) {
    const { sourceDir, compilationExclude, output } = this.options;

    compiler.hooks.compilation.tap(PluginName, compilation => {
      if (compilationExclude(compilation)) {
        return;
      }

      compilation.hooks.afterOptimizeChunkAssets.tap(PluginName, chunks => {
        const modules = {};

        chunks.forEach(chunk => {
          chunk.getModules().map(module => {
            const src = module.resource || "";

            if (!src || src.indexOf(sourceDir) === -1) {
              return;
            }

            modules[src] = 1;
          });
        });

        const list = this.diff(walk(sourceDir), modules);
        fs.writeFileSync(output, JSON.stringify(list, null, 2));
      });
    });
  }

  diff(files, modules) {
    const { exclude, sourceDir } = this.options;
    const ret = [];

    for (let i in files) {
      if (isExclude(exclude, i)) {
        continue;
      }

      if (!modules[i]) {
        ret.push(i);
      }
    }

    return ret.map(item => path.relative(sourceDir, item));
  }
}

function walk(dir, ret) {
  if (!ret) {
    ret = {};
  }

  const files = fs.readdirSync(dir);

  for (let file of files) {
    const p = path.join(dir, file);
    const stat = fs.statSync(p);

    if (stat.isDirectory()) {
      walk(p, ret);
      continue;
    }

    ret[p] = 1;
  }

  return ret;
}

function isExclude(exclude, src) {
  return exclude.some(item => {
    if (item.test(src)) {
      return true;
    }

    return false;
  });
}

module.exports = UnusedModulesPlugin;
