/**
 *  En este punto podemos obtener todos los enlaces de nuestra menu con la clase
    .nav-link el cual esta asigna a los enlaces <a></a>
 */

const enlaces = document.querySelectorAll('.nav-link') //corresponde a un array

/**
 * Al ser un arreglo lo podriamos manipular con una estrutura repetitiva
 * 
 */

enlaces.forEach(itemMenu => {

    /**
     * El siguiente paso consiste en agregar el estilo que tendra el item
     * activo puedes utlizar una clase, id o ingresar el codigo css directamente
     * 
     * En este ejemplo agregaremos directamente el estilo css desde javascript
     */

    //asigamos el evento de click a todos los enlaces
    itemMenu.addEventListener('click', (e) => {
        //Limpiamos todos lo enlaces
        removerStyle()

        //agregamos el style al item precionado
        /**
         * setAttribute es una funcion que recibe como parametro el 
         * nombre del atributo y el valor
         * en este caso el atributo es style y el valor la regla css
         * que cambia el color de nuestra fuente
         */
        itemMenu.setAttribute('style', 'color: #ffc107 !important;') //agregando directamente el esilo css
        console.log("Hola");
    })
})

/**
 * De manera adicional agregamoos un subproceso que se encarga de remover
 * el estilo de un elace si se preciona sobre otro
 */
function removerStyle() {
    enlaces.forEach(itemMenu => {
        //verficamos si el enlace tiene la propiedad style.
        if(itemMenu.hasAttribute('style')) {
            //si lo tiene lo removemos
            itemMenu.removeAttribute('style');
        }
    })
}