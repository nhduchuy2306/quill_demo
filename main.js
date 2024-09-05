import './style.css';
import { setUpTextEditor } from './src/TextEditor.js';
import { setupTemplateDropdown } from './src/Templates.js';
import { setupTableGrid } from './src/Table.js';
import { handleSaveButton } from './src/FileSaver.js';
import { handleUploadDoc } from './src/DocumentUploader.js';

const quill = setUpTextEditor('#editor-container');
const previewContainer = document.querySelector('#preview-container');
const format = document.querySelector('#format');
const saveButton = document.querySelector('#save');
const uploadDocInput = document.querySelector('#upload-doc');
const templateDropdown = document.querySelector('#template-dropdown');
const grid = document.querySelector('.table-grid');

// Setup template dropdown logic
setupTemplateDropdown(quill, templateDropdown, previewContainer);

// Setup table grid logic
setupTableGrid(quill, grid);

// Handle DOC file upload
uploadDocInput.addEventListener('change', (event) => handleUploadDoc(event, quill, previewContainer));

// Handle save button logic
saveButton.addEventListener('click', () => {
    const formatValue = format.value;
    const content = formatValue === 'txt' ? quill.getText() : quill.root;
    handleSaveButton(content, formatValue);
});