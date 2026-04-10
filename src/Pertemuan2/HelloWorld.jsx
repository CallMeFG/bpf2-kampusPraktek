import './custom.css'; // Pastikan path-nya benar

export default function HelloWorld(){
    const propsUserCard = {
        nama: "Rizky",
        nim: "999999",
        tanggal: "2025-01-01"
    }
    return (
        <div className="container">
            <h1>Hello World</h1>
            <p className="subtitle">Selamat Belajar ReactJs</p>
            
            <GreetingBinjai/>  
            <QuoteText/>

            <UserCard 
	            nama="Fathur" 
	            nim="169412"
	            tanggal={new Date().toLocaleDateString()}
	        />
            <UserCard {...propsUserCard}/>
            
            <img src="img/Picture1.webp" alt="logo" />
        </div>
    )
}

function GreetingBinjai(){
    return(
        <small>Salam dari binjai</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p style={{textAlign: 'center', fontSize: '14px', color: '#7f8c8d'}}>
                "{text.toLowerCase()}" <br/>
                <strong>{text2.toUpperCase()}</strong>
            </p>
        </div>
    )
}

function UserCard(props){
    return (
        <div className="user-card">
            <h3>{props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>📅 {props.tanggal}</p>
        </div>
    )
}