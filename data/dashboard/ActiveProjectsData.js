// import {useEffect, useState} from 'react';

var data = [
    {
        id:1,
        projectName : "Dropbox Design System",
        priority : "114",
         priorityBadgeBg : 'info',
        hours: 34,
        progress: 15,
        brandLogo:'/images/brand/dropbox-logo.svg',
        brandLogoBg : 'bg-white',
        members:[
         {image:'https://res.cloudinary.com/ddjjyf2fw/image/upload/v1715739043/nourman_log_app/avatar-1.jpg'},
         {image:'https://res.cloudinary.com/ddjjyf2fw/image/upload/v1715739040/nourman_log_app/avatar-3.jpg'},
        //  {image:'images/avatar/avatar-3.jpg'}
        ] 
     },
     {
         id:2,
         projectName : "Slack Team UI Design",
         priority : "114",
         priorityBadgeBg : 'info',
         hours: 47,
         progress: 35,
         brandLogo:'/images/brand/slack-logo.svg',
         brandLogoBg : 'bg-white',
         members:[
            {image:'https://res.cloudinary.com/ddjjyf2fw/image/upload/v1715739043/nourman_log_app/avatar-1.jpg'},
            {image:'https://res.cloudinary.com/ddjjyf2fw/image/upload/v1715739040/nourman_log_app/avatar-3.jpg'},
            //  {image:'images/avatar/avatar-6.jpg'}
         ] 
      },
      {
         id:3,
         projectName : "GitHub Satellite",
         priority : "114",
         priorityBadgeBg : 'info',
         hours: 120,
         progress: 75,
         brandLogo:'/images/brand/github-logo.svg',
         brandLogoBg : 'bg-white',
         members:[
            {image:'https://res.cloudinary.com/ddjjyf2fw/image/upload/v1715739043/nourman_log_app/avatar-1.jpg'},
            {image:'https://res.cloudinary.com/ddjjyf2fw/image/upload/v1715739040/nourman_log_app/avatar-3.jpg'},
            //  {image:'images/avatar/avatar-9.jpg'}
         ] 
      },
      {
         id:4,
         projectName : "3D Character Modelling",
         priority : "114",
         priorityBadgeBg : 'info',
         hours: 89,
         progress: 63,
         brandLogo:'/images/brand/3dsmax-logo.svg',
         brandLogoBg : 'bg-white',
         members:[
            {image:'https://res.cloudinary.com/ddjjyf2fw/image/upload/v1715739043/nourman_log_app/avatar-1.jpg'},
            {image:'https://res.cloudinary.com/ddjjyf2fw/image/upload/v1715739040/nourman_log_app/avatar-3.jpg'},
            //  {image:'images/avatar/avatar-12.jpg'}
         ] 
      },
      {
         id:3,
         projectName : "Webapp Design System",
         priority : "114",
         priorityBadgeBg : 'info',
         hours: 108,
         progress: 100,
         brandLogo:'/images/brand/layers-logo.svg',
         brandLogoBg : 'bg-primary',
         members:[
            {image:'https://res.cloudinary.com/ddjjyf2fw/image/upload/v1715739043/nourman_log_app/avatar-1.jpg'},
            {image:'https://res.cloudinary.com/ddjjyf2fw/image/upload/v1715739040/nourman_log_app/avatar-3.jpg'},
            //  {image:'images/avatar/avatar-15.jpg'}
         ] 
      },
      {
         id:4,
         projectName : "Github Event Design",
         priority : "114",
         priorityBadgeBg : 'info',
         hours: 120,
         progress: 75,
         brandLogo:'/images/brand/github-logo.svg',
         brandLogoBg : 'bg-white',
         members:[
            {image:'https://res.cloudinary.com/ddjjyf2fw/image/upload/v1715739043/nourman_log_app/avatar-1.jpg'},
            {image:'https://res.cloudinary.com/ddjjyf2fw/image/upload/v1715739040/nourman_log_app/avatar-3.jpg'},
            //  {image:'images/avatar/avatar-18.jpg'}
         ] 
      }
];

const ActiveProjectsData = ()=>{
   
   // const [dataTable, setDataTable] = useState([{id:'', log_time: '', no_perkara: '', namaAsisten: 'John', log_text: '', status: 'Active'}]);

   // useEffect(() => {

   //    const intervalId = setInterval(() => {
      
   //      fetch("https://www.tangkapdata2.my.id/get_log")
   //      .then(
   //        response => response.json()
  
   //        )
   //      .then(
   //          datas => {
   //            setDataTable(datas);
   //          }
   //         )
           
   //        }, 5000);
          
   //      }, []);
  
   // console.log(dataTable);

    return data;
}

export default ActiveProjectsData();
