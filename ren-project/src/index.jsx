import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import FotoCard from './fotocard';


// const biodata = (
//   <div>
//     <h1>Biodata</h1>
//     <ul>
//       <li>Nama: Rendra</li>
//       <li>Kelas: 10 PPLG 1</li>
//       <li>Alamat: Sumbawa</li>
//     </ul>
//     <img src="lucu.jpg" alt="Foto Rendra" />
//   </div>
// );


function Judul() {
    return (
        <h1>Biodata Siswa</h1>
    )
}

function CardDesc({ nama, kelas, alamat }) {
    return (
        <div className="card-body">
            <ul>
                <li>Nama : {nama}</li>
                <li>Kelas : {kelas}</li>
                <li>Alamat : {alamat}</li>
            </ul>
        </div>
    )
}



function GroupCard({ nama, kelas, alamat, foto }) {
    return (
        <div className="card">
            <FotoCard foto={foto} />
            <CardDesc nama={nama} kelas={kelas} alamat={alamat} />
        </div>
    )
}

function DataSiswa() {
    const dataSiswa = [
        {
            foto: "rendra.jpg",
            
            nama: "Rendra",
            kelas: "10 PPLG 1",
            alamat: "Depok"
        },
        {
            foto: "jeremy.jpg",
            nama: "Jeremy",
            kelas: "10 PPLG 1",
            alamat: "Jember"
        },
        {
            foto: "alam.png",
            nama: "Allam",
            kelas: "10 PPLG 1",
            alamat: "JAMBI"
        },
    ]
    return (
        <div>
            <Judul />
            <div className="card-container">
                {dataSiswa.map((siswa) => (
                    <GroupCard {...siswa} key={siswa.nama} />
                ))}
            </div>
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<DataSiswa />);