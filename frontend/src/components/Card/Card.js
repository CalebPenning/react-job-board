import { NavLink } from "react-router-dom"

const Card = ({ data, category }) => {
    const getRandLogo = () => {
        let rand = Math.ceil(Math.random() * 3)
        return `../static/logo${rand}.jpg`
    }
    if (category === "companies") return (
        <div className="col-md-12">
            <NavLink to={`/companies/${data.handle}`} style={{ color: "black", textDecoration: "none" }} data={data}>
                <div className="card text-left reuse-card" style={{width: "100%"}}>
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        {/* <img className="float-right" src={getRandLogo()} alt="Random generic company logo. Used for mockup." /> */}
                        <p className="card-text">{data.description}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )

    else return (
        <div className="card text-center reuse-card" style={{width: "75%"}}>
            <div className="card-body">

            </div>
        </div>
    )
}

export default Card