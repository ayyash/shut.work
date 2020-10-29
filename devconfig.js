
const del = require("del");
del.sync("./_site");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

    eleventyConfig.addShortcode("mirror", function() {
        return `<span class="label label-blue smaller">mirored</span>`;
      });

    return {
        passthroughFileCopy: true,

        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        dir: {
            input: "src/app",
            output: "_site",
            includes: "../includes"
        }
    };
};