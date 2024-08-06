/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Tata Consultancy Services',
    position: 'Assistant System Engineer',
    url: 'https://tcs.com',
    startDate: '2021-07-01',
    endDate: '2022-08-01',
    summary: `Developed robust APIs utilizing Java, Spring Boot, and RESTful API design, showcasing expertise in building scalable and high-performance backend systems.
    Created and managed a suite of microservices, harnessing Spring Boot's modularity to streamline deployment processes and ensure enhanced scalability.`,
    highlights: [
      'Optimized data operations by seamlessly integrating applications with databases through Spring Boot Spring Data JPA, ensuring efficient and reliable data transactions across the entire system architecture.',
      'While I was at TCS I had the opportunity to learn HTML, CSS, JS, React, Data Analysis as they provide courses for young employees to learn and explore as a part of TCS Explore program',
    ],
  },
  {
    name: 'Kranion Technologies Pvt Ltd',
    position: 'Full-stack developer',
    url: 'https://www.krangelo.com/',
    startDate: '2020-07-01',
    endDate: '2021-07-01',
    summary: `Kranion is into Application Development (.Net, Java, Oracle, Microsoft Technologies,
    Mainframes, SAP (All Modules), Data warehousing Technologies, ERP, Embedded Systems and Testing.`,
    highlights: [
      'I have worked and trained as a Java full-stack developer. My job is to help update the application and integrate it for better performance',
      'Learnt to use React, Node.js which helped me build this website/portfolio of mine',
    ],
  },
  {
    name: 'BareLogic Solutions Pvt Ltd',
    position: 'Web Development Intern',
    url: 'https://www.barelogics.com/',
    startDate: '2020-05-01',
    endDate: '2020-07-01',
    summary: `BareLogics is a startup company where they have small working groups working and learning on small projects in hyderabad.
    I have worked in a team of three to design a user-friendly bus ticket booking web application, employing HTML, CSS, and JavaScript to create an intuitive and visually appealing frontend.`,
    highlights: [
      'We have integrated Java Servlet Pages (JSP) with a MySQL backend to deliver dynamic content and handle database interactions, ensuring a smooth and efficient booking experience for users.',
    ],
  },
  {
    name: 'University of Maryland Baltimore County',
    position: 'Graduate Assistant',
    url: 'https://umbc.edu/',
    startDate: '2024-02-01',
    endDate: '2024-05-01',
    summary: `I have worked as a Grader for Data Visualization course under Dr.Rebecca Williams.
    My job is to evaluate and analize the work of the students to give them scores for their projects and other works as well.
    I have pursued this course in my first semester of my 2 year Masters program and I have learnt several things in the field of visualization. `,
    highlights: [
      'I have done a project based on effectively visualizing the continuous COVID dataset and have build various efficient visualizations under the same professor.',
      'As a part of this project I have learnt to use effective data visualization tools like Tableau, Matplotlib',
      'I have built a Dashboard to visualize the COVID-19 Dataset.',
    ],
  },
];

export default work;
