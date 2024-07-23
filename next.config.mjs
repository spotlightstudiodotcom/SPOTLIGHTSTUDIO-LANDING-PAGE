import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  // giphy.com configure it 
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "media4.giphy.com",
      port: "",
      pathname: "/**"
    }, {
      protocol: "https",
      hostname: "images.unsplash.com",
      port: "",
      pathname: "/**"
    }, {
      protocol: "https",
      hostname: "assets.aceternity.com",
      port: "",
      pathname: "/**"
    }]
  }
};
export default MillionLint.next({
  rsc: true,
})(nextConfig);