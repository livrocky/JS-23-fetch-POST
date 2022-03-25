const formEl = document.querySelector("form");
const inputEl = document.getElementById("input");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const newProduct = {
    title: formEl.elements.title.value,
    price: formEl.elements.price.value,
    description: formEl.elements.description.value,
    image: formEl.elements.image.value,
    category: formEl.elements.category.value,
  };
  console.log("newProduct===", newProduct);

  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(newProduct),
  })
    .then((resp) => {
      console.log("resp===", resp);
      if (resp.ok) {
        //sukurem sekmingai
        console.log("success");
      } else {
        // console.log("klaida");
        throw new Error("nepavyko sukurti");
      }
      return resp.json();
    })
    .then((ats) => {
      // sekmingas sukurimas
      formEl.reset();
      showSuccessAlert();
    })
    .catch((error) => {
      console.log(error.message);
      showFailAlert()();
    });
});

//parodyti laikinai sekmes pranesima
function showSuccessAlert() {
  const alertEl = document.createElement("h3");
  alertEl.className = "alert";
  alertEl.textContent = "Postas sukurtas";
  document.body.prepend(alertEl);
  setTimeout(() => {
    alertEl.remove();
  }, 3000);
}

function showFailAlert() {
  //parodyti pranesima
  const alertEl = document.createElement("h3");
  alertEl.className = "alert danger";
  alertEl.textContent = "Postas nesukurtas, klaida!";
  document.body.prepend(alertEl);
  setTimeout(() => {
    alertEl.remove();
  }, 3000);
}
