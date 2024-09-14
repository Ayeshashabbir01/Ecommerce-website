# Ecommerce-website


# `Steps:`
1. Go to the projects directory in your local system and then RUN the command ls in your `git bash` terminal it will show you all the files in that directory.
2. Run the command `cd Document` to safe all the files in that folder.
3. Run the command `ls` to show the all the lists of the files.
4. Run the command `mkdir data-3` to make a folder named as `data-3` and again run the ls command to show all the list of the files.
5. Run the `cd data-3` command to change the directory and again run the ls command to show the list of files.
6. Run the command git clone` https://github.com/Ayeshashabbir01/Ecommerce-website.git` and paste the url of our project to clone the repository.
7. Run the command `ls` to show the repository.
8. Run the command `cd Ecommerce-website` to go to the  Ecommerce-website.
9. Run the command `code .` to open in the visual studio code.
10. Run the command `python -m venv myenv` to create the virtual environment in the name of myenv.
11. Run the command `source myenv/Scripts/activate` to activate the envionment.
12. Run the command `python -m django version` to check the version of the django .
13. Run the command `pip install django` to install the django in the environment and again check the version of django.
14. Run the command ` django-admin startproject Ecommerce ` and create name core project in the studdy_buddy repository.
15. Run the command cd `Ecommerce` to go to the core and also run the ls command to show the all files in the core folder.
16. Run the command python manage.py runserver to run the server application.
17. Run the command cd../ to one back to the folder.And run the `ls -a ` command to show all the files including the .gitignore.
18. Run the command `git add .`to add all changes in the current directories. And `git commit`to commit the message "Steps to initiate Ecommerce website".
19. Run the command `git push` to push to the github.

# `Creating a web project`
Creating a basic eCommerce website using `HTML, CSS, and JavaScript` involves multiple components such as `navigation, product display, shopping cart, and checkout functionality`.
Below is a simple structure for an eCommerce website with product `listings, a cart feature, and basic styling`.

# `Steps:`
1. Import the "Lato" font.
2. Create a navigation bar with a logo, search bar, and "Limited offer!" banner.
3. Display a logo using an image tag.
4. Include a search bar with an input field and search icon.
5. Highlight a "Limited offer!" using a `<span>` tag.
6. List product categories for navigation in the bottom section.

```py
# Ecommerce/index.html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Ash Store</title>
</head>
<body>
    <nav>
        <div class="navTop">
            <div class="navItem">
                <img src="./img/sneakers.png" alt="Sneakers Logo">
            </div>
            <div class="navItem">
            <div class="search">
                <input type="text" placeholder="search..." class="searchInput">
                <img src="./img/search.png" width="20" height="20" alt="Search Icon" class="searchIcon">
            </div>
        </div>
            <div class="navItem">
                <span class="limitedoffer">Limited offer!</span>
            </div>
        </div>
        <div class="navBottom">
            <h3 class="menuItems">AIR FORCE</h3>
            <h3 class="menuItems">JORDAN</h3>
            <h3 class="menuItems">BLAZER</h3>
            <h3 class="menuItems">CRATER</h3>
            <h3 class="menuItems">HIPPER</h3>
            
        </div>
    </nav>
   
</body>
</html>
```
Now we can use the `style.css` file for styling and desighing in the website.


1. Apply the `"Lato"` font and reset padding and margins in the body.
```py
# Ecommerce/style.css
body{
    font-family: 'Lato' , sans-serif;
    padding:0;
    margin:0;
}
```
2. Style the `nav element` with a dark background, white text, and padding.
```py
# Ecommerce/style.css
nav{
    background-color: #111;
    color: white;
    padding: 20px 50px;
}
```
3. Use `flexbox in .navTop`to align and space items evenly.
```py
# Ecommerce/style.css
.navTop{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```
4. Style the `search bar` with a `gray background, padding, and rounded corners`. Ensure the input field has `no border and a light gray` placeholder.
```py
# Ecommerce/style.css
.search{
    display: flex;
    align-items: center;
    background-color: gray;
    padding: 10px 20px;
    border-radius: 10px;
}

.searchInput{
    border: none;
    background-color: transparent;

}

.searchInput::placeholder{
    color: lightgray;
}
```
5. Style the `.limitedoffer` text with a green underline and make it clickable.
```py
# Ecommerce/style.css
.limitedoffer{
    font-size: 20px;
    border-bottom: 2px solid green;
    cursor: pointer;
}
```
6. Align `menu items horizontally in .navBottom` using flexbox; add spacing and styling to each item with `.menuItems`.
```py
# Ecommerce/style.css
.navBottom{
    display: flex;
    align-items: center;
    justify-content: center;

}
.menuItems{
    margin-right: 50px;
    cursor : pointer;
    color: lightgray;
    font-weight: 400;
}
```
# `How to Create a Slider using HTML CSS and JS?`

Creating a `slider` using `HTML, CSS, and JavaScript` involves `setting up the structure, styling it`, and then adding `functionality` for navigation. 

Firstly we can make different slider items and For each slider item give them `sliderTitle` ,`sliderPrice` and the `Buy Now` button for user interactions.

