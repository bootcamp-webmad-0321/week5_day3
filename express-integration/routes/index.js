module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/mapas', require('./maps.routes.js'))
    app.use('/restaurantes', require('./restaurants.routes.js'))
    app.use('/api', require('./api.routes.js'))
}