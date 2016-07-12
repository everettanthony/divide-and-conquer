# Divide &amp; Conquer
A Simple PHP &amp; JavaScript Army Battle Game in the browser. Save results to the database when the battle is over.

## Overview
This is a simple battle game for the browser written in plain vanilla JavaScript and PHP. No JS libraries were allowed.

You begin this game by pressing the **Begin Battle** button, which will kick off the battle between two pre-set armies. One army's fighting will be controlled by the user, while the enemy's fighting will be automatically run by the code. In this example, the user's army is named the **United States**. The enemy army is **Great Britain**. When the battle begins, the first attack wave information is displayed on the page, and a button will prompt the user to attack the enemy. When the attack button is pressed, the enemy will prepare a counter attack and the results of that attack will be displayed on the page. The user is asked to strike again. Both sides repeat this until one of them loses all of their troops. When the battle ends, the user is prompted to save the results of the battle. The results saved are the following: date of the battle, battle winner, battle loser, winner total casualties, and loser total casualties.

## How It Works
At the moment, each side is assigned a set of battle tactics that are assigned a variety of strengths. For example, one cavalry attack may come with a strenth to take out 50 enemy troops, while a cannon strike can knock out 200 troops. The game code will randomly select which battle tactic to use during each attack. As the game progresses, each side's troop count is adjusted as the battle damages take their toll. When one side loses all troops, the other side wins. 

## Things To Do
This was quickly thrown together, so the game is limited in functionality. I'd like to continue building on this with new ideas as they come along, especially when it comes to adding game play that requires more skill. Below is a list of updates I plan to make to this app:
1. Improve the UI so the overall look and feel is more interesting.
2. Add a scoreboard at the top that updates battle stats as the game progresses. 
3. Allow the user to name both Armies and set troop count from the browser prior to starting the game.
4. Come up with features that will allow the user to improve the strength and capabilities of the Army to be used in the game. 
5. Add ability for user to choose one of a variety of tactics per attack, and counter attacks will vary based on selection.
6. Add interesting images to the game based on what tactics the user selects for each attack.
7. Create a statistics page that displays the history of the user's battles. 
