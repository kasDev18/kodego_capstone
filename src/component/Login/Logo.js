import logo from './images/1525506679828.jpg';

function Logo() {
    return (
        <div className="Login_first_col col-6">
            <div className="d-flex justify-content-center">
                <img src={logo} className="img-fluid w-50 h-50" alt="..." />
            </div>
            <div className='d-flex justify-content-center col mb-3'>
                <h3 className="Login_company_name">Fortune Packaging Corporation</h3>
            </div>
            <div className="Login_Dept">
                <div className=' d-flex justify-content-center mb-1'>
                    <h5 className=' d-block'>Technical Services and Quality</h5>
                </div>
                <div className=' d-flex justify-content-center'>
                    <h5 className=' d-block'>Assurance Department</h5>
                </div>
            </div>
        </div>
    )
}

export default Logo;