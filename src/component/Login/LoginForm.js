import PasswordShowHide from './PasswordShowHide/PasswordShowHide';

function LoginForm() {
    return (
        <>
            <h5 className="card-title">Login</h5>
            <div className="Login_form">
                <div className="mb-3 mt-5">
                    <label className="form-label text-muted">Username</label>
                    <input type="text" className="form-control col-12" name='username' placeholder="J.Smith" required />
                </div>
                <div className="mb-3 col">
                    <label className="form-label text-muted">position</label>
                    <select className="form-control form-select" name="position" placeholder="Supervisor" required>
                        <option defaultValue className='d-none'></option>
                        <option defaultValue="Admin">Admin</option>
                        <option defaultValue="Supervisor">Supervisor</option>
                        <option defaultValue="Assistant Supervisor">Assistant Supervisor</option>
                        <option defaultValue="Calibration Officer">Calibration Officer</option>
                        <option defaultValue="QA Analyst">QA Analyst</option>
                        <option defaultValue="TS Engineer">TS Engineer</option>
                        <option defaultValue="QA Inspector">QA Inspector</option>
                    </select>
                </div>
                <PasswordShowHide />
            </div>
        </>
    )
}

export default LoginForm;