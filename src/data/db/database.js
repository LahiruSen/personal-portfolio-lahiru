import Mock from "../mock";

const database = {
  information: {
    name: 'Lahiru Senevirathne',
    aboutContent: "Passionate and dedicated Senior Software Engineer with a robust background in Computer Science and Engineering, demonstrating a 4-year track record of excellence in full-stack development.",
    age: '',
    phone: '',
    nationality: '',
    language: 'English, Sinhala',
    email: 'lahirurc1st@gmail.com',
    address: 'Melbourne, Australia',
    freelanceStatus: '',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/lahirusenevirathna/',
      dribbble: '',
      github: 'https://github.com/LahiruSen',
      medium: 'https://medium.com/@lahiru.16'
    },
    brandImage: '/images/lahiru.jpg',
    aboutImage: '/images/lahiru_standing.jpg',
    aboutImageLg: '/images/lahiru_standing.jpg',
    cvfile: '/files/lahiru_cv.pdf'
  },
  services: [
    {
      title: "Back-End Development",
      icon: 'java',
      details: "With a strong background in backend development, I specialize in using Java and the Spring Boot framework to create robust and efficient applications. My experience includes developing RESTful APIs and Java libraries that are both scalable and maintainable. Additionally, I have knowledge in creating REST APIs with Node.js using the ExpressJS framework, allowing me to deliver versatile backend solutions. My portfolio highlights various projects where I've effectively integrated complex backend functionalities, ensuring seamless data flow and optimal performance for diverse applications."
    },
    {
      title: "Front-End Development",
      icon: 'react',
      details: "As a seasoned fullstack developer, I have honed my skills in JavaScript with a strong focus on React.js. I am adept at creating responsive, user-friendly web applications that provide seamless user experiences, leveraging my expertise to develop clean, efficient, and maintainable code. My portfolio showcases a range of projects where I've successfully translated complex requirements into visually appealing and functional web solutions."
    },
    {
      title: "Data Integration Pipelines",
      icon: 'cloud-sync',
      details: "I have extensive experience in developing data integration pipelines using Java with Apache Beam and Amazon Managed Service for Apache Flink (formerly known as Kinesis Data Analytics). My work involves leveraging Confluent Kafka and Avro schemas to ensure seamless data synchronization between various applications. This expertise allows me to build efficient and scalable data processing solutions that facilitate real-time data integration and analytics. My portfolio showcases projects where I successfully implemented these technologies to handle complex data workflows, ensuring high performance and reliability."
    }
  ],
  reviews: [
    {
      id: 1,
      content: 'I had the pleasure of working closely with Lahiru Senevirathne during my time at Sysco LABS, where he significantly contributed to our teams and projects. Lahiru is an exceptional team member known for his excellent mentoring abilities and his remarkable capacity for quick learning. One remarkable example of Lahiru\'s dedication is his rapid acquisition of COBOL and MicroFocus Enterprise server skills, which proved invaluable during our legacy application transformation efforts in the Supply Chain & Merchandising (SCM) domain. His ability to quickly grasp new and legacy technologies and domains is truly impressive, and he consistently shares this knowledge with his colleagues, creating a collaborative and supportive work environment. Lahiru\'s mentoring skills are equally commendable. He guides and supports junior team members, helping them grow and excel in their roles. His dedication, adaptability, and mentorship make him a valuable asset to any team and organization. I strongly recommend Lahiru for his outstanding contributions, commitment to learning, and mentoring capabilities. I am confident that he will continue to excel in his future endeavors. Wishing him continued success in all his future endeavors.',
      author: {
        name: 'Chinthaka Sandaruwan',
        designation1: 'Data Engineering Consultant at SEB',
        designation2: 'Senior Consultant at AgileSearch',
        url: 'https://www.linkedin.com/in/sanda-chinthaka/'
      }
    },
    {
      id: 2,
      content: "I first met Lahiru when i interviewed him fresh out of university, i was immediately impressed with his knowledge, skill and intelligence. He had even obtained the AWS Solutions Architect Associate certification as an undergraduate, which was unheard of at that time. And after hiring him and having him within my team, he impressed me even more. He joined our software development team and was able to grasp the technologies and development techniques that we used quickly and was able to be productive within a very short period of time. When we had a critical production re-deployment of a re-hosted mainframe, we needed an SRE, but we didn't have an SRE team at that time, even though Lahiru was a Software Engineer, he was able to quickly come onboard the project and immediately help out with delivery. His work was highly appreciated by the on-shore engineering managers as well. He was the expert in various proprietary software components that we used within that project. Lahiru has a broad range of skills, and knowledge of a broad range of technologies and concepts. He always delivers at a high level of quality and commitment. I can always recommend him to anyone/any project, with very high confidence.",
      author: {
        name: 'Dishan Metihakwala',
        designation1: 'Technical Architecture Specialist at Accenture UK',
        url: 'https://www.linkedin.com/in/dishan-metihakwala-4096a816/'
      }
    }
  ],
  skills: [
    {
      title: "Java",
      value: 80
    },
    {
      title: "JavaScript",
      value: 75
    },
    {
      title: "Python",
      value: 70
    },
    {
      title: "SQL",
      value: 70
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "SENCAT",
      subtitle: "SENCAT stands for Sentiment Categorization. This platform allows you to find sentiment (subjective information) of Sinhala and English texts using novel deep learning models. All you need is to call an API request containing your text string. Our backend will then process the text and give you the sentiment.",
      imageUrl: "/images/blog1-sentiment_analysis.jpg",
      largeImageUrl: ["/images/blog1-sentiment_analysis.jpg"],
      url: 'https://sencat-lk.web.app/'
    },
    {
      id: 2,
      title: "E Commerce Application",
      subtitle: "Feature-rich e-commerce store application using Node.js, Express.js, and EJS for server-side rendering, adhering to MVC architecture with RESTful API integration.",
      imageUrl: "/images/portfolio-image-2-ecommerce.jpg",
      largeImageUrl: [
        "/images/portfolio-image-2-ecommerce.jpg",
        "/images/portfolio-image-2-ecommerce.jpg"
      ],
      url: 'http://ecs-alb-1-154341350.us-east-1.elb.amazonaws.com/'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2022/08 - Present",
        position: "Senior Software Engineer",
        company: "Sysco Labs Technologies (Private) Limited [Affiliated with Sysco Corporation.]",
        details: "Demonstrated leadership by leading a team in the modernization of interfaces between a legacy ERP system and the Transport Management System (TMS). Spearheaded the development of an advanced data pipeline using Apache Beam and Confluent Kafka, connecting the TMS-exposed GCP Pub/Sub to the ERP DB2 database. The implementation of these data pipelines resulted in an 80% enhancement in overall appointment scheduling effectiveness, showcasing the successful integration of Apache Beam and Confluent Kafka into critical business processes."
      },
      {
        id: 2,
        year: "2021/02 - 2022/08",
        position: "Software Engineer",
        company: "Sysco Labs Technologies (Private) Limited [Affiliated with Sysco Corporation.]",
        details: "Played a key role in the development of a centralized replenishment model with REST API, leveraging Java, the Spring Boot framework, and Talend ETL. The API facilitates CRUD operations on purchase orders and seamlessly integrates with a rule engine, a Spring Boot application built on the Akka framework. The rule engine handles diverse business logic, including pricing, validations, and application of freight rates to purchase orders. Additionally, contributed to the development of a custom business rules library, ensuring efficient sharing of business logic across multiple jobs within the engine application. Further, I implemented a robust integration testing and unit testing strategy achieving an 80% line coverage for enhanced code quality."
      },
      {
        id: 3,
        year: "2014 - 1016",
        position: "Software Engineering Intern",
        company: "Virtusa (Private) Limited",
        details: "Contributed to full-stack web development and NLP projects. Developed a News Classification System to identify NER tags and predict sentiment for fraudulent transaction detection. Enhanced productivity and excellence in the SDLC by contributing to a Project Management Dashboard for the developer environment."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2016/08 - 2021/05",
        graduation: "BSc. Engineering (Hons) in Computer Science and Engineering",
        university: "University of Moratuwa, Sri Lanka",
        details: "Inclued in dean's list for semesters 4,5, and 8."
      },
      {
        id: 2,
        year: "2012/06 - 2015/09",
        graduation: "G.C.E Advanced Level Examination in Physical Science Stream",
        university: "Royal College, Colombo 07, Sri Lanka",
        details: "Mathematics: A, Chemistry: A, Physics: A"
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Sentiment Analysis using Sentence State LSTM (S-LSTM)',
      featuredImage: '/images/blog1-sentiment_analysis.jpg',
      filesource: '../../blog/blog1-sentiment-analysis.md',
      createDay: "19",
      createMonth: 'October',
      createYear: "2020",
      blogUrl: 'https://medium.com/@lahiru.16/sentiment-analysis-using-s-lstm-856f51503106'
    },
    {
      id: 2,
      title: 'My Experience at ScholarX:2020',
      featuredImage: '/images/blog2-scholarX.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "27",
      createMonth: 'June',
      createYear: "2020",
      blogUrl: 'https://medium.com/@lahiru.16/my-experience-at-scholarx-2020-part-1-15e899f57bae'
    }
  ],
  contactInfo: {
    phoneNumbers: ['+94774002815', '+61390159781'],
    emailAddress: ['lahirurc1st@gmail.com'],
    address: "Melbourne, Victoria 3000, Australia"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});