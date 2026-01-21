function names(){
    let name=document.createElement("li");
    name.innerText="John Doe";
    return name;
}
let list = document.querySelector("ul");
list.append(names());
