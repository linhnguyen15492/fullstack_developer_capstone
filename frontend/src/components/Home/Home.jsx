import "../../assets/style.css";
import "../../assets/bootstrap.min.css";
import Header from "../Header/Header"

const Home = () => {
    return (
        <>
            <div>
                <img src="static/car_dealership.jpg" className="card-img-top" alt="..." />
                <div className="banner">
                    <h5>Welcome to our Dealerships!</h5>
                    <a href="/dealers" className="btn">View Dealerships</a>
                </div>

            </div>
        </>
    )
}

export default Home;