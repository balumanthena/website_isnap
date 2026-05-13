"use client";

import { useState, useEffect, useCallback } from "react";
import { useEditor, EditorContent, ReactRenderer, Extension } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Typography from "@tiptap/extension-typography";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import CharacterCount from "@tiptap/extension-character-count";
import Color from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import Suggestion from "@tiptap/suggestion";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { Youtube } from "@tiptap/extension-youtube";
import { Highlight } from "@tiptap/extension-highlight";
import { Underline } from "@tiptap/extension-underline";
import { TextAlign } from "@tiptap/extension-text-align";
import { Dropcursor } from "@tiptap/extension-dropcursor";
import { Gapcursor } from "@tiptap/extension-gapcursor";
import { Callout, CTA, FAQ, Stats, Timeline } from "@/lib/tiptap/CustomNodes";
import {
  Bold, Italic, List, ListOrdered, Quote, Heading1, Heading2, Heading3,
  ImageIcon, Link as LinkIcon, Code, CheckSquare, Highlighter, Strikethrough,
  AlignLeft, AlignCenter, AlignRight, Megaphone, Info, Minus, Undo2, Redo2,
  Underline as UnderlineIcon, HelpCircle, BarChart2, GitCommit, Type, Video
} from "lucide-react";
import { cn } from "@/lib/utils";
import tippy, { Instance } from "tippy.js";
import "tippy.js/dist/tippy.css";
import { CommandList } from "./CommandList";
import { EditorImageUpload } from "./EditorImageUpload";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  onAutosave?: (content: string) => void;
}

// --- Slash Commands ---
const slashCommands = {
  items: ({ query }: { query: string }) => {
    return [
      { title: "Heading 1", description: "Large section heading", icon: Heading1, command: ({ editor, range }: any) => { editor.chain().focus().deleteRange(range).setNode("heading", { level: 1 }).run(); } },
      { title: "Heading 2", description: "Medium section heading", icon: Heading2, command: ({ editor, range }: any) => { editor.chain().focus().deleteRange(range).setNode("heading", { level: 2 }).run(); } },
      { title: "Heading 3", description: "Small section heading", icon: Heading3, command: ({ editor, range }: any) => { editor.chain().focus().deleteRange(range).setNode("heading", { level: 3 }).run(); } },
      { title: "Bullet List", description: "Unordered list", icon: List, command: ({ editor, range }: any) => { editor.chain().focus().deleteRange(range).toggleBulletList().run(); } },
      { title: "Numbered List", description: "Ordered list", icon: ListOrdered, command: ({ editor, range }: any) => { editor.chain().focus().deleteRange(range).toggleOrderedList().run(); } },
      { title: "Task List", description: "Checklist", icon: CheckSquare, command: ({ editor, range }: any) => { editor.chain().focus().deleteRange(range).toggleTaskList().run(); } },
      { title: "Quote", description: "Block quote", icon: Quote, command: ({ editor, range }: any) => { editor.chain().focus().deleteRange(range).toggleBlockquote().run(); } },
      { title: "Divider", description: "Horizontal rule", icon: Minus, command: ({ editor, range }: any) => { editor.chain().focus().deleteRange(range).setHorizontalRule().run(); } },
      { title: "Code Block", description: "Code snippet", icon: Code, command: ({ editor, range }: any) => { editor.chain().focus().deleteRange(range).toggleCodeBlock().run(); } },
      { title: "Table", description: "Insert table", icon: TableSvg, command: ({ editor, range }: any) => { editor.chain().focus().deleteRange(range).insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run(); } },
      { title: "Image", description: "Upload or embed image", icon: ImageIcon, command: ({ editor, range }: any) => { editor.chain().focus().deleteRange(range).run(); window.dispatchEvent(new CustomEvent("open-editor-image-upload")); } },
      { title: "YouTube", description: "Embed video", icon: Video, command: ({ editor, range }: any) => { const url = window.prompt("YouTube URL"); if (url) { editor.chain().focus().deleteRange(range).setYoutubeVideo({ src: url }).run(); } } },
      { title: "Callout", description: "Info box", icon: Info, command: ({ editor, range }: any) => { editor.chain().focus().deleteRange(range).setNode("callout").run(); } },
      { title: "CTA Block", description: "Call-to-action", icon: Megaphone, command: ({ editor, range }: any) => { editor.chain().focus().deleteRange(range).setNode("cta").run(); } },
    ].filter(item => item.title.toLowerCase().includes(query.toLowerCase())).slice(0, 10);
  },
  render: () => {
    let component: ReactRenderer;
    let popup: Instance[];
    return {
      onStart: (props: any) => {
        component = new ReactRenderer(CommandList, { props, editor: props.editor });
        popup = tippy("body", { getReferenceClientRect: props.clientRect, appendTo: () => document.body, content: component.element, showOnCreate: true, interactive: true, trigger: "manual", placement: "bottom-start" });
      },
      onUpdate(props: any) { component.updateProps(props); if (popup?.[0]) popup[0].setProps({ getReferenceClientRect: props.clientRect }); },
      onKeyDown(props: any) { if (props.event.key === "Escape") { popup?.[0]?.hide(); return true; } return (component.ref as any)?.onKeyDown(props); },
      onExit() { popup?.[0]?.destroy(); component.destroy(); },
    };
  },
};

