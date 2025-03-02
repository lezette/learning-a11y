const dayjs = require("dayjs");

module.exports = function (config) {
  // Pass-through images and processed CSS
  config.addPassthroughCopy("./src/images");
  config.addPassthroughCopy("./_site/css");

  // Add Date filters
  config.addFilter("date", (dateObj, format = "D MMM YYYY") => {
    return dayjs(dateObj).format(format);
  });

  config.addFilter("sitemapDate", (dateObj) => {
    return dayjs(dateObj).toISOString();
  });

  config.addFilter("year", () => {
    return dayjs().format("YYYY");
  });

  // Add pages collection
  config.addCollection("pages", function (collections) {
    return collections.getFilteredByTag("page").sort(function (a, b) {
      return a.data.order - b.data.order;
    });
  });

  config.addCollection("was", function (collectionApi) {
    return collectionApi.getFilteredByTag("was").reverse();
  });

  config.addCollection("tagList", function (collectionApi) {
    let tagSet = new Set();
    collectionApi.getAll().forEach(item => {
      if ("tags" in item.data) {
        item.data.tags.forEach(tag => tagSet.add(tag));
      }
    });
    return [...tagSet];
  });

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src"
    },
  };
};
