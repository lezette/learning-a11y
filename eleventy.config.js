const dayjs = require("dayjs");
const relativeTime = require('dayjs/plugin/relativeTime')
const utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc);
dayjs.extend(relativeTime);
dayjs.extend(timezone);

module.exports = function (config) {
  // Pass-through images and processed CSS
  config.addPassthroughCopy("./src/images");
  config.addPassthroughCopy("./_site/css");

  // Add Date filters
  config.addFilter("date", (dateObj, format = "D MMM YYYY") => {
    return dayjs(dateObj).format(format);
  });

  config.addFilter("dateFromNow", (dateObj) => {
    const date = dayjs.utc(dateObj).tz("Africa/Lagos").startOf("day");
    const today = dayjs().tz("Africa/Lagos").startOf("day");
    const diff = today.diff(date, "day");

    if (diff === 0) {
      return "Today";
    } else if (diff === 1) {
      return "Yesterday";
    } else {
      return date.fromNow();
    }
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
