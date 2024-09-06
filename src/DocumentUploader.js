import mammoth from 'mammoth';

export async function handleUploadDoc(event, quill) {
    const file = event.target.files[0];
    if (file) {
        const arrayBuffer = await file.arrayBuffer();
        mammoth.convertToHtml({ arrayBuffer: arrayBuffer })
            .then((result) => {
                const htmlContent = result.value;
                const htmlContentWithEnd = htmlContent + '<p>-------------</p>';
                quill.clipboard.dangerouslyPasteHTML(htmlContentWithEnd);
            })
            .catch((error) => console.error('Error converting DOC file:', error));
    }
}