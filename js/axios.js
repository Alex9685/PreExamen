const btnRes = document.getElementById("btnBuscar").addEventListener('click', function(){
    cargarAjax();
});

const btnLmipiar = document.getElementById("btnLimpiar").addEventListener('click', function(){
    Limpiar();
});



function cargarAjax(){

    const url = "https://jsonplaceholder.typicode.com/users";

    axios
    .get(url)
    .then((res) =>{
        mostrar(res.data);
    }).catch((err)=>{
        console.log("Surgio un error" + err);
    })

    function mostrar(data){

        const inputBuscar = document.getElementById('inputBuscar').value;

        const idSeleccionado = document.getElementById('idSeleccionado');
        idSeleccionado.innerHTML = "";

        for(item of data){

            if(inputBuscar == item.id){

                document.getElementById('inputBuscar').value = "";

            idSeleccionado.innerHTML = "Id:" + item.id;
            document.getElementById('nombre').value = item.name;
            document.getElementById('nombreUsuario').value = item.username;
            document.getElementById('email').value = item.email;
            document.getElementById('calle').value = item.address.street;
            document.getElementById('numero').value = item.address.suite;
            document.getElementById('ciudad').value = item.address.city;


            return;
            }


        }

    }
}

function Limpiar(){
    location. reload()
}