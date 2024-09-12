# Ecommerce-website


# Steps
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

# `Steps`
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


# 1. Apply the `"Lato"` font and reset padding and margins in the body.
```py
body{
    font-family: 'Lato' , sans-serif;
    padding:0;
    margin:0;
}
```
# 2. Style the `nav element` with a dark background, white text, and padding.
```py
nav{
    background-color: #111;
    color: white;
    padding: 20px 50px;
}
```
# 3. Use `flexbox in .navTop`to align and space items evenly.
```py
.navTop{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```
# 4. Style the `search bar` with a `gray background, padding, and rounded corners`. Ensure the input field has `no border and a light gray` placeholder.
```py
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
# 5. Style the `.limitedoffer` text with a green underline and make it clickable.
```py
.limitedoffer{
    font-size: 20px;
    border-bottom: 2px solid green;
    cursor: pointer;
}
```
# 6. Align `menu items horizontally in .navBottom` using flexbox; add spacing and styling to each item with `.menuItems`.
```py
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