export const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
};
export const capitalize = (title) =>
  title.replace(/\b\w/g, (char) => char.toUpperCase());

export const convertToTitle = (name) => {
  return name
    .split("_") // Split by underscore
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
    .join(" "); // Join back into a string
};
