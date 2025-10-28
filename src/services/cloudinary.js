export const CLOUDINARY_CLOUD_NAME = "db7xgx4o2";
export const CLOUDINARY_UPLOAD_PRESET = "tracker";
export const CLOUDINARY_API_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  const res = await fetch(CLOUDINARY_API_URL, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  return data.secure_url;
};
