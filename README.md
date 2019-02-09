# “Simon Says” project by Alex Thirlwell

This JavaScript application is based on the 80’s classic memory game “Simon Says”. The game has been deliberately styled to replicate the original 80’s game and gives the user a significant feeling of nostalgia. To use the game, the user must press “POWER” and the slider will turn green and move to show the game is “ON”. Next, the user must choose whether they want to play in “EASY” or “HARD” mode by pressing the slider. Once pressed, the button will slide and turn red for “HARD”, or green for “EASY”. To start the game, the user must press the button labelled “START”, this will cause the button to indent and the game will create the first colour sequence. The game will go through the process of showing the user coloured lights in a random sequence, the user must then repeat the sequence without making any mistakes. To enter a colour sequence, the user must click on the coloured light buttons that surround the “Game Control Panel”. Each time the user correctly repeats the sequence of coloured lights, one more light will be added to the end of the sequence to enable the user to progress through the game’s 20 levels. The “Level Display” shows the level the user has reached by displaying the numbers 1-20. This means that to complete the game, the user must correctly remember a sequence of 20 coloured lights.

If the user chooses to play the game on “EASY” mode, the game will repeat the same level when the user gets the sequence wrong, therefore giving the user unlimited chances to see the colour sequence and progress to the next level by correctly remembering the sequence. Alternatively, in “HARD” mode, the user will have to start the game again from level 1, every time they fail to repeat a sequence correctly. 

## UX

For this project, I identified three user stories, each involving a hypothetical user who represented one of three different demographics, namely, adults, children and developers.

### User One- a middle-aged person who used the original “Simon Says” game in the 1980’s

This user will be someone who wants to play “Simon Says” for a sense of nostalgia. They will be looking for an online game that is mobile friendly and is similar in style to the original classic game. They will want the game to be intuitive and as close to the original as possible. 

I met this user’s needs by developing the game in line with the style and feel of the original game. The “Game Control Panel” format, the colours used and the style of the buttons were all considered to make sure the game was consistent with the original. When it came to digitising the game, I was able to be flexible with some of these details, such as the button and slider styles, and still keep to the original style of the game. 

### User Two- a child who wants to play a memory-based game

This user is a child aged between 4 and 13 who wants to play a memory-based game. They will want it to be challenging and competitive. They will be interested in how they can reach the highest level possible and will likely want to compete against their friends to see who can reach the highest level. They will not be concerned with how closely styled my game is to the original “Simon Says” game but they will want a game that is easy-to-use and quick to play.

I met this user’s needs by adding bold, brightly coloured light buttons that will be visually engaging for a child. I added a “Level Tracker”  to the “Game Control Panel”  to make the game more competitive and encourage children to track the highest level they could achieve and then compare this achievement to their friends. The easy to use “ Power Slider” and “Mode Slider” make this game accessible to children as they are intuitive. The overall layout of the “Game Control Panel” is simple and easy to understand,making it child-friendly.

### User Three- a developer interested in re-creating a memory-based game or other retro game

This user will be interested in how the game works, how easy it is to recreate and how it has been styled to look like the 80’s classic “Simon Says” game. They will want easy access to the technologies behind the game and lots of GitHub commits to show how the game was built and adapted. It will also be useful for this user to see how I fixed any bugs associated with the game.

This user’s needs were met by ensuring that commits were created at every stage of development to show the development process. By following the additions, a developer could see the thought process behind each new piece of functionality and how it was implemented. They can also see the types of issues that were experienced and the methods that were used to resolve them.

### The design process

I designed this project using the wireframes available here: https://drive.google.com/open?id=1_z-7FQekPYfCVtCopU5agaScTGNf4iJk

All of the features and design elements referred to in this document correspond with the annotations used on the wireframes. This was done deliberately to make my design and development process easy to understand and will go some way to meeting user three’s needs.

From the outset, there were a few different design decisions that had to be considered. Four coloured lights (red, blue, yellow and green) were used as they resembled the original “Simon Says” game and therefore created a nostalgic feel for user one. 

