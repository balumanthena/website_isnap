"use client";

import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { X, Upload, Link as LinkIcon, Loader2, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface EditorImageUploadProps {
  isOpen: boolean;
  onClose: () => void;
  onInsert: (url: string, alt?: string) => void;
}

export function EditorImageUpload({ isOpen, onClose, onInsert }: EditorImageUploadProps) {
  const [tab, setTab] = useState<"upload" | "url">("upload");
  const [urlInput, setUrlInput] = useState("");
  const [altInput, setAltInput] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  if (!isOpen) return null;

  const handleUploadSuccess = (result: any) => {
    setIsUploading(false);
    if (result.event === "success") {
      const url = result.info.secure_url;
      setPreview(url);
    }
  };

  const handleInsertPreview = () => {
    if (preview) {
      onInsert(preview, altInput || "Image");
      reset();
    }
  };

  const handleInsertUrl = () => {
    if (urlInput.trim()) {
      onInsert(urlInput.trim(), altInput || "Image");
      reset();
    }
  };

  const reset = () => {
    setPreview(null);
    setUrlInput("");
    setAltInput("");
    setTab("upload");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={reset} />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl border border-gray-200 w-full max-w-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-gray-400" />
            <span className="text-[14px] font-semibold text-gray-900">Insert image</span>
          </div>
          <button onClick={reset} className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors">
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100 px-5">
          <button
            onClick={() => setTab("upload")}
            className={cn("px-3 py-2.5 text-[13px] font-medium border-b-2 transition-colors -mb-px",
              tab === "upload" ? "text-gray-900 border-gray-900" : "text-gray-400 border-transparent hover:text-gray-600"
            )}
          >
            Upload
          </button>
          <button
            onClick={() => setTab("url")}
            className={cn("px-3 py-2.5 text-[13px] font-medium border-b-2 transition-colors -mb-px",
              tab === "url" ? "text-gray-900 border-gray-900" : "text-gray-400 border-transparent hover:text-gray-600"
            )}
          >
            Embed URL
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          {tab === "upload" && (
            <>
              {preview ? (
                <div className="space-y-4">
                  <div className="relative rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
                    <img src={preview} alt="Preview" className="w-full max-h-[300px] object-contain" />
                    <button
                      onClick={() => setPreview(null)}
                      className="absolute top-2 right-2 w-7 h-7 bg-white/90 rounded-md flex items-center justify-center shadow hover:bg-white transition-colors"
                    >
                      <X className="w-3.5 h-3.5 text-gray-500" />
                    </button>
                  </div>
                  <div>
                    <label className="text-[12px] font-medium text-gray-500 mb-1.5 block">Alt text (optional)</label>
                    <input
                      type="text"
                      value={altInput}
                      onChange={(e) => setAltInput(e.target.value)}
                      placeholder="Describe this image..."
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] outline-none focus:border-gray-400 transition-colors"
                    />
                  </div>
                  <button
                    onClick={handleInsertPreview}
                    className="w-full h-9 bg-gray-900 text-white text-[13px] font-medium rounded-md hover:bg-black transition-colors"
                  >
                    Insert image
                  </button>
                </div>
              ) : (
                <CldUploadWidget
                  uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                  onSuccess={handleUploadSuccess}
                  onUpload={() => setIsUploading(true)}
                  onClose={() => setIsUploading(false)}
                >
                  {({ open }) => (
                    <div
                      onClick={() => open()}
                      className={cn(
                        "border-2 border-dashed rounded-lg p-10 text-center cursor-pointer transition-colors flex flex-col items-center gap-3",
                        isUploading ? "border-gray-300 bg-gray-50" : "border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                      )}
                    >
                      {isUploading ? (
                        <>
                          <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
                          <p className="text-[13px] text-gray-500 font-medium">Uploading...</p>
                        </>
                      ) : (
                        <>
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Upload className="w-5 h-5 text-gray-400" />
                          </div>
                          <div>
                            <p className="text-[14px] font-medium text-gray-700">Click to upload</p>
                            <p className="text-[12px] text-gray-400 mt-0.5">or drag and drop • PNG, JPG, WebP up to 10MB</p>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </CldUploadWidget>
              )}
            </>
          )}

          {tab === "url" && (
            <div className="space-y-4">
              <div>
                <label className="text-[12px] font-medium text-gray-500 mb-1.5 block">Image URL</label>
                <div className="relative">
                  <LinkIcon className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="url"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="w-full border border-gray-200 rounded-md pl-9 pr-3 py-2 text-[13px] outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-[12px] font-medium text-gray-500 mb-1.5 block">Alt text (optional)</label>
                <input
                  type="text"
                  value={altInput}
                  onChange={(e) => setAltInput(e.target.value)}
                  placeholder="Describe this image..."
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] outline-none focus:border-gray-400 transition-colors"
                />
              </div>
              {urlInput && (
                <div className="rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
                  <img src={urlInput} alt="Preview" className="w-full max-h-[200px] object-contain" onError={(e) => (e.currentTarget.style.display = "none")} />
                </div>
              )}
              <button
                onClick={handleInsertUrl}
                disabled={!urlInput.trim()}
                className="w-full h-9 bg-gray-900 text-white text-[13px] font-medium rounded-md hover:bg-black transition-colors disabled:opacity-40"
              >
                Insert image
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
