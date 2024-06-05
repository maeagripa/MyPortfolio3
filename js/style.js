<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Navbar</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <nav class="navbar">
        <div class="project-title">Project <span class="project-title1">Title</span></div>
        <div class="menu-toggle" id="mobile-menu">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="navbar-links" id="navbar-links">
            <ul>
                <li><a href="#section1">Home</a></li>
                <li><a href="#section2">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#section3">Education</a></li>
                <li><a href="#section4">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Add your sections here -->

    <script>
        const mobileMenu = document.getElementById('mobile-menu');
        const navbarLinks = document.getElementById('navbar-links');

        mobileMenu.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
        });
    </script>
</body>
</html>
