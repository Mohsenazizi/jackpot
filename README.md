to run the project after you clone or download it :

1.npm install

2.npm start

The score calculation is based on the guide file the logic is following the below rules:

1.the rules are based on an array of 3 numbers which is hard coded in conditions.js file

2. to roll the jackpot generating random number and creating the existing state array

3.compare the existing state array and the conditions

---

to see the possible and check the jackpot please go to the UI.js:

change the states array on line 63 'states = []' to the wanted state based on written states

comment the line 68 'states.push(randomNum)'

## for example to see CHERRY center in all reels state should be : [8,8,8]

states:

0 => 3XBAR CENTER

1 => BAR TOP & 3XBAR BOTTOM

2 => BAR CENTER

3 =>2XBAR TOP & BAR BOTTOM

4=>2XBAR CENTER

5=>7 TOP & 2XBAR BOTTOM

6=> 7 CENTER

7=> CHERRY TOP & 7 BOTTOM

8=>CHERRY CENTER

9=>3XBAR TOP & CHERRY BOTTOM
