export default function getDate(date) {
  let dateString = new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return dateString;
}
