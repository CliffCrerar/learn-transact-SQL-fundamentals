const fs = require('fs');
const path = require('path');
fs.copyFileSync(
    path.resolve(process.cwd(), 'public/QYHcroLbMJapKtlHCGovXoZeFtQPfI.html'),
    path.resolve(process.cwd(), 'dist/QYHcroLbMJapKtlHCGovXoZeFtQPfI.html')
)