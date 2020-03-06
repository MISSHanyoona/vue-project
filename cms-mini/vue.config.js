const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
    chainWebpack: config => {
        const types = ["vue-modules", "vue", "normal-modules", "normal"]
        types.forEach(type =>
            addStyleResource(config.module.rule("less").oneOf(type))
        );
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    }
};
function addStyleResource(rule) {
    rule
        .use("style-resource")
        .loader("style-resources-loader")
        .options({
            patterns: [
                path.resolve(__dirname, "src/styles/base.less") // 需要全局导入的less
            ]
        })
}

