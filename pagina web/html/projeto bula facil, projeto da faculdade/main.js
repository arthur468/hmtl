const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const loadingIndicator = document.getElementById('loading-indicator');
const historyList = document.getElementById('history-list');
const medicationImage = document.getElementById('medication-image');
const medicationDetails = document.querySelector('.medication-details');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;

    // Simulando carregamento
    loadingIndicator.style.display = 'block';
    setTimeout(() => {
        loadingIndicator.style.display = 'none';
        // Adicionar pesquisa ao histórico
        const historyItem = document.createElement('li');
        historyItem.textContent = searchTerm;
        historyList.appendChild(historyItem);
    }, 2000);
});

medicationImage.addEventListener('mouseover', () => {
    // Simulando informações do medicamento
    medicationDetails.innerHTML = '<h3>Nome do Medicamento</h3><p>Informações sobre o medicamento.</p>';
});
