import "../css/image.css"

const Image = ({ imageUrl, name }) => {
    return (
        <div className="image-container">
            <img src={imageUrl} alt="superhero-name" />
            <h2>{name}</h2>
        </div>
    )
}

export default Image

