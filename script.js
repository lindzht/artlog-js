const hello = document.querySelector("header > h1");


fetch()

const changeHeader = () => {
    hello.addEventListener("click", () => {
        if (hello.innerText === "Hello!") {
            hello.innerText = "Bye!";
        } else {
            hello.innerText = "Hello!";
        }
    })
};

changeHeader();