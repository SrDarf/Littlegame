function showErrorToast() {
    var toast = document.getElementById("errorToast");
    toast.classList.add("show-toast");
    setTimeout(function(){
        toast.classList.remove("show-toast");
    }, 3000); // 3000 milissegundos = 3 segundos
}