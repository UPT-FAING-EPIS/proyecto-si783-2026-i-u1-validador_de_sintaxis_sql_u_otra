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

---

# **Sistema Validador de Sintaxis SQL u otra**
## **Informe de Factibilidad**
**Versión:** 1.0  

### **CONTROL DE VERSIONES**
| Versión | Hecha por | Revisada por | Aprobada por | Fecha | Motivo |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1.0 | Soto / Arocutipa | Patrick Cuadros | Patrick Cuadros | 28/03/2026 | Versión Original y Completa |

---

# **ÍNDICE GENERAL**
1. [Descripción del Proyecto](#1-descripción-del-proyecto)
2. [Riesgos](#2-riesgos)
3. [Análisis de la Situación Actual](#3-análisis-de-la-situación-actual)
4. [Estudio de Factibilidad](#4-estudio-de-factibilidad)
    - 4.1 [Factibilidad Técnica](#41-factibilidad-técnica)
    - 4.2 [Factibilidad Económica](#42-factibilidad-económica)
    - 4.3 [Factibilidad Operativa](#43-factibilidad-operativa)
    - 4.4 [Factibilidad Legal](#44-factibilidad-legal)
    - 4.5 [Factibilidad Social](#45-factibilidad-social)
    - 4.6 [Factibilidad Ambiental](#46-factibilidad-ambiental)
5. [Análisis Financiero](#5-análisis-financiero)
6. [Conclusiones](#6-conclusiones)

---

## **1. Descripción del Proyecto**

### **1.1 Nombre del proyecto**
**Validador de Sintaxis SQL u otra.**

### **1.2 Duración del proyecto**
El cronograma de trabajo está diseñado para completarse en **1 mes (4 semanas)**, abarcando desde el análisis de requerimientos hasta las pruebas finales y documentación.

### **1.3 Descripción Detallada**
El proyecto consiste en el diseño y desarrollo de una herramienta de software multiplataforma de ejecución local. Su función principal es actuar como un intermediario entre el desarrollador y el motor de base de datos, realizando el **análisis léxico y sintáctico** de consultas relacionales (SQL) y estructuras documentales (NoSQL/JSON). 

A diferencia de un DBMS completo, este software es ligero y no requiere conexión a un servidor, permitiendo validar la integridad gramatical de los scripts de forma aislada. Esto es especialmente útil en entornos educativos donde los errores de sintaxis pueden ser difíciles de diagnosticar directamente en la consola del servidor.

### **1.4 Objetivos**

#### **1.4.1 Objetivo General**
Desarrollar un motor de validación eficiente y de alta precisión que sea capaz de verificar la estructura gramatical de sentencias SQL y NoSQL, garantizando que cumplan con los estándares de sintaxis antes de su implementación real.

#### **1.4.2 Objetivos Específicos**
*   **Implementación de Lexer:** Desarrollar un analizador léxico capaz de descomponer cadenas de texto en tokens reconocibles (palabras reservadas, operadores, literales).
*   **Desarrollo de Parser:** Construir un analizador sintáctico para validar reglas gramaticales específicas como cláusulas SELECT, joins simples y estructuras NoSQL como `.find()`.
*   **Reporte de Errores:** Implementar una interfaz de salida que notifique al usuario la ubicación exacta (línea y columna) y la naturaleza del error detectado.
*   **Optimización Académica:** Proveer una herramienta de apoyo que reduzca la curva de aprendizaje en el manejo de bases de datos.

---

## **2. Riesgos**
*   **Ambigüedad Gramatical:** El riesgo de que el Parser no identifique correctamente sentencias complejas o anidadas si no se definen bien las reglas de producción.
*   **Desviación del Cronograma:** Debido a la complejidad intrínseca de los algoritmos de parsing manual, existe la posibilidad de requerir más tiempo del asignado.
*   **Rendimiento de Lectura:** Posible lentitud al procesar archivos de script excesivamente largos si los ciclos de lectura no son optimizados.

---

## **3. Análisis de la Situación Actual**

### **3.1 Planteamiento del Problema**
En la actualidad, tanto estudiantes como desarrolladores junior validan sus consultas ejecutándolas directamente en el motor de producción (SQL Server, MongoDB, MySQL). Esta práctica conlleva:
1.  **Consumo de Recursos:** El servidor debe dedicar CPU y RAM para procesar consultas que fallarán por errores tipográficos simples.
2.  **Mensajes Crípticos:** A menudo, los DBMS devuelven mensajes de error genéricos que no facilitan la corrección rápida.
3.  **Riesgos de Ejecución:** El riesgo latente de ejecutar accidentalmente una sentencia mal estructurada que afecte la integridad de los datos.

### **3.2 Consideraciones de Infraestructura**
Se ha optado por un enfoque de **Clean Architecture** (Arquitectura Limpia) para separar la lógica de negocio (el validador) de la interfaz de usuario. El desarrollo se apoyará en lenguajes como **Java** o **C#**, utilizando **GitHub** como repositorio central para la integración continua y el control de versiones.

---

## **4. Estudio de Factibilidad**

### **4.1 Factibilidad Técnica**
El proyecto es **totalmente viable**. El equipo de desarrollo cuenta con formación en Programación Orientada a Objetos, Estructura de Datos y Fundamentos de Compiladores. Las herramientas necesarias (NetBeans, Visual Studio, Git) son de libre acceso y el hardware disponible supera los requerimientos mínimos para la compilación de analizadores sintácticos.

### **4.2 Factibilidad Económica**
El análisis financiero demuestra que el costo es manejable y se amortiza mediante el valor del conocimiento adquirido y la eficiencia operativa futura.

#### **4.2.1 Costos Generales (Materiales y Herramientas)**
| Ítem | Cantidad | Costo Unitario (S/.) | Costo Total (S/.) |
| :--- | :--- | :--- | :--- |
| Cuadernos / Hojas de diseño | 2 | 10.00 | 20.00 |
| Lapiceros / Marcadores | 4 | 2.00 | 8.00 |
| Cartuchos de tinta para informes | 1 | 80.00 | 80.00 |
| Uso de computadoras (Laptops personales) | 2 | 0.00 | 0.00 |
| USB / Almacenamiento en la nube | 1 | 25.00 | 25.00 |
| Internet (Plan mensual proporcional) | 1 mes | 50.00 | 50.00 |
| **TOTAL GENERALES** | | | **183.00** |

#### **4.2.2 Costos Operativos durante el Desarrollo**
| Concepto | Costo Mensual (S/.) | Descripción |
| :--- | :--- | :--- |
| Energía eléctrica | 40.00 | Consumo estimado de equipos de cómputo |
| Internet fijo/móvil | 50.00 | Coordinación y acceso a repositorios |
| Transporte | 60.00 | Traslados para reuniones de equipo |
| Alimentación | 80.00 | Gastos durante jornadas de desarrollo |
| **TOTAL OPERATIVOS** | **230.00** | |

#### **4.2.3 Costos del Ambiente (Infraestructura)**
| Recurso | Disponibilidad | Costo (S/.) |
| :--- | :--- | :--- |
| Computadoras personales (Core i5/i7) | Sí | 0.00 |
| IDE (NetBeans / Visual Studio / IntelliJ) | Sí (Gratuito) | 0.00 |
| Sistemas Operativos (Windows 10/11) | Sí (Licencia OEM) | 0.00 |
| GitHub (Repositorio Público) | Sí | 0.00 |
| **TOTAL AMBIENTE** | | **0.00** |

#### **4.2.4 Costos de Personal**
Se estima el esfuerzo humano en base a una tarifa académica estándar por hora.
*   **Roles:** 2 Desarrolladores Full-Stack.
*   **Dedicación:** 20 horas semanales por persona.

| Rol | Horas Totales | Pago/Hora (S/.) | Total (S/.) |
| :--- | :--- | :--- | :--- |
| Desarrollador 1 (Gian Franco Arocutipa) | 80 | 8.00 | 640.00 |
| Desarrollador 2 (Cristian Gabriel Soto) | 80 | 8.00 | 640.00 |
| **TOTAL PERSONAL** | **160** | | **1280.00** |

#### **4.2.5 Resumen de Costos Totales**
| Tipo de Costo | Monto (S/.) |
| :--- | :--- |
| Costos Generales | 183.00 |
| Costos Operativos | 230.00 |
| Costos del Ambiente | 0.00 |
| Costos de Personal | 1280.00 |
| **INVERSIÓN TOTAL ESTIMADA** | **1693.00** |

---

### **4.3 Factibilidad Operativa**
El sistema está diseñado para ser **autónomo y fácil de usar**. Al no requerir bases de datos reales cargadas, cualquier usuario con conocimientos básicos de SQL puede utilizarlo. Los beneficios incluyen:
*   Reducción drástica del tiempo de depuración.
*   No requiere mantenimiento especializado de servidores.
*   Impacto inmediato en la calidad de los scripts generados por los estudiantes.

### **4.4 Factibilidad Legal**
El proyecto cumple estrictamente con el marco legal peruano y de propiedad intelectual:
1.  **Código Abierto:** Se utilizan librerías bajo licencias MIT y Apache.
2.  **Autoría:** El código es de autoría propia de los integrantes del equipo.
3.  **Privacidad:** El software no recolecta, almacena ni transmite datos personales de los usuarios.

### **4.5 Factibilidad Social**
Impacto directo en la Facultad de Ingeniería de la UPT. Al facilitar la validación de consultas, se fomenta un clima de aprendizaje positivo y se reduce la frustración de los estudiantes frente a errores sintácticos invisibles en los motores tradicionales.

### **4.6 Factibilidad Ambiental**
El impacto ambiental es **insignificante**. El desarrollo se basa exclusivamente en recursos digitales, evitando el uso de papel y reduciendo la huella de carbono al optimizar el uso de energía de los equipos personales.

---

## **5. Análisis Financiero**

### **5.1 Justificación de la Inversión**
Aunque es un proyecto académico, los beneficios se miden en términos de **ahorro de tiempo y optimización**.

*   **Beneficios Tangibles:** Reducción de horas-hombre en soporte técnico y ahorro de recursos de procesamiento en servidores institucionales.
*   **Beneficios Intangibles:** Fortalecimiento de la reputación académica, estandarización de procesos de desarrollo y mejora en la lógica de programación del equipo.

### **5.2 Criterios de Inversión (Indicadores)**
*   **Relación B/C:** Se estima que por cada sol invertido (referencial), se ahorran 3.5 soles en tiempos de corrección y fallos de sistema. **B/C > 1**.
*   **VAN (Valor Actual Neto):** El valor de la herramienta a largo plazo como recurso educativo supera con creces el costo de desarrollo inicial. **VAN > 0**.
*   **TIR (Tasa Interna de Retorno):** La tasa de retorno en eficiencia operativa es superior al costo de oportunidad del capital. **TIR > COK**.

---

## **6. Conclusiones**

1.  **Viabilidad Técnica Garantizada:** Se dispone de las herramientas y el conocimiento para implementar un motor de parsing robusto.
2.  **Sostenibilidad Económica:** Los costos son mínimos en comparación con los beneficios educativos y prácticos que aporta la herramienta.
3.  **Impacto Operativo:** El validador simplifica el flujo de trabajo del desarrollador, permitiendo un entorno de "fallo rápido y barato" sin comprometer bases de datos reales.
4.  **Recomendación:** Se recomienda proceder con el desarrollo del proyecto bajo las directrices de Clean Architecture planteadas, asegurando un producto de alta calidad técnica para la Escuela de Ingeniería de Sistemas.

6. <span id="_Toc52661357" class="anchor"></span>**Conclusiones**

Explicar los resultados del análisis de factibilidad que nos indican si el proyecto es viable y factible.
