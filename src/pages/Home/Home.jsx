import Header from '../../components/Header/Header';
import Featured from '../../components/Featured/Featured';

const Home = () => {
    return(
        <div className='body-container'>
            <Header />
            <div>
                <Featured />
            </div>
        </div>
    )
};

export default Home;