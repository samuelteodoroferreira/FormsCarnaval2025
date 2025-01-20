// Autor: Samuel Teodoro Ferreira
// para exibir e mostrar os itens da banda
document.addEventListener('DOMContentLoaded', function() {
    // Selecionar o fieldset e o checkbox
    const fieldset = document.getElementById('tipoDeSomFieldset');
    const bandaCheckbox = document.getElementById('sambaCheckbox');

    // Ocultar o fieldset inicialmente
    fieldset.style.display = 'none';

    // Adicionar evento de clique ao checkbox "Banda"
    sambaCheckbox.addEventListener('change', function() {
        if (bandaCheckbox.checked) {
            fieldset.style.display = 'block';
        } else {
            fieldset.style.display = 'none';
        }
    });
});


// Para selecionar o ano "ano de criação do bloco"
document.addEventListener('DOMContentLoaded', function() {
    // Selecionar o elemento select com ID 'ano'
    const anoSelect = document.getElementById('ano');

    // Gerar opções de anos de 1950 a 2025
    for (let year = 1950; year <= 2025; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        anoSelect.appendChild(option);
    }

    // Selecionar o fieldset e o checkbox
    const fieldset = document.getElementById('tipoDeSomFieldset');
    const bandaCheckbox = document.getElementById('bandaCheckbox');

    // Ocultar o fieldset inicialmente
    fieldset.style.display = 'none';

    // Adicionar evento de clique ao checkbox "Banda"
    bandaCheckbox.addEventListener('change', function() {
        if (bandaCheckbox.checked) {
            fieldset.style.display = 'block';
        } else {
            fieldset.style.display = 'none';
        }
    });
});