document.addEventListener("DOMContentLoaded", function() {
    // cod pra animaçao da logo
    const logoElement = document.getElementById('logo');
    const logoText = logoElement.textContent;
    const typingSpeed = 150; // Velocidade de digitação em milissegundos
    const erasingSpeed = 100; // Velocidade de apagamento em milissegundos
    const delayBetweenLoops = 1000; // Tempo de espera entre loops em milissegundos
    let charIndex = 0;
    let isDeleting = false;

    function typeAndErase() {
        if (isDeleting) {
            if (charIndex > 0) {
                logoElement.textContent = logoText.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeAndErase, erasingSpeed);
            } else {
                isDeleting = false;
                setTimeout(typeAndErase, delayBetweenLoops);
            }
        } else {
            if (charIndex < logoText.length) {
                logoElement.textContent = logoText.substring(0, charIndex + 1);
                charIndex++;
                setTimeout(typeAndErase, typingSpeed);
            } else {
                isDeleting = true;
                setTimeout(typeAndErase, delayBetweenLoops);
            }
        }
    }

    setTimeout(typeAndErase, delayBetweenLoops);
});

  // Código para o GIF de carregamento
  const loadingGif = document.getElementById('loading-gif');
  loadingGif.style.display = 'block'; // Mostra o GIF ao carregar a página

  const empresaElements = document.querySelectorAll('.empresa');
  empresaElements.forEach(empresa => {
      empresa.addEventListener('click', () => {
          loadingGif.style.display = 'none'; // Esconde o GIF ao clicar em uma logo de empresa
      });
  });

// Troca de tema
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
});

// Alternância de opções de idioma
const languageSelect = document.querySelector('.language-select');
const languageOptions = document.querySelector('.language-options');

languageSelect.addEventListener('click', () => {
    const isDisplayed = languageOptions.style.display === 'block';
    languageOptions.style.display = isDisplayed ? 'none' : 'block';
});

/* experiencias */

const experiencias = {
    apple: {
        title: "Apple",
        position: "Suporte Técnico Bilíngue",
        period: "20/03/2020 - 10/08/2020",
        skills: ["iCloud", "Diagnóstico de hardware", "Atualização de firmware", "iOS", "macOS", "watchOS", "Suporte de rede", "Conectividade"]
    },
    google: {
        title: "Google",
        position: "Suporte Técnico Bilíngue",
        period: "15/03/2021 - 13/09/2021",
        skills: ["Android", "Google Workspace", "Diagnóstico de bugs", "Google Drive", "Atualização de software"]
    },
    airbnb: {
        title: "Airbnb",
        position: "Suporte Técnico Trilíngue T2",
        period: "02/05/2022 - 29/06/2023",
        skills: ["Análise de logs", "Relatório de bugs", "Auditoria", "Monitoramento de fraude", "Manutenção de base de dados", "Controle de acesso"]
    }
};

function mostrarExperiencia(empresa) {
    const detalhes = document.getElementById('detalhes-experiencia');
    const experiencia = experiencias[empresa];

    // Limpa o conteúdo atual
    detalhes.innerHTML = '';

    // Cria elementos
    const empresaNome = document.createElement('div');
    empresaNome.className = 'empresa-nome';
    empresaNome.textContent = experiencia.title;

    const empresaCargo = document.createElement('div');
    empresaCargo.className = 'empresa-cargo';
    empresaCargo.textContent = experiencia.position;

    const barraContainer = document.createElement('div');
    barraContainer.className = 'barra-container';

    const barra = document.createElement('div');
    barra.className = 'barra';
    barraContainer.appendChild(barra);

    const tempo = document.createElement('div');
    tempo.className = 'tempo';
    tempo.textContent = experiencia.period;
    barraContainer.appendChild(tempo);

    const habilidades = document.createElement('div');
    habilidades.className = 'habilidades';

    experiencia.skills.forEach(skill => {
        const habilidadeItem = document.createElement('div');
        habilidadeItem.className = 'habilidade-item';

        const checkbox = document.createElement('div');
        checkbox.className = 'habilidade-checkbox';
        habilidadeItem.appendChild(checkbox);

        const skillText = document.createElement('div');
        skillText.textContent = skill;
        habilidadeItem.appendChild(skillText);

        habilidades.appendChild(habilidadeItem);

        // Animação de preenchimento do checkbox
        setTimeout(() => {
            checkbox.classList.add('checked');
        }, 500);
    });

    // Adiciona elementos ao contêiner de detalhes
    detalhes.appendChild(empresaNome);
    detalhes.appendChild(empresaCargo);
    detalhes.appendChild(barraContainer);
    detalhes.appendChild(habilidades);

    // Animação da barra de progresso
    setTimeout(() => {
        barra.style.width = `${Math.random() * 100}%`;
    }, 100);

    // Mostrar detalhes da experiência ao clicar
    detalhes.style.display = 'flex';
}

// Inicialmente ocultar detalhes de experiência
document.getElementById('detalhes-experiencia').style.display = 'none';
