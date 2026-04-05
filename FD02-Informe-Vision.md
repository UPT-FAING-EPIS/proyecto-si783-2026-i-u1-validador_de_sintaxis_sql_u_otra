<center>

[comment]: <img src="./media/media/image1.png" style="width:1.088in;height:1.46256in" alt="escudo.png" />

![./media/media/image1.png](./media/logo-upt.png)

**UNIVERSIDAD PRIVADA DE TACNA**

**FACULTAD DE INGENIERIA**

**Escuela Profesional de Ingeniería de Sistemas**

**Proyecto *Validador de Sintaxis SQL u otra***

Curso: *Base de Datos II*

Docente: *Mag. Patrick Cuadros Quiroga*

Integrantes:

***Soto Oquendo Cristian Gabriel (2026086510) Arocutipa Arocutipa Gian Franco (2023076790)***

**Tacna – Perú**

***2026***

**  
**
</center>
<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

|CONTROL DE VERSIONES||||||
| :-: | :- | :- | :- | :- | :- |
|Versión|Hecha por|Revisada por|Aprobada por|Fecha|Motivo|
|1\.0|MPV|ELV|ARV|10/10/2020|Versión Original|












**Sistema *Validador de Sintaxis SQL u otra***

**Documento de Visión**

**Versión *{1.0}***
**

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

|CONTROL DE VERSIONES||||||
| :-: | :- | :- | :- | :- | :- |
|Versión|Hecha por|Revisada por|Aprobada por|Fecha|Motivo|
|1\.0|MPV|ELV|ARV|10/10/2020|Versión Original|


<div style="page-break-after: always; visibility: hidden">\pagebreak</div>


