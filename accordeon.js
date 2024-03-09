const accordItem = document.querySelectorAll(".accordion-item");
accordItem.forEach((e) => {
    e.addEventListener("click", toggleItem, false);
});

function toggleItem() {
    const isActive = this.classList.contains("active");

    accordItem.forEach((e) => {
        if (e.classList.contains("active")) {
            e.classList.remove("active")
        }
    })

    if (!isActive) {
        this.classList.add("active")
    }
}