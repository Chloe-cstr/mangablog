import Button from '../Button/Button';
import './mangaCard.scss';
import PropTypes from 'prop-types';

const MangaCard = ({image, titre, synopsis}) => {
    return(
        <div className='mangacard'>
            <img src={image} alt="" className='mangacard__image'/>
            <div className='mangacard__text'>
                <h3 className='mangacard__text__subtitle'>{titre}</h3>
                <p className='mangacard__text__synopsis'>{synopsis}</p>
                <Button 
                    text="EN SAVOIR PLUS"
                    className="button__full mangacard__text__button"
                    icon="fa-solid fa-arrow-right"
                />
            </div>
        </div>
    )
};

MangaCard.propTypes = {
    image : PropTypes.string.isRequired,
    titre : PropTypes.string.isRequired,
    synopsis : PropTypes.string.isRequired,
}


export default MangaCard;