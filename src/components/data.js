import { BiCodeCurly, BiServer } from 'react-icons/bi'
import { MdCropRotate } from 'react-icons/md'
import { FaNetworkWired } from 'react-icons/fa'
import IMG from '../assets/profile-testimony.png'
import IMG1 from '../assets/coffee.jpeg'
import IMG2 from '../assets/food.png'
import IMG3 from '../assets/logo.jpg'
import IMG4 from '../assets/hiking.jpg'
import IMG5 from '../assets/branding.jpg'
import IMG6 from '../assets/data.jpg'


export const skills = [
  {
  icon:
   <>
  <BiCodeCurly/>
  </>,
  heading: "Frontend Skills",
  subheading: "More than 2 years",
  skill_one: "HTML",
  percent_one: "90%",
  skillsbar_one:
   <>
   <div className="skills__percentage skills__html"></div>
  </>, 

  skill_two: "CSS",
  percent_two: "80%",
  skillsbar_two: 
  <>
   <div className="skills__percentage skills__css"></div>
  </>,

  skill_three: "JavaScript",
  percent_three: "60%",
  skillsbar_three: 
  <>
  <div className="skills__percentage skills__js"></div>
  </>,

  skill_four: "React",
  percent_four: "58%",
  skillsbar_four:
  <>
  <div className="skills__percentage skills__react"></div>
  </>,
},
{
  icon:
   <>
  <BiServer/>
  </>,
  heading: "Backend Skills",
  subheading: "More than 1 years",
  skill_one: "Node JS",
  percent_one: "55%",
  skillsbar_one:
   <>
   <div className="skills__percentage skills__node"></div>
  </>,

  skill_two: "MySQL",
  percent_two: "50%",
  skillsbar_two: 
  <>
   <div className="skills__percentage skills__mysql"></div>
  </>,

  skill_three: "MongoDB",
  percent_three: "45%",
  skillsbar_three: 
  <>
  <div className="skills__percentage skills__mongo"></div>
  </>,
},
{
  icon:
   <>
  <MdCropRotate/>
  </>,
  heading: "Design Skills",
  subheading: "More than 5 years",
  skill_one: "Photoshop",
  percent_one: "90%",
  skillsbar_one:
   <>
   <div className="skills__percentage skills__photoshop"></div>
  </>,

  skill_two: "Illustrator",
  percent_two: "87%",
  skillsbar_two: 
  <>
   <div className="skills__percentage skills__illustrator"></div>
  </>,

  skill_three: "Figma",
  percent_three: "85%",
  skillsbar_three: 
  <>
  <div className="skills__percentage skills__figma"></div>
  </>,

  skill_four: "XD",
  percent_four: "80%",
  skillsbar_four:
  <>
  <div className="skills__percentage skills__xd"></div>
  </>,
},
{
  icon:
   <>
  <FaNetworkWired/>
  </>,
  heading: "Networking Skills",
  subheading: "More than 6 months",
  skill_one: "Routing protocols configuration",
  percent_one: "50%",
  skillsbar_one:
   <>
   <div className="skills__percentage skills__routing"></div>
  </>,

  skill_two: "Cisco IOS Command",
  percent_two: "55%",
  skillsbar_two: 
  <>
   <div className="skills__percentage skills__cisco"></div>
  </>,

  skill_three: "Switching and VLAN configuration",
  percent_three: "53%",
  skillsbar_three: 
  <>
  <div className="skills__percentage skills__switcing"></div>
  </>,

  skill_four: "XD",
  percent_four: "80%",
  skillsbar_four:
  <>
  <div className="skills__percentage skills__xd"></div>
  </>,
}
];
export const Data = [
    {
      id: "1",
      title: "Coffee App UI",
      category: "Ui",
      img: IMG1,
      github: "https://github.com/kingorianderson",
      demo: "https://github.com/kingorianderson",
      },
    {
      id: "2",
      title: "Food Ordering",
      category: "Web",
      img: IMG2,
      github: "https://github.com/kingorianderson",
      demo: "https://github.com/kingorianderson",
      },
    {
      id: "3",
      title: "Logo Design",
      category: "Design",
      img: IMG3,
      github: "https://github.com/kingorianderson",
      demo: "https://github.com/kingorianderson",
      },
    {
      id: "4",
      title: "Adventure Landing Page",
      category: "Web",
      img: IMG4,
      github: "https://github.com/kingorianderson",
      demo: "https://github.com/kingorianderson",
      },
    {
      id: "5",
      title: "Branding",
      category: "Design",
      img: IMG5,
      github: "https://github.com/kingorianderson",
      demo: "https://github.com/kingorianderson",
      },
    {
      id: "6",
      title: "Data App",
      category: "Ui",
      img: IMG6,
      github: "https://github.com/kingorianderson",
      demo: "https://github.com/kingorianderson",
       },
  ];

  export const testimonial = [
    {
      avatar: IMG,
      name: "Mwangi j.",
      review: "The attention to detail provided was impressive and his customer service skills are excellent.",
    },
    {
      avatar: IMG,
      name: "Wangari R.",
      review: "I chatted with King'ori. He was very helpful and answered all my questions concerning my web design.",
    },
    {
      avatar: IMG,
      name: "Kipkorir A.",
      review: "We are extremely satisfied with the work he has provided for us and would encourage you to use him in design work for your organisation.",
    }
  ];
  
