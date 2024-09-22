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
# Ecommerce/style.css
.menuItems{
    margin-right: 50px;
    cursor : pointer;
    color: lightgray;
    font-weight: 400;
}
```
2. Sets a background image and gives the slider a cool angled bottom shape.
```py
# Ecommerce/style.css
.slider {
    background: url("https://images.unsplash.com/photo-1604147495798-57beb5d6af73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80");
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    
  }
```
3. Arranges items in a row and makes it wide enough to hold all the slides, with a smooth sliding effect.

```py
# Ecommerce/style.css
.sliderwraper{
    display: flex;
    width: 500vw;
    transition: all 1.5s ease-in-out;
}
```

4. Makes each slide as wide as the screen, centers everything, and sets up layering for elements.

```py
# Ecommerce/style.css
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
# Ecommerce/style.css
.sliderBg{
    width: 750px;
    height: 750px;
    border-radius: 50%;
    position: absolute;
}
```
6. Ensures the product image appears on top of the background.

```py
# Ecommerce/style.css
.sliderimg{
    z-index: 1;
}
```
7. Positions the title in the top-right corner, makes it big, bold, and white.

```py
# Ecommerce/style.css
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
# Ecommerce/style.css
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
# Ecommerce/style.css
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
# Ecommerce/style.css
.buyButton:hover{
    background-color: white;
    color: black;
}
```
11.  Gives each slider a different background and text color for the price.

```py
# Ecommerce/style.css
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
 # Ecommerce/style.css
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
 `app.js`

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
 `Steps:`
1. Selects the element that slides.
2. Finds all the clickable menu items.
3. Goes through each menu item one by one.
4. Adds a click action to each menu item.
5. Moves the sliding element based on which menu item is clicked.

# `Features`

Features are the main things a business offers, like free delivery or easy returns. They show what customers get.

 Firstly we creates a section to display service features like `free shipping`, `returns`, `gift cards`, and `contact options`. Each feature includes an `image, a title, and a short description`.

 ```py
 <div class="features">
            <div class="feature">
                <img src="./img/shipping.png" alt="" class="featureIcon">
                <span class="featureTitle">FREE SHIPPING</span>
                <span class="featureDesc">free worldwide shipping on all orders.</span>
            </div>
            <div class="features">
                <div class="feature">
                    <img src="./img/return.png" alt="" class="featureIcon">
                    <span class="featureTitle">30 DAYS RETURN</span>
                    <span class="featureDesc">no question return and easy refund in 14 days.</span>
                </div>
                <div class="features">
                    <div class="feature">
                        <img src="./img/gift.png" alt="" class="featureIcon">
                        <span class="featureTitle">GIFT CARDS</span>
                        <span class="featureDesc">buy gift cards and use coupon codes easily.</span>
                    </div>
                    <div class="feature">
                        <img src="./img/contact.png" alt="" class="featureIcon">
                        <span class="featureTitle">CONTACT US!</span>
                        <span class="featureDesc">keep in touch via email and support system.</span>
                    </div>
```
Now we can add styling in the `style.css` file .

1. The `.features` class arranges items in a row, spaces them out evenly, and adds 50px padding around them.

```py
# Ecommerce/style.css
.features{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;

}
```
The `.feature` class makes each item stack vertically and centers the content.

```py
# Ecommerce/style.css
.feature{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

}
```
The `.featureIcon` class sets the icon size to 50x50 pixels.

```py
# Ecommerce/style.css
.featureIcon{
    width: 50px;
    height: 50px;

}
```
The `.featureTitle` class makes the title text bigger, bold, and adds some space around it.

```py
# Ecommerce/style.css
.featureTitle{
    font-size: 20px;
    font-weight: 600;
    margin: 20px;
}
```

The `.featureDesc` class colors the description gray, limits the width to half, and sets its height to 100px.

```py
# Ecommerce/style.css
.featureDesc{
    color: gray;
    width: 50%;
    height: 100px;
}
```
# `Product Section design:`

In the product section design ,we can desigh the products . 

Firstly we can creates a `product section`. It shows an image of the product, its name `AIR FORCE` and the price of `$199`. There’s a `description` of the product, `color options` represented by small colored `boxes`, and `size choices` listed as numbers. At the bottom, there's a `BUY NOW!` button for purchasing the product.

