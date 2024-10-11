let optionsButtons = document.querySelectorAll(".option-btn");
let advancedOptionBtn = document.querySelectorAll(".adv-option-btn");
let fontName = document.getElementById("fontName");
let writtingArea = document.getElementById("text-input");
let createLink = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

let fontList = ["Arial", "Verdana", "Times New Roman", "Garamond", "Georgia", "Courier New", "cursive"];

const initialazer = () => {
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);

    fontList.map(value => {
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    })
};

const modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value);
}

optionsButtons.forEach(button => {
    button.addEventListener("click", () => {
        modifyText(button.id, false, null)
    })
})

advancedOptionBtn.forEach(button => {
    button.addEventListener("click", () => {
        modifyText(button.id, false, button.value)
    })
})

createLink.addEventListener('click', () => {
    let userLink = prompt("Enter a URL");

    if(/http/i.test(userLink)) {
        modifyText(createLink.id, false, userLink)
    } else {
        userLink = "http://" + userLink;
        modifyText(createLink.id, false, userLink)
    }
})

const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", function() {
            if(needsRemoval) {
                let alreadyActive = false;

                if(button.classList.contains("active")) {
                    alreadyActive = true;
                }

                highlighterRemover(className);
                if(!alreadyActive) {
                    alignButtons.classList.add("active")
                }
            } else {
                button.classList.toggle("active");
            }
        })
    })
}

const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove("active")
    })
}

window.onload = initialazer();