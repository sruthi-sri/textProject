let edit = null;
getteingElement();

function mainthree() {
  let array;
  console.log("buttonclicked");
  let callElement = document.getElementById("addtask").value;
  let getele = JSON.parse(localStorage.getItem("keys"));
  console.log(getele);
  if (edit !== null) {
    array.splice(edit, 1, callElement);
    localStorage.setItem("keys", JSON.stringify(array));
    getteingElement();
    edit = null;
    return;
  }
  if (callElement === "") {
    alert("enter your valed information");
    return;
  }
  if (getele === null) {
    array = [];
  } else {
    array = JSON.parse(getele);
  }

  array.push(callElement);
  console.log(array);
  localStorage.setItem("keys", JSON.stringify(array));
  getteingElement();
}
function getteingElement() {
  let calling = document.getElementById("addone");
  let getele = localStorage.getItem("keys");
  console.log(getele);
  let parsedValue = JSON.parse(getele);
  console.log(parsedValue);
  let html = "";
  parsedValue &&
    parsedValue.map((each, index) => {
      html =
        html +
        `<div class="taskone">
                    <form>
                        <input type="checkbox" name="option" id="addtask${index}" onchange="changeBlock(${index})">
                        <label id=elementBlock(${index})>${each}</label>
                    </form>

                    <div class="one"><button id="event" onclick="editeTask(${index})"><i class="ri-edit-box-line"></i></button>
                        <button class="two" onclick="deleteTask(${index})"><i class="ri-delete-bin-6-line"></i></button>

                        </div>

                </div>`;
    });
  calling.innerHTML = html;
}
function editeTask(i) {
  console.log("index===", i);
  let getele = JSON.parse(localStorage.getItem("keys"));
  let callElement = document.getElementById("addtask");
  callElement.value = getele[i];
  edit = i;
}
function deleteTask(ind) {
  let getele = JSON.parse(localStorage.getItem("keys"));
  getele.splice(ind, 1);
  localStorage.setItem("keys", JSON.stringify(getele));
  getteingElement();
}