```py
# Ecommerce/index.html
<div class="product">
        <img src="./img/air.png" alt="Air Force Shoes" class="productImg">
        <div class="productDetails">
            <h1 class="productTitle">AIR FORCE</h1>
            <h2 class="productPrice">$199</h2>
            <p class="productDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugit quis reprehenderit illum cupiditate magnam voluptatem. Nesciunt autem doloribus rerum! Soluta iste possimus quasi quaerat corrupti culpa fugiat repellendus fugit.</p>
            <div class="colors">
                <div class="color"></div>
                <div class="color"></div>
            </div>
            <div class="sizes">
                <div class="size">42</div>
                <div class="size">43</div>
                <div class="size">44</div>
                       <button class="productButton">BUY NOW!</button>
            </div>
        </div>
```
Now we can add some styling in the `style.css` file.

1. Takes up the whole screen height with a light gray background and a special shape.

```py
# Ecommerce/style.css
.product {
    height: 100vh;
    background-color: whitesmoke;
    position: relative;
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
  }
```

2. Takes up half the width of the container.

```py
# Ecommerce/style.css
  .productImg{
    width: 50%;
  }
```
3. Positioned on the top-right with padding and takes up 40% of the container width.

```py
# Ecommerce/style.css
  .productDetails{
    position: absolute;
    top: 10%;
    right: 0;
    width: 40%;
    padding: 50px;
  }
```
4. Very large and bold text for the product name.

```py
# Ecommerce/style.css
  .productTitle{
    font-size: 75px;
    font-weight: 900;
  }
```
5. Gray text for the product description (fix font-style to font-size).

```py
# Ecommerce/style.css
  .productDesc{
    font-style: 24px;
    color: gray;
  }
```
6. Boxes with size numbers displayed in a row.

```py
# Ecommerce/style.css
  .colors,.sizes{
    display: flex;
    margin-bottom: 20px;
  }
```
7.  Small colored squares displayed in a row for different color options.

```py
# Ecommerce/style.css
  .color{
    width: 32px;
    height: 32px;
    border-radius:5px ;
    background-color: black;
    margin-right: 10px;
    cursor: pointer;
  }
```

```py
# Ecommerce/style.css
  .color:last-child{
    background-color: darkblue;

}
```
8. Boxes with size numbers displayed in a row.
```py
# Ecommerce/style.css
.size{
    padding: 5px 20px;
    border: 1px solid black;
    margin-right: 10px;
    cursor: pointer;
    font-size: 20px;
}
```
9. Black button with white text, aligned to the right, which changes to a white background with black text when you hover over it.

```py
# Ecommerce/style.css
.productButton{
    float: right;
    padding: 10px 20px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
}
```
```py
# Ecommerce/style.css
.productButton:hover{
    background-color: white;
    color:black;
}
```
# `DOM (Document Object Model)  Manipulation in Javascript`

DOM manipulation in JavaScript means using JavaScript to change the content and appearance of a web page.

Firstly we can craete the `JavaScript array of objects`, each representing a `product`. Each object contains details about the product, including its `ID`, `title`, `price`, and available `colors`.

```py
# Ecommerce/apps.js
 {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },

```
Now we can select `parts of the webpage `to show a product. It picks the `first product`, then gets the `image`, `title`, and `price` from the page. It also grabs all the `color and size` options. These elements can be used to update the product details.

```js
# Ecommerce/app.js
.....
 let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
.....

```
Now we can updates the product details on the page when a new product is chosen. It sets the `choosenProduct` to the selected one, then changes the title, price, and image to match the new product.

```js
....
 //change the choosen product
    choosenProduct = products[index];


    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img
```

we can give different  product colors of each products and updates the product image when a color is clicked and highlights the selected size with a black background and white text.

```js

      //assing new colors
      currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
      });
    });
  });
  
  currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    });
  });
  
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});
```
# `Create Model Using HTML,CSS,JavaScripts:`

To create a modal, use HTML for the structure, CSS for styling, and JavaScript for functionality. Add a button to open the modal, style it with CSS, and use JavaScript to show the modal on button click and hide it when the close button or overlay is clicked.

