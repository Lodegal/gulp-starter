const isProd = process.argv.includes('--prod');

module.exports = {
    isProd: isProd,
    isDev: !isProd
}