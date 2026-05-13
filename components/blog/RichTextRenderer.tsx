"use client";

import { cn } from "@/lib/utils";

interface RichTextRendererProps {
  content: string;
  className?: string;
}

export function RichTextRenderer({ content, className }: RichTextRendererProps) {
  return (
    <div 
      className={cn(
        "prose prose-lg md:prose-xl max-w-none",
        "prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900",
        "prose-p:text-gray-600 prose-p:leading-relaxed",
        "prose-a:text-black prose-a:font-bold prose-a:underline-offset-4 hover:prose-a:text-gray-600",
        "prose-img:rounded-[2.5rem] prose-img:shadow-2xl prose-img:border border-gray-100",
        "prose-blockquote:border-l-[6px] prose-blockquote:border-black prose-blockquote:italic prose-blockquote:bg-gray-50 prose-blockquote:p-8 prose-blockquote:rounded-r-2xl",
        "prose-pre:bg-black prose-pre:rounded-2xl prose-pre:p-8",
        "prose-table:border-collapse prose-table:border prose-table:border-gray-200 prose-table:rounded-xl prose-table:overflow-hidden",
        "prose-th:bg-gray-50 prose-th:p-4 prose-th:text-left",
        "prose-td:p-4 prose-td:border prose-td:border-gray-100",
        className
      )}
    >
      <style jsx global>{`
        .prose .callout {
          background: #f8fafc;
          border-left: 4px solid #000;
          padding: 2rem;
          border-radius: 1rem;
          margin: 3rem 0;
          font-style: normal;
          color: #1e293b;
          font-weight: 500;
        }

        .prose .cta-block {
          background: #000;
          color: #fff;
          padding: 3rem;
          border-radius: 2.5rem;
          text-align: center;
          margin: 4rem 0;
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: -0.02em;
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.3);
        }

        .prose .faq-block {
          background: #fafafa;
          border: 1px solid #f1f1f1;
          padding: 2.5rem;
          border-radius: 2rem;
          margin: 3rem 0;
          position: relative;
        }

        .prose .faq-block::before {
          content: 'FAQ';
          position: absolute;
          top: -10px;
          left: 20px;
          background: #000;
          color: #fff;
          font-size: 10px;
          font-weight: 900;
          padding: 4px 12px;
          border-radius: 4px;
          letter-spacing: 0.1em;
        }

        .prose .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          padding: 3rem;
          background: #f8fafc;
          border-radius: 2.5rem;
          margin: 4rem 0;
          text-align: center;
        }

        .prose .timeline-block {
          border-left: 2px solid #000;
          padding-left: 3rem;
          margin: 4rem 0 4rem 1.5rem;
          position: relative;
        }

        .prose .timeline-block::before {
          content: '';
          position: absolute;
          left: -8px;
          top: 0;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #000;
          box-shadow: 0 0 0 4px #fff;
        }

        .prose iframe {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 2.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
          margin: 4rem 0;
        }
      `}</style>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
