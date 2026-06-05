function showTab(tabId){

    let tabs =
    document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {

        tab.classList.remove("active");

    });

    document
        .getElementById(tabId)
        .classList.add("active");
}