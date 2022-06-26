
# Prueba técnica FI GROUP 📃

Este repositorio provee una herramienta de productividad muy típica conocida como “To-Do-List”. En esta, podrás crear una lista de pequeñas tareas que posteriormente vas a poder actualizar o eliminar acorde a tu necesidad. Además, vas a poder filtrar las tareas por su nombre o su categoría, haciendo uso de una barra buscadora en la parte superior, sin dejar de lado el hecho de que podrás ocultar las tareas que hayas marcado como completadas.


## Preview 👁

![App Screenshot](/Preview/Screen_01.JPG)

***

## Funcionalidad técnica 👨‍💻

Se realizó la creación e implementación de una **REST API** que nos permite ejecutar operaciones **CRUD** (Create/Read/Update/Delete), usando tecnología de **ASP.NET Core 6**. Además, se realizó la conexión a una base de datos con **SQL Server Express** por medio de **Entity Framework**, aplicando la metodología de **Database First** y documentando las peticiones en **Swagger**.

![App Screenshot](/Preview/Screen_02.JPG)

Posteriormente se realizó la creación del proyecto frontal en **TypeScript** con **CRA**, consumiendo la API por medio de la librería **Axios**, para desplegar la información de una forma responsive y posteriormente crearla, editarla o actualizarla según la necesidad, haciendo uso de la data brindada por un formulario de **React Hook Form**.

![App Screenshot](/Preview/Screen_03.JPG)


## Software utilizado 💻
This project is used by the following companies:

- VISUAL STUDIO IDE 2022
- VISUAL STUDIO CODE
- SQL SERVER 2019 EXPRESS
- SQL SERVER MANAGEMENT STUDIO 18

---

## Instación y configuración ⚙

Acceder a la carpeta del **front** desde la terminal

```bash
  cd .\Frontend\to-do-list\
```
    
Instalar las dependencias

```bash
  npm install
```
    
Ejecutar el servidor de desarrollo

```bash
  npm start
```

Con esto ya tendrás configurado el front en la ruta "http://localhost:3000".

Ahora, para ejecutar la base de datos, abrimos el *SQL Server Managment Studio* y ejecutar el siguiente query.

```bash
CREATE DATABASE [PruebaTecnica]
GO

USE [PruebaTecnica]
GO

CREATE TABLE [dbo].[ToDoListTable](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Assignment] [nchar](50) NOT NULL,
	[Status] [nchar](10) NOT NULL,
	[Date] [nchar](10) NOT NULL,
 CONSTRAINT [PK_ToDoListTable] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER DATABASE [PruebaTecnica] SET  READ_WRITE 
GO
```

Posteriormente, ejecutamos el servidor del backend, abriendo el proyecto en el *Visual Studio IDE* y compilando el proyecto.

![App Screenshot](/Preview/Screen_04.JPG)

De esta manera, ya tendrás acceso al servidor en la ruta "https://localhost:7158/swagger/index.html" y podrás hacer uso del To-Do-List.

### Notas:

- Hay que tener en cuenta que la cadena de conexión varía si se hace uso del SQL Server en su edición de desarrollador y no en su edición Express. En caso de ser así, diríjase al archivo **appsettings.json** y cambie la cadena de conexión de esta manera (Modificando la variable **Data Source** por el nombre de su servidor local):

```bash
  "dbconn": "Data Source=DESKTOP-5C4E9V4;Initial Catalog=PruebaTecnica;Integrated Security=True"
```

- Debe tener libre el uso del puerto **localhost:7158** o del puerto **localhost:5158**. En caso de no poder disponer de alguno, dirígase al archivo **launchSettings.json** y cambie los puertos por otros que tenga disponible en su servidor local.

___

## Licencia

Esta repositorio es usado unicamente como carta de presentación para la empresa y no se le dará ningún tipo de uso comercial.

