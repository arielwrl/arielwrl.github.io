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
