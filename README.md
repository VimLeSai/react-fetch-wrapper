# react-fetch-wrapper
Make easy call API and make work faster. It has now functionalities like compatible with every method (GET, POST, PUT, DELETE and more.), direct option to send data while the use of the POST, PUT method, and have an option for an optional data as a query string parameter.

it's an easy to use package for a fetch API call. React-fetch-wrapper will need one passing parameter which would contain URL, method, data(optional), queryString parameters(optional).

# How to use: 

> For an use of react-fetch-wrapper start with installation.

```
npm install react-fetch-wrapper
```

> Check installation from package.json, And import 'apiCall' method from this wrapper into the project file.

> Now 'apiCall' require URL and METHOD. So use object like below:
```
import {apiCall} from '../api-call-wrapper';

//defult object for apiCall
let login = {url: '/route-name/', method: 'GET'};

//call
apiCall(login);

```

->> Send data on apiCall for methods 'PUT', 'POST'

> Store that data into one object and append it to the object with a name 'data' which we created for apiCall. 

```
//data object
let data = { username: 'user', password: 'user'};

//append with apicall with an name 'data'
login['data'] = data;
//call
apiCall(login);
```

->> Send extra data on apiCall as a query string parameter.

> Store that data into one object like above and append it to a created object with a name 'query'.
```
//query object
let query = { id: 5};

//append with apicall with an name 'query'
login['query'] = query;
//call
apiCall(login);
```

->> Use response and errors.
> do use of response after apiCall success with a ' then', and do use of error if apiCall failed with a 'catch'.

```
let data = { username : "john",
             password : "xyz" };
             
    login['data'] = data;      //optional: push data object into login object with 'data' key only.
    apiCall (login)            //use login object as a perameter of apiCall
    .then(data => console.log(error)) //response
    .catch(error => console.log(error)); //error on api call
    
```

->> Full Example of react-fetch-wrapper

```
import {apiCall} from 'react-fetch-wrapper';

//call object
let login = {url: '/login', method: 'POST'}

//data object
let data = {username: 'user', password: 'user'};

//query object 
let query = {api-token: 'JGHGJHGJHGJHGJ'};

login['data'] = data; //append data object
login['query'] = query; //append query object

//call
apiCall(login).then(response => console.log(response.json())).catch(error => console.log(error));

```

Happy coding.
