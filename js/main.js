// DOM LOADED

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('layout');
    const sidebar = document.getElementById('sidebar');

    const sidebarToggle = document.getElementById('expand');
    const icon = sidebarToggle.querySelector('i');
    const menuText = sidebar.querySelectorAll('.menu-text');

    sidebarToggle.addEventListener('click', () => {
        
        sidebar.classList.toggle('active-sidebar');
        wrapper.classList.toggle('active-sidebar');

        menuText.forEach((item) => {
            item.classList.toggle('hidden');
        });

        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-bars-staggered');
        } else {
            icon.classList.remove('fa-bars-staggered');
            icon.classList.add('fa-bars');
        }


    });

});