import Collection from "./collection.html.twig";

// import CollectionContent from "./collection.content.json";
// import CollectionDateContent from "./collection-date.content.json";

export default {
  title: "Components/Collection",
  args: {
    collection: [
      {
        heading: "Collection heading",
        domain: "A domain",
      },
      {
        heading: "Another item",
        domain: "Another domain",
      },
    ],
  },
  component: Collection,
};

export const Default = {};

export const Date = {
  args: {
    collection: [
      {
        heading: "An event",
        body: "A sample description.",
        month: "Dec",
        day: "11",
      },
      {
        heading: "A second event",
        body: "Another description.",
        month: "Dec",
        day: "13",
      },
      {
        heading: "A third event",
        body: "Event description.",
        month: "Dec",
        day: "15",
      },
    ],
  },
};
