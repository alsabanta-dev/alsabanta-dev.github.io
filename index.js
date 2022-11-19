const about = document.getElementById('about')

window.onload = () => {
	
	var experienceDuration = new Date().getFullYear() - 2018

	about.innerHTML = `Software Developer (Kotlin) with +${experienceDuration} years of experience and strong history of Node.JS Back-End developing, SQL and MongoDB. Seeking to deliver efficient and useful software applications for the world.<br>
	During the past four years I made an average of +10 native Android Kotlin apps (personal, freelancing, for students and Charity organizations) always beating deadlines while maintaining the quality. Worked once with a team with +10 programmers onboard.`

}