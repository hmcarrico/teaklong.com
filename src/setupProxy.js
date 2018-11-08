const proxy = require('http-proxy-middleware');

module.exports = app => {
    app.use('/api', proxy({target: 'http://localhost:4444'}));
    app.use('/session', proxy({target: 'http://localhost:4444'}));
    app.use('/auth/callback', proxy({target: 'http://localhost:4444'}));
    app.use('/save-stripe-token', proxy({target: 'http://localhost:4444'}));
    app.use('/send', proxy({target: 'http://localhost:4444'}));
};