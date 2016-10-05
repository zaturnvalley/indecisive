(function() {
  var app = angular.module('IndecisiveApp');
  app.factory('Auth', ['$window', function($window) {
    return{
      saveToken: function(token) {
        $window.localStorage['secretindecisive-token'] = token;
      },
      getToken: function() {
        return $window.localStorage['secretindecisive-token']
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
  }])
  .factory('AuthInterceptor', ['Auth', function(Auth) {
    return {
      request: function(config) {
        var token = Auth.getToken();
        if(token) {
          config.headers.Authorization = 'Bearer' + token;
        }
        return config;
      }
    }
  }])
  .factory('Tags', ['$resource', 'Auth', function($resource, Auth) {
    return $resource('/api/items/tags/:id');
  }]);
})();