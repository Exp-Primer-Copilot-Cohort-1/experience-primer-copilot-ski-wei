// Create web server
// Path: server.js
// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comment = require('./comment');
const post = require('./post');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/comment', comment);
app.use('/post', post);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```

## 4. Test API
- Run server
```sh
$ node server.js
```

- Test API
```sh
$ curl -X POST -H "Content-Type: application/json" -d '{"name":"John", "comment":"Hello"}' http://localhost:3000/comment
```

- Result
```sh
$ curl -X POST -H "Content-Type: application/json" -d '{"name":"John", "comment":"Hello"}' http://localhost:3000/comment
{"name":"John","comment":"Hello","id":1}
```

- Test API
```sh
$ curl http://localhost:3000/comment
```

- Result
```sh
$ curl http://localhost:3000/comment
[{"name":"John","comment":"Hello","id":1}]
```

## 5. Create post API
- Create `post.js`
```sh
$ touch post.js
```

- Edit `post.js`
```sh
// Path: post.js
// Create post API
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('post');
});

module.exports = router;
```

- Edit `server.js`
```sh
// Path: server.js
// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comment = require('./comment');
const post = require('./post');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/comment', comment);
app.use('/post', post);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```

-