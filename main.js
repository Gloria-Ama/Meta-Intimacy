    /* Meta Intimacy — Scripts globaux */

    /* Année footer */
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    /* Dropdown mobile uniquement */
    if (window.innerWidth <= 992) {
    document.querySelectorAll('.has-dropdown > .menu-link').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var parent = this.closest('.has-dropdown');
        var isOpen = parent.classList.contains('open');
        document.querySelectorAll('.has-dropdown.open').forEach(function(el) {
            el.classList.remove('open');
        });
        if (!isOpen) parent.classList.add('open');
        });
    });
    document.addEventListener('click', function() {
        document.querySelectorAll('.has-dropdown.open').forEach(function(el) {
        el.classList.remove('open');
        });
    });
    }