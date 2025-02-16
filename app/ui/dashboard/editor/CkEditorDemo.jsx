'use client' // only in App Router
import { useEffect, useRef, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Essentials, Paragraph, Bold, Italic } from 'ckeditor5';
import MarkdownIt from 'markdown-it';
import html2pdf from 'html2pdf.js';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

function CustomEditor({ content }) {
    const [editorData, setEditorData] = useState(content || "");
    const editorRef = useRef(null);
    const mdParser = new MarkdownIt();

    // تغییرات را از CKEditor دریافت می‌کند
    const handleDownloadPdf = () => {
        if (!editorRef.current) return;

        const contentHTML = editorRef.current.editor.getData();

        // تبدیل محتوای HTML به PDF با استفاده از html2pdf.js
        const options = {
            filename: 'content.pdf',
            html2canvas: { scale: 2 }, // کیفیت بیشتر
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().from(contentHTML).set(options).save();
    };

    useEffect(() => {
        const htmlData = mdParser.render(content); // تبدیل Markdown به HTML
        setEditorData(htmlData);
    }, [content]);

    return (
        <div className='text-right' style={{ direction: "rtl" }}>
            <CKEditor
                editor={ClassicEditor}
                data={editorData}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setEditorData(data); // ذخیره تغییرات در state
                }}
                config={{
                    readonly: false,
                    language: 'fa',
                    contentsCss: 'body { text-align: right; direction: rtl; }',
                    licenseKey: "GPL", // Or 'GPL'.
                    plugins: [Essentials, Paragraph, Bold, Italic],
                    toolbar: ['undo', 'redo', '|', 'bold', 'italic', '|'],
                    initialData: '<p>محتوای اولیه برای ویرایشگر</p>'
                }}
                ref={editorRef}
            />

            <div className="mt-4 p-3 bg-light border">
                <div className="flex items-center">
                    <button
                        className="uppercase text-sm font-bold tracking-wide bg-[#182237] hover:bg-white hover:text-black duration-150 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={handleDownloadPdf}
                    >
                        دانلود به صورت PDF
                    </button>
                    <h4>📌 محتوای ویرایشگر:</h4>
                </div>
            </div>
        </div>
    );
}

export default CustomEditor;
