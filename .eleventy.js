module.exports = function(eleventyConfig) {
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