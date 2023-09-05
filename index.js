//for loops
const randomOptionsContainer = document.getElementById("randomOptions");
const btn = document.getElementById("btn");

const countObjects = (obj) => {
    let numberSelected = 0;
    for (let i = 0; i < obj.options.length; i++) {
        if (obj.options[i].selected) {
            numberSelected++;
        }
    }

    return numberSelected;
};

btn.addEventListener("click", () => {
    console.log("clicked");
    console.log(countObjects(randomOptionsContainer));
});