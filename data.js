const team = [
    {
      teamname:'example',
      name: "Test1",
      college: "College institue of technology",
      batch: 2016,
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
      photo: "rishabh.jpg",
      github:"www.google.com"
    },
    {
      teamname:'example',
      name: "Test1",
      college: "College institue of technology",
      batch: 2016,
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
      photo: "rishabh.jpg",
      github:"www.google.com"
    },
    {
      teamname:'example',
      name: "Test1",
      college: "College institue of technology",
      batch: 2016,
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
      photo: "rishabh.jpg",
      github:"www.google.com"
    },
    {
      teamname:'example',
      name: "Test1",
      college: "College institue of technology",
      batch: 2016,
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
      photo: "rishabh.jpg",
      github:"www.google.com"
    },
    {
      teamname:'example',
      name: "Test1",
      college: "College institue of technology",
      batch: 2016,
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
      photo: "rishabh.jpg",
      github:"www.google.com"
    },
    {
      teamname:'Ojas', 
      name: "test1",
      college: "Cat",
      batch: 2016,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      teamname:'Ojas',
      name: "test3",
      college: "Cat",
      batch: 2016,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      teamname:'Ojas',
      name: "test3",
      college: "Cat",
      batch: 2016,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    }
  ];


  function memberTemplate(member) {
    return `
    <div class="col-xl-7 col-lg-7 col-md-6 glass-effect d-flex mx-auto">
    <div class="card profile-header">
        <div class="body p-2 mt-2">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-12 glass-effect p-4">
                    <div class="profile-image float-md-right"> <img
                            src=../photo/${member.photo}
                            alt=""> </div>
                </div>
                <div class="col-lg-8 col-md-8 col-12 pr-4">
                    <h4 class="mt-2 mb-0"><strong>${member.name}</strong></h4>
                    <p class="mt-2">Batch: ${member.batch} </p>
                    
                    <hr>
                    <span class="college">${member.college}</span>
                    <p></p>
                    <p>${member.quote}</p>
                    <div>
                        
                        <button type="button" class="btn btn-grey float-center" href=${member.github}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-github" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            Github
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
    `;
  }

  
