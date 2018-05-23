import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';


const app = express();


app.use(express.static('public'));


app.get('/pages', (req, res) => {
    const store = createStore(req);
    const pageNo = parseInt(req.query.pageNo)
    const size = parseInt(req.query.size)
    const total = parseInt(req.query.total)
    const query = {}
    if(pageNo < 0 || pageNo === 0) {
        const response = {"error" : true,"message" : "invalid page number, should start with 1"};
        return res.json(response.message)
    }
        query.skip = pageNo
        query.limit = size
        query.total = total

    const promises = matchRoutes(Routes, req.path).map(({ route, match }) => {
        if(route.loadData){
            return route.loadData(store, match, query);
        }}).map(promise => {
        if(promise) {
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve);
            })
        }
    });

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        // If this logic is not work try click disable cache in network console in browser
        if(context.url) {
            return res.redirect(301, context.url);
        }

        if(context.notFound) {
            res.status(404);
        }
        res.send(content)
    })
})

app.get('*', (req, res) => {
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path).map(({ route, match }) => {
        if(route.loadData){
            return route.loadData(store, match);
        }}).map(promise => {
        if(promise) {
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve);
            })
        }
    });

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        // If this logic is not work try click disable cache in network console in browser
        if(context.url) {
            return res.redirect(301, context.url);
        }

        if(context.notFound) {
            res.status(404);
        }
        res.send(content)
    })

});
app.listen(80, () => {
    console.log('Listening to port 3000');
});

