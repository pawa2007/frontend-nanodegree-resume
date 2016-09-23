/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
	"name":	"John Doe",
	"role":	"Web Developer",
	"welcomeMessage": "Hello World",
	"biopic": "images/fry.jpg",
	"contacts": {
		"mobile": 	"888-555-1212",
		"email": 	"john@example.com",
		"github": 	"pawa2007",
		"location": "Hartford, CT, USA"
	},
	"skills": ["HTML", "CSS", "JavaScript"]
};

var work = {
	"jobs": [
		{
			"employer": 	"First Insurance",
			"title":		"Architect",
			"dates": 		"2000 - To Date",
			"location":		"Hartford, CT, USA",
			"description":	"Worked for the best insurance company"
		},
		{
			"employer": 	"Wholesome Foods",
			"title":		"Designer",
			"dates": 		"1990 - 2000",
			"location":		"Hamden, CT, USA",
			"description":	"Started as developer and grew into designer role"
		}
	]
};

var projects = {
	"projects": [
		{
			"title":		"Online Marketplace",
			"dates":		"2000-2016",
			"description":	"Online marketplace of ecommerce components",
			"images": [
				"images/197x148.gif",
				"images/fry.jpg"
			]
		}
	]
};

var education = {
	"schools": [
		{
			"name": 	"St. Andrews",
			"degree": 	"High School",
			"dates":	"1970-1980",
			"majors": 	["SSC"],
			"location": "Mumbai, India"
		},
		{
			"name": 	"Stanford",
			"degree": 	"Masters",
			"dates":	"1980-1985",
			"majors": 	["CS"],
			"location": "Palo Alto, CA, USA"
		},
		{
			"name": 	"Harvard",
			"degree": 	"MBA",
			"dates":	"1985-2000",
			"majors": 	["Finance", "IT"],
			"location": "Cambridge, MA, USA"
		}
	],
	"onlineCourses": [
		{
			"title": 	"JavaScript Basics",
			"school": 	"Udacity",
			"dates":	"2016",
			"url": 		"https://www.udacity.com"
		}
	]
};

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(skill) {
		$("#skills").append(HTMLskills.replace("%data%",skill));
	});
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(
			HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + 
			HTMLworkTitle.replace("%data%", work.jobs[job].title) +
			HTMLworkDates.replace("%data%", work.jobs[job].dates) +
			HTMLworkLocation.replace("%data%", work.jobs[job].location) +
			HTMLworkDescription.replace("%data%", work.jobs[job].description)
		);
	}
}

displayWork();

//$(document).click(function(loc) {
//  	// your code goes here
//	logClicks(loc.pageX, loc.pageY);
//});

//$("#main").append(internationalizeButton);

/*
function inName(str) {
	var strArr = str.split(" ");
	strArr[0] = strArr[0].toLowerCase();
	strArr[0] = strArr[0][0].toUpperCase() + strArr[0].slice(1);
	strArr[1] = strArr[1].toUpperCase();
	return strArr.join(" ");
}
*/

projects.display = function() {
	$("#projects").append(HTMLprojectStart);
	this.projects.forEach(function(project) {
		$(".project-entry:last").append(
			HTMLprojectTitle.replace("%data%", project.title) +
			HTMLprojectDates.replace("%data%", project.dates) +
			HTMLprojectDescription.replace("%data%", project.description)
		);
		project.images.forEach(function(i) {
			$(".project-entry:last").append(
				HTMLprojectImage.replace("%data%", i)
			);
		});
	});
};
projects.display();

$("#mapDiv").append(googleMap);
initializeMap();
