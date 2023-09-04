var applyTeamsEvent = function () {};
onMessageAdd(function (mut, name, message, id) {
  applyTeamsEvent(mut, name, message, id);
});

$.get("//poly.x10.mx/teams.json", function (teams) {
  applyTeamsEvent = function (mut, name, message, id) {
    if (options.teams) {
      for (var i = 0; i < Object.keys(teams).length; i++) {
        var teamKey = Object.keys(teams)[i];
        var team = teams[teamKey];

        if (team.members.indexOf(name.toLowerCase()) > -1) {
          addBadge(mut, teamKey, team.color, "//poly.x10.mx/badges/" + teamKey + ".png");

          if (team.color && (options.teamsnamesover || !getRanks(mut).length)) {
            addColor(mut, team.color);
          }
        }
      }
    }
  };
});
