import {
	Briefcase,
    ListTask,
    People,
    Bullseye
} from 'react-bootstrap-icons';

export const ProjectsStats = [
    {
       id:1,
       title : "Perkara",
       value : 18,
       icon: <Briefcase size={18}/>,
       statInfo: '<span className="text-dark me-2">2</span> Completed' 
    },
    {
        id:2,
        title : "Klien",
        value : 132,
        icon: <People size={18}/>,
        statInfo: '<span className="text-dark me-2">&nbsp;</span> ' 
     },
     {
        id:3,
        title : "Log perkara",
        value : 12,
        icon: <ListTask size={18}/>,
        statInfo: '<span className="text-dark me-2">&nbsp;</span> ' 
     },
   //   {
   //      id:4,
   //      title : "Productivity",
   //      value : '76%',
   //      icon: <Bullseye size={18}/>,
   //      statInfo: '<span className="text-dark me-2">5%</span> Completed' 
   //   }
];
export default ProjectsStats;
