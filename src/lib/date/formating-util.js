const formattedDate = (date) =>
  new Date(date).toLocaleDateString("en-EN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export { formattedDate };
