/* eslint-disable @next/next/no-img-element */
import Layout from "../../components/layout/Layout";


export function Personal() {


   return (
      <>

         <div className='profile-form'>


            <div className="flex flex-row">
               <div className="flex flex-col items-center">
                  <img className="w-24 h-24 rounded-full "
                     src={"https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1-400x400.jpg.webp"}
                     alt=""
                     width="384"
                     height="512" />
                  <div className="text-lg font-bold">Mr Capybara</div>
               </div>

               <div className="ml-12 flex flex-col font-bold">
                  <div className="flex flex-row justify-between items-center text-lg">Capybara</div>
                  <div className="flex flex-row mt-5">
                     <div className="flex flex-col mr-12">
                        <div>mail</div>
                        <div>lala@lala.com</div>
                     </div>

                     <div className="flex flex-col">
                        <div>number</div>
                        <div>555222111</div>
                     </div>

                  </div>

               </div>
            </div>
         </div>
      </>
   );
}
export default Personal;

Personal.getLayout = function getLayout(page: any) {
   return (
      <Layout>
         {page}
      </Layout>
   );
};