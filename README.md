# Teatime version 2
A revamped version of my Teatime project. The original can be found [here](https://github.com/janetmndz/teatime) and an even **earlier** version [here](https://codepen.io/janmez/pen/XJgRRV)
# Notes
Teatime was one of the first projects I made when I started learning basic CSS and Javascript. I decided to remake it after a year with a better understanding of Javascript and CSS to see how much I can improve enough

## **Final Version can be seen here:** [Live Version](https://janetmndz.github.io/teatime-v2/) | [CodePen](http://codepen.io/)

**Built using**
- Vanilla JS
- Javascript Date Object
- Sass
# What Changed & Updated
Here is a list of why these changes
## **1. CSS => Sass**
One of the major changes I have made was using Sass to organize and branch out my CSS code

**Sass folder layout**
```
sass
├── _header.sass
├── _mediaqueries.sass
├── _timer.sass
└── styles.sass
```
**styles.sass**
```scss
// ...
@import "mediaqueries"

@import "header"
@import "timer"
```
With Sass it is easier to separate my stylesheets and import them into one single master stylesheet. This is a major improvement from the earlier versions of this project where I just wrote everything in one single style sheet, making it a disorganized mess.
## **2. jQuery => vanillaJS**
Another major change I made was to write the the entire interactivity in plain JS to save the time it takes to load and use a framework for such a small project. The first time I made this tea timer I wasn't confident in my Javascript skills so I opted to use a framework. After a year I am more comfortable using vanilla JS and functional programming.


In my earlier version of the timer feature, I made a separate array in my JS script to hold the tea timer information and had to loop through the HTML `id` names and find a match to the array `name` key

**HTML**
```html
<!--Tea Time Version 1-->

<div class="teatime-hold">
    <div class="tea-selection" id="white">
        <!-- ... -->
    </div>
    <div class="tea-selection" id="green">
        <!-- ... -->
    </div>
    <div class="tea-selection" id="black">
        <!-- ... -->
    </div>
    <div class="tea-selection" id="darjeeling">
        <!-- ... -->
    </div>
    <div class="tea-selection" id="oolong">
        <!-- ... -->
    </div>
    <div class="tea-selection" id="prueh">
        <!-- ... -->
    </div>
    <div class="tea-selection" id="herbal">
        <!-- ... -->
    </div>
    <div class="tea-selection" id="roobios">
        <!-- ... -->
    </div>
    <div class="tea-selection" id="mate">
        <!-- ... -->
    </div>
</div>
```
**Javascript / jQuery**
```javascript
/*Tea Time Version 1*/

var tealist = [
		{'name':'white','time':1},
		{'name':'green','time':2},
		{'name':'black','time':3},
		{'name':'darjeeling','time':3},
		{'name':'oolong','time':3},
		{'name':'prueh','time':4},
		{'name':'herbal','time':5},
		{'name':'roobios','time':5},
		{'name':'mate','time':6} ];

$('.tea-selection').click(function(){
		teatime_startup($(this).attr('id'));
		//...
});

function teatime_startup (tea_id) {
    //...
    
    var result = $.grep(tealist,function(e){
        return e.name == tea_id;
    });
    
    //...
}
```
While this technically works just fine, it is pretty redundant code. So, in an attempt to lessen the hoops to jump through, in my second version I used a `data-` attribute in my HTML to make it simpler to run my JS script.

**HTML**
```html
<!--Tea Time Version 2-->

<div class="teatime_container">
    <div class="tea_item tea-bl" data-time="180">
        <!-- ... -->
    </div>
    <div class="tea_item tea-gr" data-time="120">
        <!-- ... -->
    </div>
    <div class="tea_item tea-wh" data-time="60">
        <!-- ... -->
    </div>
    <div class="tea_item tea-ro" data-time="300">
        <!-- ... -->
    </div>
    <div class="tea_item tea-ol" data-time="180">
        <!-- ... -->
    </div>
    <div class="tea_item tea-hr" data-time="300">
        <!-- ... -->
    </div>
</div>
```
**Javascript**
```javascript
/*Tea Time Version 2*/

const teas = document.querySelectorAll(".tea_item");

function clicked(){
    //...
    setTimer(this.dataset.time)
}
//...

teas.forEach(tea => tea.addEventListener("click", clicked));
```
It's obvious how simpler and less lines of code this new version uses and how I didn't need to rely on on jQuery for this simple aspect.
## **3. Accessibility Improvements**
**Version 1**
![Lighthouse accessibility grade of 43/100](\images\version1-lighthouse.png)
**Version 2**
![Lighthouse accessibility grade of 100/100](\images\version2-lighthouse.png)

One of the most overlooked mistake I make when I make a project is how I don't pay attention to accessibility features when I should. 

It is often something I can simply improve on by just adding a bit more code and fixing the hierarchy of my HTML, making sure my color contrasts is enough and **not** removing the default outline styles.

**HTML**
```HTML
<div class="teatime_container">
                <div class="tea_item tea-bl" role="button" tabindex="0" aria-pressed="false" aria-label="Black tea" data-time="180">
                    <!-- ... -->
                </div>
                <div class="tea_item tea-gr" role="button" tabindex="0" aria-pressed="false" aria-label="Green Tea" data-time="120">
                    <!-- ... -->
                </div>
                <div class="tea_item tea-wh" role="button" tabindex="0" aria-pressed="false" aria-label="White Tea" data-time="60">
                    <!-- ... -->
                </div>
                <div class="tea_item tea-ro" role="button" tabindex="0" aria-pressed="false" aria-label="Roobios Tea" data-time="300">
                    <!-- ... -->
                </div>
                <div class="tea_item tea-ol" role="button" tabindex="0" aria-pressed="false" aria-label="Oolong Tea" data-time="180">
                    <!-- ... -->
                </div>
                <div class="tea_item tea-hr" role="button" tabindex="0" aria-pressed="false" aria-label="Herbal Tea" data-time="300">
                    <!-- ... -->
                </div>
            </div>
            <div class="teatime_timer">
                <span class="close" role="button" tabindex="-1" aria-pressed="false" aria-label="Close" ><i class="fa fa-times"></i></i></span>
                <!-- ... -->
            </div>
```
**CSS**
```scss
*:focus
    outline: 2px solid #57A773
```
**Colorable results**
![Color Contrast results](/images/version2-contrast.png)

# Resources
- [Sass Basics](http://sass-lang.com/guide)
- [Exploring the Javascript Date Object](https://alligator.io/js/date-object/)
- [Colorable by jxnblk](https://github.com/jxnblk/colorable)
