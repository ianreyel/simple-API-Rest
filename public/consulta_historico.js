const BASE_URL = 'http://localhost:3000';
const selectPonto = document.getElementById('id_pontoDescarte');
const form = document.getElementById('filtroDescarteForm');
const tabelaBody = document.getElementById('tabelaDescartesBody');
const messageDiv = document.getElementById('message');

let pontosCache = []; 

async function loadPontosDescarte() {
    selectPonto.innerHTML = '<option value="">Carregando...</option>';
    try {
        const response = await fetch(`${BASE_URL}/pontos-descarte`);
        if (!response.ok) throw new Error('Falha ao buscar pontos.');
        
        const pontos = await response.json();
        pontosCache = pontos; 

        selectPonto.innerHTML = '<option value="">Todos os Pontos</option>';

        pontos.forEach(ponto => {
            const option = document.createElement('option');
            option.value = ponto.id;
            option.textContent = `${ponto.nomeLocal} (${ponto.bairro})`;
            selectPonto.appendChild(option);
        });

    } catch (error) {
        messageDiv.textContent = `Erro ao carregar pontos: ${error.message}`;
        selectPonto.innerHTML = '<option value="">Erro ao carregar pontos</option>';
        console.error('Erro ao carregar pontos de descarte:', error);
    }
}

async function fetchAndDisplayDescartes(query = '') {
    tabelaBody.innerHTML = '<tr><td colspan="5">Buscando...</td></tr>';
    messageDiv.textContent = '';
    
    try {
        const url = `${BASE_URL}/descartes${query}`;
        const response = await fetch(url);
        
        if (!response.ok) throw new Error('Falha na consulta. Status: ' + response.status);

        const descartes = await response.json();
        tabelaBody.innerHTML = ''; 

        if (descartes.length === 0) {
            tabelaBody.innerHTML = '<tr><td colspan="5">Nenhum descarte encontrado com os filtros selecionados.</td></tr>';
            return;
        }

        descartes.forEach(descarte => {
            const row = tabelaBody.insertRow();
            const ponto = pontosCache.find(p => p.id === descarte.id_pontoDescarte);
            const nomeLocal = ponto ? ponto.nomeLocal : 'Desconhecido';
            const dataFormatada = new Date(descarte.data).toLocaleDateString('pt-BR', {
                day: '2-digit', month: '2-digit', year: 'numeric'
            });

            row.insertCell().textContent = descarte.id;
            row.insertCell().textContent = dataFormatada;
            row.insertCell().textContent = descarte.tipoResiduo;
            row.insertCell().textContent = `${nomeLocal} (ID: ${descarte.id_pontoDescarte})`;
            row.insertCell().textContent = descarte.nomeUsuario;
        });
        
    } catch (error) {
        tabelaBody.innerHTML = '<tr><td colspan="5">Erro ao carregar dados.</td></tr>';
        messageDiv.textContent = `Erro: ${error.message}. Verifique a rota /descartes.`;
        messageDiv.style.backgroundColor = '#f8d7da';
        console.error('Fetch error:', error);
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const params = new URLSearchParams();

    if (form.nomeUsuario.value) {
        params.append('nomeUsuario', form.nomeUsuario.value);
    }
    if (form.tipoResiduo.value) {
        params.append('tipoResiduo', form.tipoResiduo.value);
    }
    if (form.id_pontoDescarte.value) {
        params.append('id_pontoDescarte', form.id_pontoDescarte.value);
    }
    if (form.dataInicio.value) {
        params.append('dataInicio', form.dataInicio.value); 
    }
    if (form.dataFim.value) {
        params.append('dataFim', form.dataFim.value);
    }
    const queryString = params.toString() ? `?${params.toString()}` : '';

    fetchAndDisplayDescartes(queryString);
});
loadPontosDescarte();