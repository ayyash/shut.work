
const fs = require('fs');
fs.rmSync('./_site', {recursive: true, force: true});

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

    eleventyConfig.addShortcode("mirror", function () {
        return `<span class="label label-blue smaller">mirrored</span>`;
    });

	eleventyConfig.addShortcode("logic", function () {
        return `<span class="label label-yellow smaller">logical</span>`;
    });


    eleventyConfig.addPairedShortcode("modal", function (content, title, trigger, footer) {
        return `
        <div class="dr-modal-overlay modal-overlay" data-trigger="${trigger}">
            <div class="modal dr-window" role="dialog" aria-labelledby="modaltitle" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content dr-content">
                        <div class="modal-header">
                            <h6 class="f6 modal-title dr-title">${title}</h6>
                            <button type="button" class="modal-close dr-close" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ${content}
                        </div>
                        ${ footer ? `<div class="modal-footer">${footer}</div>` : ``}                        
                    </div>
                </div>
            </div>
        </div>`;
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