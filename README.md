# Assignment

## Python codes:
This folder contains the following codes in python:
1) Merge sort code
2) Depth First search for Graphs

## TicTacToe:
This folder contains the raw ReactJS app of Tic Tac Toe. You might wanna use 'npm install' before you start the development server( using 'npm start' ).

## A walkthrough of how the application was designed:
* Initially a grid component was made, to replicate the idea of having 9 grids in one big grid. The small grids initially contain a null value( not an empty string ), which is then made responsive by clicking on it( treating it as a clickable span ).
* Then a board component was made to embed 9 of such grids to visualize the model of Tic Tac Toe game. The values and onClick functions in the grid components were passed as props to the Board component.
* Then the board is embedded as a component in a main 'Game' component where other functionalities were developed.
* The possible winning moves array was initialized and useEffect hook was used to re-run the component and check for the winner only whenever the original state i.e., the values in the grid were updated. Multiple states were lifted using useState hook since any other outer function would cause infinite loops when given as a dependency to the useEffect.
* For each user click, we store the state in an array of objects which contain the history of previous state snapshots along with their move number. For this, useReducer hook was used to dispatch the functions of 'Jumping to certain move' and 'Clicking on the grid to make a move'. These two action functions were passed to a reducer function which inturn is passed to useReducer hook. This way, we will make React understand that the multiple states are managed parallely and an updation is needed only when a certain action is ready to be dispatched.
* As the game is being played, the previous history of moves will be displayed and the user(s) can redirect to any certain previous moves as they like.
* This finalizes the tic tac toe game. 
* Now, as an additional feature, the player name form was added and validation was taken care of. Initially we are welcomed with a Player Form where one has to enter the player Names and it would be mandatory to play the game. For this, I have passed props to multiple components in the main App.js file and utilised the feature of passing props through functions from child to parent components.
* In App.js where Player Form, Player Names and Game components were rendered, multiple states were used using useState hook and then given as props to validate and update the state based on user turns and clicks. Ultimately, they are just boolean variables which are managed by React state and are altered whenever the given state changes.
* Note that I have used useRef hook for reading the user Input only when the form was submitted and not with using useState, since it would re-render the component multiple times and there was no need to validate/read input on every keystroke.
* Finally, conditional CSS styling was made to show the turn of each user.

## How does it differ from the ReactJS tutorial?
* The original tutorial was purely based on the concept of Class based components, whereas this application was made using pure Functional components.
* The original tutorial did not have a player name form and validation with multiple states.
* The app displays the player card after the names are entered highlighting their turns.
* UI is designed and reworked with module.css classes.
  *  Highlighting the player name conditionally based on their turns
  *  Adding Reset Board button to refresh the state.

# Here's a demo of how the app works:

https://user-images.githubusercontent.com/44497960/140979638-381f133c-7840-4232-973a-ab730c79919a.mp4



