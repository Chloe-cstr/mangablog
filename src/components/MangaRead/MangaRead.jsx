import MangaCard from '../MangaCard/MangaCard';
import mangas from "../../../data/mangas.json";
import './mangaRead.scss';

const MangaRead = () => {
    const mangasRead = mangas.filter(manga => manga.manga_vedette === false).slice(0, 6);;
    console.log(mangasRead);
    return(
        <div className="read">
            <h2 className='read__title'>Mes mangas</h2>
            <div className='read__card'>
                {mangasRead.map((manga, index) => (
                    <MangaCard 
                        key={index}
                        image={manga.photo_perso}
                        titre={manga.titre}
                        synopsis={manga.synopsis}
                    />
                ))}
            </div>
        </div>
    )
};

export default MangaRead;