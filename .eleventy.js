const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copy static assets like PDF, images, etc.
  eleventyConfig.addPassthroughCopy("assets");
  // Copy styles.
  eleventyConfig.addPassthroughCopy("styles");
  // For github actions:
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  // To format dates in the blog
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat("DDDD");
  });
  // Collect markdown posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./posts/*.md");
  });

  return {
    dir: {
      input: ".",        // current directory
      includes: "_includes",
      output: "_site",
      pathPrefix: "arielwrl.github.io"
    }
  };
};