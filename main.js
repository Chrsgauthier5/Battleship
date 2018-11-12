window.onload = function () {

    var view = {

        displayMessage: function (msg) {
            var display = document.getElementById("messageArea"); //set message area to var
            display.innerHTML = msg; // update message area to display msg
        },
        displayHit: function (location) {
            var hit = document.getElementById(location);
            hit.setAttribute("class", "hit");
        },
        displayMiss: function (location) {
            var miss = document.getElementById(location);
            miss.setAttribute("class", "miss");
        }

    }
    view.displayMessage("hello");
    view.displayHit(11);
    view.displayMiss(66);


    var model = {
        boardSize: 7,
        numShips: 3,
        shipLength: 3,
        shipsSunk: 0,
        ships: [
            {
                locations: ['10', '20', '30'],
                hits: ['', '', '']
            },
            {
                locations: ['32', '33', '34'],
                hits: ['', '', '']
            },
            {
                locations: ['63', '64', '65'],
                hits: ['', '', 'hit']
            }
        ],
        fire: function (guess) {
            for (var i = 0; i < this.numShips; i++) {
                var ship = this.ships[i];
                var index = ship.locations.indexOf(guess);
                if (index >= 0) {
                    //we have a hit
                    ship.hits[index] = 'hit';
                    view.displayHit(guess);
                    view.displayMessage('HIT!');
                    if (this.isSunk(ship)) {
                        view.displayMessage("You sank my battleship!");
                        this.shipsSunk++;
                    }
                    return true
                }

            }
            view.displayMiss(guess);
            view.displayMessage("You missed.");
            return false;
        },

        isSunk: function (ship) {
            for (var i = 0; i < this.shipLength; i++) {
                if (ship.hits[i] !== 'hit') {
                    return false;
                }
            }
            return true;
        }
    };

    console.log(model.fire('10'));
    console.log(model.fire('20'));
    console.log(model.fire('30'));

    // var controller = {
    //     guesses: 0,
    //     processGuess: function (guess) {
    //         var playerGuess = document.getElementById(guessInput).value
    //     },
    //     parseGuess: 

    // }

    function parseGuess(guess) {
        var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

        if (guess === null || guess.length !== 2) {
            alert("Oops, please enter a letter and a number on the board.");
        }
        else {
            var firstChar = guess.charAt(0);
            var row = alphabet.indexOf(firstChar);
            var column = guess.charAt(1);
            console.log(row);
            if (isNaN(row) || isNaN(column)) {
                alert("Oops, that isn't on the board.");
            } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
                alert("Oops, that's off the board!");
            } else {
                return row + column;
            }
        }
        return null

    }
    console.log(parseGuess("13"));



};