**INDICE GENERAL**
#
[1.	Introducción](#_Toc52661346)

1.1	Propósito

1.2	Alcance

1.3	Definiciones, Siglas y Abreviaturas

1.4	Referencias

1.5	Visión General

[2.	Posicionamiento](#_Toc52661347)

2.1	Oportunidad de negocio

2.2	Definición del problema

[3.	Descripción de los interesados y usuarios](#_Toc52661348)

3.1	Resumen de los interesados

3.2	Resumen de los usuarios

3.3	Entorno de usuario

3.4	Perfiles de los interesados

3.5	Perfiles de los Usuarios

3.6	Necesidades de los interesados y usuarios

[4.	Vista General del Producto](#_Toc52661349)

4.1	Perspectiva del producto

4.2	Resumen de capacidades

4.3	Suposiciones y dependencias

4.4	Costos y precios

4.5	Licenciamiento e instalación

[5.	Características del producto](#_Toc52661350)

[6.	Restricciones](#_Toc52661351)

[7.	Rangos de calidad](#_Toc52661352)

[8.	Precedencia y Prioridad](#_Toc52661353)

[9.	Otros requerimientos del producto](#_Toc52661354)

b) Estandares legales

c) Estandares de comunicación	](#_toc394513800)37

d) Estandaraes de cumplimiento de la plataforma	](#_toc394513800)42

e) Estandaraes de calidad y seguridad	](#_toc394513800)42

[CONCLUSIONES](#_Toc52661355)

[RECOMENDACIONES](#_Toc52661356)

[BIBLIOGRAFIA](#_Toc52661357)

[WEBGRAFIA](#_Toc52661358)


<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

**<u>Informe de Visión</u>**

1. <span id="_Toc52661346" class="anchor"></span>**Introducción**

**1.1	Propósito**
   
El presente documento tiene como propósito definir la visión, objetivos y lineamientos generales para el desarrollo de        un Sistema Validador de Sintaxis para Bases de Datos SQL y NoSQL, orientado a verificar la correcta estructura de             consultas antes de su ejecución.       

El sistema permitirá a estudiantes y desarrolladores identificar errores sintácticos de manera anticipada, reduciendo         fallos en tiempo de ejecución y mejorando la calidad del desarrollo de software. Además, busca fortalecer                     conocimientos en áreas como análisis léxico, análisis sintáctico y procesamiento de lenguajes, utilizando tecnologías         como Java y C#.

Asimismo, el proyecto responde a la necesidad actual de trabajar tanto con bases de datos relacionales como no                relacionales, integrando validaciones para ambos paradigmas.

   
**1.2	Alcance**

El sistema estará enfocado en la validación de estructuras y consultas en dos tipos de bases de datos:
    
**Bases de Datos Relacionales (SQL)**
    Sentencias SELECT
    Sentencias INSERT
    Sentencias UPDATE
    Sentencias DELETE
   
**Bases de Datos No Relacionales (NoSQL)**
    Validación de estructuras tipo JSON
    Consultas básicas en motores como:
        MongoDB (find, insert, update, delete)
    Validación de formato y estructura de documentos
   
**Funcionalidades principales**
    Análisis léxico de consultas SQL y estructuras NoSQL.
    Análisis sintáctico basado en reglas definidas.
    Detección de errores con mensajes claros y precisos.
    Validación de formatos JSON utilizados en NoSQL.
    Interfaz simple (consola o interfaz gráfica básica).
    Soporte inicial para múltiples tipos de consultas.
       
El sistema no ejecutará consultas ni modificará bases de datos reales; su función será exclusivamente de validación.


**1.3	Definiciones, Siglas y Abreviaturas**
|**Término**|**Definición**|
| :--- | :--- |
|**SQL**|(Structured Query Language) Lenguaje para gestionar bases de datos relacionales.|
|**NoSQL**|(Not Only SQL) Conjunto de tecnologías de bases de datos no relacionales.|
|**DML**|(Data Manipulation Language) Lenguaje de manipulación de datos (SELECT, INSERT, UPDATE, DELETE).|
|**JSON**|(JavaScript Object Notation) Formato ligero de intercambio de datos usado en NoSQL.| 
|**MongoDB**|Sistema de base de datos NoSQL orientado a documentos.|
|**Token**|Unidad mínima en el análisis léxico.|
|**Análisis Léxico**|Identificación de tokens dentro de una cadena.|
|**Análisis Sintáctico**|Verificación de la estructura según reglas gramaticales.|
|**Parser**|Componente que analiza la sintaxis.|
|**Validador**|Sistema que verifica la corrección de una entrada.|


**1.4	Referencias**

* Informe de Factibilidad del Proyecto (FD01)
* Repositorio del proyecto en GitHub (gestión de tareas).
* Documentación oficial de SQL (ANSI SQL).
* Documentación de MongoDB (NoSQL).
* Documentación oficial de Java y C#.
* Material académico de cursos de Base de Datos y Compiladores.

  
**1.5	Visión General**

El Sistema Validador de Sintaxis SQL y NoSQL se plantea como una herramienta integral que permite validar consultas y         estructuras de datos en diferentes paradigmas de bases de datos, contribuyendo a mejorar la calidad del software y            reducir errores comunes en el desarrollo.
        
El sistema se desarrollará utilizando Java y C#, aprovechando recursos de software libre y sin depender directamente          de motores de bases de datos para su funcionamiento, lo que garantiza portabilidad y facilidad de uso.
        
Además, el sistema está diseñado con una visión escalable, permitiendo futuras mejoras como:

* Soporte para más motores NoSQL.
* Integración con entornos de desarrollo (IDE).
* Validación semántica más avanzada.
* Extensión a otros lenguajes de consulta.
        
De esta manera, el proyecto no solo cumple un propósito académico, sino que también sienta bases para el desarrollo           de herramientas más complejas en el ámbito profesional.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

2. <span id="_Toc52661347" class="anchor"></span>**Posicionamiento**

    2.1	Oportunidad de negocio

    2.2	Definición del problema

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

3. <span id="_Toc52661348" class="anchor"></span>**Vista General del Producto**

    3.1	Resumen de los interesados

    3.2	Resumen de los usuarios

    3.3	Entorno de usuario

    3.4	Perfiles de los interesados

    3.5	Perfiles de los Usuarios

    3.6	Necesidades de los interesados y usuarios

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

4. <span id="_Toc52661349" class="anchor"></span>**Estudio de
    Factibilidad**

    4.1	Perspectiva del producto

    4.2	Resumen de capacidades

    4.3	Suposiciones y dependencias

    4.4	Costos y precios

    4.5	Licenciamiento e instalación

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

5. <span id="_Toc52661350" class="anchor"></span>**Características del producto**

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

6. <span id="_Toc52661351" class="anchor"></span>**Restricciones**

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

7. <span id="_Toc52661352" class="anchor"></span>**Rangos de Calidad**

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

8. <span id="_Toc52661353" class="anchor"></span>**Precedencia y Prioridad**

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

9. <span id="_Toc52661354" class="anchor"></span>**Otros requerimientos del producto**

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

<span id="_Toc52661355" class="anchor"></span>**CONCLUSIONES**

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

<span id="_Toc52661356" class="anchor"></span>**RECOMENDACIONES**

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

<span id="_Toc52661357" class="anchor"></span>**BIBLIOGRAFIA**

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

<span id="_Toc52661358" class="anchor"></span>**WEBGRAFIA**

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>
