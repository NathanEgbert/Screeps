var roleHarvester = require('role.harvester');
var roleUpgrade = require('role.upgrade');

module.exports.loop = function () {

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        //roleHarvester.run(creep);
        roleUpgrade.run(creep);
    }
}

  