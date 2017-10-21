var React                   = require('react');
var ReactDOM                = require('react-dom');
var createReactClass 				= require('create-react-class');
var Home				 		 				= require("./components/BigPane.jsx");
var Page				 		 				= require("./components/Page.jsx");
var Navbar				 		 			= require("./components/Navbar.jsx");

var redirectURL = function(link) {
	window.location.assign(link)
}

var homePage = function() {
	ReactDOM.render(
		<div>
			<Navbar
				button1={homePage}
				label1="HOME"
				button2={aboutPage}
				label2="ABOUT"
				button3={experiencePage}
				label3="EXPERIENCE"
				button4={projectsPage}
				label4="PROJECTS"/>
			<Home background='src/images/touchbird_tan.jpg'
				title='DEVELOPER'
				subtitle='Charles Tan'/>
		</div>,
		document.getElementById('container')
	);
};

var aboutPage = function() {
	ReactDOM.render(
		<div>
			<Navbar
				button1={homePage}
				label1="HOME"
				button2={aboutPage}
				label2="ABOUT"
				button3={experiencePage}
				label3="EXPERIENCE"
				button4={projectsPage}
				label4="PROJECTS"/>
			<Page
				color='#E5F4E3'
				title='ABOUT'
				description=
					"
					<div>Hi, how are you? I'm glad you made it to my website!</div>
					<div>
						<ul><u><strong>Things about me:</strong></u>
							<li>Junior at Brown University</li>
							<li>Studying Computer Science</li>
							<li>Born and raised in Austin, TX</li>
							<li>D1 Varsity Men's Tennis</li>
							<li>Eagle Scout</li>
						</ul>
						<ul><u><strong>Things I like:</strong></u>
							<li>Camping</li>
							<li>Ice Cream</li>
							<li>Old Music</li>
							<li>Video Games</li>
							<li>Spurs</li>
						</ul>
						<ul><u><strong>Things I don't like:</strong></u>
							<li>Poorly made BBQ</li>
							<li>Heights</li>
							<li>Stepping in gum</li>
							<li>Mean people</li>
							<li>Mosquitos</li>
						</ul>
					</div>
					"
				/>
			</div>,
		document.getElementById('container')
	);
};

var experiencePage = function() {
	ReactDOM.render(
		<div>
			<Navbar
				button1={homePage}
				label1="HOME"
				button2={aboutPage}
				label2="ABOUT"
				button3={experiencePage}
				label3="EXPERIENCE"
				button4={projectsPage}
				label4="PROJECTS"/>
			<Page
				color='#E5F4E3'
				title='EXPERIENCE'
				description=
					"
					<div>
						<ul><u><strong>Classes I've Taken:</strong></u>
							<li>Introduction to Object-Oriented Programming</li>
							<li>Introduction to Algorithms and Data Structures</li>
							<li>Introduction to Discrete Structures and Probability</li>
							<li>Introduction to Computer Systems</li>
							<li>Directions: The Matrix in Computer Science</li>
							<li>User Interfaces and User Experience</li>
							<li>Introduction to Software Engineering</li>
							<li>Creating Modern Web Applications</li>
							<li>Statistical Inference I</li>
							<li>Deep Learning</li>
							<li>Design and Analysis of Algorithms</li>
						</ul>
						<ul><u><strong>Conversable Inc Internships Summer '17</strong></u>
							<li>Worked as Full-Stack Engineer to build chatbots using Go and React</li>
							<li>Wrote over 6,000 lines of production code</li>
							<li>Worked on bots for companies such as CES, Wingstop, Denny's, Marvel, and others</li>
							<li>Developed on platforms such as Facebook, Twitter, Google Home, SMS, and others</li>
						</ul>
						<ul><u><strong>Conversable Inc Internships Summer '16</strong></u>
							<li>Worked as Full-Stack Engineer to build chatbots using Go</li>
							<li>Worked on writing code, quality assurance, and competitive research</li>
							<li>Developed on platforms such as Facebook, Twitter, SMS, and others</li>
						</ul>
						<div><a onCLick={window.location.assign('http://conversable.com/')}>Conversable Website</a></div>
					</div>
					"
				/>
			</div>,
		document.getElementById('container')
	);
};

var projectsPage = function() {
	ReactDOM.render(
		<div>
			<Navbar
				button1={homePage}
				label1="HOME"
				button2={aboutPage}
				label2="ABOUT"
				button3={experiencePage}
				label3="EXPERIENCE"
				button4={projectsPage}
				label4="PROJECTS"/>
			<Page
				color='#E5F4E3'
				title='PROJECTS'
				description=
					"
					<div>Checkout my projects! To request code email ctan417@gmail.com</div>
					<div>
						<ul><u><strong>Maps</strong></u>
							<li>Implemented our version of Maps for the city of Providence. Data for Maps stored in SQL database. Java backend, Javascript frontend.</li>
							<li>Functionality: Zoom in and out, pan to view map, find shortest path between two locations by clicking or by typing addresses/locations</li>
							<li>Data structures: KD-Tree (store Locations using latitude/longitude), Trie (autocorrect)</li>
							<li>Algorithms: Djikstra's (find shortest path)</li>
							<li>Paired project with Victor Chiang</li>
						</ul>
						<ul><u><strong>Fibbage</strong></u>
							<li>Implemented our desktop version of the game Fibbage (<a onCLick={window.location.assign('https://jackboxgames.com/project/fibbage/')}>Original Fibbage Game</a>). Java backend, Javascript frontend.</li>
							<li>Functionality: Connects online users via room structure, keeps track of scoring, users have live chat (web-sockets), computer generated inputs</li>
							<li>My role: Worked mainly of frontend, but contributed to all parts of the project</li>
							<li>Group project with Luis Aguirre, Colm Kilcoin, Jack Neary</li>
						</ul>
						<ul><u><strong>Plansmart</strong></u>
							<li>Created a web-app to help teams organize their tasks. Node backend, Javascript frontend, SQL database.</li>
							<li>Functionality: Create projects, todos, and events and organize them into cards. Can sort your cards and search for projects.</li>
							<li>My role: Full-Stack Engineer working on all parts of the project</li>
							<li>Group project with Jacob Jaffe, Margaret Matthieu, Carlos Gomez</li>
							<li><a onCLick={window.location.assign('https://plansmart.herokuapp.com/')}>Plansmart website</a> (Note: our Nodemailer is broken so we can't currently send confirmation email)</li>
						</ul>
						<ul><u><strong>Poker Equity</strong></u>
							<li>Created a calculator to find probability of winning given a poker hand.</li>
							<li>More of a project to familiarize ourselves with using Python to calculate probabilities</li>
							<li>Paired project with Alex Dai</li>
						</ul>
						<ul><u><strong>Website</strong></u>
							<li>Created this website you're looking at now using React</li>
							<li>Individual project</li>
						</ul>
					</div>
					"
				/>
			</div>,
		document.getElementById('container')
	);
};

ReactDOM.render(
	<div>
		<Navbar
			button1={homePage}
			label1="HOME"
			button2={aboutPage}
			label2="ABOUT"
			button3={experiencePage}
			label3="EXPERIENCE"
			button4={projectsPage}
			label4="PROJECTS"/>
		<Home
			background='src/images/touchbird_tan.jpg'
			title='DEVELOPER'
			subtitle='Charles Tan' />
	</div>,
	document.getElementById('container')
);
