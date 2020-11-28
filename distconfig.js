
const del = require("del");
del.sync("./dist");

const devConfig = require('./devconfig.js');

module.exports = function (eleventyConfig) {
   
    devConfig(eleventyConfig);

    // eleventyConfig.addPassthroughCopy({"src/config/dist.js": "assets/js/config.js"});

    eleventyConfig.addLayoutAlias('base', 'base.dist.njk');

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        dir: {
            input: "src/app",
            output: "dist",
            includes: "../includes"
        }
    };
};