const Commands = Extension.create({
  name: "commands",
  addOptions() { return { suggestion: { char: "/", command: ({ editor, range, props }: any) => { props.command({ editor, range }); } } as any }; },
  addProseMirrorPlugins() { return [Suggestion({ editor: this.editor, ...(this.options as any).suggestion })]; },
});

// --- Toolbar Button ---
function ToolBtn({ active, onClick, children, title, disabled }: { active?: boolean; onClick: () => void; children: React.ReactNode; title?: string; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      disabled={disabled}
      className={cn(
        "w-8 h-8 flex items-center justify-center rounded-md transition-colors",
        active ? "bg-gray-900 text-white" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900",
        disabled && "opacity-30 cursor-not-allowed"
      )}
    >
      {children}
    </button>
  );
}

function Sep() {
  return <div className="w-px h-5 bg-gray-200 mx-1" />;
}

// --- Main Component ---
export function RichTextEditor({ content, onChange, onAutosave }: RichTextEditorProps) {
  const [isImageUploadOpen, setIsImageUploadOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsImageUploadOpen(true);
    window.addEventListener("open-editor-image-upload", handler);
    return () => window.removeEventListener("open-editor-image-upload", handler);
  }, []);
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3, 4] } }),
      Typography, Color, TextStyle,
      TaskList, TaskItem.configure({ nested: true }),
      Table.configure({ resizable: true }), TableRow, TableCell, TableHeader,
      Youtube.configure({ width: 720, height: 405 }),
      Highlight.configure({ multicolor: true }), Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Callout, CTA, FAQ, Stats, Timeline,
      Dropcursor.configure({ color: "#d1d5db", width: 2 }), Gapcursor,
      Link.configure({ openOnClick: false, HTMLAttributes: { class: "text-blue-600 underline underline-offset-2 hover:text-blue-800 cursor-pointer" } }),
      Image.configure({ HTMLAttributes: { class: "rounded-lg max-w-full h-auto my-6 border border-gray-100" } }),
      Placeholder.configure({ placeholder: "Start writing, or type '/' for commands...", emptyEditorClass: "is-editor-empty" }),
      CharacterCount,
      Commands.configure({ suggestion: { items: slashCommands.items, render: slashCommands.render } }),
    ],
    content,
    onUpdate: ({ editor }) => { const html = editor.getHTML(); onChange(html); if (onAutosave) onAutosave(html); },
    editorProps: { attributes: { class: "prose prose-gray max-w-none focus:outline-none min-h-[500px] text-gray-900 selection:bg-blue-100 px-1 py-4" } },
    immediatelyRender: false,
  });

  if (!editor) return null;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      {/* ========== FIXED TOOLBAR ========== */}
      <div className="flex items-center gap-0.5 px-2 py-1.5 border-b border-gray-200 bg-gray-50/80 flex-wrap">
        {/* Undo / Redo */}
        <ToolBtn onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} title="Undo (⌘Z)">
          <Undo2 className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} title="Redo (⌘⇧Z)">
          <Redo2 className="w-4 h-4" />
        </ToolBtn>

        <Sep />

        {/* Headings */}
        <ToolBtn active={editor.isActive("heading", { level: 1 })} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} title="Heading 1">
          <span className="text-[11px] font-bold">H1</span>
        </ToolBtn>
        <ToolBtn active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} title="Heading 2">
          <span className="text-[11px] font-bold">H2</span>
        </ToolBtn>
        <ToolBtn active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} title="Heading 3">
          <span className="text-[11px] font-bold">H3</span>
        </ToolBtn>
        <ToolBtn active={editor.isActive("paragraph")} onClick={() => editor.chain().focus().setParagraph().run()} title="Paragraph">
          <Type className="w-4 h-4" />
        </ToolBtn>

        <Sep />

        {/* Formatting */}
        <ToolBtn active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()} title="Bold (⌘B)">
          <Bold className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()} title="Italic (⌘I)">
          <Italic className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()} title="Underline (⌘U)">
          <UnderlineIcon className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn active={editor.isActive("strike")} onClick={() => editor.chain().focus().toggleStrike().run()} title="Strikethrough">
          <Strikethrough className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn active={editor.isActive("highlight")} onClick={() => editor.chain().focus().toggleHighlight().run()} title="Highlight">
          <Highlighter className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn active={editor.isActive("code")} onClick={() => editor.chain().focus().toggleCode().run()} title="Inline Code">
          <Code className="w-4 h-4" />
        </ToolBtn>

        <Sep />

        {/* Lists */}
        <ToolBtn active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()} title="Bullet List">
          <List className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()} title="Numbered List">
          <ListOrdered className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn active={editor.isActive("taskList")} onClick={() => editor.chain().focus().toggleTaskList().run()} title="Task List">
          <CheckSquare className="w-4 h-4" />
        </ToolBtn>

        <Sep />

        {/* Blocks */}
        <ToolBtn active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()} title="Block Quote">
          <Quote className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Divider">
          <Minus className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn active={editor.isActive("codeBlock")} onClick={() => editor.chain().focus().toggleCodeBlock().run()} title="Code Block">
          <Code className="w-4 h-4" />
        </ToolBtn>

        <Sep />

        {/* Alignment */}
        <ToolBtn active={editor.isActive({ textAlign: "left" })} onClick={() => editor.chain().focus().setTextAlign("left").run()} title="Align Left">
          <AlignLeft className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn active={editor.isActive({ textAlign: "center" })} onClick={() => editor.chain().focus().setTextAlign("center").run()} title="Align Center">
          <AlignCenter className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn active={editor.isActive({ textAlign: "right" })} onClick={() => editor.chain().focus().setTextAlign("right").run()} title="Align Right">
          <AlignRight className="w-4 h-4" />
        </ToolBtn>

        <Sep />

        {/* Media & Links */}
        <ToolBtn
          active={editor.isActive("link")}
          onClick={() => {
            if (editor.isActive("link")) { editor.chain().focus().unsetLink().run(); }
            else { const url = window.prompt("Enter URL"); if (url) editor.chain().focus().setLink({ href: url }).run(); }
          }}
          title="Link (⌘K)"
        >
          <LinkIcon className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn
          onClick={() => setIsImageUploadOpen(true)}
          title="Insert Image"
        >
          <ImageIcon className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn
          onClick={() => { const url = window.prompt("YouTube URL"); if (url) editor.chain().focus().setYoutubeVideo({ src: url }).run(); }}
          title="Embed YouTube"
        >
          <Video className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn
          onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
          title="Insert Table"
        >
          <TableSvg className="w-4 h-4" />
        </ToolBtn>
      </div>

      {/* ========== IMAGE UPLOAD MODAL ========== */}
      <EditorImageUpload
        isOpen={isImageUploadOpen}
        onClose={() => setIsImageUploadOpen(false)}
        onInsert={(url, alt) => {
          editor.chain().focus().setImage({ src: url, alt: alt || "Image" }).run();
          setIsImageUploadOpen(false);
        }}
      />

      {/* ========== EDITOR AREA ========== */}
      <div className="px-5 py-4 min-h-[500px] cursor-text" onClick={() => editor?.commands.focus()}>
        <EditorContent editor={editor} />
      </div>

      {/* ========== FOOTER STATUS ========== */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-gray-100 bg-gray-50/50 text-[11px] text-gray-400">
        <div className="flex items-center gap-3">
          <span>{editor.storage.characterCount.words()} words</span>
          <span>·</span>
          <span>{editor.storage.characterCount.characters()} chars</span>
        </div>
        <span>Type <kbd className="px-1 py-0.5 bg-gray-100 rounded text-[10px] font-mono">/</kbd> for blocks</span>
      </div>

      {/* ========== STYLES ========== */}
      <style jsx global>{`
        .is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #d1d5db;
          pointer-events: none;
          height: 0;
        }
        .prose { font-size: 16px; line-height: 1.75; color: #1f2937; }
        .prose p { margin-bottom: 1.25em; }
        .prose h1 { font-size: 2em; font-weight: 700; margin-top: 1.5em; margin-bottom: 0.5em; line-height: 1.2; letter-spacing: -0.02em; color: #111; }
        .prose h2 { font-size: 1.5em; font-weight: 700; margin-top: 1.5em; margin-bottom: 0.5em; line-height: 1.25; color: #111; }
        .prose h3 { font-size: 1.25em; font-weight: 600; margin-top: 1.25em; margin-bottom: 0.5em; color: #111; }
        .prose h4 { font-size: 1.1em; font-weight: 600; margin-top: 1em; margin-bottom: 0.5em; color: #111; }
        .prose blockquote { border-left: 3px solid #e5e7eb; padding-left: 1em; margin: 1.5em 0; color: #6b7280; font-style: italic; }
        .prose code { background: #f3f4f6; padding: 0.15em 0.35em; border-radius: 4px; font-size: 0.875em; color: #ef4444; }
        .prose pre { background: #1f2937; color: #e5e7eb; padding: 1em; border-radius: 8px; overflow-x: auto; margin: 1.5em 0; font-size: 0.875em; }
        .prose pre code { background: none; padding: 0; color: inherit; }
        .prose ul { list-style: disc; padding-left: 1.5em; margin: 1em 0; }
        .prose ol { list-style: decimal; padding-left: 1.5em; margin: 1em 0; }
        .prose li { margin: 0.25em 0; }
        .prose li p { margin: 0; }
        .prose ul[data-type="taskList"] { list-style: none; padding-left: 0; }
        .prose ul[data-type="taskList"] li { display: flex; align-items: flex-start; gap: 0.5em; }
        .prose hr { border: none; border-top: 1px solid #e5e7eb; margin: 2em 0; }
        .prose mark { background: #fef08a; padding: 0.1em 0.2em; border-radius: 2px; }
        .prose img { border-radius: 8px; margin: 1.5em 0; }
        .prose a { color: #2563eb; text-decoration: underline; }
        .callout { background: #f0f9ff; border-left: 3px solid #3b82f6; padding: 1em 1.25em; border-radius: 6px; margin: 1.5em 0; }
        .cta-block { background: #111827; color: #fff; padding: 2em; border-radius: 8px; text-align: center; margin: 2em 0; }
        .faq-block { background: #fff; border: 1px solid #e5e7eb; padding: 1.5em; border-radius: 8px; margin: 1.5em 0; }
        .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1em; padding: 1.5em; background: #111827; color: #fff; border-radius: 8px; margin: 2em 0; text-align: center; }
        .timeline-block { border-left: 2px solid #e5e7eb; padding-left: 1.5em; margin: 2em 0 2em 0.5em; position: relative; }
        .timeline-block::before { content: ''; position: absolute; left: -5px; top: 0; width: 8px; height: 8px; border-radius: 50%; background: #374151; }
        table { border-collapse: collapse; width: 100%; margin: 1.5em 0; border: 1px solid #e5e7eb; }
        table td, table th { border: 1px solid #e5e7eb; padding: 0.5em 0.75em; font-size: 0.875em; }
        table th { background: #f9fafb; font-weight: 600; text-align: left; }
        .ProseMirror-focused { outline: none; }
        .ProseMirror-selectednode { outline: 2px solid #3b82f6; outline-offset: 2px; border-radius: 4px; }
      `}</style>
    </div>
  );
}

function TableSvg(props: any) {
  return (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>);
}
