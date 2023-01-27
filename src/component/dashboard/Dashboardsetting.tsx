import React, {useState} from "react";

function Dashboardsetting() {

  const [changeUsername , setChangeUsername] = useState('')
  const [changePassword , setChangePassword] = useState('')

  const changeUser = () => {
    localStorage.setItem('username' , changeUsername)
    localStorage.setItem('password' , changePassword)
  }

  return (
    <div className="setting">
      <div className="form-pegawai">
        <div className="input-pegawai">
          <label htmlFor="Ganti Username">Ganti Username</label>
          <input
            required
            type="text"
            onChange={(e) => {
              setChangeUsername(e.target.value);
            }}
          />
        </div>
        <div className="input-pegawai">
          <label htmlFor="Ganti Password">Ganti Password</label>
          <input
            required
            type="text"
            onChange={(e) => {
              setChangePassword(e.target.value);
            }}
          />
        </div>
        <button className="controller" style={{backgroundColor : '#1b1b1b'}} onClick={
          (e) => {
            e.preventDefault();
            changeUser();
          }
        }>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Dashboardsetting;
