"use client";
import React, { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils, Modifier, ContentState, convertFromHTML, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { MdCopyAll } from 'react-icons/md';

const EditorDemo = ({ content }) => {
    const [editorState, setEditorState] = useState(() => {
        // بررسی اینکه آیا محتوای ورودی وجود دارد یا نه
        if (content) {
            // تبدیل محتوای HTML به contentState
            const blocksFromHTML = convertFromHTML(content);
            const contentState = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
            return EditorState.createWithContent(contentState);
        }
        return EditorState.createEmpty();
    });

    useEffect(() => {
        if (content) {
            const blocksFromHTML = convertFromHTML(content);
            const contentState = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
            setEditorState(EditorState.createWithContent(contentState));
        }
    }, [content]);

    //! تابعی برای فعال کردن استایل Bold
    const toggleBold = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    };

    //! تابعی برای فعال کردن استایل Italic
    const toggleItalic = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
    };

    //! تابعی برای فعال کردن استایل Underline
    const toggleUnderline = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
    };

    // !تابعی برای ایجاد یک لیست
    const toggleOrderedList = () => {
        setEditorState(RichUtils.toggleBlockType(editorState, 'ordered-list-item'));
    };

    const toggleUnorderedList = () => {
        setEditorState(RichUtils.toggleBlockType(editorState, 'unordered-list-item'));
    };

    //! تابعی برای اعمال استایل Heading 1
    const toggleHeading = () => {        
        setEditorState(RichUtils.toggleBlockType(editorState, 'header-one'));
    };

    //! تابعی برای افزودن لینک
    const addLink = () => {
        const selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
            const url = prompt('لطفاً آدرس لینک را وارد کنید');
            if (url) {
                const contentState = Modifier.applyEntity(editorState.getCurrentContent(), selection, editorState.getCurrentContent().createEntity('LINK', 'MUTABLE', { url }));
                const newEditorState = EditorState.push(editorState, contentState, 'apply-entity');
                setEditorState(newEditorState);
            }
        }
    };
    //! تابعی برای کپی کردن محتوا به کلیپ‌بورد
    const handlerCopy = () => {
        // استخراج محتوای متنی از ویرایشگر
        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState); // تبدیل به فرمت raw
        const plainText = rawContentState.blocks.map(block => block.text).join('\n'); // استخراج متن
        if (plainText) {
            navigator.clipboard.writeText(plainText) // کپی به کلیپ‌بورد
                .then(() => {
                    alert("محتوا کپی شد!");
                })
                .catch((err) => {
                    console.error("خطا در کپی کردن محتوا: ", err);
                });
        } else {
            alert("محتوایی برای کپی کردن وجود ندارد");
        }
    };

    return (
        <div className='bg-white py-5'>
            <div className='flex flex-wrap gap-1 w-full mb-4 p-1'>
                {/* دکمه‌های استایل */}
                <button onClick={toggleBold} className='bg-black/70 p-1 px-2 text-white border-0 rounded' >B</button>
                <button onClick={toggleItalic} className='bg-black/70 p-1 px-2 text-white border-0 rounded' >i</button>
                <button onClick={toggleUnderline} className='bg-black/70 p-1 px-2 text-white border-0 rounded' >_</button>
                <button onClick={toggleHeading} className='bg-black/70 p-1 px-2 text-white border-0 rounded' >H1</button>
                <button onClick={toggleOrderedList} className='bg-black/70 p-1 px-2 text-white border-0 rounded' >List</button>
                <button onClick={toggleUnorderedList} className='bg-black/70 p-1 px-2 text-white border-0 rounded' >Unordered List</button>
                <button onClick={addLink} className='bg-black/70 p-1 px-2 text-white border-0 rounded' >a</button>
                <button onClick={handlerCopy} className='bg-black/70 p-1 px-2 text-white border-0 rounded' ><MdCopyAll /></button>
            </div>

            {/* ویرایشگر */}
            <Editor
                editorState={editorState}
                onChange={setEditorState}
                placeholder="متن خود را اینجا بنویسید..."
                style={{ padding: '50px 0', backgroundColor: '#fff', color: 'black', borderRadius: '4px' }}
            />
        </div>
    );
};

export default EditorDemo;
