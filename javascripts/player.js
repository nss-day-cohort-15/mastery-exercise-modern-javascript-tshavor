"use strict";


function makeMecha1 () {


        if ($("#player1_TextInput").val() !== ''){
        let text = $(this).text();
        let userName1 = $('#input1').val();
        mecha1 = new Battledome.Combatants[text](userName1);
        printFighter1Stats(fighter1);
        f1x = true;
    }

//Requirement to ensure input text is completed:

    else {
        $('#fighter1stats').html("In the words of Yoda: Enter a name for your fighter and then select its type, or fight you will not");
    }
    };

    function makeMecha2 () {
        if ($("#player2_TextInput").val() !== '' && $(this).text() !== "I'm Too Lazy To Choose"){
        let text = $(this).text();
        let userName1 = $('#input1').val();
        fighter1 = new Battledome.Combatants[text](userName1);
        printFighter1Stats(fighter1);
        f1x = true;
    }
		};
