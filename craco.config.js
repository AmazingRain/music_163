const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  babel: {
    plugins: [
      ['import', { libraryName: 'antd', style: true }]
    ]
  },
  webpack: {
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components')
    }
  },
}