The next decision was related to  the style of button that should be used on the “Game Control Panel”.  The design options I considered are illustrated in the wireframe document named “Button Styles”.

The first button design option I focused on, was a  basic “tick box”. There would be one tick box labelled “ON” which would be checked when the game was on and one tick box labelled “HARD” which would set the game into the “HARD”mode when it was checked. This simplistic control system was easy to code but did not meet user one, two or three’s needs as it did not replicate the original game style and was not visually engaging.

To overcome these issues, I chose the “Slider A” design. This provides a “real-feel” retro option for the “Power Slider” and therefore satisfies user one’s needs and still remains an intuitive option for the requirements of users two and three. Initially, for my “Basic Design V.1” I decided to use the “Slider A” design for both the “Power Slider” and “Mode Slider”. I initially thought this would work well as both sliders would be designed to look the same and therefore the design would be consistent. However, once I tested both buttons as “Slider A” designs, I received negative user feedback about the use of the “Slider A” design for the “Mode Slider” This process is detailed further in the “Testing” section of this document.

Once I had decided the types of sliders I was going to use for the “POWER” and mode features, I needed to decide how I would fit them into the project. As you can see on the “Game Control Panel Designs” wireframe, I had 3 basic concepts for how the “Game Control Panel” could be laid out. With each layout, there were positives and negatives, and the ultimate decision came down to how I wanted users to interact with the game.

“Game Control Panel” design “Option One” emphasised the problems that would arise from opting for a simplistic design. This design forces all of the elements of the “Game Control Panel”  onto the same line, which would also provide its own stylistic problems. As this design was completely unsuitable for the “Power Slider” and “Mode Slider”,  I made the decision to develop option two as this layout allowed them to be clearly separated, rather than forcing them to be tight together within the “Control Panel”. After completing development and testing “Basic Design V.1” I decided to create the game using control panel design “Option 3”, as seen on the “Control Panel Designs” wireframe, because this design enabled the “Mode Slider” and “Power Slider”  to be styled the same way and fit into the control panel neatly allowing  room to add a “START” button. More information about how this decision came about can be found in the “Testing” section of this document.

## Features

### Current features

Lights – these were deliberately chosen to replicate the original game and were set out in the same configuration to fully capitalise on the nostalgia that user one would feel when using my application. The brightly coloured lights also make the game visually engaging to children like user two.

“Power Slider” – this easy-to-use slider was chosen to replicate the original game, satisfying user one, and it is also intuitive and child-friendly, which satisfies the needs of user two. 

“Start Button” – the “push button” style of the  “START”  button helps create nostalgia by emulating the 80’s retro style of the original game, thus meeting the needs of user one. It also provides a clean and intuitive experience which caters for user two by making the game easy-to-use and child-friendly.

“Mode Slider” – this allows users to choose between “EASY” and “HARD” mode. “EASY” mode will let the user keep retrying levels until they reach the end of the game and “HARD” mode will restart the game every time the user incorrectly repeats the sequence. This was particularly aimed at user two as it creates two modes in which users can compete. It also helps create nostalgia by emulating the 80’s retro style of the original game, thus meeting the needs of user one.

“Level Display” - a clear display to show users which level they have reached, the number on the display also corresponds to how many lights will flash at each level.  This helps the user track the current level they are on and particularly helps user two as they can track their high scores.  

The classic design elements mentioned above also satisfies the needs of user three who can see, via my GitHub commits, exactly how I implemented the classic design into the application and use the same process to create their own version of the game.

### Features to add
I could add an extra element of difficulty to the “HARD” mode by making the lights flash  faster, this would be done within the "intervalID" section, reducing the amount of time between each light.

I could also put in place a way that the user can select the level they start from, this would allow the user to start from level 1 or any other level they choose. 

I would also like to add a colour-blind friendly mode where orange and purple lights are used instead of red and green, and the user  has the option to turn this colour-blind friendly mode on and off. The orange and purple lights would be more easily distinguishable from the red and green lights for a user who is colour-blind. This disability-friendly version of the game could be extended by adding sounds when each light illuminates in order to allow blind users to enjoy the game. 

## Technologies used

This project uses a mixture of HTML, CSS and JavaScript technologies.

