var autoSpawnCreeps = {
    
    run: function(){
        
        //clears non-existing creeps from memory
        for(var name in Memory.creeps) {
            
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }//end if
    }//end for
    
    
    
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);
   
    
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);
    
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    console.log('Builders: ' + builders.length);

    //creates harvesters
    if(harvesters.length < 3) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE,MOVE], undefined, {role: 'harvester', harvesting: false});
        console.log('Spawning new harvester: ' + newName);
        
    }//end if
        
    
    //creates upgraders
    if(upgraders.length < 10) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE,MOVE], undefined, {role: 'upgrader', upgrading: false});
        console.log('Spawning new upgrader: ' + newName);
        
    }//end if
    
    //creates builders
    if(builders.length < 5) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE,MOVE], undefined, {role: 'builder'});
        console.log('Spawning new builder: ' + newName);
        
    }//end if
}
};

module.exports = autoSpawnCreeps;