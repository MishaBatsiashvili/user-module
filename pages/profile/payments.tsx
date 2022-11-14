import Layout from "../../components/layout/Layout";

export function Payments() {


   return (
      <div className='container mx-auto max-w-5xl px-2'>
         {/* <div className="text-center text-lg font-bold pb-5">
            Card list
         </div> */}

         {/*  */}
         <div className="flex flex-1 justify-between py-5">
            <div>
               💳 ca
            </div>
            <div className="link">
               Edit
            </div>
         </div>
         <div className="flex flex-1 justify-between py-5">
            <div>
               💳 carasdasddname
            </div>
            <div className="link">
               Edit
            </div>
         </div>

         <div className="flex flex-1 justify-between py-5">
            <div>
               💳 my Student Card
            </div>
            <div className="link">
               Edit
            </div>
         </div>


         {/*  */}
         <div className="flex flex-1 justify-center pt-5">
            <button className="btn-primary btn btn-wide ">Add card</button>

         </div>
      </div>
   );
}
export default Payments;


Payments.getLayout = function getLayout(page: any) {
   return (
      <Layout>
         {page}
      </Layout>
   );
};