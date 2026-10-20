import type {NextConfig} from 'next';

const immutableModelCache = [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }];

const assetSource='https://raw.githubusercontent.com/kris70lesgo/Mico/63907d20b3283ec1d5d9599abe1f5ea704fbce59/public';

const nextConfig:NextConfig={
 images:{remotePatterns:[{protocol:'https',hostname:'d35aaqx5ub95lt.cloudfront.net'},{protocol:'https',hostname:'images.higgs.ai'}]},
 async headers(){
  return [
   { source: '/models/:path*', headers: immutableModelCache },
   { source: '/study/models/:path*', headers: immutableModelCache },
  ];
 },
 async rewrites(){
  return [
   { source: '/models/:path*', destination: `${assetSource}/models/:path*` },
   { source: '/study/:path*', destination: `${assetSource}/study/:path*` },
   { source: '/mico/:path*', destination: `${assetSource}/mico/:path*` },
  ];
 },
};
export default nextConfig;
