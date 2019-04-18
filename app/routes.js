const Express = require('express');

const app = Express();

const usersRouter = new Express.Router();

usersRouter.get('/', (request, result) => {
    result.json({ current: true });
}
);

usersRouter.get('/:id', (request, result) => {
    result.json({id: request.params.id})
});


app.use(Express.json());
app.use(Express.urlencoded());
