var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.memory.harvesting == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.harvesting = true;
            creep.say('harvesting');
	    }
	    
	    else if(creep.memory.harvesting == true && creep.carry.energy == 0) {
	        creep.memory.harvesting = false;
	        creep.say(' not harvesting');
	    }
	    
	    if(creep.memory.harvesting == true){
	        if(creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
	            creep.moveTo(Game.spawns.Spawn1);
	            creep.say('find');
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

module.exports = roleHarvester;