export default function saveJSON({ data }) {
  const element = document.createElement("a");
  const file = new Blob([data], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = "drinks.txt";
  document.body.appendChild(element);
  element.click();
}
