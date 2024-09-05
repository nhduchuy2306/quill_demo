export function handleSaveButton(content, fileType, fileName) {
    let html;
    let mimeType;

    switch (fileType) {
        case 'docx':
            html = content.innerHTML;
            mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            break;

        case 'pdf':
            html = content.innerHTML;
            mimeType = 'application/pdf';
            break;

        case 'txt':
            html = content;
            mimeType = 'text/plain';
            break;

        default:
            console.error('Unsupported file type');
            return;
    }

    const blob = new Blob(['\ufeff', html], { type: mimeType });
    const defaultFileName = `document.${fileType}`;
    const downloadFileName = fileName || defaultFileName;
    const downloadLink = document.createElement('a');

    if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, downloadFileName);
    } else {
        const url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.download = downloadFileName;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
    }
}
