const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// 루트폴더를 public 이라는 폴더로 삼겠다
// 암묵적으로 public은 루트폴더임
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 서버에 get 요청이 들어왔을 때 실행
// 루트서버인경우 = '/'
// 클라이언트에게서 루트요청이 오면 콜백함수가 실행되어 문자열을 날린다.
// 서버는 리퀘스트와 리스폰스를 가지고 시작.
app.get('/', (req, res) => {
  res.send('hello world');
});

// GET 방식으로 보낸 데이터가 쿼리형식으로 들어온다는 것
app.get('/signup', (req, res) => {
  console.log(req.query);
  res.json(req.query);
});
// 쿼리스트링에는 아무것도 없으므로 내용이 오지 않음
// app.post('/signup', (req, res) => {
//   console.log(req.query);
//   res.json(req.query);
// });

// post 요청이 오면 리퀘스트의 바디에 담긴 내용을 꺼내서 보낸다 -> npm install body-parser 필요
app.post('/signin', (req, res) => {
  console.log(req.body.email);
  console.log(req.body.password);

  // 회원 가입 여부 확인
  if (req.body.email === 'dearjsmc4@gmail.com' && req.body.password === '1234') {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'Invalid User' });
  }
});

app.listen(5000, () => console.log('server works'));
