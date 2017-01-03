var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var autoSpawner = require('autoSpawnCreeps');

module.exports.loop = function () {
    
   autoSpawner.run();
   
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        var creepRole = creep.memory.role;
        
        switch(creepRole){
	case 'harvester':
		roleHarvester.run(creep);
		creep.say(creepRole);
		break;
		
	case 'upgrader':
		roleUpgrader.run(creep);
		creep.say(creepRole);
		break;
		
	case 'builder':
		roleBuilder.run(creep);
		creep.say(creepRole);
		break;
	}
    }
}