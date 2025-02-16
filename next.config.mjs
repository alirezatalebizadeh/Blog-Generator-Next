/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_APIKEY: process.env.NEXT_PUBLIC_APIKEY,
    NEXT_PUBLIC_CKEDITOR: process.env.NEXT_PUBLIC_CKEDITOR,
  },
};

export default nextConfig;
