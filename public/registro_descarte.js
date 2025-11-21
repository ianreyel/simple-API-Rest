const BASE_URL = 'http://localhost:3000';
const selectPonto = document.getElementById('id_pontoDescarte');
const messageDiv = document.getElementById('message');
const loadingP = document.getElementById('loading');
async function loadPontosDescarte() {
    loadingP.textContent = 'Buscando pontos de descarte na API...';
    selectPonto.innerHTML = '<option value="">Carregando...</option>';

    try {
        const response = await fetch(`${BASE_URL}/pontos-descarte`);
        
        if (!response.ok) {
            throw new Error('Falha ao buscar pontos de descarte. Status: ' + response.status);
        }

        const pontos = await response.json();
        loadingP.textContent = '';
        selectPonto.innerHTML = '<option value="">-- Selecione um ponto --</option>';

        if (pontos.length === 0) {
            selectPonto.innerHTML = '<option value="">Nenhum ponto cadastrado. Cadastre um primeiro!</option>';
            selectPonto.disabled = true;
            return;
        }
        pontos.forEach(ponto => {
            const option = document.createElement('option');
            option.value = ponto.id; 
            option.textContent = `${ponto.nomeLocal} (${ponto.bairro})`;
            selectPonto.appendChild(option);
        });
        
        selectPonto.disabled = false;

    } catch (error) {
        loadingP.textContent = `Erro: ${error.message}`;
        selectPonto.innerHTML = '<option value="">Erro ao carregar pontos</option>';
        selectPonto.disabled = true;
        console.error('Erro ao carregar pontos de descarte:', error);
    }
}
document.getElementById('registroDescarteForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    messageDiv.textContent = '';
    messageDiv.style.backgroundColor = 'transparent';

    const form = event.target;
    const dateInput = form.data.value;
    const dateUTC = new Date(dateInput).toISOString();
    
    const data = {
        nomeUsuario: form.nomeUsuario.value,
        id_pontoDescarte: parseInt(form.id_pontoDescarte.value), 
        tipoResiduo: form.tipoResiduo.value,
        data: dateUTC 
    };
    try {
        const response = await fetch(`${BASE_URL}/descartes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            messageDiv.textContent = `Descarte registrado com sucesso! ID: ${result.id}`;
            messageDiv.style.backgroundColor = '#d4edda';
            messageDiv.style.color = '#155724';
            form.reset(); 
        } else {
            const errorMessage = result.message || 'Erro desconhecido.';
            messageDiv.textContent = `Erro ao registrar: ${Array.isArray(errorMessage) ? errorMessage.join(', ') : errorMessage}`;
            messageDiv.style.backgroundColor = '#f8d7da';
            messageDiv.style.color = '#721c24';
        }
    } catch (error) {
        messageDiv.textContent = 'Erro de conexão com o servidor. Verifique se o backend está rodando.';
        messageDiv.style.backgroundColor = '#f8d7da';
        messageDiv.style.color = '#721c24';
        console.error('Fetch error:', error);
    }
});
loadPontosDescarte();