firstly we shows a `payment form` where users fill in their `name`, `phone number`, and `address`, along with `card details` featuring `Visa` and `MasterCard` icons. There's a `Checkout` button to finish the payment and a `close button` to exit the form.

 Below the form, a `gallery `displays three images with motivational titles. The layout helps users easily enter their information and view the images.

 ```py
 # ecommerce/index.html
            .......
            <div class="payment">
                <h1 class="payTitle">Personal Informations</h1>
                <label>Name and Surname</label>
                <input type="text" placeholder="John Doe" class="payInput">
                <label>Phone number</label>
                <input type="text" placeholder="+92 6789542" class="payInput">
                <label>Address</label>
                <input type="text" placeholder="Model Town (z-block) 2 str" class="payInput">
                <h1 class="payTitle">Card Informations</h1>
                <div class="cardIcons">
                    <img src="./img/visa.png" alt="Visa" width="40">
                    <img src="./img/master.png" alt="MasterCard" width="40">
                </div>
                <input type="password" class="payInput" placeholder="Card Number">
                <div class="cardInfo">
                    <input type="text" placeholder="mm" class="payInput" maxlength="2">
                    <input type="text" placeholder="yyyy" class="payInput" maxlength="4">
                    <input type="text" placeholder="cvv" class="payInput" maxlength="3">
                </div>
                <button class="payButton">Checkout</button>
                <span class="close">X</span>
            </div>
        </div>
    </div>
    <div class="gallery">
        <div class="galleryItem">
            <h1 class="galleryTitle">Be Yourself!</h1>
            <img src="https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" class="galleryImg">
        </div>
        <div class="galleryItem">
            <h1 class="galleryTitle">This is the First Day of Your New Life</h1>
            <img src="https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" class="galleryImg">
        </div>
        <div class="galleryItem">
            <h1 class="galleryTitle">Just Do it!</h1>
            <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" class="galleryImg">    
        </div>
    </div>  
```
now we can add some styling in the styling.css file .

1. `.payment` Defines a hidden, centered modal with fixed dimensions, padding, and a shadow effect.

```py
.payment {
    width: 500px;
    height: 500px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    padding: 10px 50px;
    display: none;
    flex-direction: column;
    -webkit-box-shadow: 0px 0px 13px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 13px 2px rgba(0, 0, 0, 0.3);

}
```

2. `.payTitle` Styles the payment form title with a 20px font size and gray color.

```py
.payTitle{
    font-size: 20px;
    color: rgb(83, 80, 80);
}
```
3. `label` Sets the font size to 14px and a light weight for form labels.

```py
label{
    font-size: 14px;
    font-weight: 300;
}
```
4. `.payInput` Styles the input fields with padding, margin, and a bottom border.

```py
.payInput{
    padding: 10px;
    margin: 10px 0px;
    border: none;
    border-bottom: 1px solid gray;
}

.payInput::placeholder{
    color: rgb(145, 143, 143);
}
```

5. `.cardIcons` Aligns payment method icons horizontally with flexbox.
   `.cardIcon` Adds right margin to space out individual payment icons.
   `.cardInfo` Aligns card number, expiration date, and CVV fields with space between them.

```py
.cardIcons{
    display: flex;
}

.cardIcon{
    margin-right: 10px;

}

.cardInfo{
    display: flex;
    justify-content: space-between;
}
```

6. Sets the width of small input fields.
```py
.sm{
    width: 30%;
}
```

7. `.payButton` Positions the submit button at the bottom of the modal with a green background and shadow.

```py
.payButton{
    position: absolute;
    height: 40px;
    bottom: 0;
    width: 100%;
    left: 0;
    -webkit-box-shadow: 0px 0px 13px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 13px 2px rgba(0, 0, 0, 0.3);
    background-color: #369e62;
    color: white;
    border: none;
    cursor: pointer;
}
```
8. `.close` Styles the close button at the top-right of the modal, with a gray background and white text.

```py
.close{
    width: 20px;
    height: 20px;position: absolute;
    background-color: gray;
    color: white;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 2px;

}
```
 JavaScript shows the `payment modal` when the `productButton` is clicked by setting its display to `flex`, and hides the modal when the close button is clicked by setting the display to `none`.

 ```js
 const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex"
})

close.addEventListener("click",()=>{
  payment.style.display="none"
})
```
# `Gallery Design:`

A gallery design displays images in a grid, making it easy to view and click on pictures.

we can creates a gallery with three items (title and image) and a new season section with two images, text, and a button for a new collection.

