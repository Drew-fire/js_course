const checkAuth = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ isAuth: true});
    }, 2000);
  })
}


const getUser = (authInfo) => {
  return new Promise((resolve, reject) => {
    if (!authInfo.isAuth) {
    reject(null);
    return;
  }

  setTimeout(() => {
    resolve( {name: 'Max'} );
  }, 2000);
};

////////////////////////вызов

// getUser ()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log('==========================');
//     console.log('error');
//     console.log('==========================');
//   })


// checkAuth((authInfo) => {
//   getUser(authInfo, (user) => {
//     return (user.name);
//   });
// });


// checkAuth()
//   .then((res) => {
//     console.log('==================================');
//      console.log('first then');
//       console.log('==================================');
//     return getUser(res);
//   });

//   .then((res) => {
//     console.log('==================================');
//      console.log('second then');
//       console.log('==================================');
//     return getUser(res);


//////////////////////////////////promise.all
    // Promise.all ([
    //   checkAuth(),
    //   getUser ({ isAuth: true}),
    //   ])

    // .then (() => {
    //   console.log('==================================');
    //   console.log('res');
    //   console.log('==================================');
    // });