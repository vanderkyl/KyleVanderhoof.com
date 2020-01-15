app.controller('socialsController', ['$scope', '$http',
function($scope, $http) {
  $scope.newBand = {};
  $scope.bandCode = "";
  $scope.user = {
    id: "",
    bands: [],
    name: "",
    metaName: "",
    email: "",
    password: "",
    passwordAgain: ""
  };
  $scope.recentComments = [];
  $scope.recentHighlights = [];
  $scope.pageSize = 10;
  $scope.bandFilter = "";
  $scope.playlists = [];
  $scope.playlistName = "";

  // -- MAIN METHODS -- // ----------------------------------------






}]);
// End of mainController scope
