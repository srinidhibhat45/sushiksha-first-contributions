const team = [
    {
      teamname:'Ojas',
      name: "test0",
      batch: "Cat",
      college: 2016,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      teamname:'navikaran', 
      name: "test1",
      batch: "Cat",
      college: 2016,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      teamname:'Ojas',
      name: "test3",
      batch: "Cat",
      college: 2016,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    }
  ];


  function memberTemplate(member) {
    return `
      <div class="animal">
      <img class="member-photo" src="${member.photo}">
      <h2 class="member-name">${member.name} <span class="species">(${member.species})</span></h2>
      
      </div>
    `;
  }

