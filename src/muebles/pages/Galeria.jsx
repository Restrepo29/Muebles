import { ImgGalery } from "../components/ImgGalery"






export const Galeria = () => {
  return (
  <>
   <main className="content-principal container">
        <h2 className="text-center">Galeria</h2>

        <ul className="gallery">
            <ImgGalery url={'../assets/img/galeria_01.jpg'}/>

            {/** <li>
                     <a href='../assets/img/galeria_01.jpg' >
                    <img src={'../assets/img/galeria_01.jpg'}alt=""/>
                </a>
            </li>*/}

            <ImgGalery url={'../assets/img/galeria_02.jpg'}/>
            
            {/**
             * <li>
                <a href='../assets/img/galeria_02.jpg'>
                    <img src={'../assets/img/galeria_02.jpg'} alt=""/>
                </a>
            </li>
             */}
              <ImgGalery url={'../assets/img/galeria_03.jpg'}/>

              {/** <li>
                <a href='../assets/img/galeria_03.jpg'>
                    <img src={'../assets/img/galeria_03.jpg'} alt=""/>
                </a>
            </li>*/}
             <ImgGalery url={'../assets/img/galeria_04.jpg'}/>
            {/** <li>
                <a href='../assets/img/galeria_04.jpg'>
                    <img src={'../assets/img/galeria_04.jpg'} alt=""/>
                </a>
            </li> */}
            <ImgGalery url={'../assets/img/galeria_05.jpg'}/>
            {/** <li>
                <a href='../assets/img/galeria_05.jpg'>
                    <img src={'../assets/img/galeria_05.jpg'} alt=""/>
                </a>
            </li>*/}
           <ImgGalery url={'../assets/img/galeria_06.jpg'}/>
            {/** 
             *  <li>
                <a href='../assets/img/galeria_06.jpg'>
                    <img src={'../assets/img/galeria_06.jpg'} alt=""/>
                </a>
            </li>
            */}
             <ImgGalery url={'../assets/img/galeria_07.jpg'}/>

           {/**<li>
                <a href='../assets/img/galeria_07.jpg'>
                    <img src={'../assets/img/galeria_07.jpg'} alt=""/>
                </a>
            </li> */}
                 <ImgGalery url={'../assets/img/galeria_08.jpg'}/>
            {/** 
             * <li>
                <a href='../assets/img/galeria_08.jpg'>
                    <img src={'../assets/img/galeria_08.jpg'} alt=""/>
                </a>
            </li>
            */}
               <ImgGalery url={'../assets/img/galeria_09.jpg'}/>
               {/**
                * <li>
                <a href='../assets/img/galeria_09.jpg'>
                    <img src={'../assets/img/galeria_09.jpg'} alt=""/>
                </a>
            </li>
                */}
            
            
        </ul>

    </main>
  </>
  )
}
