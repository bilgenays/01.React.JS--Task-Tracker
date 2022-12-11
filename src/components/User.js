const name = "Ayşenur";
const surname = "Akkurt";
const isLoggedIn = true;
const friendsArray = [
    {   
        id: 1,
        name: "Serkan"
    },
    {   
        id: 2,
        name: "İlknur"
    },
    {   
        id: 3,
        name: "Alper"
    },
    {   
        id: 4,
        name: "Ensar"
    },
];
// const friends = friendsArray.map((friend, index)=>( 
// <p>{friend}</p>
// ));

function User(){
    console.log('selam');
    return(
        <div className="user">
            <h1>
                { isLoggedIn
                ? `Benim adım ${name}, soyadım ${surname}.` 
                : "Giriş yapmadınız."
                }
            </h1>
            {/* <p>
            Çalışma arkadaşlarım: {friendsArray[0].id}
            </p> */}
        </div>
    )
}

export default User;