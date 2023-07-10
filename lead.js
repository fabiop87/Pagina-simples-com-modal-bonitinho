document.getElementById('lead-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');

    const name = nameInput.value;
    const email = emailInput.value;

    // Salva as informações de lead no armazenamento local
    localStorage.setItem('leadName', name);
    localStorage.setItem('leadEmail', email);


    // Exibe a mensagem de sucesso
    document.getElementById('success-message').classList.remove('d-none');

    // Fecha o pop-up
    setTimeout(function() {
    const popup = document.getElementById('popup');
    const modal = bootstrap.Modal.getInstance(popup);
    modal.hide();
}, 1000);
});

// Verifica se há informações de lead no armazenamento local
const hasLeadInfo = localStorage.getItem('leadName') && localStorage.getItem('leadEmail');

// Se já tiver informações de lead, oculta o pop-up
if (hasLeadInfo) {
    const popup = document.getElementById('popup');
    const modal = new bootstrap.Modal(popup);
    modal.hide();
}
