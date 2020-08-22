import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Case from "../components/Case";

// const dummyCases = ["World", "USA", "Brazil"];
const Cases = ({cases}) => {
  return(
  <Layout title="Cases | Covid Anchor">
     <div className="content">
     <h1>Bayata's App</h1>

      <div className="cases">
         {cases.map((item, key) => {
         return<Case key={key}caseData={item}/>;
         })} 
      </div>

         {/* STYLING */}
         <style jsx>
         {`
         .content{
            width:100%;
            height:100%;
            padding: 4rem;
         }
         .cases{
            width:100%;
            height:100%;
            display: grid;
            grid-template-columns:repeat(auto-fit, minmax(30rem, 1fr));
            gap:4rem;
         }
         `}
         </style>
     </div>
  </Layout>
  );
}

// Get Cases
const CASE_API = "http://127.0.0.1:5000";

export async function getStaticProps(){
   const response = await fetch(CASE_API)
   const data = await response.json();

   return {
      props:{
         cases:data,
      },
   };
};

export default Cases;



