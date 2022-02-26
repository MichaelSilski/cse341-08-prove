const fs = require('fs');

function base64Encode(file) {
  const bitmap = fs.readFileSync(file);
  return bitmap.toString('base64');
}

exports.getData = (req, res, next) => {
  base64Image = base64Encode("testImage.jpg");
  res.status(200).json({
    professionalName: "Michael Silski",
    base64Image: base64Image,
    nameLink: { firstName: "Michael", url: "https://byui.instructure.com/profile" },
    primaryDescription: ", Software Engineering Major",
    workDescription1: "Check out my LinkedIn page!",
    workDescription2: "Check out my GitHub page too!",
    linkTitleText: "So cool!",
    linkedInLink: { text: "LinkedIn", link: "https://www.linkedin.com/in/michael-a-silski/" },
    githubLink: { text: "GitHub", link: "https://github.com/MichaelSilski" }
  });
};