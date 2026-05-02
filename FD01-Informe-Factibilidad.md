<center>

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

</center>

---

# **Sistema Validador de Sintaxis SQL u otra**
## **Informe de Factibilidad**
**Versión:** 1.0  

---

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
El proyecto consiste en el desarrollo de una **aplicación web interactiva** para la validación de sintaxis SQL y NoSQL. El sistema opera bajo una arquitectura cliente-servidor, donde el usuario interactúa mediante un editor de código en el navegador, mientras que el backend procesa las consultas.

A diferencia de herramientas tradicionales acopladas a motores de bases de datos, este sistema permite validar consultas de forma **rápida, segura e independiente**, sin necesidad de conexión a un servidor real.

El sistema incluye:
- Validación de múltiples dialectos SQL (MySQL, PostgreSQL, SQLite, ANSI)
- Validación de consultas NoSQL (MongoDB)
- Detección de errores por línea y columna
- Sugerencias de corrección
- Interfaz web moderna con Monaco Editor

Esta herramienta está orientada a estudiantes y desarrolladores que buscan mejorar la calidad de sus consultas antes de ejecutarlas en entornos reales.

---

### **1.4 Objetivos**

#### **1.4.1 Objetivo General**
Desarrollar un sistema web de validación eficiente que permita verificar la estructura sintáctica de consultas SQL y NoSQL antes de su ejecución en sistemas reales.

#### **1.4.2 Objetivos Específicos**
* Implementar un backend con Node.js y Express para procesar validaciones.
* Integrar un editor de código interactivo (Monaco Editor).
* Detectar errores con ubicación exacta (línea y columna).
* Soportar múltiples dialectos SQL y consultas MongoDB.
* Diseñar una interfaz intuitiva y accesible.
* Implementar endpoints API para validación (`/api/validate`).

---

## **2. Riesgos**
* Dependencia de librerías externas para parsing.
* Complejidad en soporte de múltiples dialectos SQL.
* Posibles problemas de rendimiento en validación en tiempo real.
* Limitaciones en la validación de consultas NoSQL complejas.
* Posible ampliación del alcance del proyecto.

---

## **3. Análisis de la Situación Actual**

### **3.1 Planteamiento del Problema**
Actualmente, estudiantes y desarrolladores validan consultas ejecutándolas directamente en motores de bases de datos, lo que genera:

1. Consumo innecesario de recursos.
2. Mensajes de error poco claros.
3. Riesgo de afectar datos reales.

---

### **3.2 Consideraciones de Infraestructura**
El sistema se basa en una arquitectura **MVC**:

**Tecnologías:**
- Backend: Node.js + Express
- Frontend: HTML, CSS, JavaScript
- Editor: Monaco Editor
- Librerías: node-sql-parser
- Control de versiones: GitHub

Esto permite escalabilidad, mantenimiento sencillo y futura expansión.

---

## **4. Estudio de Factibilidad**

### **4.1 Factibilidad Técnica**
El proyecto es viable debido al uso de tecnologías modernas, accesibles y ampliamente documentadas. El equipo cuenta con conocimientos en desarrollo web, bases de datos y APIs REST.

---

### **4.2 Factibilidad Económica**
El costo del proyecto es bajo debido al uso de herramientas gratuitas, lo que lo hace sostenible y accesible.

*(Se mantiene tu tabla original sin cambios)*

---

### **4.3 Factibilidad Operativa**
El sistema es fácil de usar:
- Acceso desde navegador
- No requiere instalación
- Interfaz intuitiva

Beneficios:
- Reducción del tiempo de depuración
- Mejora del aprendizaje
- Eliminación de riesgos en bases reales

---

### **4.4 Factibilidad Legal**
Cumple con normativas:
- Uso de software libre
- Código propio
- No manejo de datos personales

---

### **4.5 Factibilidad Social**
Impacto positivo en estudiantes:
- Mejora el aprendizaje
- Reduce frustración
- Facilita la práctica

---

### **4.6 Factibilidad Ambiental**
Impacto mínimo:
- Uso digital
- Sin infraestructura adicional
- Optimización de recursos

---

## **5. Análisis Financiero**

### **5.1 Justificación de la Inversión**
El proyecto aporta beneficios en eficiencia, aprendizaje y reducción de errores.

---

### **5.2 Indicadores**
- Relación B/C > 1  
- VAN > 0  
- TIR > COK  

---

## **6. Conclusiones**

1. El proyecto es técnicamente viable gracias a tecnologías modernas.
2. Presenta bajo costo y alto beneficio académico.
3. Mejora significativamente el proceso de aprendizaje.
4. Reduce riesgos en bases de datos reales.
5. Permite futuras mejoras como:
   - Sistema de usuarios
   - Modo práctica
   - Gamificación
6. Se recomienda continuar con el desarrollo del sistema web.
