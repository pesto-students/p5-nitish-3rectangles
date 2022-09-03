// bind  
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon('sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms

// CALL and APPLY

var pokemon1 = {
    firstname: 'Rai',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName1 = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName1.call(pokemon1,'sushi', 'algorithms'); // Rai Chu  loves sushi and algorithms
pokemonName1.apply(pokemon1,['sushi', 'algorithms']); // Rai Chu  loves sushi and algorithms