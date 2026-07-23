// LeadStock — Shell da área logada
// Comportamentos compartilhados por todos os módulos.

document.addEventListener('DOMContentLoaded', function () {

    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('sidebar-overlay');
    var toggle = document.getElementById('menu-toggle');

    function closeSidebar() {
        if (sidebar) sidebar.classList.remove('is-open');
        if (overlay) overlay.classList.remove('is-visible');
    }

    if (toggle && sidebar) {
        toggle.addEventListener('click', function () {
            sidebar.classList.toggle('is-open');
            if (overlay) overlay.classList.toggle('is-visible');
        });
    }

    if (overlay) overlay.addEventListener('click', closeSidebar);

    // Esc fecha o menu no mobile
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeSidebar();
    });

});