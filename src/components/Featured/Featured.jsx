import mangas from "../../../data/mangas.json";
import Button from "../Button/Button";
import './featured.scss';

const Featured = () => {
    const mangaVedette = mangas.find(manga => manga.manga_vedette === true);
    console.log(mangaVedette);
    return(
        <div className="featured">
            <div className="featured__img">
                {mangaVedette && (
                    <img
                        className="featured__img--width"
                        src={mangaVedette.photo_perso}
                        alt={`Personnage principal de ${mangaVedette.titre}`}
                    />
                )}
            </div>
            <div className="featured__text">
                <h1>Manga en vedette</h1>
                {mangaVedette && (
                    <h2 className="featured__text__subtitle">
                        {mangaVedette.titre} de {mangaVedette.auteur}
                    </h2>
                )}
                <Button 
                    text="LIRE MAINTENANT"
                    className="button__full featured__text__button"
                    link="#contact"
                    icon="fa-solid fa-arrow-right"
                />
            </div>
        </div>
    )
};

export default Featured;