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
    A Simple repository for all sophists to contribute to and make their first ever pull request for HacktoberFest 2021!!
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
        <li><a href="#installation">Installation</a></li>
        <li><a href="#development">Development</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing / Adding features</a></li>
  </ol>
</details>

<br />

<!-- About Project -->

## About the Project

#### Project Description

1. Backend Framework: **Django**
2. Front-end Framework: **Bootstrap**
3. Database used: **Sqlite**

<!-- Getting started -->

## Getting Started

### Installation 

1. Fork and Clone
    <ol>
    <li>Fork the Tejas-SCL-maxo Repository</li>
    <li>Clone the repo to your local system.</li>
    </ol>

2. Create a Virtual Environment for the Project

    In Windows
    ```bash
    pip install virtualenv
    virtualenv venv
    venv\Scripts\activate
    ```

    In Ubuntu/MacOS
    ```bash
    python -m virtualenv venv

    source venv/bin/activate
    ```
   
   If you are using another name for the virtual environment other than `venv`, then please mention it in `.gitignore`.

3. Install all the requirements

    ```bash
    pip install -r requirements.txt
    ```
### Development

4. Checkout to a different branch
     ```git
    git status
    git pull
    git branch
    git checkout -b <your-branch-here>
   
   ```
**Note: the python-openid and python3-openid package that come alone with the social-auth package are bugged.
to fix this issue, run the following command:**

```pip uninstall python-openid && pip uninstall python3-openid```

**press 'y' if asked for authorisation.**

**then reinstall the uninstalled packages**

```pip install python-openid && pip install python3-openid```

**and then continue with the following instructions**


5. Make migrations/ Create db.sqlite3

    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

6. Create a super user.
    In Django, if you want to access admin page, you need to create an account with staff status first.
    ```djangotemplate
    python manage.py createsuperuser
    ```
   Then select your username and password. You can bypass a common password for development purposes.
   
7. Run the server on localhost:
    ```bash
    python manage.py runserver
    ```

8. Make the changes and send a PR, referencing the changes.
   

## Contributing
   Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change in the project.

<br>
<br>
<br>
<br>
