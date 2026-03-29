<center>

[comment]: <img src="./media/media/image1.png" style="width:1.088in;height:1.46256in" alt="escudo.png" />

![./media/media/image1.png](./media/logo-upt.png)

**UNIVERSIDAD PRIVADA DE TACNA**

**FACULTAD DE INGENIERIA**

**Escuela Profesional de Ingeniería de Sistemas**

**Proyecto *"VALIDADOR DE SINTAXIS SQL U OTRA"***

Curso: *Base de Datos II*

Docente: *Mag. Patrick Cuadros Quiroga*

Integrantes:

***Soto Oquendo Cristian Gabriel (2026086510)***
***Arocutipa Arocutipa Gian Franco (2023076790)***

**Tacna – Perú**

***2026***

**  
**
</center>
<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

Sistema Validador de sintaxis SQL u otra

Informe de Factibilidad

Versión *{1.0}*

|CONTROL DE VERSIONES||||||
| :-: | :- | :- | :- | :- | :- |
|Versión|Hecha por|Revisada por|Aprobada por|Fecha|Motivo|
|1\.0|MPV|ELV|ARV|10/10/2020|Versión Original|

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

# **INDICE GENERAL**

[1. Descripción del Proyecto](#_Toc52661346)

[2. Riesgos](#_Toc52661347)

[3. Análisis de la Situación actual](#_Toc52661348)

[4. Estudio de Factibilidad](#_Toc52661349)

[4.1 Factibilidad Técnica](#_Toc52661350)

[4.2 Factibilidad económica](#_Toc52661351)

[4.3 Factibilidad Operativa](#_Toc52661352)

[4.4 Factibilidad Legal](#_Toc52661353)

[4.5 Factibilidad Social](#_Toc52661354)

[4.6 Factibilidad Ambiental](#_Toc52661355)

[5. Análisis Financiero](#_Toc52661356)

[6. Conclusiones](#_Toc52661357)


<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

**<u>Informe de Factibilidad</u>**

1. <span id="_Toc52661346" class="anchor"></span>**Descripción del Proyecto**

    1.1. Nombre del proyecto

        Validador de Sintaxis SQL u otra.

    1.2. Duración del proyecto

        1 mes

    1.3. Descripción

        El proyecto consiste en el desarrollo de una herramienta de software a nivel local que permite realizar el análisis léxico y sintáctico de consultas para bases de datos relacionales (SQL) y documentales                  (NoSQL/JSON). Se desenvuelve en un contexto académico y de desarrollo de software, sirviendo como un entorno de pruebas preliminar y ligero para evitar errores de sintaxis antes de la ejecución en motores de             bases de datos reales.

    1.4. Objetivos

        1.4.1 Objetivo general
           Desarrollar un software eficiente que valide la estructura gramatical básica de sentencias SQL y comandos NoSQL sin necesidad de conexión a un servidor de base de datos.
        1.4.2 Objetivos Específicos
            •	Implementar un analizador léxico (Lexer) capaz de reconocer tokens, palabras reservadas y operadores básicos de manera optimizada.
            •	Construir un Parser para validar reglas gramaticales estrictas y de nivel único para estructuras relacionales (SELECT, INNER JOIN simple) y comandos NoSQL (find()).Implementar un analizador léxico (Lexer) capaz de reconocer tokens, palabras reservadas y operadores básicos de manera optimizada.
            •	Desarrollar un sistema de reporte que indique la línea exacta y el token donde ocurre un error sintáctico.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

2. <span id="_Toc52661347" class="anchor"></span>**Riesgos**

        •	Desarrollar un sistema de reporte que indique la línea exacta y el token donde ocurre un error sintáctico.
        •	Limitaciones de rendimiento si no se gestionan correctamente los ciclos de lectura de cadenas de texto muy largas.
        •	Curva de aprendizaje en la implementación de algoritmos de parsing manual.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

3. <span id="_Toc52661348" class="anchor"></span>**Análisis de la Situación actual**

    3.1. Planteamiento del problema

            Actualmente, la validación de scripts y consultas de base de datos se realiza ejecutando directamente el código en el motor como SQL Server. Esto consume recursos innecesarios del servidor, aumenta los tiempos de depuración y no proporciona un entorno de aprendizaje seguro y aislado para desarrolladores que están estructurando consultas.

    3.2. Consideraciones de hardware y software

            Se utilizará un enfoque de Clean Architecture implementado en lenguajes robustos como Java o C#. El control de versiones se gestionará a través de GitHub. A nivel de hardware, se requiere equipo estándar de desarrollo.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

4. <span id="_Toc52661349" class="anchor"></span>**Estudio de
    Factibilidad**

    El presente estudio evaluará la viabilidad técnica, económica, operativa, legal, social y ambiental para asegurar que el desarrollo del validador de sintaxis bajo el alcance establecido sea exitoso y realizable.

    4.1. <span id="_Toc52661350" class="anchor"></span>Factibilidad Técnica

        El proyecto es altamente factible. Se cuenta con el conocimiento necesario en programación orientada a objetos (Java/C#), patrones de diseño de software y manejo de repositorios (Git). El hardware actual es completamente suficiente para compilar y probar analizadores léxicos

    4.2. <span id="_Toc52661351" class="anchor"></span>Factibilidad Económica

        El estudio de viabilidad económica tiene como objetivo determinar si el proyecto del validador de sintaxis SQL es rentable y viable desde el punto de vista financiero. En este caso, al tratarse de un proyecto académico desarrollado por dos integrantes, los costos son relativamente bajos, ya que se aprovechan recursos existentes como computadoras personales y software libre.
        Se evaluarán los costos asociados al desarrollo considerando recursos humanos, materiales y operativos necesarios para completar el proyecto.

        Definir los siguientes costos:

        4.2.1. Costos Generales

                Los costos generales corresponden a materiales de oficina y herramientas básicas necesarias para el desarrollo del proyecto.


        4.2.2. Costos operativos durante el desarrollo 
        
                Evaluar costos necesarios para la operatividad de las actividades de la empresa durante el periodo en el que se realizara el proyecto. Los costos de operación pueden ser renta de oficina, agua, luz, teléfono, etc.

        4.2.3. Costos del ambiente

                Evaluar si se cuenta con los requerimientos técnicos para la implantación del software como el dominio, infraestructura de red, acceso a internet, etc.

        4.2.4. Costos de personal

                Aquí se incluyen los gastos generados por el recurso humano que se necesita para el desarrollo del sistema únicamente.

                No se considerará personal para la operación y funcionamiento del sistema.

                Incluir tabla que muestra los gastos correspondientes al personal.

                Indicar organización y roles. Indicar horario de trabajo del personal.

        4.2.5.  Costos totales del desarrollo del sistema

                {Totalizar costos y realizar resumen de costo final del proyecto y la forma de pago.

    4.3. <span id="_Toc52661352" class="anchor"></span>Factibilidad Operativa

        Describir los beneficios del producto y si se tiene la capacidad por parte del cliente para mantener el sistema funcionando y garantizar el buen funcionamiento y su impacto en los usuarios. Lista de interesados.

    4.4. <span id="_Toc52661353" class="anchor"></span>Factibilidad Legal

        Determinar si existe conflicto del proyecto con restricciones legales como leyes y regulaciones del país o locales relacionadas con seguridad, protección de datos, conducta de negocio, empleo y adquisiciones.

    4.5. <span id="_Toc52661354" class="anchor"></span>Factibilidad Social 

        Evaluar influencias y asuntos de índole social y cultural como el clima político, códigos de conducta y ética*

    4.6. <span id="_Toc52661355" class="anchor"></span>Factibilidad Ambiental

        Evaluar influencias y asuntos de índole ambiental como el impacto y repercusión en el medio ambiente.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

5. <span id="_Toc52661356" class="anchor"></span>**Análisis Financiero**

    El plan financiero se ocupa del análisis de ingresos y gastos asociados a cada proyecto, desde el punto de vista del instante temporal en que se producen. Su misión fundamental es detectar situaciones financieramente inadecuadas.
    Se tiene que estimar financieramente el resultado del proyecto.

    5.1. Justificación de la Inversión

        5.1.1. Beneficios del Proyecto

            El beneficio se calcula como el margen económico menos los costes de oportunidad, que son los márgenes que hubieran podido obtenerse de haber dedicado el capital y el esfuerzo a otras actividades.
            El beneficio, obtenido lícitamente, no es sólo una recompensa a la inversión, al esfuerzo y al riesgo asumidos por el empresario, sino que también es un factor esencial para que las empresas sigan en el  mercado e incorporen nuevas inversiones al tejido industrial y social de las naciones.
            Describir beneficios tangibles e intangibles*
            Beneficios tangibles: son de fácil cuantificación, generalmente están relacionados con la reducción de recursos o talento humano.
            Beneficios intangibles: no son fácilmente cuantificables y están relacionados con elementos o mejora en otros procesos de la organización.
>
            Ejemplo de beneficios:

            - Mejoras en la eficiencia del área bajo estudio.
            - Reducción de personal.
            - Reducción de futuras inversiones y costos.
            - Disponibilidad del recurso humano.
            - Mejoras en planeación, control y uso de recursos.
            - Suministro oportuno de insumos para las operaciones.
            - Cumplimiento de requerimientos gubernamentales.
            - Toma acertada de decisiones.
            - Disponibilidad de información apropiada.
            - Aumento en la confiabilidad de la información.
            - Mejor servicio al cliente externo e interno
            - Logro de ventajas competitivas.
            - Valor agregado a un producto de la compañía.
        
        5.1.2. Criterios de Inversión

            5.1.2.1. Relación Beneficio/Costo (B/C)

                En base a los costos y beneficios identificados se evalúa si es factible el desarrollo del proyecto. 
                Si se presentan varias alternativas de solución se evaluará cada una de ellas para determinar la mejor solución desde el punto de vista del > retorno de la inversión
                El B/C si es mayor a uno, se acepta el proyecto; si el B/C es igual a uno es indiferente aceptar o rechazar el proyecto y si el B/C es menor a uno se rechaza el proyecto

            5.1.2.2. Valor Actual Neto (VAN)
            
                Valor actual de los beneficios netos que genera el proyecto. Si el VAN es mayor que cero, se acepta el proyecto; si el VAN es igual a cero es indiferente aceptar o rechazar el proyecto y si el VAN es menor que cero se rechaza el proyecto

            5.1.2.3 Tasa Interna de Retorno (TIR)*
                Es la tasa porcentual que indica la rentabilidad promedio anual que genera el capital invertido en el proyecto. Si la TIR es mayor que el costo de oportunidad se acepta el proyecto, si la TIR es igual al costo de oportunidad es indiferente aceptar o rechazar el proyecto, si la TIR es menor que el costo de oportunidad se rechaza el proyecto

                Costo de oportunidad de capital (COK) es la tasa de interés que podría haber obtenido con el dinero invertido en el proyecto

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

6. <span id="_Toc52661357" class="anchor"></span>**Conclusiones**

Explicar los resultados del análisis de factibilidad que nos indican si el proyecto es viable y factible.