```py
# Ecommerce/index.html
<div class="slider">
        <div class="sliderwraper">
            <div class="sliderItem">
                <img src="./img/air.png" alt="" class="sliderimg">
                <div class="sliderBg"></div>
                <h1 class="sliderTitle">AIR FORCE </br> NEW</br> SEASON</h1>
                <h2 class="sliderPrice">$119</h2>
                <button class="buyButton">BUY NOW!</button>
            </div>
            <div class="sliderItem">
                <img src="./img/jordan.png" alt="" class="sliderimg">
                <div class="sliderBg"></div>
                <h1 class="sliderTitle">JORDAN </br> NEW</br> SEASON</h1>
                <h2 class="sliderPrice">$149</h2>
                <button class="buyButton">BUY NOW!</button>
            </div>
            <div class="sliderItem">
                <img src="./img/blazer.png" alt="" class="sliderimg">
                <div class="sliderBg"></div>
                <h1 class="sliderTitle">BLAZER</br> NEW</br> SEASON</h1>
                <h2 class="sliderPrice">$109</h2>
                <button class="buyButton">BUY NOW!</button>
            </div>
            <div class="sliderItem">
                <img src="./img/crater.png" alt="" class="sliderimg">
                <div class="sliderBg"></div>
                <h1 class="sliderTitle">CRATER</br> NEW</br> SEASON</h1>
                <h2 class="sliderPrice">$109</h2>
                <button class="buyButton">BUY NOW!</button>
            </div>
             <div class="sliderItem">
                <img src="./img/hippie.png" alt="" class="sliderimg">
                <div class="sliderBg"></div>
                <h1 class="sliderTitle">HIPPER</br> NEW</br> SEASON</h1>
                <h2 class="sliderPrice">$99</h2>
                <button class="buyButton">BUY NOW!</button>
            </div>
        </div>
    </div>
```
Then in the `style.css` file we can styling the `sliderItems`.

1. Adds space on the right, makes the cursor a pointer, and sets the text color to light gray.
```py
.menuItems{
    margin-right: 50px;
    cursor : pointer;
    color: lightgray;
    font-weight: 400;
}
```
2. Sets a background image and gives the slider a cool angled bottom shape.
```py
.slider {
    background: url("https://images.unsplash.com/photo-1604147495798-57beb5d6af73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80");
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    
  }
```
3. Arranges items in a row and makes it wide enough to hold all the slides, with a smooth sliding effect.

```py
.sliderwraper{
    display: flex;
    width: 500vw;
    transition: all 1.5s ease-in-out;
}
```

4. Makes each slide as wide as the screen, centers everything, and sets up layering for elements.

```py
.sliderItem{
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position : relative;
}
```
5.  Creates a big circle in the background behind the content.

```py
.sliderBg{
    width: 750px;
    height: 750px;
    border-radius: 50%;
    position: absolute;
}
```
6. Ensures the product image appears on top of the background.

```py
.sliderimg{
    z-index: 1;
}
```
7. Positions the title in the top-right corner, makes it big, bold, and white.

```py
.sliderTitle{
    position: absolute;
    top: 10%;
    right: 10%;
    font-size: 60px;
    font-weight: 900;
    text-align: center;
    color: white;
    z-index: 1;
}
```
8.  Puts the price in the top-left, makes it big, lighter, with a border, and different colors for each item.

```py
.sliderPrice{
    position: absolute;
    top: 10%;
    left: 10%;
    font-size: 60px;
    font-weight: 300;
    text-align: center;
    color: white;
    border :1px solid gray;
    z-index: 1;
}
```
9. Places the "BUY NOW!" button in the middle-right, makes it bold, with a black background and white text.

```py
.buyButton{
    position: absolute;
    top: 50%;
    right: 10%;
    font-size: 30px;
    font-weight: 900;
    color: white;
    border :1px solid gray;
    background-color: black;
    z-index: 1;
    cursor: pointer;
}
```
10. Changes the button to white with black text when you hover over it.

```py
.buyButton:hover{
    background-color: white;
    color: black;
}
```
11.  Gives each slider a different background and text color for the price.

```py
.sliderItem:nth-child(1) .sliderBg{
    background-color:#369e62;
}

.sliderItem:nth-child(2) .sliderBg{
    background-color:rebeccapurple;
}

.sliderItem:nth-child(3) .sliderBg{
    background-color:teal;
}

.sliderItem:nth-child(4) .sliderBg{
    background-color:cornflowerblue;
}

.sliderItem:nth-child(5) .sliderBg{
    background-color:rgb(124, 115, 80);
}
```
12. Gives each slider a different  text color for the price.

```py
.sliderItem:nth-child(1) .sliderPrice{
    color:#369e62;
}

.sliderItem:nth-child(2) .sliderPrice{
    color:white;
}

.sliderItem:nth-child(3) .sliderPrice{
    color:teal;
}

.sliderItem:nth-child(4) .sliderPrice{
    color:cornflowerblue;
}

.sliderItem:nth-child(5) .sliderPrice{
    color:cornsilk;
}
```
# `app.js`

 App.js is the file where the` main logic` of the application starts and is configured, whether it's for the `frontend or the backend`.

Firstly we can `load the javascript file` in the `nav` of the `index.html` file.

```py
# Ecommerce/index.html
.....
<script src="./app.js"></script>
.....
```
```js
const wraper = document.querySelector(".sliderwraper");
const menuItems = document.querySelectorAll(".menuItems");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wraper.style.transform = `translateX(${-100 * index}vw)`;
    });
});
```
# `Steps:`
1. Selects the element that slides.
2. Finds all the clickable menu items.
3. Goes through each menu item one by one.
4. Adds a click action to each menu item.
5. Moves the sliding element based on which menu item is clicked.





