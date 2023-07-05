const teamList = [
  {
    name: "John Marshall",
    team_title: "Creative Nerds",
    img_src: "http://deothemes.com/envato/enigma/html/img/team_1.jpg",
    description:
      "Our web design team will spend time with our digital marketing team.",
  },
  {
    name: "John Marshall",
    team_title: "Creative Nerds",
    img_src: "http://deothemes.com/envato/enigma/html/img/team_2.jpg",
    description:
      "Our web design team will spend time with our digital marketing team.",
  },
  {
    name: "Michael Cartney",
    team_title: "Designer",
    img_src: "http://deothemes.com/envato/enigma/html/img/team_3.jpg",
    description:
      "Our web design team will spend time with our digital marketing team.",
  },
];

function OurTeam() {
  let teams = teamList.map((team) => {
    return (
      <div class='col-md-4 col-sm-6 team-wrap'>
        <div class='team-member text-center'>
          <div class='team-img'>
            <img src={team.img_src} alt='' />
            <div class='overlay'>
              <div class='team-details text-center'>
                <p>{team.description}</p>
                <div class='socials mt-20'>
                  <a href='#'>
                    <i class='fa fa-facebook'></i>
                  </a>
                  <a href='#'>
                    <i class='fa fa-twitter'></i>
                  </a>
                  <a href='#'>
                    <i class='fa fa-google-plus'></i>
                  </a>
                  <a href='#'>
                    <i class='fa fa-envelope'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h6 class='team-title'>{team.name}</h6>
          <span>{team.team_title}</span>
        </div>
      </div>
    );
  });
  return (
    <div className='our-team'>
      <div class='container-fluid'>
        <div class='row heading'>
          <div class='col-md-6 col-md-offset-3'>
            <h2 class='text-center bottom-line'>Meet Our Team</h2>
            <p class='subheading text-center'>Creative Nerds</p>
          </div>
        </div>

        <div class='row team-row'>{teams}</div>
      </div>
    </div>
  );
}

export default OurTeam;
