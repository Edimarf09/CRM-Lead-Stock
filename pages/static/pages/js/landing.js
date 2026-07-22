// LeadStock — Landing page
// Interações: ano no rodapé, troca de cor de marca (swatches) e toggle de módulos na prévia.

document.addEventListener('DOMContentLoaded', function () {

    // Ano atual no rodapé
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Swatches: trocam a cor de marca da prévia (--demo-brand)
    var swatches = document.querySelectorAll('[data-swatch]');
    swatches.forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.documentElement.style.setProperty('--demo-brand', btn.dataset.swatch);
            swatches.forEach(function (b) {
                b.classList.remove('is-active');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('is-active');
            btn.setAttribute('aria-pressed', 'true');
        });
    });

    // Contagem de módulos ativos (2 fixos: Dashboard + Config. + os marcados)
    function updateModuleCount() {
        var active = document.querySelectorAll('.chip.is-active[data-module-toggle]').length + 2;
        var countEl = document.getElementById('module-count');
        if (countEl) countEl.textContent = active;
    }

    // Toggle de módulos: mostra/esconde o item na sidebar da prévia
    var toggles = document.querySelectorAll('[data-module-toggle]');
    toggles.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var isActive = btn.getAttribute('aria-pressed') === 'true';
            var target = document.getElementById(btn.dataset.target);

            btn.setAttribute('aria-pressed', String(!isActive));
            btn.classList.toggle('is-active', !isActive);

            if (target) target.classList.toggle('hidden', isActive);

            updateModuleCount();
        });
    });

    updateModuleCount();
});