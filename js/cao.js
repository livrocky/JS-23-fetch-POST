// const baseUrl = "https://olive-bead-glazer.glitch.me";

// function postTable() {
//   fetch(baseUrl, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//     body: JSON.stringify(carTable),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("data===", data);
//     });
// }
const tableEl = document.createElement("table");
tableEl.id = "mainTable";
document.body.append(tableEl);
console.log(tableEl);

function getTable() {
  fetch("https://olive-bead-glazer.glitch.me/")
    .then((resp) => resp.json())
    .then((data) => {
      console.log("data===", data);
      data.forEach((uObj) => {
        mainTable.insertAdjacentHTML("beforeend", createTable(uObj));
      });
    })
    .catch((err) => console.log(err.message));
}
getTable();

function createTable(userObject) {
  return `
      <table>
      <tr>
          <th>brand</th>
          <th>model</th>
      </tr>
      <td>${userObject.brand}</td>
      <td>${userObject.model}</td>
    </table>`;
}
