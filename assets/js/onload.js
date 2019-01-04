function onload() {
    if (window.matchMedia('(max-width: 576px').matches) {
        sideBarToggleMobile.firstElementChild.classList = 'fas fa-angle-right';
        sideBar.classList = 'sidebar-m';
    }
}