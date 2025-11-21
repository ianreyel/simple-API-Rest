document.getElementById('pontoDescarteForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 
    
    const form = event.target;
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = ''; 
    messageDiv.style.backgroundColor = 'transparent';

    const nomeLocal = form.nomeLocal.value;
    const bairro = form.bairro.value;
    const tipoLocal = form.tipoLocal.value;
    const categoriaResiduos = form.categoriaResiduos.value;
    
    const geolocalizacao = `${form.geolocalizacaoLat.value},${form.geolocalizacaoLon.value}`;

    const data = {
        nomeLocal: nomeLocal,
        bairro: bairro,
        tipoLocal: tipoLocal,
        categoriaResiduos: categoriaResiduos,
        geolocalizacao: geolocalizacao
    };

    try {
        const response = await fetch('http://localhost:3000/pontos-descarte', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            messageDiv.textContent = `Sucesso! ID: ${result.id}, Mensagem: ${result.message}`;
            messageDiv.style.backgroundColor = '#d4edda';
            messageDiv.style.color = '#155724';
            form.reset(); 
        } else {
            const errorMessage = result.message || 'Erro desconhecido.';
            messageDiv.textContent = `Erro ao cadastrar: ${Array.isArray(errorMessage) ? errorMessage.join(', ') : errorMessage}`;
            messageDiv.style.backgroundColor = '#f8d7da';
            messageDiv.style.color = '#721c24';
        }
    } catch (error) {
        messageDiv.textContent = 'Erro de conexão com o servidor. Verifique se o backend está rodando em http://localhost:3000.';
        messageDiv.style.backgroundColor = '#f8d7da';
        messageDiv.style.color = '#721c24';
        console.error('Fetch error:', error);
    }
});