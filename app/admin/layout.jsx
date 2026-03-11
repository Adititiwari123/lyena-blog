import AuthContextProvider from '@/lib/contexts/AuthContext.jsx'
import Sidebar from './components/Sidebar'
export default function Layout ({children}){
    return<>
    
    <AuthContextProvider>
        <section className='flex'>
            <Sidebar />
            {children}
        </section>
         
    </AuthContextProvider>
  
    </>
}