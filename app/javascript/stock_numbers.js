document.addEventListener("turbo:load", () => {
  const button = document.getElementById("view-all-images");
  const container = document.getElementById("stock-numbers");

  if (button && container) {
    button.addEventListener("click", () => {
      const stockNumbers = JSON.parse(container.dataset.stockNumbers);

      stockNumbers.forEach((stockNumber) => {
        const query = encodeURIComponent(`New Balance ${stockNumber}`);
        const url = `https://www.google.com/search?tbm=isch&q=${query}`;
        window.open(url, "_blank");
      });
    });
  }

  const likedStockNumbers = JSON.parse(
    localStorage.getItem("likedStockNumbers") || "[]"
  );

  const checkboxes = document.querySelectorAll(".liked-stock-number");

  checkboxes.forEach((checkbox) => {
    const stockNumber = checkbox.dataset.stockNumber;

    checkbox.checked = likedStockNumbers.includes(stockNumber);

    checkbox.addEventListener("change", () => {
      let liked = JSON.parse(
        localStorage.getItem("likedStockNumbers") || "[]"
      );

      if (checkbox.checked) {
        if (!liked.includes(stockNumber)) {
          liked.push(stockNumber);
        }
      } else {
        liked = liked.filter((number) => number !== stockNumber);
      }

      localStorage.setItem(
        "likedStockNumbers",
        JSON.stringify(liked)
      );

      console.log("LIKES SAVED:", localStorage.getItem("likedStockNumbers"));
    });
  });
});