```py
<div class="gallery">
        <div class="galleryItem">
            <h1 class="galleryTitle">Be Yourself!</h1>
            <img src="https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" class="galleryImg">
        </div>
        <div class="galleryItem">
            <h1 class="galleryTitle">This is the First Day of Your New Life</h1>
            <img src="https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" class="galleryImg">
        </div>
        <div class="galleryItem">
            <h1 class="galleryTitle">Just Do it!</h1>
            <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" class="galleryImg">    
        </div>
    </div>
    
    <div class="newSeason">
        <div class="nsItem">
            <img src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" class="nsImg">
        </div>
        <div class="nsItem">
            <h3 class="nsTitleSm">WINTER NEW ARRIVALS</h3>
            <h1 class="nsTitle">New Season</h1>
            <h1 class="nsTitle">New Collection</h1>
            <a href="#nav">
                <button class="nsButton">CHOOSE YOUR STYLE</button>
            </a>
        </div>
        <div class="nsItem">
            <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" class="nsImg">
        </div>
    </div>
```
Now we can add some styling in the styling.css.

1. Adds 50px padding and uses flexbox to arrange items in a row.

```py
.gallery{
    padding: 50px;
    display: flex;
}
```
2. Takes equal space in the gallery and has 50px padding.

```py
.galleryItem{
    flex: 1;
    padding: 50px;
}
```
3. Sets images to fill the full width of their parent item.

```py
.galleryImg{
    width: 100%;
}
```
4. Uses flexbox to arrange child items in a row.

```py
.newSeason{

    display: flex;

}
```
5. Takes equal space, has a black background, white text, and uses flexbox with vertical alignment.

```py
.nsItem {
    flex: 1;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column; /* Change this from column to row */
    align-items: center;
    justify-content: center;
    text-align: center;
}
```
6. Sets images to 100% width and a fixed height of 500px.

```py
.nsImg{
    width: 100%;
    height: 500px;
}
.nsTitle{
    font-size: 40px;
}
```
7. Adds padding, makes the text bold, and changes the cursor to a pointer when hovered.

```py
.nsButton{
    padding: 15px;
    font-weight: 600;
    cursor: pointer;
}
```
# `Footer Design:`

In the footer part of the website is the `bottom part` that shows `contact info`, `links to important pages`, `social media icons`, a newsletter `signup`, `payment options`, and `legal links`. It helps users find information and keeps the site organized.

Firstly we sets up a `footer` with two sections. The `left side features menus` for `About Us`, `Useful Links`, and `Products`. The right side has a `newsletter signup`, `social media icons`, and a copyright notice for 2024. It offers key information and user engagement options.

```py
<footer>
        <div class="footerLeft">
            <div class="footerMenu">
                <h1 class="fMenuTitle">About Us</h1>
                <ul class="fList">
                    <li class="fListItem">Company</li>
                    <li class="fListItem">Contact</li>
                    <li class="fListItem">Careers</li>
                    <li class="fListItem">Affiliates</li>
                    <li class="fListItem">Stores</li>
                </ul>
            </div>
            <div class="footerMenu">
                <h1 class="fMenuTitle">Useful Links</h1>
                <ul class="fList">
                    <li class="fListItem">Support</li>
                    <li class="fListItem">Refund</li>
                    <li class="fListItem">FAQ</li>
                    <li class="fListItem">Feedback</li>
                    <li class="fListItem">Stores</li>
                </ul>
            </div>
           
            <div class="footerMenu">
                <h1 class="fMenuTitle">Products</h1>
                <ul class="fList">
                    <li class="fListItem">Air Force</li>
                    <li class="fListItem">Air Jorden</li>
                    <li class="fListItem">Blazer</li>
                    <li class="fListItem">Crater</li>
                    <li class="fListItem">Hippie</li>
                </ul>
            </div>
        </div>
        <div class="footerRight">
            <div class="footerRightMenu">
                <h1 class="fMenuTitle">Subscribe to our newsletter! </h1>
                <div class="fMail">
                    <input type="text" placeholder="your@email.com" class="fInput">
                    <button class="fButton">Join!</button>
                </div>
            </div>
            <div class="footerRightMenu">
                <h1 class="fMenuTitle">Follow Us</h1>
                <div class="fIcons">
                    <img src="./img/facebook.png" alt="" class="fIcon">
                    <img src="./img/twitter.png" alt="" class="fIcon">
                    <img src="./img/instagram.png" alt="" class="fIcon">
                    <img src="./img/whatsapp.png" alt="" class="fIcon">
                </div>
            </div>
            <div class="footerRightMenu">
                <span class="copyright">@aisha Dev. All rights reserved. 2024.</span>

            </div>
        </div>
    </footer>
```
Now we can add styling in the style.css file.

1.  Uses flexbox for layout.
```py
footer{
    display:flex;
}
```
2. Takes up 2 parts of space, uses flexbox, adds padding, and spaces items evenly.

