window.addEventListener("load", function() {
    const createToDoButton = document.querySelector("#todo-post")
    console.log(createToDoButton)
    createToDoButton.addEventListener("click", function() {
        console.log("Hello")
    })
})