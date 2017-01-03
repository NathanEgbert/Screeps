var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.memory.upgrading == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
            creep.say('upgrading');
	    }
	    
	    else if(creep.memory.upgrading == true && creep.carry.energy == 0) {
	        creep.memory.upgrading = false;
	        creep.say(' not upgrading');
	    }
	    
	    if(creep.memory.upgrading){
	        var control = creep.room.controller;
            if(creep.upgradeController(control) == ERR_NOT_IN_RANGE) {
                creep.moveTo(control);
	        }
	    }
	    
        else {
            var sources = creep.pos.findClosestByPath(FIND_SOURCES);
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
            }
            
        }
	}
};

module.exports = roleUpgrader;