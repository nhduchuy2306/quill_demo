import './style.css';
import { setUpTextEditor } from './src/TextEditor.js';
import { setupTemplateDropdown } from './src/Templates.js';
import { setupTableSelector } from './src/Table.js';
import { handleUploadDoc } from './src/DocumentUploader.js';
import { asBlob } from "html-docx-js-typescript";
import { saveAs } from 'file-saver';

const quill = setUpTextEditor('#editor-container');
const saveButton = document.querySelector('#save');
const uploadDocInput = document.querySelector('#upload-doc');
const templateDropdown = document.querySelector('#template-dropdown');
const tableGridSelector = document.querySelector('.table-grid');

// Setup template dropdown logic
setupTemplateDropdown(quill, templateDropdown);

// Setup table grid logic
setupTableSelector(quill, tableGridSelector);

// Handle DOC file upload
uploadDocInput.addEventListener('change', (event) => handleUploadDoc(event, quill));

// Handle save button logic
saveButton.addEventListener('click', () => {
    const content = quill.root;
    let html = content.innerHTML;
    html = html.replace(/<w:altChunk[^>]*>.*?<\/w:altChunk>/g, '');
    const sanitizedHtml = `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset='utf-8'>
            </head>
            <body>${html}</body>
        </html>`;
    asBlob(sanitizedHtml).then((blob) => {
        saveAs(blob, 'document.docx');
    });
});