HTML is used to control the placement of page elements and help  form the structure of the “Simon Says” console. This uses the “class” and “id” selectors  to enable the elements to be effectively styled by the CSS and also enable the JavaScript to add interactivity to the game. The majority of the tags used in this project are semantic “div” elements because this allows for the greatest design flexibility.

CSS is used to add styling to the game and to enable the light buttons to replicate the style of the original game. Using CSS, I was also able to create interesting sliders that are based on customised checkboxes. I styled each section using similar logic so that the game was symmetrical and well proportioned. It is also useful to make sure the same styling is used across the application to make sure it is consistent. 

Javascript is used to add the dynamic elements to the application, such as the sequencing which is based on picking a number between 0-1 “(Math.random())”, multiplying that by 4 “(* 4)”, adding one and then rounding the number to the nearest integer ”(Math.floor)”. The Javascript then runs this algorithm 20 times to match the level requirements. 

This is seen as:  for (var i = 0; i < 20; i++) {  order.push(Math.floor(Math.random() * 4) + 1);  }

Each light button has its own colour and number assigned to it so that when the Javascript produces a number, the user can see the corresponding coloured light, flash. After each level, one more light will be added to the end of the sequence to enable the user to progress to the next level. This is done by the Javascript producing a pre-set sequence of twenty random numbers which correspond to a sequence of twenty random lights. Each time the user successfully repeats the sequence. by clicking on the correct lights in the correct order, the next number in the pre-set Javascript sequence is revealed and another light is added on to the sequence as the user moves up the game’s levels. The Javascript will also track when the game is “ON”, in “HARD” or “EASY” mode and the current level so that the game will accurately represent the sequence the user needs to input.

## Testing

The main method I used to test my application was through manual, “in-browser” testing. From the start of the project, I was implementing the process of browser testing and updating GitHub when I was happy that the right styling had been achieved. The first commit, for example, was the basic outline of the game to show a circle, split into 4 segments. The second commit, applied the colouring to each segment, and so on until I had the whole game completed and was satisfied that it worked properly. Taking this approach allowed me to consistently refer back to the user stories and design, and  redesign, the app to meet the needs detailed in the user stories. The design, style and the level of detail added into the commits, were all added with the user stories in mind, specifically user three who would need access to the relevant code at each stage of the game’s development in order to meet their need to develop retro games.

To test that the algorithm for the logic of the game worked, I used "console.log(order);" so that the console within the browser would print the sequence of numbers the computer was going to follow. This was done to ensure there were no “0 statements” and that the numbers were between 1 and 4 so that the correct light would flash when the number was produced. The logic of the game was outlined within the separate commits and this enables user three to understand how to recreate the game logic.

At this point, there would be occasions where the browser would lose the sequence and start flashing random lights. Once I had implemented the user controls this stopped. Before implementing the user controls, the computer would not have a reason to pause its sequence and, as a result, would just run through its pre-set sequence of numbers, causing flashes to occur without any user input. Once the user input had been added in, the game had a greater degree of control as the code was forced to stop so that the user could take their turn. 

Through further stress testing of the functionality of the application, I found that there was an issue tied to the fact the “Power Slider”was also acting as a start button. This meant that the application would become unreliable after a few clicks of the “Power Slider”. I remedied this bug by adding a “START” button. This reduced the instability of the game, dramatically. I was able to document the fix to help user three who might experience this issue when they recreate the game. The fix will also help engage users one and two as it ensures the game runs smoothly and makes it clear how the game starts. The “START” button was designed with the needs of the users in mind. The button was deliberately designed to have a retro feel to it that gives the sense of actually pressing a physical button which meets the needs of user one. It is also a clear intuitive button that directs the user and attracts the attention of the user which meets the needs of user two. It is a simple button that is appealing to a developer, such as user three, who is looking to replicate a retro-style button.

