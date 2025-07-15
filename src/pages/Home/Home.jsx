import Header from '../../components/Header/Header';
import Featured from '../../components/Featured/Featured';
import MangaRead from '../../components/MangaRead/MangaRead';
import Footer from '../../components/Footer/Footer';
import './home.scss';

const Home = () => {
    return(
        <div className='body-container'>
            <Header />
            <div>
                <Featured />
            </div>
            <div className='mangaRead'>
                <MangaRead />
            </div>
            <Footer />
        </div>
    )
};

export default Home;