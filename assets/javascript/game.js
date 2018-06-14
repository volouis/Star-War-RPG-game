var character = [
    {
        name: "OWK",
        health: 100,
        power: 8,
        counter: 1
    },
    {
        name: "LSW",
        health: 130,
        power: 8,
        counter: 5
    },
    {
        name: "DPL",
        health: 140,
        power: 8,
        counter: 20
    },
    {
        name: "DML",
        health: 150,
        power: 8,
        counter: 25
    }
];

var charPick = true;
var enePick = true;
var pick = 5;
var opp = 5;
var winner = 0;

$(document).ready(function() {

    initial();

    $(".char").on("click", function(){
        if(charPick){
            $(".char").hide();
            $(this).show();
            $(".enemy").show();
    
            pick = parseInt($(this).attr("value"));
    
            for(var i = 0; i < character.length; i++){
                if($(this).attr("value") === $(".enemy" + i).attr("value")){
                   $(".enemy" + i).hide();
                }
            }
            charPick = false;
        }
    });

    $(".enemy").on("click", function(){
        if(enePick){
            $(this).hide();

            opp = parseInt($(this).attr("value"));
    
            for(var i = 0; i < character.length; i++){
                if($(this).attr("value") === $(".fighter" + i).attr("value")){
                   $(".fighter" + i).show();
                }
            }
            enePick = false;
        }
    });

    var attBtn = true;

    $("#attack").on("click", function(){
        if(attBtn){
            if(pick === 5 || opp === 5 ){
                $("#yourMove").text("No enemy here.")
            }else{
                character[opp].health -= character[pick].power;
    
                if(character[opp].health <= 0){
                    winner++;
                    $("#yourMove").text("You have defeated " + character[opp].name + ", you can choose to fight another enemy.");
                    $("#oppMove").text("");
                    $(".fighter" + opp).hide();
                    enePick = true;
                    if(winner === 3){
                        $("#yourMove").text("You Won!!! GAME OVER!!!")
                        $("#restart").show();
                    }
                    opp = 5;
    
                }else{
                    character[pick].health -= character[opp].counter;
    
                    $(".btn" + pick).text(character[pick].name + " " + character[pick].health);
                    $(".btn" + pick).append("<img src = assets/images/" + character[pick].name + ".jpg>");
    
                    $(".fighter" + opp).text(character[opp].name + " " +  character[opp].health);
                    $(".fighter" + opp).append("<img src = assets/images/" + character[opp].name + ".jpg>");

                    if(character[pick].health <= 0){
                        $("#yourMove").text("You been defeated...GAME OVER!!!");
                        $("#oppMove").text("");
                        $("#restart").show();
                        attBtn = false;
                    }else{
                        $("#yourMove").text("you attacked " + character[opp].name + " for " + character[pick].power + " damage");
                        $("#oppMove").text(character[opp].name + " attacked you back for " + character[opp].counter + " damage");
                    }
                    character[pick].power += 8;
                }
            }
        } 
    });

    $("#restart").click(function(){

        $(".enemy").hide();
        $(".fighter").hide();
        $("#restart").hide();
        $(".char").show();
        $("#yourMove").text("");
        $("#oppMove").text("");

        character[0].health = 100;
        character[1].health = 130;
        character[2].health = 140;
        character[3].health = 150;
        character[pick].power = 8;

        $(".btn" + pick).text(character[pick].name + " " + character[pick].health);
        $(".btn" + pick).append("<img src = assets/images/" + character[pick].name + ".jpg>");

        for(var i = 0; i < character.length; i++){
            if(i !== pick){
                $(".fighter" + i).text(character[i].name + " " +  character[i].health);
                $(".fighter" + i).append("<img src = assets/images/" + character[i].name + ".jpg>");
            }
        }
        pick = 5;
        opp = 5;
        winner = 0;
        attBtn = true;
        charPick = true;
        enePick = true;
    });
 
});

function initial(){
    for(var i = 0; i < character.length; i++){
        var charBtn = $("<button>");

        charBtn.addClass("char char" + i);
        charBtn.addClass("btn" + i);

        charBtn.attr("data-name", character[i].name);
        charBtn.attr("value", i);
    
        charBtn.text(character[i].name + " " + character[i].health);
        
        charBtn.append("<img src = assets/images/" + character[i].name + ".jpg>");

        $("#you").append(charBtn);
    }

    for(var i = 0; i < character.length; i++){
        var charBtn = $("<button>");

        charBtn.addClass("enemy enemy" + i);
        charBtn.addClass("btn" + i);

        charBtn.attr("data-name", character[i].name);
        charBtn.attr("value", i);

        charBtn.text(character[i].name + " " + character[i].health);

        charBtn.append("<img src = assets/images/" + character[i].name + ".jpg>");

        
        $("#enemies").append(charBtn);
    }

    for(var i = 0; i < character.length; i++){
        var charBtn = $("<button>");

        charBtn.addClass("fighter fighter" + i);

        charBtn.attr("data-name", character[i].name);
        charBtn.attr("value", i);

        charBtn.text(character[i].name + " " + character[i].health);

        charBtn.append("<img src = assets/images/" + character[i].name + ".jpg>");
        
        $("#defender").append(charBtn);
    }
    $(".enemy").hide();
    $(".fighter").hide();
    $("#restart").hide();
    pick = 5;
    opp = 5;
}
