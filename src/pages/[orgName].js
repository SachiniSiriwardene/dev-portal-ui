import React from "react";
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import Navbar from '../app/Navbar';
import Footer from '../app/Footer';


export async function getServerSideProps (context) {

    var apiData = null;


    const params =   context.req.headers.host;

    console.log("Context "+ params);

    const orgName = context.params.orgName;

    console.log("Org "+ orgName);
    const content = {}
    const md = {}
 

   const asset  = await fetch('http://localhost:8080/admin/assets?orgName=' + orgName)
   const assetObject = await asset.json()

   if(assetObject !== null && assetObject.orgStyleSheet.length !== 0 ) {
    const styleSheetContent  = await fetch('http://localhost:3001/' + orgName + "/" + assetObject.orgStyleSheet)
    content.style = styleSheetContent
   }

    const res = await fetch('http://localhost:3001/orgTemplate?orgName=' + orgName)
    const htmlContent = await res.text()
    console.log(htmlContent);
    content.orgContent = htmlContent
    const idList = []
    const markdown = []
    for (const markdownFilePath of assetObject.markdown) {
      console.log('http://localhost:3001/'+orgName+markdownFilePath)
      const result = await fetch('http://localhost:3001/'+orgName+ markdownFilePath);
      const markdownContent = await result.text();
      var elementId = markdownFilePath.split('/').pop().split('.')[0];
      md.elementId = markdownContent
          markdown.push(markdownContent)
          idList.push(elementId)
      
  }
  content.markdown = md
  content.id = idList
  content.size = idList.length
   
  console.log("Content object "+ md);

    
    // Pass data to the page via props
    return { props: { content } }

}










export default function Page({content}) {
 
  const idList = content.id
  // idList.forEach((tag, index) => {
  //   ReactDOM.render(<ReactMarkdown source={content.markdown.tag} />, document.getElementById(content.id[tag]))
  // });
  return (
    <>
      <div className="div">
        <Navbar />
        <div id='org-landing-page' dangerouslySetInnerHTML={{__html : content.orgContent}}></div>
        
        <Footer />
      </div>
    </>
  );
}

/**
 * This code was generated by Builder.io.
 */
;

// function Page({params}) {
//  // LoadAndRenderHTML('/orgTemplate?orgName=' + orgName, 'org-landing-page', '/admin/assets?orgName=' + orgName);

//   return (
//     <>
//       <div className="div">
//       <Navbar />
//         <div id='org-landing-page'>
//             <h1>{params.orgName}</h1>
//             <Footer />
//         </div>
//       </div>
//     </>
//   );
// }




 



