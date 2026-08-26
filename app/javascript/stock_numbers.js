document.addEventListener("turbo:load", () => {
  const button = document.getElementById("view-all-images");
  const container = document.getElementById("stock-numbers");

  if (!button || !container) {
    return;
  }

  button.addEventListener("click", () => {
    const stockNumbers = JSON.parse(container.dataset.stockNumbers);

    stockNumbers.forEach((stockNumber) => {
      const query = encodeURIComponent(`New Balance Stock Number ${stockNumber}`);

      const url = `https://www.google.com/search?tbm=isch&q=${query}`;

      window.open(url, "_blank");
    });
  });
});