

const Card = ({ br }) => {
    return (
        
        <div className="card w-94 h-64  bg-base-100 shadow-xl image-full">
            <figure><img src={br.brandImage} className='' alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{br.brandName}</h2>

            </div>
        </div>
       
    );
};

export default Card;