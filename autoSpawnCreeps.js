var autoSpawnCreeps = {
    
    run: function(){
        
        //clears non-existing creeps from memory
        for(var name in Memory.creeps) {
            
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }//end if
    }//end for
    
    
    //creates harvesters
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);

    if(harvesters.length < 2) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], 'H', {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    }//end if
        
        
         //creates upgraders
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);

    if(upgraders.length < 2) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], 'U', {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newName);
    }//end if
}
};

module.exports = autoSpawnCreeps;