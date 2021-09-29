# sushiksha-first-contributions

## A Repository for Sophists to make their First ever PR!

<br>
<!-- Team Logos --!>

<p align="center">
  <img src="https://i.ibb.co/vPShtZ0/hacktoberfest.png" alt="Tejas-LOGO" height="120px" border="0"/>&nbsp; 
  <img src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/prod-pict-xmark_2.png" height=75px; padding="0px 0px 20px 0px"# style>&nbsp; 
  <img src="https://i.ibb.co/tCp0DL8/sophists-logo-white.png" alt="SCL-Logo-PNG" height="150px" border="0"/>
<!--   <h1 align="center">HacktoberFest 2021 X Sophists</h1> -->

<!-- Heads -->
  <p align="center">
    A Simple repository for all SOPHISTS to contribute to and make their first ever pull request for HacktoberFest 2021!!
    <br />
    <br />
    <br />

    
<!-- Logos -->
<br>
<p align="center">
    <a target="blank_" href="https://sushiksha.netlify.app/"><img src="https://i.ibb.co/KKwQXmW/View-Site-button.png" alt="Bootstrap logo" width="250"></a>  
  </a>
<br>
<br>
  
# How to Contribute?

*Follow the following steps in Order and you will have made your first PR by the end of the read! If you have any doubts or are stuck somewhere, please reach out to Srinidhi Bhat or Rishabh Naik on Slack DMs.*

<br/>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#project-description">Project Description</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a>
          <ol>
            <li><a href="#forking">Forking</a></li>
            <li><a href="#cloning">Cloning</a></li>
          </ol>
        </li>
        <li><a href="#development">Development</a>
           <ol>
            <li><a href="#checkout">Checkout</a></li>
            <li><a href="#Editing">Editing</a></li>
            <li><a href="#staging">Staging</a></li>
            <li><a href="#commiting">Commiting</a></li>
            <li><a href="#pushing">Pushing</a></li>
            <li><a href="#pull-request">Pull Request</a></li>
          </ol>
        </li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing / Adding features (to the site)</a></li>
  </ol>
</details>

<br />

<!-- About Project -->

## ***About the Project***
<br />

#### **Project Description:**
Simple Static Website built using HTML, CSS and JavaScript and hosted on Netlify. The project is restricted to Sophists members only and is created for the workshop on Git and GitHub to introduce them to HacktoberFest. Any contributions from other members may not be considered/acknowledged. 

<br/>
<br/>

<!-- Getting started -->

## ***Getting Started***
<br />

### **Installation** 
<br />

1. ### Forking
  
      Fork the sushiksha-first-contributions Repository with the help fo the <b>FORK</b> button of the top right corner of the repository. 

2. ### Cloning

      1. Once Forked, click on the Green colored <b>CODE</b> button
      2. Make sure you have <b>https</b> selected and copy the url shown.
      3. Open GitBash on your system and use ```cd``` command to navigate to the desktop or whichever folder you want to clone the repository to. Here I will clone to my Desktop 

      In Windows
      ```bash
      cd Users/UserName/Desktop
      ```

      *For Linux or MacOS users, please refer the official documentation.*

      4. Now to clone the Repository.

      ```bash
      git clone https://github.com/your-github-username/sushiksha-first-contributions.git
      ```
      5. Now ```cd``` into that folder.

      ```bash
      cd sushiksha-first-contributions
      ```

      *PS: you can also choose to download a zip file of the code that is an option under the green code button as well. however this can cause problems in the development process sometimes. So proceed with caution!*

  <br />

*Congratulations! you have Successfully Cloned your First Repository!!!*

  <br />

### **Development**
<br/>
 
 *PS: from hereon, please ensure you are working in your cloned repository. Otherwise the below commands will not work.*

3. ### Checkout

      Branches are unique features of Version Control Systems that allow you to add/remove features and test them individually, without affecting the main code. This also enables multiple contributors to work on a single piece of code together, working on multiple features.

      You should never work on the main branch of you repository and reserve it for deployment purposes. You should, instead, checkout to another branch where you can make your changes and then push it to the main branch to be merged into

      you can do this easily with the ```checkout``` command. This command can be used with a flag ```-b``` to create a new branch as well. By default your main branch is main. all other branches will have to be created by you.

  Initially to create a new branch, you will have to use the ```-b``` flag. Rest of the times, you can just checkout to it provided it hasn't been deleted.

  ```bash
  git checkout -b your-branch-name
  ```


  Checking out to it the next time.

  ```bash
  git checkout your-branch-name
  ```

4. ### Editing
  
    This is the working part of the code. Here is ideally where you would make changes to the source code on your local system. But for this project, we've made it simple for you!

    Follow the following steps to make yourself a nice card under your team name for the website!

      1. Open ***data.js*** file in the root directory (You can do this using your favourite Code Editor or Notepad.)
      2. It is important that you DO NOT change anything else here and scroll down to your Team Name. You will see an entry like this:

          ```js
          //Udhbhav
          {
            teamname:'Udhbhav',
            name: "Test1",
            college: "College institue of technology",
            batch: 2016,
            quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            photo: "rishabh.jpg",
            github:"www.google.com"
          },
          ```
      *note that the first entry under every team is reserved for the team champion only.*

      3. Add your name to the ```name``` field in quotes.

      4. Add your College name to the ```college``` field in quotes.

      5. Add your Sushiksha batch to the ```batch``` field without quotes.

      6. Add a fun, interesting quote aboout yourself in the ```quote``` field in quotes.

      7. Now to add your photo, there are couple more steps than usual but are very easy:
          1. Visit *imgbb.net*
          2. Click on *Start Uploading* 
          3. Select the photo that you want to use for your cards
          4. From the dropdown, select *Dont Autodelete*.
          5. Click on *Upload*
          6. Wait for the image to be uploaded
          7. Now from the dropdown, select *HTML Fully linked*
          8. DONT Copy the full link! instead, copy only what is in quotes  ```src="only-copy-what's-here"```. Refer to the screenshot below. Note that the link might change for your image. 
          <br/>
        <img src="https://i.ibb.co/V9B9Gd6/Screenshot-from-2021-09-29-18-17-48.png" height="350">
          9. Paste this link into the ```photo``` field in quotes
          10. 




5. ### staging
6. ### Commiting
7. ### Pushing
8. ### Pull Request

   

## Contributing 

*Any changes/improvements, bug fixes to this site are highly encouraged and welcome.*

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change in the project.

<br>
<br>
<br>
<br>
