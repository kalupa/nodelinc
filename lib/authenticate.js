exports.verify = function(credentials) {
  if ( ( credentials.email    && credentials.password ) &&
       ( credentials.email    == 'test@example.com' &&
         credentials.password == 'test' ) ) {
    return true;
  } else {
    return false;
  }
};
