const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // console.log(path.join(__dirname, 'resources/views'));

    app.use('/news', newsRouter);
    app.use('/', siteRouter);

    // // tạo page tên news
    // app.get('/news', (req, res) => {
    //   res.render('news');
    //   // render 'news' nghĩa là lấy home đưa vào {{{body}}}
    // })

    // app.get('/', (req, res) => {
    //     res.render('home');
    //     // render 'home' nghĩa là lấy home đưa vào {{{body}}}
    //   })

    // local host --- hosting

    // Action ==> Dispatcher ==> Function handler

    // // tạo page tên search
    // app.get('/search', (req, res) => {
    //   res.render('search');
    // })

    app.post('/search', (req, res) => {
        res.send('');
    });
}
module.exports = route;
