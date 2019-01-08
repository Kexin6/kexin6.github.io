<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

    <title>Project</title>
</head>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Kexin Li</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="mainPage.html">Home <span class="sr-only">(current)</span></a>
            </li>

            <li class="nav-item active">
                <a class="nav-link" href="Education.html">Education <span class="sr-only">(current)</span></a>
            </li>

            <li class="nav-item active">
                <a class="nav-link" href="Project.html">Project <span class="sr-only">(current)</span></a>
            </li>

            <li class="nav-item active">
                <a class="nav-link" href="Experience.html">Experience <span class="sr-only">(current)</span></a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="https://github.com/Kexin6">GitHub</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/in/kexin-li-cassie/">LinkedIn</a>
            </li>

            <li class="nav-item active">
                <a class="nav-link" href="Contact.html">Contact <span class="sr-only">(current)</span></a>
            </li>

    </div>
</nav>

<div style="padding-top:2%; padding-left: 2%">
    <h3 style="color: #ff5722">
        Kexin Li (Cassie)
    </h3>
    <h5>
        Bachelor of Applied Science and Engineering at University of Toronto
    </h5>
    <h5>Vice President in Association for Chinese Engineers(UTACE)</h5>
</div>



<!--Project details-->
<div style="padding-top: 1%; padding-left: 4%; padding-right: 4%">
    <div class="shadow-lg p-3 mb-5 rounded" style=" background-color: whitesmoke;" >
    <h5>Music Game Integrated with FPGA (2018) <span class="badge badge-success">Finished</span></h5>
    The design is a combination of five parts, namely the video input, PS2 keyboard input, game logic, VGA display output, and audio output. Video input and VGA display output interact directly with the game logic, video
    input provides the real position and VGA’s finite state machine (FSM) logic provides the expected position,
    game logic compares them and updates the score. Then it outputs a signal to the VGA’s FSM and displays the score on the screen.
    The PS2 keyboard input interacts with both VGA output and audio output, controlling the speed of the game through Rate Divider and select a song to be played.

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style="padding-left: 20%; padding-right: 20%">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="Photos/p1.PNG" class="d-block w-100"  alt="...">
            </div>
            <div class="carousel-item">
                <img src="Photos/p2.PNG" class="d-block w-100" alt="...">
            </div>

        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

    <a href="https://github.com/Kexin6/ECE241" button type="button" class="btn btn-outline-primary">Project Link</a>
    </div>
</div>

<div style="padding-top: 1%; padding-left: 4%; padding-right: 4%">
    <div class="shadow-lg p-3 mb-5 rounded" style=" background-color: whitesmoke;" >
        <h5>WeChat Mini Program (2018) <span class="badge badge-warning">Ongoing</span></h5>
        This is a program that allows users to share videos on the social media. Users can create their own account and password.
        They can upload their profile pictures and videos. More functions are waiting to be updated.
        <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div>
            <a href="https://github.com/Kexin6/weChat-program-1.1" button type="button" class="btn btn-outline-primary">Project Link</a>
        </div>

    </div>
</div>


<div style="padding-top: 1%; padding-left: 4%; padding-right: 4%">
    <div class="shadow-lg p-3 mb-5 rounded" style=" background-color: whitesmoke;" >
        <h5>Small-scaled Python project to fetch information from websites (2018)<span class="badge badge-success">Finished</span></h5>
        This is a program that can fetch the name of anchors and number of audience from a website's HTML script using web scraper.
        The principle of this program is the combination of regular expression and Python, which simplifies the
        part of data analysis. After analyzing the data, it is able to get the popularity of the anchors.
        <div>
            <a href="https://github.com/Kexin6/zergProject" button type="button" class="btn btn-outline-primary">Project Link</a>
        </div>

    </div>
</div>

<div style="padding-top: 1%; padding-left: 4%; padding-right: 4%">
    <div class="shadow-lg p-3 mb-5 rounded" style=" background-color: whitesmoke;" >
        <h5>Mann Museum design team with professor Steve Mann (2018)<span class="badge badge-warning">Ongoing</span></h5>
        It is a research team that does research on professor Mann's work, such as virtual reality, High Dynamic Range(HDR), etc. and proposes ideas on
        the construction of Mann's Museum in Shenzhen, China.
        <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 35%" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
</div>


<div style="padding-top: 1%; padding-left: 4%; padding-right: 4%">
    <div class="shadow-lg p-3 mb-5 rounded" style=" background-color: whitesmoke;" >
        <h5>Method of delivering a learning program to Haiti (2018)<span class="badge badge-success">Finished</span></h5>
        As a team, we initiated a pilot program to deliver Khan Academy to Haiti for Haitian NGO Centre d’Inspiration Jeunesse.
        Since I was the project manager, it was my responsibility to communicate amongst team members and the client. In the end, we
        proposed a new energy system that works in conditions without electricity or light.
        <img src="Photos/p3.JPG" class="img-fluid" style=" padding-left: 20%; padding-right: 20%" alt="Responsive image"/>
    </div>


</div>

<div style="padding-top: 1%; padding-left: 4%; padding-right: 4%">
    <div class="shadow-lg p-3 mb-5 rounded" style=" background-color: whitesmoke;" >
        <h5 style="color: cornflowerblue">TO BE CONTINUED...</h5>
    </div>
</div>


<!--Bottom lines-->
<div class="container" style="padding-left: 20%" >
    <div class="row">
        <div class="col-sm">
            <h5 style="color: black">Discover</h5>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="Education.html">Education</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="Project.html">Project</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="Experience.html">Experience</a>
                </li>
            </ul>
        </div>
        <div class="col-sm">
            <h5 style="color: black">Contact Me</h5>
            <ul class="nav flex-column">
                <li class="nav-item" >
                    <a class="nav-link active" href="https://www.linkedin.com/in/kexin-li-cassie/">LinkedIn</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://github.com/Kexin6">GitHub</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="Mailto:cassiekx.li@mail.utoronto.ca">Email</a>
                </li>
            </ul>
        </div>

    </div>
</div>
<div style="padding-top: 4%">
    <div style="text-align: center; background-color: ghostwhite;color: black">
        <div>Last update on Jan 6th, 2019.</div>
        <div>Copyright © 2018 - 2019 Kexin Li. All rights reserved.</div>

    </div>
</div>

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
</body>
</html>