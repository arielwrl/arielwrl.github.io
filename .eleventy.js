module.exports = function(eleventyConfig) {
  // Copy static assets like PDF, images, etc.
  eleventyConfig.addPassthroughCopy("assets");

  // Collect markdown posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./posts/*.md");
  });

  return {
    dir: {
      input: ".",        // current directory
      includes: "_includes",
      output: "_site"
    }
  };
};

const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // necessary to automatically prepend the prefix to internal links
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  return {
    // prefix used by GitHub Pages, usually your project name
    pathPrefix: "arielwrl.github.io"
  }
};