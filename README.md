INSTALACIÓN:

Cerciorarse que tenemos nodeJs instalado previamente. Si no lo tenemos deberemos instalarlo para poder iniciar la instalación de la aplicación.
Sobre el terminal escribir el comando "npm install"

LIBRERIAS USADAS:
-Styled-components
-Material UI 
-Redux
-Redux-saga
-Prettier
-EsLint
-React-router


ESTRUCTURA:

Se parte de un elemento principal "index.jsx" en la carpeta raiz del proyecto el cual renderiza el DOM de la aplicación , el store las rutas y el primer componente

A nivel de la carpeta "Components" tenemos estructurado los distintos componentes que renderiza cada una de las rutas.

![image](https://user-images.githubusercontent.com/51480673/145859846-d5037717-f5b1-4cec-b846-3a102299b589.png)

Dentro de cada uno tendra su propio componente principal , estilos "assets" ,reducers, actions , sagas,... , esto facilita la lectura y la mantenibilidad del código.

![image](https://user-images.githubusercontent.com/51480673/145860126-2adf8f92-d9a1-46c1-934e-6f611459e324.png)

Para los componentes creados con la libreria "styled-components" se crea una carpeta dentro del "src" la cual exporta cada uno de los componentes creados para la aplicación.

![image](https://user-images.githubusercontent.com/51480673/145860338-a3bf3710-1fb1-445b-b9a5-71ca627dfe9b.png)

En la carpeta "Routes" definimos las distintas rutas y componentes que renderiza cada una de ellas , usando la libreria "react-router".

![image](https://user-images.githubusercontent.com/51480673/145860637-30c24c06-6573-4444-b78c-593fe98e50f9.png)

Todos las constantes que usamos en la aplicacion estan definidas en la carpeta "Text" , para tenerlas todas juntas y poder reutilizarlas en el proyecto.

En la carpeta services tenemos una function que ejecuta la llamada al api

GUIA DE LA APLICACIÓN: 

Para arrancar la aplicación , una vez instalado todas las librerias ,lanzar el comando "npm start".
En el puerto "http://localhost:3000/" deberá aparecer nuestra APP.

Vemos una primera pantalla la cual tenemos un boton el cual nos pedira autenticarnos.
![image](https://user-images.githubusercontent.com/51480673/145861459-33fcc77c-10e4-4613-8382-62056043da96.png)

Aparecerá una modal la cual nos pedira email y contraseña, si introducimos mal alguno de los campos no permitira navegar hacia el listado de usuarios, para loguearte deberás introducir un email válido y cualquier contraseña.
![image](https://user-images.githubusercontent.com/51480673/145861797-7e7e8834-abc7-4ede-8487-f5e75e169926.png)

Una vez logueado aparecerán las "cards" con los datos de cada usuario , tendremos un total de 12 para ver el resto de usuarios simplemente tenemos que darle a uno de los botones que aparecen en la parte inferior. Aqui podremos cambiar de vista el navegador y según la resolucion apareceran un número de cards u otro.
![image](https://user-images.githubusercontent.com/51480673/145862075-20f6f7e1-5b2b-4c47-9fac-fc2c91c08194.png)

Al hacer click en cualquiera de las "cards" nos abrirá los detalles de ese usuario y podremos modificar sus datos o borrarlo. Para activar la edición primero tendremos que a "Editar" 
![image](https://user-images.githubusercontent.com/51480673/145862331-341d4d2c-7fe1-47ef-94e3-e7db8a75cdfe.png)

Si queremos eliminar un usuario nos aparecera una modal de confirmación. 
![image](https://user-images.githubusercontent.com/51480673/145862394-ca564ff2-2cfc-47aa-9e73-d796e3213040.png)

Al darle aceptar llamara al endpoint de borrar y si le damos a cancelar se cerrara la modal y podremos seguir trabajando con ese usuario.



