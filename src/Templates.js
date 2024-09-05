import { TEMPLATES } from './TemplatesData.js';

export function setupTemplateDropdown(quill, templateDropdown, previewContainer) {
    // Add options for template dropdown
    for (const template in TEMPLATES) {
        const option = document.createElement('option');
        option.value = template;
        option.innerText = TEMPLATES[template].name;
        templateDropdown.appendChild(option);
    }

    templateDropdown.addEventListener('change', () => {
        const selectedTemplate = templateDropdown.value;
        if (selectedTemplate && TEMPLATES[selectedTemplate]) {
            quill.clipboard.dangerouslyPasteHTML(TEMPLATES[selectedTemplate].content);
            previewContainer.innerText = quill.root.innerHTML;
        }
    });
}
