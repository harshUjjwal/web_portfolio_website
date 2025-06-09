import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, User, X } from "lucide-react";

const PhotoUpload = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <Card className="overflow-hidden border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            {selectedImage ? (
              <div className="relative">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={selectedImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-16 rounded-full w-8 h-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="w-48 h-48 mx-auto rounded-full bg-gray-100 border-4 border-white shadow-lg flex items-center justify-center">
                <User className="h-20 w-20 text-gray-400" />
              </div>
            )}

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">
                {selectedImage ? "Profile Photo" : "Upload Photo"}
              </h3>
              <p className="text-sm text-gray-600">
                {selectedImage
                  ? "Click to change your photo"
                  : "Add your professional photo"}
              </p>
            </div>

            <Button
              onClick={handleUploadClick}
              variant={selectedImage ? "outline" : "default"}
              className="w-full"
            >
              <Upload className="mr-2 h-4 w-4" />
              {selectedImage ? "Change Photo" : "Upload Photo"}
            </Button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
              aria-label="Upload profile photo"
            />

            <p className="text-xs text-gray-500">
              Recommended: Square image, max 5MB
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhotoUpload;
