import type { NextPage } from 'next'
import { PageContainer } from "../components/pageContainer"
import { ListaSorteios } from '@/components/ListaSorteios';
import { ListaGanhadores } from '@/components/ListaGanhadores';



const Home: NextPage = () =>{



    return  <PageContainer >
       <ListaSorteios/>
       <ListaGanhadores/>
    </PageContainer>

}

export default Home;