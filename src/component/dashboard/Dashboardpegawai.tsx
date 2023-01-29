import React, { useEffect, useState } from "react";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { API } from "../../api/API";

import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

function Dashboardpegawai() {
  const [pegawai, setPegawai] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [tambah, setTambah] = useState(false);
  
  const [namaPegawai, setNamaPegawai] = useState("");
  const [nipPegawai, setNipPegawai] = useState("");
  const [kontakPegawai, setKontakPegawai] = useState("");
  const [namaBankPegawai, setNamaBankPegawai] = useState("");
  const [noRekPegawai, setNoRekPegawai] = useState("");
  const [namaRekPegawai, setNamaRekPegawai] = useState("");

  const [listGolongan, setListGolongan] = useState([]);
  const [listJabatan, setListJabatan] = useState([]);
  const [listPangkat, setListPangkat] = useState([]);

  useEffect(() => {
    fetch(API.getAllPegawai)
      .then((res) => res.json())
      .then((res) => {
        setPegawai(res.result);
      });

    fetch(API.listGolongan)
      .then((res) => res.json())
      .then((res) => {
        setListGolongan(res.msg);
      });

    fetch(API.listJabatan)
      .then((res) => res.json())
      .then((res) => {
        setListJabatan(res.msg);
      });

    fetch(API.listPangkat)
      .then((res) => res.json())
      .then((res) => {
        setListPangkat(res.msg);
      });

    AOS.init({
      duration: 600,
    });
  }, []);

  const tambahPegawai = () => {
    if (typeof document !== null) {
      const jabatan = document.querySelector<any>("#Jabatan");
      const pangkat = document.querySelector<any>("#Pangkat");
      const golongan = document.querySelector<any>("#Gol");
      const jabatanValue = jabatan.options[jabatan.selectedIndex].value;
      const pangkatValue = pangkat.options[pangkat.selectedIndex].value;
      const golongaValue = golongan.options[golongan.selectedIndex].value;

      const body = {
        nama: namaPegawai,
        nip: nipPegawai,
        jabatan: jabatanValue,
        pangkat: pangkatValue,
        phone: kontakPegawai,
        nama_bank: namaBankPegawai,
        no_rek: noRekPegawai,
        nama_rek: namaRekPegawai,
      };

      if (
        namaPegawai.length > 4 &&
        nipPegawai.length > 4 &&
        kontakPegawai.length > 4 &&
        noRekPegawai.length > 4 &&
        namaRekPegawai.length > 4
      ) {
        fetch(API.postPegawai, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            Swal.fire({
              icon: "success",
              text: "Pegawai berhasil ditambahkan",
              showConfirmButton: false,
              timer: 1500,
            }).catch((err) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            });
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something wrong with your input please put right input",
        });
      }
    }
  };

  return (
    <div className="dashboardpegawai">
      <div className="pegawai-controller">
        <input
          type="text"
          placeholder="cari..."
          className="cari-pegawai"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button
          className="controller"
          onClick={() => {
            setTambah((prev) => !prev);
            console.log(tambah);
          }}
          style={tambah ? { backgroundColor: "#1ED952" } : {}}
        >
          <span>
            {tambah ? (
              <>Kembali</>
            ) : (
              <>
                Tambah{" "}
                <span className="pegawai-icons">
                  <BsFillPersonPlusFill />
                </span>
              </>
            )}
          </span>{" "}
        </button>
      </div>
      <div className="change-pegawai">
        {tambah ? (
          <div data-aos="fade-right">
            <form action="" className="tambah-pegawai">
              <h2>TAMBAH DATA PEGAWAI</h2>
              <div className="splitting">
                <div className="form-pegawai">
                  <div className="input-pegawai">
                    <label htmlFor="Nama">Nama</label>
                    <input
                      required
                      type="text"
                      onChange={(e) => {
                        setNamaPegawai(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input-pegawai">
                    <label htmlFor="NIP">NIP</label>
                    <input
                      required
                      type="text"
                      onChange={(e) => {
                        setNipPegawai(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input-pegawai">
                    <label htmlFor="Jabatan">Jabatan</label>
                    <select name="Jabatan" id="Jabatan">
                      {listJabatan.map(({ nama }) => (
                        <option value={nama}>{nama}</option>
                      ))}
                    </select>
                  </div>
                  <div className="input-pegawai">
                    <label htmlFor="Pangkat">Pangkat</label>
                    <select name="Pangkat" id="Pangkat">
                      {listPangkat.map(({ nama }) => (
                        <option value={nama}>{nama}</option>
                      ))}
                    </select>
                  </div>
                  <div className="input-pegawai">
                    <label htmlFor="Gol">Gol</label>
                    <select name="Gol" id="Gol">
                      {listGolongan.map(({ nama }) => (
                        <option value={nama}>{nama}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-pegawai">
                  <div className="input-pegawai">
                    <label htmlFor="">Kontak</label>
                    <input
                      required
                      type="text"
                      onChange={(e) => {
                        setKontakPegawai(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input-pegawai">
                    <label htmlFor="">Nama Bank</label>
                    <input
                      required
                      type="text"
                      onChange={(e) => {
                        setNamaBankPegawai(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input-pegawai">
                    <label htmlFor="">No Rekening</label>
                    <input
                      required
                      type="text"
                      onChange={(e) => {
                        setNoRekPegawai(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input-pegawai">
                    <label htmlFor="">Nama Rekening</label>
                    <input
                      required
                      type="text"
                      onChange={(e) => {
                        setNamaRekPegawai(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <button
                className="controller controller-form"
                onClick={(e) => {
                  e.preventDefault();
                  tambahPegawai();
                }}
              >
                SUBMIT
              </button>
            </form>
          </div>
        ) : (
          <table data-aos="fade-left">
            <thead>
              <tr className="thead">
                <th scope="col">Nama</th>
                <th scope="col">NIP</th>
                <th scope="col">Jabatan</th>
                <th scope="col">Pangkat</th>
                <th scope="col">Gol</th>
                <th scope="col">Kontak</th>
              </tr>
            </thead>
            <tbody>
              <>
                {pegawai
                  .filter((data) => {
                    if (searchTerm === "") {
                      return data;
                    } else if (
                      data.nama.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return data;
                    }
                  })
                  .map(({ nama, nip, jabatan, pangkat, phone }) => (
                    <tr>
                      <td data-label="Nama">{nama}</td>
                      <td data-label="NIP">{nip}</td>
                      <td data-label="Jabatan">{jabatan}</td>
                      <td data-label="Pangkat">{pangkat}</td>
                      <td data-label="Gol">-</td>
                      <td data-label="Kontak">{phone}</td>
                    </tr>
                  ))}
              </>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Dashboardpegawai;
