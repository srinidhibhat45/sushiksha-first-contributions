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
            name: "Your Name here",
            college: "Your College Name here",
            batch: 2016,
            quote: 'A fun quote with more than 10 words.',
            photo: "your-image-url-here",
            github:"www.your-github-url-here.com"
          },
          ```
      *note that the first entry under every team is reserved for the team champion only*

      3. Add your name to the ```name``` field in quotes.

      4. Add your College name to the ```college``` field in quotes.

      5. Add your Sushiksha batch to the ```batch``` field without quotes.

      6. Add a fun, interesting quote aboout yourself in the ```quote``` field in quotes.
      ***Note that this quote has to be 10 words or more!!!***

      7. Now to add your photo, there are couple more steps than usual but are very easy:
          1. Visit *imgbb.net*
          2. Click on *Start Uploading* 
          3. Select the photo that you want to use for your cards
          4. From the dropdown, select *Dont Autodelete*.
          5. Click on *Upload*
          6. Wait for the image to be uploaded
          7. Now from the dropdown, select *HTML Fully linked*
          8. DONT Copy the full link! instead, copy only what is in quotes  ```src="only-copy-what's-here"```. Refer to the screenshot below. Note that the link                might change for your image.
        <img src="https://i.ibb.co/V9B9Gd6/Screenshot-from-2021-09-29-18-17-48.png" height="350">
          9. Paste this link into the ```photo``` field in quotes.
      8. Paste your GitHub profile link in the ```github``` field in quotes.
      9. Save your Work! some editors may autosave your work for you, but dont forget the old trusty **CTRL + S** to save your work before you close your editor.
    
    *Congratulations! you can now open the ```index.html``` file in your browser and navigate to your team's cards. If you followed the steps correctly, your card should now be visible. If its not contact us and we'll be happy to guide you :)*

    *But wait! this is only on your local machine not on that internet. How do you flaunt your card and show it to others? Well, follow the following steps and you'll do that as well, All the best!*

5. ### Staging

    Staging is an important part of the development process. By staging your files, you tell Git that this is a part of a commit that you're about to make. It is like saving a file, but to Git. 

    There are two main ways of stagin files. 

    1. Staging one file or two files: you can do this by the ```git add``` command followed the names of the files you want to stage separated by a space.

    Example: 

    ```bash
    git add file1.html file2.txt file3.c file4.py
    ```

    As you may have guessed, this is very tedious especially if you have many files that you want to stage together or if you dont exactly remember the number of files you changed. For this, you can use the much easy and reccomended command:

    ```bash
    git add .
    ```
    The period means all. It will stage all files you changed.

   *To unstage a file you use the ```git reset``` command with the file name or the period like above*

    ***Remember at any point, you can use the ```git status``` command to check the status of your working tree i.e. to see what changes have been made and where***

6. ### Commiting

    After you've made the changes and staged them, you are ready to commit them! This is an important stage so proceed with caution henceforth as coming back will be difficult although not completely impossible.

    Commit means you're ready to commit your new change to the code and want to send it to the main code to check for mergability. There is always a commit message that accompanies the commit which describes in brief the changes you made to the code in that particular commit. You can make a commit only after staging your files, no matter how small the change. The command to commit your changes with a  message is:

```bash
git commit -m "your commit message here"
```
  the ```-m``` is the flag for the commit message that

  *Congratulations! you've commited you changes successfully! to verify this, you can run the ```git status``` command and if it returns that the working tree is clean, that means your commit was successfull. However, your commit is still on  your local system and hasn't been pushed to the cloud repository yet. we will be doing that next.*

7. ### Pushing

   In this stage,  you will be pushing your changes and commits to the cloud repository that you just forked. If this wasnt a forked repo, you could easily use the ```git push``` command and push it. Since this is forked, you will use the following command

    ```bash
    git push origin your-branch-name
    ``` 
    this will push your changes to the forked repo. Now you are finally ready to make your first pull request!


8. ### Pull Request

   This is the most interesting part! A Pull Request or a PR is when you tell the maintainers that you have made changes to a certain part of the code and ask them to **Pull** those changes to the original repository, this completing the cycle. This

   this will have a few steps so follow along:

      1. Head back to the original repository. In this case it is: https://github.com/srinidhibhat45/sushiksha-first-contributions
      2. Click of the **Pull Request** Section.
      3. Click on the green colored **New Pull Request** button.
      4. on the first line, you will see a small link that'll read **Compare Across Forks**. Click on that.
      5. Below you will see 4 buttonn and an arrow (<-) dividing them. 
      6. Keep the left side intact, on that right, choose your repo name and the branch name respectively that you want to make a PR from.
      7. The **Create Pull Request** button will become green. Click on it!
      8. Add a commi title and commit message just like before.
      9. Click on the green **Create Pull Request** button
      10. *Dont worry if it says there are conflicts and it cant be merged, we will help you resolve them :)*
<br/>
<br/>


***Your card is now live on the internet!! Visit https://sushiksha.netlify.app to view it!!***

<br/>
<br/>

*If you encounter any problem at any point of time during the process of making a PR, feel free to contact **Srinidhi Bhat** or **Rishabh Naik** on Slack DMs and we'll gladly assist you with your problem*

<br/>
<br/>

**Disclaimer: The PRs made to this repository may or may not count towards HacktoberFest 2021 as it is a simple PR and requires low effort. So it is highly recommended that you use the knowledge gained from making this PR and make contributions to other Open-Source Projects as well! Happy Hacking!**

<br/>
<br/>

## Contributing 

*Any changes/improvements, bug fixes to this site are highly encouraged and welcome.*

Improvement pull requests are always welcome. For major changes, please open an issue first to discuss what you would like to change in the project.
