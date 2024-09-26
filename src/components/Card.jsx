export function Card({name}){
    return(
        <>
        <div className="card">
            <img src="https://via.placeholder.com/150" alt="" className="card-img" />
            <h2>{name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a, ut quisquam ullam inventore ipsam!</p>
        </div>
        </>
    )
}

Card.defaultProps={
    name:"Profile"
}