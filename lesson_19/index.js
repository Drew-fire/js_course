const checkAuth = (callback) => {
  setTimeout(() => {
    callback( {isAuth: true} );
  }, 2000);
};


const getUser = (authInfo, callback) => {
  if (!authInfo.isAuth) {
    callback(null);
    return;
  }
  setTimeout(() => {
    callback( {name: 'Max'} );
  }, 2000);
};


checkAuth((authInfo) => {
  getUser(authInfo, (user) => {
    console.log(user.name);
  });
});
