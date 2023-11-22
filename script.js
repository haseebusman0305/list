document.getElementById("submit").addEventListener("click", (value) => {
    value.preventDefault();
    let titlev = document.getElementById("title").value;
    let docv = document.getElementById("docs").value;
    localStorage.setItem("todo", JSON.stringify({ title: titlev, description: docv }));
    document.getElementById("todo").innerHTML = `
        <h1>${titlev}</h1>
        <h4>${docv}</h4>`;
    document.getElementById("title").value = "";
    document.getElementById("docs").value = "";
});

document.getElementById("deletebtn").addEventListener("click", (v) => {
    v.preventDefault();
    localStorage.removeItem("todo");
    document.getElementById("todo").innerHTML = '';
});