/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  distDir: '.next',
  reactStrictMode: true,
  
  // Configuração corrigida conforme mensagem de erro
  outputFileTracingRoot: __dirname,
  
  // Configuração adicional para garantir que o App Router funcione corretamente
  swcMinify: true,
  trailingSlash: false
};

module.exports = nextConfig;
