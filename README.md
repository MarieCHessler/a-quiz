# Animal Quiz

Animal Quiz is a game that aims to test people's knowledge about animals. The game is targeted towards people who want to check what they know about different animals in the world. Animal Quiz will be useful for people in that it is a fun way to test what they know about animals and maybe learn more about them.

A link to the live website can be found [here](https://mariechessler.github.io/a-quiz/), and a link to the repository [here](https://github.com/MarieCHessler/a-quiz).

![Animal Quiz on different screen sizes](assets/images/screens.webp)

<br>

## Table of contents
1. [Design](https://github.com/MarieCHessler/a-quiz#design)
    * [Color Palette](https://github.com/MarieCHessler/a-quiz#color-palette)
    * [Typography](https://github.com/MarieCHessler/a-quiz#typography)
    * [Layout](https://github.com/MarieCHessler/a-quiz#layout)
    * [Wireframes](https://github.com/MarieCHessler/a-quiz#wireframes)

2. [Features](https://github.com/MarieCHessler/a-quiz#features)
    * [Existing features](https://github.com/MarieCHessler/a-quiz#existing-features)
    * [Features for the future](https://github.com/MarieCHessler/a-quiz#features-for-the-future)

3. [Technology used](https://github.com/MarieCHessler/a-quiz#technology-used)

4. [Testing](https://github.com/MarieCHessler/a-quiz#testing)
    * [Validator testing](https://github.com/MarieCHessler/a-quiz#validator-testing)
    * [Manual testing](https://github.com/MarieCHessler/a-quiz#manual-testing)

5. [Bugs](https://github.com/MarieCHessler/a-quiz#bugs)
    * [Fixed bugs](https://github.com/MarieCHessler/a-quiz#fixed-bugs)
    * [Known issues](https://github.com/MarieCHessler/a-quiz#known-issues)

6. [Deployment](https://github.com/MarieCHessler/a-quiz#deployment)
    * [GitHub Pages](https://github.com/MarieCHessler/a-quiz#github-pages)

7. [Credits](https://github.com/MarieCHessler/a-quiz#credits)
    * [Content](https://github.com/MarieCHessler/a-quiz#content)
    * [Media](https://github.com/MarieCHessler/a-quiz#media)
    * [Special thanks to](https://github.com/MarieCHessler/a-quiz#special-thanks-to)

    <br>

    ## Design

    <br>

    ![Animal Quiz 3 color palette](assets/images/color-palette.webp)

    ### Color Palette

    * The game's primary colors are (from left to right) Outer Space Crayola, Laurel Green, and Timberwolf, as seen in the picture above. They were derived using the online tool Coolors, to make sure they complement and contrast each other in a good way.
        * **Outer Space Crayola** is used for headlines and text, as a contrasting background color on buttons, as background hover color for choices and as a hover color for button texts.
        * **Laurel Green** is used as the background color for the general container, and for the body for tablets and mobiles. 
        * **Timberwolf** is used as a contrasting background color for choices, as a background hover color for buttons, and as a hover color for choice texts.
    * The colors are all nuances of green, to mirror nature and enhance the connection with the animal kingdom.

    ### Typography

    * **Cormorant Garamond** is used for headings since it fits with the Q in the image and looks professional. The fallback font is serif.
    * **Raleway** is used for body, scores, choices, and buttons since it is easy to read and complements Cormorant Garamond well. The fallback font is sans serif.
    * Both fonts are from Google Fonts, and a good font pairing according to the site Davey & Crista, a site that focuses on brand strategy and design.

    ### Layout
    
    * The content has been divided into three different pages. This way the quiz page, with the questions, is separated from the end page, where the final score is presented, and the landing page, where you start.
    * For desktop and laptops, the colored background has been limited to the general container, to keep the eyes' focus mid-screen. For tablets and mobiles, the whole background is colored.

    ### Wireframes

    * Wireframes were used to structure the page content for desktop, tablet, and mobile screens. The structure does not vary a lot between the different screens, since the content is kept mid-screen for the game, but margins, image sizes, and font sizes vary.

    <br>

    ![Wireframes for desktop, tablet and mobile](assets/images/wireframes.webp)

    <br>

    ## Features

    The features described below have been implemented for the user to have a pleasant and fun experience, with a game that contains text, images, and buttons that are easy to understand and make the flow hassle-free.

    ### Existing features

    **Landing page**
    * The landing page includes the heading ANIMAL, a quiz image, and a button to start the game.
    * The heading, together with the animals, makes it easy for the user to understand what the quiz is about.
    * The image, consisting of a Q with four animals inside and the letters u, i, and z on the outside, enhances the understanding.
    * The button invites the user to start the game.

    ![Landing page](assets/images/landing-page.webp)

    <br>

    **Quiz page**
    * The quiz page is where the actual game takes place and includes the Q image, a heads-up display with question number and score, the question, three choices, and a button.
    * The Q image helps user recognition.
    * The heads-up display allows the user constant access to information regarding what question he or she is on, how many questions are left, and what score has been accomplished so far.
    * For the user's eyes to easily find the question, it has been placed in the center.
    * The answer choices shift color when the user hovers over them and when they are clicked, to make it easy for the user to follow what has been selected and not. See the middle choice in the image below.
    * Questions and choices are collected from a separate JS file.
    * The button below the choices says Next and invites the user to launch the next question or page.

    ![Quiz page](assets/images/quiz-page.webp)

    <br>

    **Score page**
    * The score page is the end page of the game, where the final score is presented, and the user can choose to start a new game or go back to the landing page.
    * The page includes the heading SCORE, the Q image, a text telling the user he or she scored a certain number out of 10, one button that says Start New Quiz, and one that says Back to Start Page.
    * The layout of the page is similar to that of the landing page, for recognition.
    * The heading makes it clear to the user what is presented on the page.
    * The Q image helps user recognition.
    * For the user's eyes to easily find the result, it has been placed in the center.
    * The buttons below the score text invite the user to choose between starting a new game and returning to the landing page.

    ![Score page](assets/images/score-page.webp)

    <br>

    **Footer section**
    * The footer section is located in the game container on all three pages and includes copyright information.

    ![Footer section](assets/images/footer.webp)
    
    <br>

    ### Features for the future
    * An image connected to each question.
    * Possibility to choose different levels of difficulty.
    * More subjects to choose from.
    * The question is presented like a card that flips and shows the right answer when the user has made his or her choice, for a better learning experience.
    * High score.
    * Layout adjustments for even better UX and design.

    <br>

    ## Technology used

    * **[Convertio](https://convertio.co)** <br>
    Used to covert png files to ico files. 

    * **[Coolors](https://coolors.co)** <br>
    Used to find suitable colors that complement each other.

    * **[CSS](https://www.w3schools.com/css/default.asp)** <br>
    Used for site styling and responsiveness.

    * **[Git](https://git-scm.com/)** <br>
    Used for version control, by using GitHub terminal for git commits and push to GitHub.

    * **[GitHub](https://github.com/)** <br>
    Used to backup and store project code, including changes, and deploy.

    * **[Gitpod](https://www.gitpod.io/)** <br>
    IDE used for programming, editing, and debugging.

    * **[Google Chrome DevTools](https://developer.chrome.com/docs/devtools/)** <br>
    Used for checking responsiveness, trying alternative code solutions, and testing performance, accessibility, best practices, and SEO.

    * **[Google Fonts](https://fonts.google.com)** <br>
    Used to find and import the fonts Raleway and Cormorant Garamond that are used across the site.

    * **[HTML](https://www.w3schools.com/html/)** <br>
    Used for site content and structure.

    * **[JavaScript](https://www.w3schools.com/js/)** <br>
    Used for site behavior and interaction.

    * **[JSHint](https://jshint.com/)** <br>
    Used to validate JavaScript code.

    * **[Grammarly](https://app.grammarly.com)** <br>
    Used for checking spelling and grammar.

    * **[Photoshop](https://www.adobe.com/products/photoshop.html)** <br>
    Used for editing images and illustrations.

    * **[Squoosh](https://squoosh.app)** <br>
    Used to reduce file size in images.

    * **[W3C (Jigsaw) validator](https://jigsaw.w3.org/css-validator/#validate_by_input)** <br>
    Used to validate CSS code.

    * **[W3C validator](https://validator.w3.org/#validate_by_input)** <br>
    Used to validate HTML code

    <br>

    ## Testing
    The site has been tested in validators and manually. Details can be found in the sections below.

    <br>

    ### Validator testing
    * **HTML** <br>
        * No errors or warnings were found on index.html, quiz.html, or score.html when passing through the official [W3C validator](https://validator.w3.org/#validate_by_input).

        <br>
    
    * **CSS** <br>
        * No errors were found on style.css when passing through the official [W3C (Jigsaw) validator](https://jigsaw.w3.org/css-validator/#validate_by_input).
        * One warning was returned, saying "Imported style sheets are not checked in direct input and file upload modes".

        <br>
    
    * **JavaScript** <br>
        * No errors were found on script.js, questions.js or score.js when passing through the linter [JSHint](https://jshint.com/).
        * The following warnings were returned, and are hereby noted:
            * 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
            * 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
            * 'template literal syntax' is only available in ES6 (use 'esversion: 6').
            * 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
        * The following variable came up as undefined in script.js (where it is used), and as unused in questions.js (where it is defined):
            * questions

       <br>
    
    ### Manual testing
    * **The following has been checked manually on different devices and in different browsers:**
        * Links and buttons work properly.
        * Question number and score are updated for each new question.
        * Hover effect and selection color work for buttons and choices.
        * A new question appears when the Next button is clicked.
        * Correct choices are presented with each new question.
        * Final score is presented when the last question has been answered.
        * Responsiveness works and no content moves in unexpected ways when the screen size is changed.

    <br>

    * **The following devices and browsers have been used:**
        * iMac 27"
        * MacBook Pro 13"
        * iPad generation 6
        * iPhone XR and 11
        * HP ProBook
        * Safari - Version 15.1 (17612.2.9.1.20) and 15.2 (17612.3.6.1.6)
        * Chrome - Version 97.0.4692.71 (Official version) (x86_64)
        * Edge - Version 97.0.1072.55 (Official version) (64 bit)

    <br>

    * **The site's responsiveness has been checked in Google Chrome DevTools throughout the project.**

    <br>

    * **The site has been run in Lighthouse** (part of Google Chrome DevTools)
        * Results for the landing page, quiz page and score page on mobile and desktop can be found below.

    ![Lighthouse results for mobile and desktop](assets/images/lighthouse.webp)

    * **The reasons the score is less than 100% on Performance on mobile are the following, and can be addressed if needed at a later stage:**
        * Serve static assets with an efficient cache policy - only for quiz page.
        * Avoid chaining critical requests - for all three pages.
        * Keep request counts low and transfer sizes small - for all three pages.
        * Largest Contentful Paint element - for all three pages.
        * Avoid large layout shifts - for all three pages.
        * Avoid long main-thread tasks - for all three pages.

<br>

## Bugs
The bugs reported in the following section are a selection of the most prominent ones, that needed extra consideration and work.

### Fixed bugs
* **Bug:** No change in color when selected choice is clicked. <br>
    **Fix:** Add .choice:focus to the CSS.

<br>

* **Bug:** Too few of the questions are presented and the wrong scores are shown. <br>
    **Fix:** Remove nextQuestion from within the function and add a button called Next.

<br>

* **Bug:** The final score is not showing on the score page. <br>
    **Fix:** Use local storage.

<br>

* **Bug:** Rounded corners on larger screens are not working with the footer. <br>
    **Fix:** Include the footer in the general container.

<br>

* **Bug:** The image is not changing size. <br>
    **Fix:** Make the image responsive by setting the max-width to 100% and the height to auto.

<br>

* **Bug:** The color for the selected choice and the Next button stopped working. <br>
    **Fix:** Replace .choice:focus in CSS with a new class, and a related function that handles selection.

<br>

### Known issues
* No other known remaining bugs.

<br>

## Deployment

### GitHub Pages
The site was deployed to GitHub pages by following these steps: <br>

* Log in to GitHub.
* Go to the GitHub repository.
* Click on Settings.
* Scroll down to the GitHub Pages section and click on "Check it out here!".
* Under Source, click the arrow and choose Branch: main.
* After a little while the page is automatically refreshed and you get a message on green background, saying "Your site is published at: ...", with a link to your site, showing that your deployment was successful.

The live link can be found here: https://mariechessler.github.io/a-quiz/

<br>

## Credits

The references mentioned in this section have been used for content and media. Special thanks can be found at the end.

### Content
* **Inspiration on how to create a quiz** <br>
    Title: Create a Multiple Choice Quiz App Using JavaScript <br>
    Author: *Code Explained* <br>
    Date: Oct 18, 2018 <br>
    URL: https://www.youtube.com/watch?v=49pYIMygIcU

<br>

* **Help to solve the problem with the color not working properly for the selected choice and the Next button** <br>
    Title: Solution to color and selection issue <br>
    Author: *Reuben Ferrante*, mentor <br>
    Date: Jan 10, 2022 <br>
    Mentor tip: Remove .choice:focus from CSS, and create a new class in combination with a function that handles the color and selection issues.

<br>

* **Info on how to rearrange code for a better flow** <br>
    Title: How to arrange code <br>
    Author: *Reuben Ferrante*, mentor <br>
    Date: Jan 10, 2022 <br>
    Mentor tip: Move constants from the question file to the script file, move part of the code in the script file to the new function created to fix the color and selection issues, and add another event listener to get the next question instead of using onclick in HTML.

<br>

* **Help with an issue connected to too few questions being presented and the wrong score showing** <br>
    Title: Solution to question and score issue <br>
    Author: *Dave Horrocks*, Slack community <br>
    Date: Dec 21, 2021 <br>
    Author tip: getNextQuestion is being called in a loop, which is causing the problem.

<br>

* **Questions for quiz** <br>
    Title: Animal questions <br>
    Author: *Open Trivia* <br>
    Date: Dec 1, 2021 <br>
    URL: https://opentdb.com/api.php?amount=50&category=27&type=multiple

<br>

* **Inspiration on how to create a quiz** <br>
    Title: Build a Quiz App with HTML, CSS, and JavaScript <br>
    Author: *James Q Quick* <br>
    Date: Feb 18, 2019 <br>
    URL: https://www.youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx

<br>

* **Solution to how to change the color on a clicked choice** <br>
    Title: How to keep :active css style after click a button <br>
    Author: *SW4* <br>
    Date: Jul 2, 2015 <br>
    URL: https://stackoverflow.com/questions/31178653/how-to-keep-active-css-style-after-click-a-button

<br>

* **How to make an image responsive** <br>
    Title: CSS Styling Images <br>
    Author: *W3Schools* <br>
    Date: 2021 <br>
    URL: https://www.w3schools.com/css/css3_images.asp

<br>

* **How to make text uppercase** <br>
    Title: CSS text-transform Property <br>
    Author: *W3Schools* <br>
    Date: 2021 <br>
    URL: https://www.w3schools.com/cssref/pr_text_text-transform.asp

<br>

* **Inspiration on how to move the final score to the score page** <br>
    Title: Web Storage API <br>
    Author: *W3Schools* <br>
    Date: 2021 <br>
    URL: https://www.w3schools.com/js/js_api_web_storage.asp

<br>

* **Inspiration on how to create a quiz** <br>
    Title: Creating a Basic Quiz - JavaScript Tutorial <br>
    Author: *Zenva* <br>
    Date: Dec 15, 2020 <br>
    URL: https://www.youtube.com/watch?v=RswgVWKJRLM

<br>

### Media
* **Image of butterfly** <br>
    Site: Pexels <br>
    Creator: *Pavel H??jek* <br>
    URL: https://www.pexels.com/photo/colorful-butterfly-on-stem-of-dry-plant-4275360/ <br>
    Image: pexels-pavel-hA????jek-4275360.jpg 

<br>

* **Image of sea horse** <br>
    Site: Pexels <br>
    Creator: *Sergiu Iacob* <br>
    URL: https://www.pexels.com/photo/close-up-shot-of-a-seahorse-7868382/ <br>
    Image: pexels-sergiu-iacob-7868382.jpg 

<br>

* **Image of hippo** <br>
    Site: Pexels <br>
    Creator: *Pixabay* <br>
    URL: https://www.pexels.com/photo/hippos-in-water-46540/ <br>
    Image: pexels-pixabay-46540.jpg 

<br>

* **Image of cheetah** <br>
    Site: Pexels <br>
    Creator: *Antony Trivet* <br>
    URL: https://www.pexels.com/photo/young-cheetah-walking-in-savanna-6057031/ <br>
    Image: pexels-antony-trivet-6057031.jpg 

<br>

### Special thanks to

* [Code Explained](https://www.codeexplained.dev), for excellent tutorials and lessons, that are easy to understand.

* [Code Institute](https://codeinstitute.net/), for great instructions.

* [CSS Tricks](https://css-tricks.com), for useful tips and tricks.

* Reuben Ferrante, Code Institute mentor, for his guidance and help.

* [Google](https://www.google.com/), for providing the very helpful [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/).

* [Mozilla](https://developer.mozilla.org/), for useful tips and tricks.

* [Pexels](https://www.pexels.com/), for providing a wide range of great pictures for free.

* [James Q Quick](https://www.jamesqquick.com), for excellent tutorials and lessons, that are easy to understand.

* [Stack Overflow](https://stackoverflow.com), for useful tips and tricks.

* [W3Scools](https://www.w3schools.com/), for excellent explanations and examples, that are easy to understand.

* [Zenva](https://academy.zenva.com), for excellent tutorials and lessons, that are easy to understand.