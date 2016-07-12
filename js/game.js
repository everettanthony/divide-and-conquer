function Army(name, size) {
    this.name = name;
    this.size = size;
    this.tactic_name = "Shoot at the other side.";
    this.casualty_count = 0;
    this.battleDead = [];
    this.finalTotal = 0;
    this.book_of_attacks = {
        "First rank of musketmen deliver a volley of musket fire": 40,
        "Second rank of musketmen deliver a volley of musket fire": 80,
        "Third rank of musketmen deliver a volley of musket fire": 160,
        "Fourth rank of musketmen deliver a volley of musket fire": 200,
        "Calvary of 20 ride in and attack using a flanking maneuver on the left": 100,
        "Calvary of 20 ride in and attack using a flanking maneuver on the right": 200,
        "Calvary of 50 ride in and attack using a flanking maneuver on the left": 400,
        "Calvary of 50 ride in and attack using a flanking maneuver on the right": 800,
        "Row of twelve cannons simultaneously fire": 400,
        "Row of six cannons simultaneously fire": 800,
        "Bayonet charge of 100 men": 100,
        "Bayonet charge of 50 men": 40,
        "Mohawk tribe sneak attack from the rear": 20,
        "Mohawk tribe sneak attack from the left flank": 40,
        "Cherokee guerilla attack from the rear": 40,
        "Riflemen from the high ground fire on the front line": 20,
        "50 men break the line and charge for hand-to-hand combat": 120,
        "25 men break the line and charge for hand-to-hand combat": 60,
        "10 men break the line and charge for hand-to-hand combat": 20,
        "The General launches futuristic secret weapon": 1000,
        "The little drummer boy throws a dozen rocks at the front line": 1
    };
}

Army.prototype = {
    constructor: Army,
    attack:function(enemy)  {
        btn = document.getElementById('turn');
        btnA = this.name + " attack!";
        btnB = enemy.name + " attack!";
        btn.value = (btn.value == btnA) ? btnB : btnA;

        if (btn.value == btnA) {
            enemy.tactics(this.book_of_attacks, this);
            document.getElementById("info-list").style.display = 'block';
        } else {
            this.tactics(this.book_of_attacks, enemy);
            enemy.counterAttack(this);
        }
    },
    counterAttack:function(enemy)  {
        var thisArmy = this;
        oldValue = btnA;
        btn.setAttribute('disabled', true);
        btn.value = '...enemy preparing attack...';

        setTimeout(function(){
            thisArmy.tactics(thisArmy.book_of_attacks, enemy);
            btn.value = oldValue;
            btn.removeAttribute('disabled');
        }, 1000);
    },
    tactics:function(obj, enemy)  {
        var count = 0;
        var addDead;
        var flagClass = this.name;
        flagClass = flagClass.replace(/\s+/g, '-').toLowerCase();

        for (var prop in this.book_of_attacks) {
          if (Math.random() < 1/++count) {
            this.tactic_name = prop;
            this.casualty_count = obj[prop];
            document.getElementById("report").innerHTML = "<div class=\"flag-" + flagClass + "\"></div>" + this.tactic_name + ".";
            document.getElementsByClassName("damage")[0].innerHTML = enemy.name + " suffered " + this.casualty_count + " casualties in that attack.";
          }
        }
        enemy.casualties(this.casualty_count);
        enemy.showArmyAndTroopCount();
        enemy.totalCasualties();
        enemy.remainingTroops(this);
    },
    casualties:function(num)  {
        this.battleDead.push(num);
    },
    showArmyAndTroopCount:function()  {
        var casualtyCount = this.battleDead.length > 0 ? this.battleDead.join(", ") : "There are no casualties.";
    },
    addTroops:function(num)  {
        this.size = num;
        return "New Troop Count: " + this.size;
    },
    totalCasualties:function()  {
      this.finalTotal = this.battleDead.reduce(add, 0);
      function add(a, b) { return a + b; }
      document.getElementsByClassName("grandTotal")[0].innerHTML = "Total " + this.name + " Casualties: " + this.finalTotal;
    },
    remainingTroops:function(enemy)  {
        if ((this.size - this.finalTotal) <= 0) {
            this.battleOver();
            enemy.saveWin(this);
            document.getElementById("loser").innerHTML = this.name + " has fallen. " + enemy.name + " is the winner.";
        } else {
            document.getElementsByClassName("remaining")[0].innerHTML = "Troops Remaining for " + this.name + ": " + (this.size - this.finalTotal);
        }
    },
    battleOver:function()  {
        var stage = document.getElementById("battleStage");
        stage.style.display = 'none';
        var msg = document.getElementById("narrator");
        msg.innerHTML = "The battle has ended, but the war has just begun.";
        document.getElementById("submit").style.display = 'block';
    },
    saveWin:function(enemy)  {
        var winnerDeaths = this.finalTotal;
        var loserDeaths = enemy.finalTotal;
        document.getElementById('data').value = "winner=" + this.name + "&loser=" + enemy.name + "&winner_casualties=" + winnerDeaths + "&loser_casualties=" + loserDeaths;
    }
};

usa = new Army("United States", 4000); 
british = new Army("Great Britain", 4000); 