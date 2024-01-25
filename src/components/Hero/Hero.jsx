import './Hero.scss'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h1>Find Your <span>Dream <br /> Jobs</span> Here</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
                <div className="search-bar">
                    <form id='form' role='search'>
                        <input type="text" id='search' placeholder='Search' />
                        <div className="divider"></div>
                        <input type="text" id='location' placeholder='Location' />
                        <button>Find Job</button>
                    </form>
                </div>
            </div>

            <div className="hero-right">
                <div className="pentagon1"></div>
                <div className="pentagon2"></div>

                <div className="companiesJobs">
                    <span>4K</span>
                    <span>Companies Jobs</span>
                </div>

                <div className="userFoundJobs">
                    <span>12K</span>
                    <span>Users Have <br /> Found Jobs</span>
                </div>
            </div>
        </div>
    )
}

export default Hero
