document.addEventListener('DOMContentLoaded', () => {
    // 1. Generar números de fila dinámicos
    const rowNumbersContainer = document.getElementById('rowNumbers');
    const contentArea = document.querySelector('.cv-content');
    
    // Función para calcular cuántas filas entran (35px cada una)
    function generateRowNumbers() {
        if (!rowNumbersContainer) return;
        
        rowNumbersContainer.innerHTML = '';
        // Generamos exactamente 100 filas
        for (let i = 1; i <= 100; i++) {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'row-number';
            rowDiv.textContent = i;
            rowNumbersContainer.appendChild(rowDiv);
        }
    }

    // Generar al cargar y al redimensionar
    generateRowNumbers();

    // 2. Simulamos la interacción de selección de celdas al hacer click
    const sections = document.querySelectorAll('.sheet-section');
    const formulaInput = document.querySelector('.formula-input');
    const cellName = document.querySelector('.cell-name');

    sections.forEach((section, index) => {
        section.addEventListener('click', () => {
            // Quitamos la clase selected de todas
            sections.forEach(s => s.classList.remove('selected'));
            
            // Ponemos a la clickeada
            section.classList.add('selected');
            
            // Actualizamos la celda activa
            const row = (index * 4) + 2; 
            if(cellName) cellName.textContent = `B${row}`;

            // Actualizamos la barra de fórmulas
            const title = section.querySelector('h3, h1')?.textContent || '';
            if(formulaInput) formulaInput.textContent = `="CONTENIDO: ${title}"`;
        });
    });

    // 3. Pestañas inferiores interactivas
    const tabs = document.querySelectorAll('.sheet-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            if (tab.textContent === '+') return;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
});
