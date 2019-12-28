const dotenv = require( 'dotenv' );

const env = dotenv.config();
console.log( 'env: ', env.parsed );

console.log( process.env );