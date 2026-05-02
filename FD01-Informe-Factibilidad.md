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

---

### **1.2 Duración del proyecto**
El proyecto tiene una duración estimada de **1 mes (4 semanas)**, estructurado en fases bien definidas:

- **Semana 1:** Análisis de requerimientos, investigación de tecnologías y diseño de arquitectura.
- **Semana 2:** Desarrollo del backend (API REST, lógica de validación).
- **Semana 3:** Desarrollo del frontend (interfaz web, integración con editor Monaco).
- **Semana 4:** Pruebas funcionales, optimización, documentación final.

Este cronograma considera iteraciones rápidas, pruebas continuas y validación incremental del sistema.

---

### **1.3 Descripción Detallada**
El presente proyecto consiste en el desarrollo de un **sistema web especializado en la validación de sintaxis de consultas SQL y NoSQL**, diseñado bajo una arquitectura cliente-servidor que permite separar claramente la lógica de negocio del entorno de presentación.

El sistema permite a los usuarios ingresar consultas a través de un editor de código avanzado integrado en el navegador (Monaco Editor), el cual simula la experiencia de entornos profesionales como Visual Studio Code. Estas consultas son enviadas al servidor mediante peticiones HTTP, donde son procesadas por un módulo de validación encargado de analizar su estructura sintáctica.

A nivel técnico, el sistema realiza un proceso similar al de un compilador:
1. **Análisis léxico:** Identificación de tokens (palabras reservadas, operadores, identificadores).
2. **Análisis sintáctico:** Verificación de la estructura gramatical.
3. **Detección de errores:** Identificación de inconsistencias en la consulta.
4. **Retroalimentación:** Generación de mensajes claros con ubicación exacta.

Para SQL, se utilizan librerías especializadas que permiten interpretar múltiples dialectos, mientras que para NoSQL (MongoDB), se valida la estructura de comandos y documentos JSON.

Este sistema no ejecuta consultas reales, lo cual elimina riesgos sobre bases de datos y lo convierte en una herramienta ideal para:
- Aprendizaje académico
- Validación previa en desarrollo
- Pruebas rápidas de consultas

Además, el sistema está diseñado con posibilidad de escalabilidad, permitiendo integrar en el futuro funcionalidades como autenticación, almacenamiento de historial, y módulos de práctica.

---

### **1.4 Objetivos**

#### **1.4.1 Objetivo General**
Desarrollar una aplicación web capaz de validar de manera eficiente y precisa la sintaxis de consultas SQL y NoSQL, proporcionando retroalimentación inmediata al usuario.

---

#### **1.4.2 Objetivos Específicos**
* Diseñar una arquitectura basada en el patrón MVC.
* Implementar un backend con Node.js y Express.
* Integrar librerías de parsing para SQL.
* Validar estructuras de consultas MongoDB.
* Detectar errores con precisión (línea y columna).
* Implementar un sistema de mensajes de error claros.
* Desarrollar una interfaz web moderna.
* Optimizar tiempos de respuesta del sistema.
* Permitir futura integración de funcionalidades educativas.

---

## **2. Riesgos**

El desarrollo del sistema presenta los siguientes riesgos potenciales:

* **Dependencia tecnológica:** El uso de librerías externas puede limitar la flexibilidad del sistema.
* **Complejidad de implementación:** La validación sintáctica completa es un proceso complejo.
* **Compatibilidad:** Diferencias entre dialectos SQL pueden generar inconsistencias.
* **Rendimiento:** Validaciones frecuentes pueden afectar la experiencia del usuario.
* **Escalabilidad:** El sistema podría requerir rediseño si crece en funcionalidad.
* **Curva de aprendizaje:** Dominio de herramientas modernas puede representar un reto inicial.

---

## **3. Análisis de la Situación Actual**

### **3.1 Planteamiento del Problema**
Actualmente, la validación de consultas se realiza directamente en motores de bases de datos, lo que implica:

1. Uso innecesario de recursos computacionales.
2. Mensajes de error poco intuitivos.
3. Riesgo de afectar datos reales.
4. Dependencia de entornos específicos.
5. Dificultad en el aprendizaje para estudiantes.

---

### **3.2 Consideraciones de Infraestructura**
El sistema adopta el patrón **MVC en entorno web**, permitiendo:

- Separación de responsabilidades
- Mantenimiento sencillo
- Escalabilidad

**Tecnologías utilizadas:**
- Backend: Node.js + Express
- Frontend: HTML5, CSS3, JavaScript
- Editor: Monaco Editor
- Librerías: node-sql-parser
- Control de versiones: GitHub

---

## **4. Estudio de Factibilidad**

### **4.1 Factibilidad Técnica**
El proyecto es altamente viable debido a:
- Disponibilidad de tecnologías modernas
- Amplia documentación
- Experiencia del equipo

Además, el uso de APIs REST permite una arquitectura flexible y escalable.

---

### **4.2 Factibilidad Económica**

*(TABLAS SE MANTIENEN IGUALES — NO SE MODIFICAN)*

---

### **4.3 Factibilidad Operativa**
El sistema presenta alta operatividad debido a:

- Acceso desde navegador
- Interfaz intuitiva
- No requiere instalación

Beneficios:
- Reducción de tiempo
- Mejora del aprendizaje
- Eliminación de riesgos

---

### **4.4 Factibilidad Legal**
El proyecto cumple con:
- Uso de software libre
- Respeto de licencias
- No manejo de datos sensibles

---

### **4.5 Factibilidad Social**
El impacto social es positivo:

- Mejora el aprendizaje académico
- Reduce frustración
- Facilita la práctica

---

### **4.6 Factibilidad Ambiental**
El impacto ambiental es mínimo debido a:

- Uso digital
- Sin hardware adicional
- Optimización de recursos

---

## **5. Análisis Financiero**

### **5.1 Justificación de la Inversión**
El proyecto genera beneficios en eficiencia, aprendizaje y optimización de recursos.

---

### **5.2 Criterios de Inversión**
* Relación B/C > 1  
* VAN > 0  
* TIR > COK  

---

## **6. Conclusiones**

1. El proyecto es completamente viable desde el punto de vista técnico.
2. Presenta bajo costo y alto impacto académico.
3. Mejora significativamente el proceso de aprendizaje.
4. Reduce riesgos en entornos reales.
5. Permite escalabilidad futura.
6. Se recomienda su implementación.
