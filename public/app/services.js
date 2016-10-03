angular.module('IndecisiveServices' , ['ngResource'])
.factory('Auth', ['$window', function($window) {
  return{
    saveToken: function(token) {
      $window.localStorage['secretindecisive-token'] = token;
    },
    getToken: function() {
      eturn $window.localStorage['secretindecisive-token']
    },
    removeToken: function() {
      $window.localStorage.removeItem('secretindecisive-token');
    },
    isLoggedIn: function() {
      var token = this.getToken();
      return token ? true : false;
    },
    currentUser: function () {
      if(this.isLoggedIn()) {
        var token = this.getToken();
        try {
          var payload = JSON.parse($window.atob(token.split('.')[1]));
          return payload;
        } catch (err) {
          return false;
        }
      }
    }
  }
}]);