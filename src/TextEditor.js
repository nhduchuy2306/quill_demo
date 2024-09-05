import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

import Quill from 'quill/core';

import Toolbar from 'quill/modules/toolbar';
import Snow from 'quill/themes/snow';

import Bold from 'quill/formats/bold';
import Italic from 'quill/formats/italic';
import Header from 'quill/formats/header';
import { BackgroundStyle } from 'quill/formats/background';
import QuillBetterTablePlus from 'quill-better-table-plus';

Quill.register({
    'modules/toolbar': Toolbar,
    'themes/snow': Snow,
    'formats/bold': Bold,
    'formats/italic': Italic,
    'formats/header': Header,
    'formats/background': BackgroundStyle,
    'modules/better-table-plus': QuillBetterTablePlus,
}, true);

const toolBarOptions = [
    [{ font: [] }],
    [{ size: [] }],
    [{ header: [1, 2, 3, 4, 5, 6] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    [{ align: [] }],
    ['blockquote', 'code-block'],
    ['link', 'image', 'video'],
    ['table'],
    ['clean'],
];

export function setUpTextEditor(element, otherOptions = {}) {
    const options = {
        modules: {
            toolbar: toolBarOptions,
            table: false,
            'better-table-plus': {
                operationMenu: {
                    items: {
                        unmergeCells: {
                            text: 'Another unmerge cells name'
                        }
                    }
                }
            },
            keyboard: {
                bindings: QuillBetterTablePlus.keyboardBindings
            }
        },
        theme: 'snow',
        placeholder: 'Enter Your Text Here...',
    };
    return new Quill(element, options);
}
