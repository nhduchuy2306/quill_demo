export function setupTableGrid(quill, grid) {
    quill.getModule('toolbar').addHandler('table', () => {
        toggleTableGrid(grid);
    });

    function toggleTableGrid(grid) {
        if (!grid.classList.contains('active')) {
            createTableGrid(grid, 9, 9);
            grid.classList.add('active');
        } else {
            grid.classList.remove('active');
        }
    }

    function createTableGrid(grid, rows, cols) {
        grid.innerHTML = '';
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const cell = createCell(r, c);
                grid.appendChild(cell);
            }
        }

        const { container, rowInput, colInput, insertButton } = createRowAndColInputs();
        grid.appendChild(container);
        insertButton.addEventListener('click', () => insertTable(quill, rowInput.value, colInput.value, grid));
    }

    function createCell(r, c) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.row = r + 1;
        cell.dataset.col = c + 1;
        cell.addEventListener('mouseover', highlightCells);
        cell.addEventListener('click', () => insertTable(quill, r + 1, c + 1, grid));
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

    function insertTable(quill, rows, cols, grid) {
        const rowInIntegers = parseInt(rows, 10);
        const colInIntegers = parseInt(cols, 10);

        const betterTablePlus = quill.getModule('better-table-plus');
        betterTablePlus.insertTable(rowInIntegers, colInIntegers);
        grid.classList.remove('active');
    }
}
