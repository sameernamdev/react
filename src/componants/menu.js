export default function Menu()
{
    return(
        <>
        <div className="navbar bg-warning">
            <div className="navbar-brand">Logo</div>
            <div className="navbar-toggler" data-bs-target="#menu" data-bs-toggle="collapse">
              <span className="navbar-toggler-icon"></span>
            </div>
            <div className="navbar-collapse collapse" id="menu">
                <ul className="navbar-nav nav-underline">
                    <li className="nav-item"><a href="" className="text-center nav-link">Home</a></li>
                    <li className="nav-item"><a href="" className="text-center nav-link">About</a></li>
                    <li className="nav-item"><a href="" className="text-center nav-link">Gallery</a></li>
                    <li className="nav-item"><a href="" className="text-center nav-link">Contact us</a></li>
                </ul>

            </div>

        </div>
        </>
    )
}