After extensive manual testing, I discovered two bugs that would result in the game becoming unplayable until the user refreshed the page. These bugs arose when the user repeatedly clicked the “START” button without playing the level, or pressing the wrong light multiple times. I recognised that to solve both of these issues, I needed to limit the amount of interaction the user could have with the application. For the ”START” button issue, I decided to disable the button after it was pressed once, and then enable the button when the game was turned off, allowing the user to access the “START” button when they actually needed it. I took this decision as there was no need for the user to repeatedly press the “START” button. The game is designed to keep running until the user wins or the game is turned off. Therefore disabling the button after the first push would not negatively affect the user’s experience of the application. This change is beneficial to both users one and two as they will both benefit directly from having a game that is fully operational and cannot be broken by mistake. To prevent the user from clicking the wrong light  multiple times, I implemented a system that would create an alert to show the user the level they had reached, and ask them to try again. The benefit of this is that the user is unable to repeatedly press the wrong light, therefore preventing the bug from occurring in the first place. This solution does not impact the user as it allows them to recognise they lost without damaging the game.  It is a particularly useful addition for user two as it gives them a defined endpoint that shows them the exact level they reached, helping satisfy the fact they are looking for a competitive application. User three will benefit greatly from my commits and comments relating to the bugs and their solutions. These materials should give user three a clear understanding of how to resolve different bugs associated with the application.  While there is nothing wrong with the code itself, user behaviour can result in unexpected bugs and problems. For these problems, creative solutions need to be found to ensure the applications and products can run as smoothly as possible.

To ensure that the game would work on different browsers and screen sizes, I played the game locally on Chrome, Mozilla Firefox, IE and on a few mobile devices to see how the application responded to different screen sizes. To ensure the game worked effectively on all browsers and mobile devices, I added the specific styling for each browser into the CSS file( “-moz-” for Mozilla Firefox, and “-webkit-” for IE/edge), as well as putting in place a minimum scale designed to optimise the application for mobile users( <meta name="viewport" content="width=1000, user-scalable=0" />). Once this had been completed, I deployed the application to GitHub pages and Heroku, this meets the needs of user three who will need to optimise their own game when they develop their own version of the “Simon Says” game or a similar retro game.

Once the game had been deployed, I asked my friends and family to play the game and noted down their feedback. This user feedback included a comment that the “Slider A” design for the “Mode Slider” was confusing as it worked in a different way to the “Power Slider”. The “Power Slider” would display the game’s current state, so when the game was “OFF” the word that was displayed was “OFF”. With the “Mode Slider”, the word displayed was the opposite to its current state, so when in “EASY” mode the word that was displayed was “HARD”. As a result, I decided to change the style of the button entirely to add a new element to the project. The final button design I chose was the “Slider B” style from the wireframe document entitled “Button Styles”.  The new style matched the logic of the “Power Slider” by highlighting the current state of the game. This change helps all of the users. User one and two gain the benefit of a clearer, visually engaging design that allows them to understand the design and logic of the game more intuitively, while again, having an emphasis on a retro sliding button as it gives the sense of physically sliding the toggle to turn on “HARD” mode. For user three it helps solve a problem that they may have encountered in their own development of the game and enables them to understand a different perspective on the controls for the game’s modes. 

In testing “Slider B”, I discovered an  issue that resulted in it being unusable on IE and Edge browsers, this was due to the “clip-path” element not being supported in these browsers. As a result I decided to make changes to “Slider A” in response to the user feedback and add that to a separate branch on GitHub so that it could be deployed on Heroku. I changed the word order and colour of the button to reflect the logic of the “Power Slider” so that IE and Edge users could still use the application and get a sense of nostalgia from the “Mode Slider”. The final version of this slider had “EASY” showing in green, and when the  “Mode Slider”  is clicked, it will change to red and display the word, “HARD”. With the changes to the design, I overcame the issues that users had experienced and provided a flexible application that works across different browsers. For Internet Explorer, I then discovered a further issue. I found that  arrow functions are incompatible with this browser. To remedy this I focused on refactoring the “fix_for_microsoft_browsers”  branch to change all arrow functions into regular functions, so the application would be fully functional on Internet Explorer and Edge.

