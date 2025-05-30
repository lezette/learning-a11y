const {
  formatDistanceToNow,
  format,
  getYear,
  isToday,
  isYesterday,
  differenceInDays,
  differenceInWeeks,
  differenceInMonths
} = require("date-fns");


module.exports = function (config) {
  // Pass-through images and processed CSS
  config.addPassthroughCopy("./src/images");
  config.addPassthroughCopy("./_site/css");

  // Add Date filters
  config.addFilter("date", (dateObj) => {
    if (!dateObj) return "";
    const date = new Date(dateObj);
    return format(date, "d MMM yyyy");
  });

  config.addFilter("dateFromNow", (dateObj) => {
    if (!dateObj) return "";
    const date = new Date(dateObj);
    const now = new Date();

    const daysDiff = differenceInDays(now, date);
    const weeksDiff = differenceInWeeks(now, date);
    const monthsDiff = differenceInMonths(now, date);

    switch (true) {
      case isToday(date):
        return "Today";

      case isYesterday(date):
        return "Yesterday";

      case daysDiff === 7:
        return "A week ago";

      case weeksDiff === 1:
        return "Last week";

      case monthsDiff === 1:
        return "Last month";

      default:
        return formatDistanceToNow(date, { addSuffix: true });
    }
  });


  config.addFilter("sitemapDate", (dateObj) => {
    if (!dateObj) return "";
    const date = new Date(dateObj);
    return date.toISOString();
  });

  config.addFilter("year", () => {
    return getYear(new Date());
  });

  config.addCollection("pages", function (collections) {
    return collections.getFilteredByTag("page").sort((a, b) => {
      // If one of the pages is "Tutorials", force it to the bottom
      const aIsTutorials = a.data.isTutorials;
      const bIsTutorials = b.data.isTutorials;

      if (aIsTutorials && !bIsTutorials) return 1;  // a should come after b
      if (!aIsTutorials && bIsTutorials) return -1; // a should come before b
      if (aIsTutorials && bIsTutorials) return 0;   // both are Tutorials

      // Otherwise, sort by order or title
      return (a.data.order || 0) - (b.data.order || 0);
    });
  });


  config.addCollection("was", function (collectionApi) {
    return collectionApi.getFilteredByTag("was").reverse();
  });

  config.addCollection("tutorial", function (collectionApi) {
    return collectionApi.getFilteredByTag("tutorial");
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
