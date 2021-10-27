
      const LinksSocialMedia = {
        github: 'jaquelinebicalho',
        youtube: 'jakelinygracielly',
        facebook: 'JaquelineBicalho',
        instagram: 'jaquelinebicalho',
        twitter: 'jakelinytec'
      }
      function changeSocialMediaLinks() {
        for (let li of socialLinks.children) {
          const social = li.getAttribute('class')
          li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
        }
      }
      changeSocialMediaLinks()

      function getGitHubProfileInfos(){
const url = `https://api.github.com/users/${LinksSocialMedia.github}`
      
fetch(url)
.then(response=> response.json())
.then(data => {
  userBio.textContent = data.bio
})
}

getGitHubProfileInfos()