const fs = require('fs');

const args = process.argv.slice(2);

function generatePost(title) {

  function capitalizeFirstWordLetter (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const sentenceCaseTitle = capitalizeFirstWordLetter(title);
  const formattedTitle = sentenceCaseTitle.split('-').join(' ');

  const frontMatter = `---
title: "${formattedTitle}"
excerpt: "Lorem ipsum."
coverImage: "/assets/blog/2022/ottawa-office.jpg"
date: "${new Date(Date.now()).toISOString()}"
author:
  name: "sandypockets"
  picture: "/assets/blog/authors/sandypockets_avatar.jpg"
ogImage:
  url: "/assets/blog/2022/ottawa-office.jpg"
---
`

  fs.writeFile(`./_posts/${title}.md`, frontMatter, (err) => {
    if (err) throw err;
    console.log(`Created ${title}.md!`);
    console.log("Don't forget to update the excerpt, coverImage path, and ogImage path in the front matter!");
  });
}

generatePost(args[0]);