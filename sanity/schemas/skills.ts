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
          { value: "frontend", title: "Frontend" },
          { value: "backend", title: "Backend" },
          { value: "mobile", title: "Mobile" },
          { value: "design", title: "Design" },
          { value: "other", title: "Other" },
        ],
      },
    },
  ],
};

export default skills;
