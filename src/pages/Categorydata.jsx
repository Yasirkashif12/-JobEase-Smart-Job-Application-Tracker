const Categorydata = [
{
  id: '1',
  name: 'Banking',
  bgColor: 'bg-gradient-to-r from-green-400 to-blue-500',
  jobs: [
    {
      id: '101',
      title: 'Bank Manager',
      location: 'Karachi',
      salary: 'PKR 80,000',
      type: 'Full-time',
      description: 'Manage banking operations.',
    },
    {
      id: '102',
      title: 'Loan Officer',
      location: 'Lahore',
      salary: 'PKR 60,000',
      type: 'Full-time',
      description: 'Handle loan applications.',
    },
    {
      id: '103',
      title: 'Credit Analyst',
      location: 'Islamabad',
      salary: 'PKR 70,000',
      type: 'Full-time',
      description: 'Analyze credit data and financial statements.',
    },
    {
      id: '104',
      title: 'Account Officer',
      location: 'Multan',
      salary: 'PKR 65,000',
      type: 'Full-time',
      description: 'Manage client accounts and banking queries.',
    },
  ],
},
  {
    id: '2',
    name: 'Frontend Development',
        bgColor: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500', // Bright and eye-catching

    jobs: [
      {
        id: '201',
        title:'React Developer',
        location: 'Remote',
        salary: 'PKR 120,000',
        type: 'Remote',
        description: 'Build UIs using React.js',
      },
    ],
  },
  {
    id:'3',
    name:'Backend Development',
   bgColor:' bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600',

    jobs:[
      {
        id:'301',
        title:'Node.js Developer',
        location:'karachi',
        salary:'PKR 150,000',
        type:'Full Time',
          description: 'Develop scalable server-side applications using Node.js and Express.',

      },
      {
              id: '302',
      title: 'Python Django Developer',
      location: 'Remote',
      salary: 'PKR 140,000',
      type: 'Remote',
      description: 'Build and maintain web applications using Python and Django framework.',

      }
    ]
  },
  {
  id: '4',
  name: 'Mobile App Development',
  bgColor: 'bg-gradient-to-r from-yellow-400 to-red-400',
  jobs: [
    {
      id: '401',
      title: 'Flutter Developer',
      location: 'Remote',
      salary: 'PKR 100,000',
      type: 'Remote',
      description: 'Build cross-platform apps using Flutter.',
    },
    {
      id: '402',
      title: 'Android Developer',
      location: 'Karachi',
      salary: 'PKR 90,000',
      type: 'Full-time',
      description: 'Develop native Android apps using Kotlin.',
    },
  ],
},
{
  id: '5',
  name: 'UI/UX Design',
  bgColor: 'bg-gradient-to-r from-indigo-400 to-purple-600',
  jobs: [
    {
      id: '501',
      title: 'UI Designer',
      location: 'Remote',
      salary: 'PKR 70,000',
      type: 'Remote',
      description: 'Design beautiful user interfaces for mobile and web apps.',
    },
    {
      id: '502',
      title: 'UX Researcher',
      location: 'Lahore',
      salary: 'PKR 75,000',
      type: 'Full-time',
      description: 'Conduct user research and usability testing.',
    },
  ],
},
{
  id: '6',
  name: 'Digital Marketing',
  bgColor: 'bg-gradient-to-r from-pink-300 to-yellow-300',
  jobs: [
    {
      id: '601',
      title: 'SEO Specialist',
      location: 'Islamabad',
      salary: 'PKR 60,000',
      type: 'Full-time',
      description: 'Improve website rankings through SEO strategies.',
    },
    {
      id: '602',
      title: 'Content Marketer',
      location: 'Remote',
      salary: 'PKR 55,000',
      type: 'Remote',
      description: 'Create and promote engaging content.',
    },
  ],
},
{
  id: '7',
  name: 'Cybersecurity',
  bgColor: 'bg-gradient-to-r from-gray-700 to-black',
  jobs: [
    {
      id: '701',
      title: 'Security Analyst',
      location: 'Karachi',
      salary: 'PKR 100,000',
      type: 'Full-time',
      description: 'Monitor and respond to security threats.',
    },
    {
      id: '702',
      title: 'Penetration Tester',
      location: 'Remote',
      salary: 'PKR 120,000',
      type: 'Remote',
      description: 'Test systems for vulnerabilities.',
    },
  ],
},
{
  id: '8',
  name: 'Cloud Computing',
  bgColor: 'bg-gradient-to-r from-blue-300 to-white',
  jobs: [
    {
      id: '801',
      title: 'AWS Cloud Engineer',
      location: 'Remote',
      salary: 'PKR 130,000',
      type: 'Remote',
      description: 'Manage AWS infrastructure and services.',
    },
    {
      id: '802',
      title: 'DevOps Engineer',
      location: 'Lahore',
      salary: 'PKR 140,000',
      type: 'Full-time',
      description: 'Automate deployments and manage CI/CD pipelines.',
    },
  ],
},
{
  id: '9',
  name: 'Data Science',
  bgColor: 'bg-gradient-to-r from-green-300 to-blue-300',
  jobs: [
    {
      id: '901',
      title: 'Data Analyst',
      location: 'Islamabad',
      salary: 'PKR 90,000',
      type: 'Full-time',
      description: 'Analyze and visualize data using Python.',
    },
    {
      id: '902',
      title: 'Machine Learning Engineer',
      location: 'Remote',
      salary: 'PKR 150,000',
      type: 'Remote',
      description: 'Build ML models for prediction and classification.',
    },
  ],
},
{
  id: '10',
  name: 'Quality Assurance',
  bgColor: 'bg-gradient-to-r from-orange-400 to-red-500',
  jobs: [
    {
      id: '1001',
      title: 'QA Engineer',
      location: 'Lahore',
      salary: 'PKR 80,000',
      type: 'Full-time',
      description: 'Test web and mobile applications for bugs.',
    },
    {
      id: '1002',
      title: 'Automation Tester',
      location: 'Remote',
      salary: 'PKR 95,000',
      type: 'Remote',
      description: 'Create automated test scripts using Selenium.',
    },
  ],
},
{
  id: '11',
  name: 'Technical Support',
  bgColor: 'bg-gradient-to-r from-gray-200 to-gray-500',
  jobs: [
    {
      id: '1101',
      title: 'Support Engineer',
      location: 'Karachi',
      salary: 'PKR 50,000',
      type: 'Full-time',
      description: 'Assist clients with technical issues.',
    },
    {
      id: '1102',
      title: 'IT Helpdesk',
      location: 'Multan',
      salary: 'PKR 45,000',
      type: 'Full-time',
      description: 'Provide technical support and troubleshooting.',
    },
  ],
},
{
  id: '12',
  name: 'Project Management',
  bgColor: 'bg-gradient-to-r from-teal-400 to-cyan-600',
  jobs: [
    {
      id: '1201',
      title: 'Project Manager',
      location: 'Remote',
      salary: 'PKR 130,000',
      type: 'Remote',
      description: 'Manage project scope, time, and resources.',
    },
    {
      id: '1202',
      title: 'Scrum Master',
      location: 'Lahore',
      salary: 'PKR 125,000',
      type: 'Full-time',
      description: 'Facilitate agile development process and sprints.',
    },
  ],
}









];

export default Categorydata;