```py
.footerLeft{
    flex: 2;
    display:flex;
    justify-content: space-between;
    padding: 50px;
}
```
3. Sets font size to 16px for menu titles.

```py
.fMenuTitle{
    font-size: 16px;
}
```
4. Removes default padding and list style for the list.

```py
.fList{
    padding: 0;
    list-style: none;
}
```
5. Adds bottom margin, sets text color, and changes cursor to pointer for list items.

```py
.fListItem{
    margin-bottom: 10px;
    color: rgb(117, 115, 115);
    cursor: pointer;
}
```
6. Takes up 1 part of space, uses flexbox for vertical layout, and adds padding.

```py
.footerRight{
    flex: 1;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
```
7.  Adds padding to the input field.

```py
.fInput{
    padding: 5px;
}
```
8. Adds padding and styles the button with a black background and white text.

```py
.fButton{
    padding: 5px;
    background-color: black;
    color: white;
}
```
9. Uses flexbox to arrange social media icons in a row.

```py
.fIcons{
    display: flex;
}
```
10. Sets width and height of icons, with right margin for spacing.

```py
.fIcon{
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
```
11. Styles the copyright text with a lighter weight and specific color.

```py
.copyright{
    font-weight: 300;
    font-size: 14px;
    color: rgb(71, 70, 70);
}
```
# ` Responsive Design with Media Query`

Responsive design with `media queries` adapts a `website's layout` for different screen sizes, making it look good on `phones`, `tablets`, and desktops by applying specific styles based on device width or features.

Now we can use media query for mobile screen.

1. Media query adjusts the website layout for  mobile screens with a max-width of 480px.

Adds 20px padding for better spacing.

```py
#style.css
@media screen and (max-width:480px) {

 nav{
    padding: 20px;
}
```
2. Hides the search bar by setting `display: none`.
```py
.search{
    display: none;
}
```
3. Allows navigation items to wrap onto the next line.

```py
.navBottom{
    flex-wrap: wrap;
}
```
4.  Increases margin to 20px, sets font size to 20px, and makes font bold for visibility.

```py
.menuItem{
    margin: 20px;
    font-weight: 700;
    font-size: 20px;
}
```
5. Removes any clipping effects with `clip-path: none`.

.slider{
    clip-path: none;
}
6. Adjusts image width to 90% to fit within smaller screens.

```py
.sliderimg{
    width: 90%;
}
```
7. Expands background to full width and height (100%).

```py
.sliderBg{
    width: 100%;
    height: 100%;
}
```
8.  Hides the slider title with display: none.

```py
.sliderTitle{
    display: none;
}
```
9.  Moves the price to the bottom left, with a light gray background.

```py
.sliderPrice{
    top: unset;
    bottom: 0;
    left: 0;
    background-color: lightgray;
}
```
10.  Moves the buy button to the top-right corner.

```py
.buyButton{
    right: 0;
    top: 0;
}
```
11. Changes layout to column for easier vertical scrolling.

```py
.features{
    flex-direction: column;
}
```
12. Removes clipping and aligns product content centrally in a column layout.

```py
.product{
    clip-path: none;
    display: flex;
    flex-direction: column;
    align-items: center;
}
```
13. Reduces product image width to 80%.

```py
.productImg{
    width: 80%;
}
```
14. Makes product details center-aligned, stacking content in a column.

```py
.productDetails{
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    top: 0;
}
```
15. Enlarges the product title font to 50px for better readability.

```py
.productTitle{
    font-size: 50px;
    margin: 0;
}
```
16. Hides the gallery section.

```py
.gallery{
    display: none;
}
```
17. Changes layout to column format for the new season section.

```py
.newSeason{
    flex-direction: column;
}
```
18. Adds 50px padding to the second item in the new season section.

```py
.nsItem:nth-child(2){
    padding: 50px;
}
```
19. Changes footer layout to column and centers content.

```py
footer{
    flex-direction: column;
    align-items: center;
}
```
20. Adds 20px padding, adjusts width to 90%, and centers content. `.footerRight` has a light background color.
```py
.footerLeft{
    padding: 20px;
    width: 90%;
}
.footerRight{
    padding: 20px;
    width: 90%;
    align-items: center;
    background-color: whitesmoke;
}
```

21. Adjusts payment form width to 90% and adds 20px padding for smaller screens.

```py
.payment{
    width: 90%;
    padding: 20px;
}
}
```
















