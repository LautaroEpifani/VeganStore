import Nav from '../components/Nav';
import Novedades from '../components/Novedades/Novedades';
import Slider from '../components/Slider/Slider';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer';
import Video from './Video';






export default function Layout(children) {
  return (


        <div>
        <div className=" w-full bg-slate-300  bg-no-repeat  bg-cover">


                <Nav/>

                <Slider/>

                <Novedades/>

                <Blog/>

                
                <Video/>

                

        </div>     
                <Footer/>

                
        </div>


        


  )
}
