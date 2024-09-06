export function setupTableSelector(quill, tableGridSelector) {
    const toolbar = quill.getModule('toolbar');
    const tableSelector = toolbar.container.querySelector('.ql-table');

    toolbar.addHandler('table', () => {
        toggleTableGridSelector(tableGridSelector);
    });

    function toggleTableGridSelector(tableGridSelector) {
        if (!tableGridSelector.classList.contains('active')) {
            createTableGridSelector(tableGridSelector, 9, 9);
            tableGridSelector.classList.add('active');
            tableGridSelector.style.top = `${tableSelector.offsetTop + 25}px`;
            tableGridSelector.style.left = `${tableSelector.offsetLeft + 25}px`;
        } else {
            tableGridSelector.classList.remove('active');
        }

        document.addEventListener('click', (event) => {
            if (!tableGridSelector.contains(event.target) && !tableSelector.contains(event.target)) {
                tableGridSelector.classList.remove('active');
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                tableGridSelector.classList.remove('active');
            }
        });
    }

    function createTableGridSelector(tableGridSelector, rows, cols) {
        tableGridSelector.innerHTML = '';
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const cell = createCellSelector(r, c);
                tableGridSelector.appendChild(cell);
            }
        }

        const { container, rowInput, colInput, insertButton } = createRowAndColInputs();
        tableGridSelector.appendChild(container);
        insertButton.addEventListener('click', () => insertTable(quill, rowInput.value, colInput.value, tableGridSelector));
    }

    function createCellSelector(r, c) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.row = r + 1;
        cell.dataset.col = c + 1;
        cell.addEventListener('mouseover', highlightCells);
        cell.addEventListener('click', () => insertTable(quill, r + 1, c + 1, tableGridSelector));
        return cell;
    }

    function createRowAndColInputs() {
        const container = document.createElement('div');
        container.classList.add('row-col-inputs');

        const rowInput = document.createElement('input');
        rowInput.type = 'number';
        rowInput.value = 9;
        rowInput.min = 1;
        rowInput.max = 100;
        rowInput.placeholder = 'Rows';

        const colInput = document.createElement('input');
        colInput.type = 'number';
        colInput.value = 9;
        colInput.min = 1;
        colInput.max = 100;
        colInput.placeholder = 'Columns';

        const supplier = document.createElement('span');
        supplier.innerText = 'x';

        const insertButton = document.createElement('button');
        insertButton.innerText = 'Insert';

        container.append(rowInput, supplier, colInput, insertButton);
        return { container, rowInput, colInput, insertButton };
    }

    function highlightCells(event) {
        const cell = event.target;
        const row = parseInt(cell.dataset.row, 10);
        const col = parseInt(cell.dataset.col, 10);

        const cells = document.querySelectorAll('.table-grid .cell');
        cells.forEach(cell => {
            if (cell.dataset.row <= row && cell.dataset.col <= col) {
                cell.classList.add('active');
            } else {
                cell.classList.remove('active');
            }
        });
    }

    function insertTable(quill, rows, cols, tableGridSelector) {
        const rowInIntegers = parseInt(rows, 10);
        const colInIntegers = parseInt(cols, 10);

        const betterTablePlus = quill.getModule('better-table-plus');
        console.log(betterTablePlus);
        
        betterTablePlus.insertTable(rowInIntegers, colInIntegers);
        tableGridSelector.classList.remove('active');
    }
}
