$(document).ready(function() {

    //primer mostrar tabla
    mostrarDatosSalon();
    console.log($("#accion").val());



    $("#incluir2").on("click", function(event) {
        event.preventDefault();
        console.log("insertar salon en la BD");
        enviarAjax();

    });

    function modificarDatos(id) {

        console.log("entrando a modificar datos con ajax");
        $('#Modalsalon1').html('');
        $('#Modalsalon1').html('Modificar Datos');
        $('#idSalon').prop({
            'readonly': true
        })
        $('#accion').val('modificar');
        console.log($("#accion").val());
        $('#idSalon').val(id);
        $('#frminsertsalon').attr('onsubmit', 'return modificarAjax()');

    }

    function ModificarAjax() {

        var datos = $('#frminsertsalon').serialize();
        console.log(datos); /* pa saber si tomó los datos */

        $.ajax({
            type: 'POST',
            url: '',
            async: true,
            data: datos,
            success: function(data, response) {
                console.log(data);


                a = response;
                if (a === "done") {
                    swal({
                        title: "Hay un error",
                        text: "Algo esta mal, vuelve a chequear la conexion",
                        icon: "waring",
                        button: "Salir",
                    });

                } else {

                    swal({
                        title: "Registrado",
                        text: "Ahora puedes encontrarlo en el registro",
                        icon: "success",
                        button: "Salir",
                    });
                    mostrarDatosSalon();
                    $('input').val('');
                    $('#accion').val('insertar');
                    console.log($("#accion").val());
                }

            },
            error: function(error) {
                console.log(error);
            }


        });

    }



    function enviarAjax() {

        var datos = $('#frminsertsalon').serialize();
        console.log(datos); /* pa saber si tomó los datos */

        $.ajax({
            type: 'POST',
            url: '',
            async: true,
            data: datos,
            success: function(data, response) {
                console.log(data);


                a = response;
                if (a === "done") {
                    swal({
                        title: "Hay un error",
                        text: "Algo esta mal, vuelve a chequear la conexion",
                        icon: "waring",
                        button: "Salir",
                    });

                } else {

                    swal({
                        title: "Registrado",
                        text: "Ahora puedes encontrarlo en el registro",
                        icon: "success",
                        button: "Salir",
                    });
                    mostrarDatosSalon();
                    $('input').val('');
                    $('#accion').val('insertar');
                    console.log($("#accion").val());
                }

            },
            error: function(error) {
                console.log(error);
            }


        });

    }

    function mostrarDatosSalon() {
        console.log("entrando mostrando data salon");

        $.ajax({
            url: 'modelo/mostrarDatosSalon.php'

        }).done(function(r) {
            console.log("Mostrando data salon satisfactoriamente");
            $('#tablaDatosSalon').html(r);
        })
    }
});