import React, {useState} from "react";
const TourCard = ({id, name, info, image, price, onRemove}) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <article className="tour-card">
            {/* display tour image */}
            <img src={image} alt={name} className="tour-image" />
            <div className="tour-info">
                <div className="tour-header">
                    {/* display tour name and price */}
                    <h1>{name}</h1>
                    <h2 className="tour-price">${price}</h2>
                    </div>
                    {/* display tour description. If readMore is true, show full description, otherwise show first 200 characters */}
                    <p>
                        {readMore ? info : `${info.substring(0, 200)}...`}
                        <button className="read-more" onClick={() => setReadMore(!readMore)}>
                            {readMore ? 'Show less' : 'Read more'}
                        </button>
                        </p>
                        {/* button to remove tour from list */}
                        <button className="not-interested" onClick={() => onRemove(id)}>
                            not interested at all
                        </button>
                        </div>
                        </article>
    );
}
   
export default TourCard;  