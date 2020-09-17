//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "FullStack Engineer (Javascript)",
    cardImage: "images/aiondigital.JPG",
    place: "AionDigital",
    time: "(May2020-present)",
    desp:
      "<li>Working on providing Digital Banking services for banks in UAE .</li> <li> Senior Javascript developer for  Backend</li> <li>Working on Micro Services Architechture (Dockerzing Modules)</li> <li>Have been doing Team Code Reviews</li>",
  },
  {
    title: "Sofware Engineer",
    cardImage: "images/NB.png",
    place: "NextBridge",
    time: "(Jan 2018-April 2020)",
    desp:
      "<li>Worked As A Php Engineer .</li><li>Worked in Diffrenct Technologies like Raw Php and Laravel for Making Diffrent Project</li><li>Worked On construction Related Apps Like ZeroDocs</li><li>Started Working in various Javascrip Project as a junior developer</li>",
  },
  {
    title: "Research Intern",
    cardImage: "images/HTMLPro.png",
    place: "HTMLPro",
    time: "(September 2017-December 2017 )",
    desp:
      "<li>Worked as R&D Engineer</li><li>Worked on OCR (OPTICAL CHARACTER RECOGNITION)</li><li>Customize Google Tesseract with our Trained Data via KNN to serve our use case</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

// Mentorship Card

const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "HakinCode",
    image: "images/experience-page/hakin.png",
    time: "06/2020 - 08/2020",
    desp:
      "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp }) =>
      (output += `        
      <div class="col-sm-6">
      <div class="card card2">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p>${time}</p>
        </div>
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2">${desp}</div>
        </ul>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
