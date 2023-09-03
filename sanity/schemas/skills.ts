const skills = {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { value: "backend", title: "Backend" },
          { value: "database", title: "Database" },
          { value: "design", title: "Design" },
          { value: "frontend", title: "Frontend" },
          { value: "mobile", title: "Mobile" },
          { value: "other", title: "Other" },
        ],
      },
    },
  ],
};

export default skills;
