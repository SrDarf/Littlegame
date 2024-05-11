document.getElementById("lamp").addEventListener("click", function() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
});

document.getElementById("yesButton").addEventListener("click", function() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";

    var arrowContainer = document.getElementById("arrowContainer");
    arrowContainer.classList.add("active");
});

document.getElementById("noButton").addEventListener("click", function() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";

    var arrowContainer = document.getElementById("arrowContainer");
    arrowContainer.classList.remove("active");
});
