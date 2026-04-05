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

[CONCLUSIONES](#_Toc52661355)

[RECOMENDACIONES](#_Toc52661356)



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

**2.1	Oportunidad de negocio***
**Situación del mercado**

En la actualidad, el desarrollo de software depende en gran medida del uso de bases de datos tanto relacionales como no relacionales. Diversos estudios y experiencias en la industria indican que una gran cantidad de errores en aplicaciones están relacionados con consultas mal estructuradas o incorrectas desde el punto de vista sintáctico.

Además:

* Existen múltiples herramientas como DataGrip, MySQL Workbench, pgAdmin o MongoDB Compass, que permiten interactuar con bases de datos, pero:
  * Están enfocadas en ejecución y administración, no en validación previa.
  * Muchas requieren instalación pesada o licencias avanzadas.
* No existe una herramienta ligera, educativa y multiplataforma que permita validar sintaxis SQL y NoSQL sin necesidad de conexión a un motor de base de datos.
* En entornos académicos, los estudiantes suelen cometer errores sintácticos frecuentes sin contar con herramientas especializadas de retroalimentación inmediata.

**Oportunidad**

Se identifica una oportunidad clara en los siguientes segmentos:

* Estudiantes de ingeniería de sistemas y programación, que requieren herramientas de apoyo para aprender SQL y NoSQL.
* Desarrolladores junior, que necesitan validar consultas antes de ejecutarlas.
* Proyectos académicos y open source, donde no se dispone de herramientas comerciales.
* Pequeños equipos de desarrollo, que buscan soluciones gratuitas y eficientes.

El sistema propuesto cubre esta necesidad al ofrecer:

* Validación sin conexión a bases de datos reales.
* Soporte para múltiples paradigmas (SQL y NoSQL).
* Retroalimentación clara y educativa.
* Ventaja competitiva

El sistema presenta ventajas importantes frente a herramientas existentes:

* Gratuito, frente a soluciones comerciales de pago.
* Multilenguaje (SQL y NoSQL) en una sola herramienta.
* Ligero y portable, sin necesidad de instalación compleja.
* Enfoque educativo, no solo funcional.
* Funcionamiento offline, sin depender de servidores o servicios en la nube.
  
**2.2	Definición del problema**

**Problema actual**

Un estudiante o desarrollador que trabaja con bases de datos enfrenta dificultades al momento de escribir y validar consultas correctamente:

* **Errores sintácticos frecuentes:** Mala escritura de sentencias SQL o estructuras JSON.
* **Dependencia de ejecución real:** Para detectar errores, es necesario ejecutar la consulta en un motor de base de datos.
* **Falta de herramientas educativas:** No existen validadores que expliquen claramente los errores.
* **Diferencias entre motores:** SQL y NoSQL tienen estructuras distintas, lo que genera confusión.
* **Curva de aprendizaje elevada:** Especialmente en el caso de NoSQL (como MongoDB).
  
**Síntomas**

* Tiempo perdido corrigiendo errores básicos.
* Pruebas repetitivas en bases de datos.
* Frustración en estudiantes al no entender los errores.
* Uso incorrecto de sintaxis en proyectos académicos.
* Baja calidad en consultas desarrolladas.

**Impacto**

* Retrasos en el desarrollo de software.
* Mayor probabilidad de errores en producción.
* Dificultad en el aprendizaje de bases de datos.
* Dependencia de herramientas externas o docentes para validación.
* Baja eficiencia en el desarrollo de proyectos académicos.
  
<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

3. <span id="_Toc52661348" class="anchor"></span>**Vista General del Producto**

**3.1	Resumen de los interesados**

En el desarrollo del sistema validador de sintaxis SQL y NoSQL participan diversos actores con intereses específicos que influyen en el diseño y funcionamiento del sistema.

Entre los principales interesados se encuentran los **estudiantes desarrolladores**, quienes buscan aplicar conocimientos adquiridos en programación y bases de datos; los **docentes asesores**, encargados de evaluar la calidad técnica y académica del proyecto; **la institución universitaria**, que promueve el desarrollo de competencias profesionales; **y la comunidad académica y tecnológica**, que puede beneficiarse del uso de una herramienta gratuita y educativa.

Adicionalmente, se consideran como interesados potenciales a desarrolladores externos que podrían contribuir a la mejora del sistema en un futuro, especialmente en entornos de software libre.

Cada uno de estos actores presenta diferentes expectativas, como facilidad de uso, calidad del software, valor educativo y posibilidad de crecimiento del sistema.

**3.2	Resumen de los usuarios**

Los usuarios del sistema corresponden a perfiles relacionados con el aprendizaje y desarrollo de software, principalmente:

* **Estudiantes de ingeniería y programación**, que utilizarán la herramienta para comprender y practicar la sintaxis de consultas SQL y estructuras NoSQL.
* **Desarrolladores junior**, quienes requieren validar consultas antes de ejecutarlas en entornos reales.
* **Programadores con experiencia intermedia**, que buscan una herramienta rápida de verificación.

Cada tipo de usuario interactúa con el sistema de manera distinta, dependiendo de su nivel de conocimiento y necesidades, desde aprendizaje básico hasta validación rápida en entornos de desarrollo.

**3.3	Entorno de usuario**

El sistema será utilizado en entornos académicos y personales, principalmente en computadoras individuales.

Las condiciones de uso incluyen:

* **Dispositivos:** Laptops o computadoras personales.
* **Sistemas operativos:** Windows, Linux y macOS.
* **Ejecución:** Aplicación de escritorio o consola.
* **Tecnologías:** Java y C#.

El sistema funcionará de manera local, sin necesidad de conexión a internet ni integración directa con motores de bases de datos. Esto permite su uso en laboratorios, hogares o cualquier entorno de desarrollo básico.

Se espera que el sistema sea ligero, accesible y fácil de utilizar, reduciendo la curva de aprendizaje para usuarios principiantes.

**3.4	Perfiles de los interesados**

**Perfil 1 – Estudiante Desarrollador**

   * **Descripción:** Usuario principal que desarrolla e implementa el sistema.
   * **Intereses:** Aprender, completar el proyecto y mejorar habilidades técnicas.
   * **Influencia:** Alta, ya que define la arquitectura y funcionalidades.
     
**Perfil 2 – Docente Asesor**

   * **Descripción:** Responsable de la evaluación académica del proyecto.
   * **Intereses:** Calidad técnica, correcta aplicación de conceptos y documentación.
   * **Influencia:** Alta en la validación del proyecto.

**Perfil 3 – Institución Académica**

   * **Descripción:** Entidad que respalda el desarrollo del proyecto.
   * **Intereses:** Formación profesional, cumplimiento de estándares educativos.
   * **Influencia:** Media en la orientación del trabajo.
     
**Perfil 4 – Comunidad Tecnológica (Potencial)**
   * **Descripción:** Usuarios externos o desarrolladores interesados en la herramienta.
   * **Intereses:** Uso gratuito, mejora del sistema, contribuciones futuras.
   * **Influencia:** Baja inicialmente, pero con potencial de crecimiento.
     
**3.5	Perfiles de los Usuarios**

**Usuario Tipo 1 – Principiante**

   * **Perfil:** Estudiante sin experiencia avanzada en bases de datos.
   * **Objetivo:** Comprender errores en consultas SQL y estructuras JSON.
   * **Necesidades:**
      * Mensajes claros
      * Explicaciones simples
      * Retroalimentación inmediata
        
**Usuario Tipo 2 – Intermedio**

   * **Perfil:** Programador con conocimientos básicos/intermedios.
   * **Objetivo:** Validar consultas antes de su ejecución.
   * **Necesidades:**
      * Precisión en la validación
      * Rapidez en resultados
      * Identificación de errores específicos
        
**Usuario Tipo 3 – Avanzado**

   * **Perfil:** Desarrollador con experiencia en bases de datos.
   * **Objetivo:** Utilizar la herramienta como apoyo en su flujo de trabajo.
   * **Necesidades:**
      * Validaciones confiables
      * Posibilidad de ampliar funcionalidades
      * Uso eficiente sin pérdida de tiempo
     
**3.6	Necesidades de los interesados y usuarios**

Los distintos actores del sistema presentan necesidades específicas que el proyecto busca satisfacer:

Los estudiantes requieren una herramienta que les permita aprender de forma práctica, identificando errores y comprendiendo la sintaxis correcta de consultas SQL y estructuras NoSQL.

Los desarrolladores necesitan validar sus consultas antes de ejecutarlas, evitando errores que puedan afectar el funcionamiento de sus aplicaciones.

Los docentes requieren un medio que apoye el proceso de enseñanza, facilitando la comprensión de conceptos complejos mediante una herramienta interactiva.

La comunidad académica se beneficia de contar con un sistema accesible, gratuito y fácil de implementar, que contribuya al aprendizaje y mejora de habilidades técnicas.

En conjunto, el sistema responde a estas necesidades mediante:

* Validación automática de sintaxis
* Retroalimentación clara y educativa
* Facilidad de uso
* Accesibilidad sin costo
  
<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

4. <span id="_Toc52661349" class="anchor"></span>**Estudio de
    Factibilidad**

**4.1	Perspectiva del producto**

El **Validador de sintaxis SQL u otra(NoSQL)** se concibe como una herramienta de software que actúa como una capa de validación y análisis sintáctico entre el usuario (desarrollador o administrador) y los motores de bases de datos, tanto SQL como NoSQL. Desde una perspectiva arquitectónica, el sistema no reemplaza los motores de bases de datos ni sus validadores internos, sino que los complementa mediante una validación previa, uniforme y comprensible.

La solución funciona como un intermediario inteligente que permite al usuario ingresar consultas antes de su ejecución real, verificando su estructura, detectando errores y proporcionando retroalimentación clara. Esto reduce riesgos, mejora la calidad del código y evita fallos en entornos de desarrollo y producción.

El sistema procesa consultas provenientes de distintos motores (como PostgreSQL, MySQL o MongoDB), interpreta sus reglas sintácticas específicas y presenta los resultados de manera estandarizada. Además, mantiene un registro de validaciones que permite a los usuarios aprender de errores previos y mejorar progresivamente.

A nivel funcional, el producto integra tres componentes principales: una interfaz de interacción CLI que facilita el uso desde terminal, un núcleo de validación encargado del análisis sintáctico y generación de mensajes de error, y un sistema de adaptadores que permite soportar múltiples motores de bases de datos de forma transparente.

El diseño prioriza la simplicidad de uso, la compatibilidad multiplataforma, el funcionamiento offline y la extensibilidad para incorporar nuevos motores en el futuro.

**4.2	Resumen de capacidades**

* **Validación de sintaxis:** El sistema permite verificar automáticamente la validez de consultas antes de su ejecución, identificando errores estructurales en sentencias SQL y comandos NoSQL.
* **Soporte multi-motor:** Es capaz de trabajar con distintos motores de bases de datos, adaptándose a sus diferencias sintácticas y proporcionando una experiencia unificada al usuario.
* **Detección de errores comunes:** Identifica problemas como uso incorrecto de palabras reservadas, errores en la estructura de la consulta, omisión de cláusulas obligatorias o formatos inválidos.
* **Mensajes explicativos:** Genera retroalimentación clara y comprensible, orientada a facilitar la corrección incluso para usuarios con menor experiencia.
* **Sugerencias de corrección:** En ciertos casos, propone posibles soluciones o ajustes en la consulta para mejorar su validez.
* **Historial de validaciones:** Permite almacenar consultas analizadas previamente, facilitando el seguimiento y aprendizaje continuo.
* **Interfaz de línea de comandos (CLI):** Permite ejecutar validaciones de forma rápida y eficiente desde terminal.
* **Exportación de resultados:** Permite generar reportes en formatos estructurados como JSON o Markdown.
  
**4.3	Suposiciones y dependencias**

**Suposiciones técnicas:**

Se asume que el usuario dispone de un entorno con Java 17 o superior instalado en su sistema. Asimismo, se considera que cuenta con acceso a motores de bases de datos SQL y/o NoSQL para la validación de consultas.

**Dependencias técnicas:**

El sistema se desarrollará utilizando tecnologías open source del ecosistema Java, incluyendo:

* JDBC para conexión con bases de datos relacionales
* MongoDB Java Driver para bases de datos NoSQL
* Picocli para la interfaz de línea de comandos
* Librerías adicionales para validación y manejo de configuraciones

El sistema no depende de servicios externos ni de conexión a internet para su funcionamiento, permitiendo un uso completamente offline.

**4.4	Costos y precios**

El **Validador de sintaxis SQL u otra(NoSQL)** es una herramienta completamente gratuita:

* **Costo de uso:** S/. 0
* **Distribución:** Libre mediante repositorios públicos
* **Mantenimiento:** Basado en contribución académica y comunitaria

A diferencia de herramientas comerciales que incluyen validación como parte de entornos de desarrollo pagos, esta solución ofrece una alternativa accesible y ligera, enfocada exclusivamente en la validación sintáctica.

El proyecto tiene un enfoque académico y de apoyo a la comunidad, sin fines de lucro, orientado a mejorar las prácticas de desarrollo en bases de datos.

**4.5	Licenciamiento e instalación**

El sistema se distribuye bajo licencia MIT, lo que permite su uso, modificación y distribución sin restricciones significativas tanto en entornos académicos como comerciales.

Todas las dependencias utilizadas son compatibles con licencias open source, garantizando transparencia y facilidad de adopción.

**Instalación:**

El proceso de instalación es simple y rápido mediante gestores de paquetes. El usuario puede instalar la herramienta, configurarla y comenzar a validar consultas inmediatamente desde la terminal.

Para desarrolladores, el proyecto está disponible en un repositorio que permite su modificación, contribución y despliegue en distintos entornos.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

5. <span id="_Toc52661350" class="anchor"></span>**Características del producto**

El **Validador de sintaxis SQL u otra (NoSQL)** se define como una herramienta especializada en la validación y análisis de consultas para bases de datos, diseñada para ofrecer una experiencia eficiente, clara y educativa al usuario. Sus funcionalidades no se presentan únicamente como módulos aislados, sino como capacidades integradas que permiten validar, interpretar y mejorar consultas antes de su ejecución.

A continuación, se describen las principales características del sistema desde un enfoque funcional:

* **Validación previa a la ejecución**

El sistema permite analizar consultas antes de ser enviadas al motor de base de datos, identificando errores sintácticos que podrían generar fallos en tiempo de ejecución. Esto reduce significativamente riesgos en entornos de desarrollo y producción, actuando como una capa preventiva.

* **Compatibilidad con múltiples tecnologías**

La herramienta está diseñada para operar con distintos tipos de bases de datos, incluyendo sistemas relacionales (SQL) y no relacionales (NoSQL). Esta capacidad permite al usuario trabajar en entornos heterogéneos sin necesidad de cambiar de herramienta.

* **Interpretación inteligente de errores**

A diferencia de los mensajes tradicionales de los motores de bases de datos, el sistema transforma los errores en explicaciones más comprensibles, facilitando su interpretación. Esto permite que tanto usuarios experimentados como principiantes puedan entender rápidamente qué está fallando en su consulta.

* **Asistencia en la corrección de consultas**

El sistema no solo detecta errores, sino que también orienta al usuario en su solución. A través de sugerencias y recomendaciones, ayuda a corregir estructuras incorrectas, promoviendo buenas prácticas en la escritura de queries.

* **Registro y seguimiento de validaciones**

Cada consulta analizada puede ser almacenada junto con su resultado, lo que permite al usuario revisar errores pasados, identificar patrones y mejorar progresivamente su desempeño. Este historial también puede servir como referencia en entornos educativos o de desarrollo.

* **Interacción flexible desde terminal**

El sistema está optimizado para su uso desde la línea de comandos, permitiendo integrarse fácilmente en flujos de trabajo de desarrollo. Adicionalmente, puede incorporar interfaces más interactivas para mejorar la experiencia del usuario en escenarios más complejos.

* **Enfoque educativo**

Además de su funcionalidad técnica, la herramienta cumple un rol formativo al ayudar al usuario a comprender la sintaxis correcta de distintos lenguajes de consulta. Esto la convierte en un recurso útil para estudiantes y desarrolladores en proceso de aprendizaje.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

6. <span id="_Toc52661351" class="anchor"></span>**Restricciones**

El **Validador de sintaxis SQL u otra (NoSQL)** operará bajo un conjunto de restricciones de carácter técnico, organizacional y operativo que deben ser consideradas durante su desarrollo e implementación. Estas limitaciones definen el alcance del sistema y garantizan su viabilidad dentro del contexto del proyecto.

**Restricciones técnicas**

* **Compatibilidad de motores:** El sistema estará orientado a soportar un conjunto limitado de motores de bases de datos en su fase inicial, incluyendo motores SQL (como PostgreSQL y MySQL) y NoSQL (como MongoDB). La incorporación de nuevos motores dependerá de futuras extensiones del sistema.

* **Entorno de ejecución:** La herramienta será desarrollada en Java (versión 17 o superior), por lo que su ejecución dependerá de la disponibilidad de una máquina virtual Java (JVM) en el entorno del usuario.

* **Funcionamiento offline:** El sistema está diseñado para operar sin conexión a internet, por lo que no podrá acceder a servicios externos para validación o actualización en tiempo real. Todas las validaciones se realizarán de forma local.

* **Limitaciones de validación:** La herramienta se centrará en la validación sintáctica y estructural de consultas, sin ejecutar realmente las queries sobre los motores de bases de datos. Por lo tanto, no detectará errores relacionados con datos específicos, índices o estados reales de la base de datos.

* **Interfaz basada en terminal:** El sistema funcionará principalmente a través de línea de comandos (CLI), lo que implica que usuarios sin experiencia en entornos de terminal podrían requerir un periodo de adaptación.

**Restricciones organizacionales**

* **Alcance académico:** El desarrollo del sistema está limitado por el contexto académico, incluyendo tiempo de desarrollo, recursos disponibles y tamaño del equipo. Esto puede influir en la cantidad de funcionalidades implementadas en la primera versión.

* **Disponibilidad de desarrollo:** El proyecto será desarrollado por un equipo reducido (o individual), lo que implica priorización de funcionalidades esenciales frente a características avanzadas.

* **Uso de tecnologías open source:** Se priorizará el uso de herramientas y librerías de código abierto, evitando dependencias de software comercial o licencias de pago.

**Restricciones operativas**

* **Dependencia del usuario:** El sistema requiere que el usuario ingrese correctamente las consultas y seleccione el motor adecuado para obtener resultados precisos. Un uso incorrecto puede afectar la calidad de la validación.

* **Actualización del sistema:** Las actualizaciones dependerán de la distribución manual o mediante repositorios, por lo que no existirá un mecanismo automático de actualización en tiempo real.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

7. <span id="_Toc52661352" class="anchor"></span>**Rangos de Calidad**

El **Validador de sintaxis SQL u otra (NoSQL)** define sus estándares de calidad a partir de métricas cuantificables que permiten evaluar su desempeño, confiabilidad y utilidad durante su desarrollo y uso. Estas métricas aseguran que la herramienta cumpla con los objetivos de validación eficiente, precisión y facilidad de uso.

**Disponibilidad del sistema**

El sistema debe garantizar una disponibilidad mínima del 99% mensual, considerando que se trata de una herramienta local. El tiempo de inactividad estará asociado principalmente a actualizaciones o mantenimiento del software. Las nuevas versiones deberán ser estables antes de su liberación para evitar interrupciones en el uso.

**Precisión de validación**

La herramienta debe alcanzar un nivel alto de exactitud en la detección de errores sintácticos. Se establece como objetivo una precisión mínima del 95% en la identificación de errores comunes, incluyendo estructuras inválidas, uso incorrecto de palabras reservadas y errores de formato.

**Consistencia de resultados**

Para una misma consulta y configuración, el sistema debe generar siempre el mismo resultado de validación. Esto garantiza confiabilidad en el análisis y permite al usuario tomar decisiones basadas en resultados reproducibles.

**Tiempo de respuesta**

El análisis de una consulta debe realizarse en un tiempo óptimo, con un objetivo de menos de 2 segundos por validación en condiciones normales. Esto asegura una experiencia fluida para el usuario, especialmente en entornos de desarrollo.

**Rendimiento**

El sistema debe ser capaz de procesar múltiples validaciones consecutivas sin degradación significativa del rendimiento. Además, debe manejar consultas de tamaño medio a grande sin afectar la estabilidad del programa.

**Seguridad**

El sistema debe prevenir riesgos asociados al manejo de entradas del usuario, incluyendo validación de datos para evitar inyecciones maliciosas dentro del propio entorno de la herramienta. Asimismo, debe garantizar que no se ejecuten consultas reales que puedan comprometer bases de datos.

**Escalabilidad funcional**

El diseño del sistema debe permitir la incorporación de nuevos motores de bases de datos en el futuro sin necesidad de rediseñar la arquitectura principal. Esto incluye soporte progresivo para más dialectos SQL y tecnologías NoSQL.

**Mantenibilidad del código**

El código fuente debe seguir buenas prácticas de desarrollo en Java, incluyendo:

* Uso de estándares de codificación (Java Code Conventions)
* Documentación clara de clases y métodos
* Cobertura de pruebas unitarias mínima del 70–80%
* Uso de control de versiones (Git)

Esto facilitará futuras mejoras y mantenimiento del sistema.

**Usabilidad**

El sistema debe ser fácil de utilizar para usuarios con conocimientos básicos de bases de datos. Se espera que un usuario pueda comprender su funcionamiento en un tiempo aproximado de 2 a 4 horas. La interfaz CLI debe ser clara, con comandos simples y mensajes entendibles.

**Portabilidad**

La herramienta debe ser compatible con distintos sistemas operativos (Windows, Linux), siempre que cuenten con Java. Esto garantiza accesibilidad para distintos tipos de usuarios.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

8. <span id="_Toc52661353" class="anchor"></span>**Precedencia y Prioridad**

Las funcionalidades del Validador de sintaxis SQl u otra se organizan según su impacto en el sistema y el tiempo disponible de desarrollo. El proyecto contempla una duración total de 16 semanas, donde se busca alcanzar un 85% de funcionalidad operativa al finalizar, priorizando primero el núcleo del sistema.

**Prioridad 1 – Crítica (Semanas 1–4)**

Fase enfocada en construir la base funcional del sistema.

* **Motor de validación sintáctica:** Desarrollo del analizador principal para consultas SQL.
* **Soporte inicial para SQL:** Implementación de validación básica para PostgreSQL y MySQL.
* **Detección de errores sintácticos:** Identificación de errores comunes (palabras clave, estructura, formato).
* **CLI básica:** Ejecución de validaciones desde terminal.
* **Estructura del proyecto en Java:** Organización modular del sistema.

**Prioridad 2 – Alta (Semanas 5–8)**

Se amplían las capacidades del sistema y su utilidad práctica.

* **Soporte completo para SQL:** Inclusión de SQLite y mejora de reglas de validación.
* **Mensajes de error mejorados:** Explicaciones más claras y útiles para el usuario.
* **Sistema de sugerencias:** Recomendaciones básicas para corregir errores.
* **Exportación de resultados:** Salida en JSON o texto estructurado.
  
**Prioridad 3 – Media (Semanas 9–12)**

Se introduce soporte NoSQL y mejoras de experiencia.

* **Integración de motores NoSQL:** MongoDB y Redis como primera fase.
* **Adaptación del validador:** Soporte para distintos estilos de consulta.
* **Historial de validaciones:** Registro de consultas procesadas.
* **Optimización del rendimiento:** Mejora en tiempos de respuesta.

**Prioridad 4 – Finalización (Semanas 13–16)**

Etapa enfocada en consolidar el sistema y alcanzar el 85% funcional.

* **Interfaz mejorada (CLI avanzada):** Mejor interacción con el usuario.
* **Corrección de errores (testing):** Pruebas intensivas del sistema.
* **Optimización general:** Rendimiento y estabilidad.
* **Documentación del sistema:** Manual técnico y de usuario.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

9. <span id="_Toc52661354" class="anchor"></span>**Otros requerimientos del producto**

**9.1 Estándares Legales**

El proyecto debe cumplir con normativas de protección de datos y propiedad intelectual, considerando que opera como una herramienta local.

* **Licencia del proyecto:** 

Licencia MIT, garantizando compatibilidad con dependencias utilizadas y permitiendo uso, modificación y distribución.

* **Privacidad de datos:**

El sistema cumple con:

   * Ley Nº 29733 (Perú) – Protección de Datos Personales
   * Principios del RGPD (Unión Europea) aplicables a privacidad
  
* **Almacenamiento local exclusivo:**

   * Toda la información (consultas, configuraciones, resultados) se almacena únicamente en el entorno del usuario (por ejemplo, en ~/.query-validator/).
   * No existe transmisión de datos a servidores externos ni procesamiento en la nube.
     
* **No recopilación de datos:**

El sistema no recolecta, comparte ni analiza información del usuario fuera de su entorno local.

* **Propiedad intelectual:**

El código es original, desarrollado íntegramente por el autor, sin conflictos legales ni uso indebido de software propietario.

* **Auditoría de dependencias:**

Las librerías utilizadas serán verificadas periódicamente para detectar vulnerabilidades conocidas.

**9.2 Estándares de Comunicación**

El sistema define estándares claros para la interacción con el usuario y la documentación técnica.

* **Documentación técnica:**

Disponible en formato Markdown dentro del proyecto (/docs), con ejemplos prácticos de uso.

* **Archivo README:**
  
Debe incluir:
   * Descripción del sistema
   * Guía rápida de uso (quickstart)
   * Motores soportados
   * Ejemplos de validación

* **Mensajes del sistema:**
     
Los errores deben ser:
  
   * Claros y descriptivos
   * Comprensibles para el usuario
   * Acompañados de sugerencias de solución
     
* **Control de versiones:**

Uso de estándares como: 
   * Conventional Commits (feat, fix, docs, etc.)
   * Buenas prácticas en gestión de cambios
     
* **Gestión de incidencias:**
Uso de herramientas como GitHub Issues con criterios claros y verificables.

**9.3 Estándares de Cumplimiento de Plataforma**

El sistema debe ser compatible con entornos modernos y seguir buenas prácticas de desarrollo.

* **Lenguaje de desarrollo:**
  
Java (versión LTS recomendada, como Java 17 o superior)

* **Sistemas operativos compatibles:**
  
   * Linux (Ubuntu o similares)
   * Windows
   * macOS
     
* **Versionado del software:**
  
Uso de Semantic Versioning (MAJOR.MINOR.PATCH):
   * Versiones iniciales (v0.x): en desarrollo
   * Versión 1.0.0+: estable
     
* **Portabilidad:**
  
El sistema debe ejecutarse en cualquier entorno con máquina virtual Java (JVM).

* **Integración y pruebas continuas (CI/CD):**
Uso de herramientas como GitHub Actions para:
   * Ejecución de pruebas
   * Verificación de calidad de código
   * Análisis estático
  
**9.4 Estándares de Calidad y Seguridad**

El sistema implementa prácticas para garantizar confiabilidad, seguridad y mantenibilidad.

* **Seguridad de datos**
  
Protección de información sensible:
   * No se almacenan contraseñas en texto plano
   * No se muestran datos sensibles en consola ni logs
     
* **Configuración segura:**
  
   * Uso de variables de entorno para datos sensibles
   * Enmascaramiento de información crítica (ejemplo: ***)

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

<span id="_Toc52661355" class="anchor"></span>**CONCLUSIONES**

El Validador de sintaxis SQL u otra (NoSQL) se presenta como un proyecto viable, alcanzable y de alto valor, tanto a nivel técnico como académico, destacando por los siguientes aspectos:

**Resolución de una necesidad real**

Una gran parte de los errores en el desarrollo de aplicaciones está relacionada con consultas mal estructuradas o sintácticamente incorrectas. Actualmente, no existe una herramienta ligera y unificada que permita validar de forma automática consultas SQL y NoSQL antes de su ejecución.
Este sistema busca cubrir esa necesidad, reduciendo errores y mejorando la calidad del código desde etapas tempranas.

**Factibilidad técnica**

El desarrollo del sistema es completamente viable, ya que:

* Se basa en tecnologías open source y ampliamente documentadas
* Utiliza Java, un lenguaje robusto y multiplataforma
* Implementa una arquitectura modular que permite escalar fácilmente
* El uso de adaptadores facilita la integración de múltiples motores de bases de datos

**Viabilidad económica**

El proyecto no requiere inversión en licencias ni servicios externos, lo que lo convierte en una solución accesible:

* Software 100% gratuito
* Sin necesidad de infraestructura en la nube
* Bajo costo de desarrollo y mantenimiento
* Alto potencial de reutilización en otros proyectos

**Accesibilidad y disponibilidad**

El sistema está diseñado para ser fácilmente utilizable por cualquier usuario:

* Funciona de manera local (offline)
* No depende de servicios externos
* Compatible con múltiples sistemas operativos
* Distribución sencilla gracias a la plataforma Java

**Valor educativo**

Además de su utilidad práctica, el proyecto tiene un fuerte enfoque formativo:

* Permite comprender mejor la estructura de consultas SQL y NoSQL
* Proporciona retroalimentación que ayuda al aprendizaje
* Fomenta el entendimiento de distintos motores de bases de datos
* Representa una experiencia completa de desarrollo de software

**Proyección y escalabilidad**

El sistema está diseñado pensando en su crecimiento futuro:

* Posibilidad de integrar nuevos motores de bases de datos
* Mejora continua del análisis y validación
* Potencial para integrarse con herramientas de desarrollo (IDEs)
* Base sólida para evolucionar hacia una herramienta más avanzada

**Conclusión general**

El Validador de Sintaxis SQL u otra (NoSQL) no solo cumple con los objetivos planteados, sino que también se posiciona como una herramienta útil, escalable y con potencial real de crecimiento. Su combinación de simplicidad, funcionalidad y valor educativo lo convierte en un proyecto sólido y defendible tanto a nivel académico como técnico.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

<span id="_Toc52661356" class="anchor"></span>**RECOMENDACIONES**

**Inicio inmediato del desarrollo**

Dado que los análisis de factibilidad son favorables, se recomienda comenzar el desarrollo sin demoras. El primer paso debe centrarse en el milestone v0, correspondiente a la configuración inicial del entorno y la definición de la arquitectura base del sistema.

**Enfoque en las primeras versiones**

Es fundamental consolidar correctamente la base del sistema antes de avanzar. Para ello, se debe asegurar que:

* Los motores PostgreSQL, MySQL y SQLite funcionen correctamente
* El validador sintáctico principal esté operativo
* La detección de errores y validaciones básicas esté probada

Estas funcionalidades deben estar completamente estables antes de incorporar soporte para tecnologías NoSQL.

**Gestión del tiempo y planes alternativos**

Considerando posibles limitaciones de tiempo (académicas u otras), se plantean tres escenarios:

* **Plan A (ideal):**
  
Completar el sistema hasta la versión v3, incluyendo CLI y una interfaz más interactiva.

* **Plan B (intermedio):**
  
Alcanzar hasta v2, priorizando una CLI completa y funcional, sin necesidad de interfaz avanzada.

* **Plan C (mínimo viable):**

Implementar v0–v1 con soporte para PostgreSQL y MySQL, logrando un sistema funcional básico pero entregable.

En todos los casos, se prioriza la funcionalidad del núcleo sobre elementos secundarios como interfaces más complejas.

**Desarrollo paralelo de documentación**

Se recomienda elaborar la documentación técnica (arquitectura, metodología, especificaciones) de forma simultánea al desarrollo del código. Esto permite:

* Llevar un mejor control del progreso
* Detectar inconsistencias tempranas
* Facilitar la validación académica del proyecto

**Implementación de pruebas desde el inicio**

El testing debe integrarse desde las primeras fases del desarrollo:

* Crear pruebas unitarias junto con cada módulo desarrollado
* Validar el comportamiento del sistema de forma continua
* Evitar acumulación de errores hacia las etapas finales

Esto mejora la calidad del software y reduce riesgos.

**Integración continua (CI/CD) temprana**

Es recomendable configurar herramientas de integración continua desde el inicio del proyecto (v0), por ejemplo:

* Verificación de calidad del código
* Detección temprana de fallos

Esto permite mantener un desarrollo más ordenado y confiable.

**Comunicación y seguimiento del proyecto**

Se sugiere mantener una comunicación constante con el docente o supervisor del proyecto mediante:

* Reportes periódicos de avance
* Validación de decisiones técnicas importantes
* Identificación y gestión temprana de riesgos

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

