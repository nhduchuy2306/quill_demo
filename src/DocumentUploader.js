import mammoth from 'mammoth';

export async function handleUploadDoc(event, quill, previewContainer) {
    const file = event.target.files[0];
    if (file) {
        const arrayBuffer = await file.arrayBuffer();
        mammoth.convertToHtml({ arrayBuffer: arrayBuffer })
            .then((result) => {
                const htmlContent = result.value;
                const htmlContentWithEnd = htmlContent + '<p>-------------</p>';
                quill.clipboard.dangerouslyPasteHTML(htmlContentWithEnd);
                previewContainer.innerText = quill.root.innerHTML; // Update the preview
            })
            .catch((error) => console.error('Error converting DOC file:', error));
    }
}