After further manual testing of these fixes, I found that there is one outstanding bug that needs further investigation. When the user has successfully completed their turn, they are still able to click another light before the computer takes its turn. This will result in the alert appearing but, once this has been closed, the lights will flash quickly, and on the next round, completely lose their sequence causing multiple flashes to go off at the same time. As a way of fixing this bug, or any other that may still be present, I entered a new line  into the “script.js” file, “location.reload()”, attaching it to the “Power Slider” as this would cause the web page to reload. The application then will return to normal, and the user can continue using the application.

I looked into Jasmine as a testing framework but found that this works more suitably with OOP rather than a single page web application that uses event listeners to run the application. There are a range of options for automated testing for JavaScript applications that have similar uses to Jasmine, such as Mocha, Chai and Jest.  I hope to learn how to use these automated test frameworks in my future projects.

## Deployment

GitHub Pages - https://killthedj94.github.io/simon-says-project/ 

Using GitHub's provided system, I was able to pick the branch I wanted to show on a webpage, and deploy it very simply to the dedicated web page displayed above. In this case, the branch that was deployed was the master branch.

Heroku - https://simon-says-project.herokuapp.com/

Internet Explorer/Edge compatible version: https://simon-says-ie.herokuapp.com/ 

I deployed to Heroku to see how the process worked and found that it was not as simple as deploying to GitHub pages. I encountered an issue where Heroku would not recognise the language of the application, as it wasn't recognising the HTML, CSS or JavaScript. Following a tutorial, I found online, I was able to force Heroku into thinking I had created a PHP application so that it could successfully deploy. Using the Cloud9 bash terminal I could easily create the files I needed to do this in Heroku.

I used Heroku to deploy a version of the application that was fully compatible with Internet Explorer and Edge as the updated “Mode Slider” was not able to be optimised for these browsers. I felt that the best way to deal with this was to deploy both versions to enable users to use the application regardless of browser, and still get the best experience possible.

To run the game locally simply download all the files and run the “ index.html” file. There is no difference between the deployed version and the development version as the final version was added to GitHub to be deployed. For both deployed versions the default settings were used to make them viewable.

## Credits

https://gist.github.com/wh1tney/2ad13aa5fbdd83f6a489  - This was the website that was used as a guide on how to deploy my web application to the Heroku platform.

https://paulund.co.uk/how-to-style-a-checkbox-with-css - Using the code for “checkbox three” on the website I found a suitable style for the “Power Slider” and the “Mode Slider”. I changed a few elements to fit the project, such as changing the colours of the text and the dynamic sliders. The scale was smaller than I required so I used the correct elements to scale the sliders up and made sure the text fits into the elements neatly.

https://codemyui.com/toggle-switch-with-lables/ - This is the template I used to design my final “Mode Slider”. I took the basic styling and custom JS, HTML and CSS to implement the button, then changed the styling elements to make it consistent with the rest of my application and integrated the controls into the JS for the button.

https://saruwakakun.com/en/css3-buttons - “Start Button” - Basic styling for the button. I selected this one as it gave an element of pushing the button which added an extra authenticity to the game. I changed the colour and styling of the button to fit into the rest of the application.                               

I was also able to implement some styling options by using Stack Overflow, and other tutorial sites such as SoloLearn, Codeacademy, Freecodecamp and Udacity.

### Media

https://unsplash.com/photos/G96NYl4KJBc - Photo by Samuel Zeller on Unsplash - https://unsplash.com/@samuelzeller. I compressed the image and styled it by setting it to background-repeat:no-repeat to optimise the performance and reduce load times for the image  

### Acknowledgements

https://www.youtube.com/watch?v=n_ec3eowFLQ - Free Code Camps “Simon Says” tutorial

This video inspired my project and acted as a guide to help me understand how best to create the game and the best way to style it. I used the instructions to work through the JavaScript and to understand how it was being applied. Also, this was useful for the browser compatibility options referenced in the CSS. The structure of the project is based on this video I changed the definitions, sizes and styling of a lot of the elements within this video and completely revamped the control panel design. My approach was to listen to the video, try to follow the instructions to replicate the code in the video, then tweak the elements or listen to the explanation and try again. The aim was to learn how to develop the application, not just copy it and claim it as my own. 

