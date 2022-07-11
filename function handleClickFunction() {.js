console.log("hello 0")

function handleClickFunction01() {
  console.log("Hello World 01");
}

// button1.addEventListener('click', handleClickFunction01);

console.log("Hello World 01");


function handleClickFunction02() {
  console.log("Hello World 02");
}

console.log("Hello World 02");


button2.addEventListener('click', handleClickFunction02);

new Promise((resolve, reject))

app.get('/home', function () { });

app.listen(PORT, HOST, function (err) {
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port", PORT);
});

// ben trong express
on('http-receive', /* redirect request to app.get app.post*/)

Log1() //sync

getUserList() // goi http => async

verifyUser() //  phai co userList thi no moi hoat dong dc => async

createCookie() // phai co verify thi moi hoat dong dc => async

log2() //  sync

// ---------------------------------

let user = "minh"

Promise la mot object

{
  status: "resolved / rejected / pending"
  value: data
  error: err
}


const getUserList = new Promise(function (resolve, reject) {

  var data;

  http.get('/api', function (response) {
    response.on('end', function (chunk) {
      data = chunk;
      resolve(data); // Promise.value == data, Promise.status == resolved
    });
    response.on('error', function (error) {
      console.log(error);
      reject(error);
    });
  });

});

// verifyUser la mot promise

const handlePromiseError = getUserList.catch(function (error) { // van la mot Promise
  console.log(error);
  return "api cua may sai"; // resolve handlePromiseError Promise

});

const verifyUser = getUserList.then(function (value) { // then tao ra mot Promise moi
  const userList = json(value);
  const isUser = userList.include(user);
  return isUser; // resolve thang Promise thu 2 (verifyUser Promise) ==> return giong nhu resolve mot Promise
  throw new Error; // throw giong nhu reject Promise
});

const handleVerifyUserError = verifyUser.catch();

const setCookie = verifyUser.then(function (value) {
  functionToSetCookie(value);
  return 'done';
});

//callback
//promise
//async await



// Promise chain




