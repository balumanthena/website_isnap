"use client";

import { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { UploadCloud, X, Loader2, RefreshCw, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  folder?: string;
  className?: string;
}

export function ImageUploader({ value, onChange, folder = "isnap_media", className }: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handleSuccess = (result: any) => {
    setIsUploading(false);
    if (result.event === "success") {
      onChange(result.info.secure_url);
    }
  };

  const handleClose = () => {
    setIsUploading(false);
  };

  return (
    <div className={cn("w-full group", className)}>
      {value ? (
        <div className="relative rounded-lg overflow-hidden bg-gray-100 aspect-[2/1] w-full border border-gray-200">
          <CldImage 
            src={value} 
            width={1440}
            height={720}
            alt="Cover image" 
            className="w-full h-full object-cover"
            crop="fill"
            gravity="auto"
          />
          
          {/* Hover Controls */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
            <CldUploadWidget 
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
              onSuccess={handleSuccess}
              onUpload={() => setIsUploading(true)}
              onClose={handleClose}
            >
              {({ open }) => (
                <button
                  type="button"
                  onClick={() => open()}
                  className="h-8 px-3 bg-white text-gray-900 text-[12px] font-medium rounded-md hover:bg-gray-100 transition-colors flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3 h-3" />
                  Replace
                </button>
              )}
            </CldUploadWidget>
            <button
              type="button"
              onClick={() => onChange("")}
              className="h-8 w-8 bg-white text-red-500 rounded-md hover:bg-red-50 transition-colors flex items-center justify-center"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        <CldUploadWidget 
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
          onSuccess={handleSuccess}
          onUpload={() => setIsUploading(true)}
          onClose={handleClose}
        >
          {({ open }) => (
            <div 
              onClick={() => open()}
              className={cn(
                "relative rounded-lg border border-dashed p-10 text-center cursor-pointer transition-colors duration-150 flex flex-col items-center justify-center aspect-[2.5/1]",
                isUploading 
                  ? "bg-gray-50 border-gray-300" 
                  : "border-gray-200 hover:border-gray-400 hover:bg-gray-50"
              )}
            >
              {isUploading ? (
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
                  <p className="text-[13px] font-medium text-gray-500">Uploading...</p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-gray-700">Add cover image</p>
                    <p className="text-[12px] text-gray-400 mt-0.5">Click to upload or drag and drop</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </CldUploadWidget>
      )}
    </div>
  );
}
