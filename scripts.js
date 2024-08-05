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


  const empresaElements = document.querySelectorAll('.empresa');
  const detalhes = document.getElementById('detalhes-experiencia');


  empresaElements.forEach(empresa => {
      empresa.addEventListener('click', () => {
        // Remove a classe de logo clicada de todas as logos
        empresaElements.forEach(el => el.classList.remove('empresa-clicada'));

        // Adiciona a classe de logo clicada à logo clicada
        empresa.classList.add('empresa-clicada');

        // Mostra o box de detalhes da experiência
        mostrarExperiencia(empresa.getAttribute('onclick').match(/'(\w+)'/)[1]);
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
        skills: ["iCloud", "Diagnóstico de hardware", "Atualização de firmware", "iOS", "macOS", "watchOS"]
    },
    google: {
        title: "Google",
        position: "Suporte Técnico Bilíngue",
        period: "15/03/2021 - 13/09/2021",
        skills: ["Android", "Gmail", "Diagnóstico de bugs", "Google Drive", "Atualização de software", 'Play Store']
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

 // Cria e adiciona o elemento do tempo
    const tempo = document.createElement('div');
    tempo.className = 'tempo';
    tempo.textContent = experiencia.period;
    

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
        }, 600);
    });

    // Adiciona elementos ao contêiner de detalhes
    detalhes.appendChild(empresaNome);
    detalhes.appendChild(empresaCargo);
    detalhes.appendChild(habilidades);
    detalhes.appendChild(tempo);

    // Mostrar detalhes da experiência ao clicar
    detalhes.style.display = 'flex';
    detalhes.style.opacity = '1'; // E ajuste a opacidade
}
