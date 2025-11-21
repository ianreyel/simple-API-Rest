const BASE_URL = 'http://localhost:3000';
const indicadoresDiv = document.getElementById('indicadores');
const loadingDiv = document.getElementById('loading');
const messageDiv = document.getElementById('message');
const localMaisRegistrosEl = document.getElementById('localMaisRegistros');
const residuoMaisDescartadoEl = document.getElementById('residuoMaisDescartado');
const mediaDescartesDiaEl = document.getElementById('mediaDescartesDia');
const totalUsuariosEl = document.getElementById('totalUsuarios');
const totalPontosDescarteEl = document.getElementById('totalPontosDescarte');
const variacaoPercentualMensalEl = document.getElementById('variacaoPercentualMensal');


async function loadRelatorio() {
    loadingDiv.style.display = 'block';
    indicadoresDiv.style.display = 'none';
    messageDiv.textContent = '';
    
    variacaoPercentualMensalEl.classList.remove('crescimento', 'reducao');

    try {
        const response = await fetch(`${BASE_URL}/relatorio`);
        
        if (!response.ok) {
            throw new Error('Falha ao buscar relatório. Status: ' + response.status);
        }

        const data = await response.json();
        
        localMaisRegistrosEl.textContent = data.localComMaisRegistros || '-';
        residuoMaisDescartadoEl.textContent = data.tipoResiduoMaisDescartado || '-';
        mediaDescartesDiaEl.textContent = data.mediaDescartesDia !== undefined ? data.mediaDescartesDia.toString() : '0';
        totalUsuariosEl.textContent = data.totalUsuarios !== undefined ? data.totalUsuarios.toString() : '0';
        totalPontosDescarteEl.textContent = data.totalPontosDescarte !== undefined ? data.totalPontosDescarte.toString() : '0';
        let variacaoText = data.variacaoPercentualMensal !== undefined ? `${data.variacaoPercentualMensal}%` : '0%';
        
        if (data.variacaoPercentualMensal > 0) {
            variacaoPercentualMensalEl.classList.add('crescimento');
            variacaoText = `▲ ${variacaoText}`;
        } else if (data.variacaoPercentualMensal < 0) {
            variacaoPercentualMensalEl.classList.add('reducao');
            variacaoText = `▼ ${variacaoText}`;
        }
        variacaoPercentualMensalEl.textContent = variacaoText;


        loadingDiv.style.display = 'none';
        indicadoresDiv.style.display = 'grid'; 
        
    } catch (error) {
        loadingDiv.style.display = 'none';
        messageDiv.textContent = `Erro: ${error.message}. Verifique se a rota GET /relatorio está implementada corretamente no backend.`;
        messageDiv.style.backgroundColor = '#f8d7da';
        messageDiv.style.color = '#721c24';
        console.error('Fetch error:', error);
    }
}

loadRelatorio();