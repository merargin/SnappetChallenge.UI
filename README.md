Snappet Front-end Challenge
============

At [Snappet](http://www.snappet.org), we care about data and we care about code. When we interview for development positions, we want to see code and we want to discuss code. That's why we want candidates to show some work on our challenge. This challenge is not meant to cost you tons of time. A few hours should be enough. You could spend weeks on it, or half an hour. We understand that in 2 hours, you can only do so much. Don't worry about completeness, work on something that works and shows your skills.

### Task requirements

* Create a responsive HTML page to represent the designs `FED-{state}.png` found in the root of this project. The breakpoints are 1280 (desktop), 786 (tablet) and 544 (mobile).
* Use semantic, accessible and valid mark-up.
* Style the page so that it looks like the design. This can be done in CSS, SCSS, LESS – whatever you prefer.
* Write a small piece of JavaScript so that the 'Math grade 5' dropdown shows and hides multiple classes, such as 'Math grade 4' and 'Math Grade 3'.
* Use the icons in the `/assets` folder to help you when styling the page.


## Important considerations

* We work as much as possible with latest technolgies, such as flexboxes or svg fragment identifiers. Your minimal requirements are to make it work in IE10+ and the latest two versions of Chrome, Firefox and Safari. Feel free to use technolgies such as `autoprefixer`.
* We don’t expect candidates to finish all of the styling detailed in the design (although you’ll get mega kudos if you manage to!).  Focus on making the parts that you do work on a good standard that reflects your ability.  We’d rather see a number of the components from the design styled well, than lots of incomplete components.
* Think about how the CSS you write can be used across other pages on the site.  We build our CSS in a component-driven way so show us that you can do that too.
* If you want to use a grid framework to help you out with the base layout, that’s completely fine.  Please don’t use a framework to do the majority of your styling though – we want to see an example of your own CSS, not that you can use a CSS framework.
* We understand you’re developing from a PNG and not a Sketch or Photoshop file – don’t get too hung up on exact colours of text or margins between elements.
* Don’t overcomplicate the JavaScript part of the task.  We just want to see that you know how to write basic JS. Feel free to use jQuery but do not use jQuery libraries such as [select2](https://select2.github.io/).

* How to access
----------------
* npm install
* npm start
* open http://localhost:8001 in browser

# Questions

* What approaches did you use when completing the challenge?  Do you use any CSS methodologies or techniques to help this approach?

  -- I always try to build write a easily extendable code that can be easily understandable by other developers also easy to maintain the code. I used SASS preprocessor and BEM methodology so that it will be easy to maintain the code as well as the class name itself tells the purpose. I decided to create as component based model so I used React, SASS and BEM.


* If you had more time to spend on the challenge, what would you like to add to your solution?
  -- I would add test cases to test whether the combo functionality is working and I would separate SCSS files into multiple files(eg: header, content..)


* What browsers should your solution work in?  What will happen if we test it in older browsers?
  -- It works in all browser as it was created using Babel. It will take care of creating code for older browsers.


* What's your favourite programming language? Why?
  -- My favourite programming language is JavaScript. From the beginning of my career, I am working as a FrontEnd developer and I am working in JavaScript. It is very very easy to develop code as we can write code in browser console. It does not require any compilation like Java. UI is the important part that will attract the users to use it. Using JS, we can do lot of stuffs like Video Streaming, Offline, Animation, Transitions and so on.

Thank you for your time, we look forward to hearing from you!
Thanks to the [JustEat Challenge](https://github.com/justeat/JustEat.Recruitment.UI) for providing inspiration.
