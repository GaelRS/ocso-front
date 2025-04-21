
import ManagerCard from "./_components/ManagerCards";

export default function ManagerLayout({children, count}: {children: React.ReactNode, count: React.ReactNode}) {
   return (
      <>
     <div className="w-4/12 h-[90vh] max-h-[90vh] overflow-hidden overflow-y-auto">
        <ManagerCard />
     </div>
     <div className="w-7/12 flex flex-col justify-center items-center gap-10">
        <div>
            {children}
        </div>
        <div>
            {count}
        </div>

     </div>
    
     </>
   )
}