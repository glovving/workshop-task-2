# Fa-250-Workshop-2
## Simple crying animation using extra functions.
link to website -> (https://glovving.github.io/workshop-task-2/)

## Goals for this workshop:
- Try using an IDE running locally on your own computer, rather than the p5.js web editor. VSCodium or VSCode are recommended. If you use  VSCodium, see this workaround to install the p5.vscode extensionLinks to an external site. and use this file Download this file(you can install the Live Preview extension through the application's extension manager). For VSCode, you can install both extensions from the application's extension manager.
- Make a p5.js sketch using the setTimeout and setInterval functions.
- Experiment with at least one new item from the from the p5.js documentationLinks to an external site..
- Create a GitHub loginLinks to an external site., make repositories for your three p5.js sketches (for workshop tasks 0, 1 and 2), and publish these projects as webpages using GitHub pages. Include a README file in each repository with a link to the webpage. Use the README files to document your work clearly.
Post a link to your GitHub account on the course discussion board on Canvas.

## Plan:
I wanted to create an interactive sketch with these capabilities:
- event triggered by mouse press
- event triggered by time parameter

I decided to create a sketch where the user could make an angel character cry.

## Writing the sketch:

### Drawing the angel
I first began by building my 'angel' character, for this I wrote a function that would draw the shapes I wanted:

<img width="263" alt="angel_body" src="https://github.com/user-attachments/assets/b92afb8d-6afb-4df7-9aa1-be69bf05455a" />

Which looked like this:

<img width="229" alt="theangel" src="https://github.com/user-attachments/assets/f6cb92df-0715-422a-888a-d229357a4a78" />

### Drawing the tear and heart
I wrote the functions + code that would create the 'tear' animation:

This tears() function draws the tear:

<img width="115" alt="angel_tears" src="https://github.com/user-attachments/assets/3af10dd0-7869-44fa-9596-17ca9b3d893e" />

And the movetear() function moved the tear drawing down the y axis until it gets to the end position which is written in the tears() function, once it reaches this point it resets to the first point.

<img width="270" alt="tearmove" src="https://github.com/user-attachments/assets/83bf9971-cee2-442a-8767-461ffbb5d40a" />

Tearmovement is written in setup, where using the setInterval function it calls the movetear() function every 1/10th of a second.

<img width="261" alt="interval" src="https://github.com/user-attachments/assets/ca94edfd-855e-441a-b422-975264a9c318" />

I also created a hearts() function which would print a text representation of a broken heart like this -> </3 

<img width="155" alt="heart" src="https://github.com/user-attachments/assets/bbdc701d-706f-4cf6-84bc-24c3fc36e219" />

### Putting everything together:

I created a global angelpressed variable, and a heartbroken variable, both set to false..
I also wrote mousePressed() function which toggled angelpressed var. to true upon the user pressing the screen, and the heartbroken var. to true once the 5 seconds had passed using the setTimeout() function.

<img width="211" alt="time" src="https://github.com/user-attachments/assets/b09ea6c6-d0ef-42dc-9368-25a125793106" />

Within the draw function I wrote some if statements that would call the angel(), tears(), and hearts() function when the boolean flags turned true.

<img width="179" alt="draw" src="https://github.com/user-attachments/assets/24703cd7-3ed5-4cad-bb80-8031a9162137" />

I also added a words() function which is called before any event which instructs the user to click the screen:

<img width="281" alt="wordsvis" src="https://github.com/user-attachments/assets/64fc4c22-0316-43ba-a892-48bfb999ccae" />
<img width="249" alt="words" src="https://github.com/user-attachments/assets/91c5e148-ff98-4877-9de7-0ea06ee8f8c5" />

## Completed Sketch

Here is how my sketch looks - 
Before I have clicked:

<img width="281" alt="wordsvis" src="https://github.com/user-attachments/assets/64fc4c22-0316-43ba-a892-48bfb999ccae" />

After I have clicked:

<img width="285" alt="crycry" src="https://github.com/user-attachments/assets/2f7648be-0d7c-4c1c-96d3-ad5ad5a4e46a" />

And after the heartbroken() function is called:

<img width="287" alt="heartt" src="https://github.com/user-attachments/assets/50b08be2-a2a1-476c-b889-36c1d91c5e47" />

## Reflection : 
I primarily used vsCode for this sketch, though I did use the p5.js web editor for making the heart in the end.
I struggled a lot with this sketch, especially with figuring out the newly introduced functions, and ended up using a few boolean variables to make things easier.

I'm mostly happy with the result as it is interactive and able to tell a sort of story unlike the more basic shapes of my previous sketches.
I would like to become proficient enough to create more complex sketches more visually and in terms of interaction.

I did use chatGPT to help me place my setInterval and setTimeout functions as I had a lot of trouble with the program glitching or elements just not showing on the canvas due to misplacing functions.
