module.exports = function (eleventyConfig) {

  // This will stop the default behaviour of foo.html being turned into foo/index.html
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.setTemplateFormats(["html", "njk", "js", "css", "png", "jpg", "gif", "webp", "md"]);
  eleventyConfig.addPassthroughCopy("src/resource");
  eleventyConfig.addPassthroughCopy("src/gallery/**/*.{jpg,jpeg,png,gif,webp,tif,tiff,mp3}");
  return {
    // This makes sure HTML files use Nunjucks
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "build",
    },
  };
};