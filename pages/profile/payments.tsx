import Layout from "../../components/layout/Layout";

export function Payments() {


   return (
      <>
         <div>
            payments
         </div>
      </>
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