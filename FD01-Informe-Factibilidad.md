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
| 1.0 | Soto / Arocutipa | Patrick Cuadros | Patrick Cuadros | 28/03/2026 | Versión original, ampliada con enfoque web y validación multi-dialecto |

---

# **ÍNDICE GENERAL**
1. Descripción del Proyecto  
2. Riesgos  
3. Análisis de la Situación Actual  
4. Estudio de Factibilidad  
5. Análisis Financiero  
6. Conclusiones  

---

# **1. Descripción del Proyecto**

## **1.1 Nombre del proyecto**
**Validador de Sintaxis SQL u otra**

---

## **1.2 Duración del proyecto**
El proyecto se desarrollará en un periodo estimado de **4 semanas**, estructurado bajo un enfoque incremental e iterativo, permitiendo validar avances de forma continua.

### **Distribución detallada del tiempo**
| Semana | Actividades | Resultado Esperado |
| :--- | :--- | :--- |
| 1 | Análisis, diseño de arquitectura MVC, definición de tecnologías | Diseño técnico aprobado |
| 2 | Desarrollo backend (API REST, validación SQL/NoSQL) | Servicios funcionales |
| 3 | Desarrollo frontend (Monaco Editor, UI) | Interfaz operativa |
| 4 | Integración, pruebas, documentación | Sistema completo |

---

## **1.3 Descripción Detallada**

El presente proyecto consiste en el desarrollo de un sistema web orientado a la validación sintáctica de consultas SQL y estructuras NoSQL, específicamente MongoDB, mediante una interfaz moderna y accesible desde navegador.

A nivel conceptual, el sistema simula el comportamiento de un compilador simplificado, incorporando etapas como:

- **Análisis léxico:** Identificación de tokens.
- **Análisis sintáctico:** Validación de estructura gramatical.
- **Detección de errores:** Identificación de inconsistencias.
- **Retroalimentación:** Generación de mensajes claros.

### **Arquitectura del sistema**

El sistema está basado en una arquitectura cliente-servidor:

- **Frontend:** Interfaz web con editor Monaco.
- **Backend:** API REST en Node.js.
- **Servicios:** Validación SQL/NoSQL.

### **Flujo de funcionamiento**

1. Usuario escribe consulta.
2. Consulta es enviada al servidor.
3. Backend procesa validación.
4. Sistema devuelve resultado.
5. Usuario corrige errores.

### **Características principales**

- Validación multi-dialecto SQL.
- Soporte MongoDB.
- Detección de errores con precisión.
- Interfaz profesional.
- Escalabilidad futura.

---

## **1.4 Objetivos**

### **1.4.1 Objetivo General**
Desarrollar una aplicación web robusta que permita validar la sintaxis de consultas SQL y NoSQL de manera eficiente y precisa.

---

### **1.4.2 Objetivos Específicos**
- Implementar arquitectura MVC.
- Desarrollar backend escalable.
- Integrar editor de código.
- Validar múltiples dialectos.
- Detectar errores detallados.
- Mejorar experiencia de usuario.
- Reducir errores en producción.
- Facilitar aprendizaje académico.

---

# **2. Riesgos**

## **2.1 Identificación de riesgos**

| Riesgo | Probabilidad | Impacto | Descripción |
| :--- | :--- | :--- | :--- |
| Dependencia de librerías | Media | Alta | Limitaciones del parser |
| Diferencias SQL | Alta | Media | Variaciones entre motores |
| Rendimiento | Media | Media | Validación en tiempo real |
| Escalabilidad | Baja | Alta | Crecimiento del sistema |
| Complejidad NoSQL | Media | Alta | Validación flexible |

---

## **2.2 Estrategias de mitigación**
- Uso de librerías confiables
- Pruebas continuas
- Optimización de código
- Modularización del sistema

---

# **3. Análisis de la Situación Actual**

## **3.1 Problema identificado**
Actualmente, los usuarios validan consultas directamente en DBMS, lo que genera:

- Consumo innecesario de recursos
- Errores poco claros
- Riesgos de ejecución
- Dependencia de entornos

---

## **3.2 Limitaciones actuales**
- Falta de herramientas educativas
- Dependencia de conexión a BD
- Bajo feedback al usuario

---

## **3.3 Propuesta de solución**
Implementar una herramienta web independiente que permita validar consultas sin ejecutar código en bases reales.

---

# **4. Estudio de Factibilidad**

## **4.1 Factibilidad Técnica**

El proyecto es viable debido a:

- Tecnologías modernas (Node.js, JS)
- Librerías disponibles
- Conocimiento del equipo

### **Herramientas utilizadas**
| Herramienta | Tipo | Uso |
| :--- | :--- | :--- |
| Node.js | Backend | Servidor |
| Express | Framework | API |
| Monaco Editor | Frontend | Editor |
| node-sql-parser | Librería | Validación |
| GitHub | Control | Versiones |

---

## **4.2 Factibilidad Económica**

### **4.2.1 Costos Generales**
| Ítem | Cantidad | Costo Unitario | Total |
| :--- | :--- | :--- | :--- |
| Materiales | 2 | 10 | 20 |
| Útiles | 4 | 2 | 8 |
| Impresión | 1 | 80 | 80 |
| Internet | 1 | 50 | 50 |
| Almacenamiento | 1 | 25 | 25 |
| **TOTAL** | | | **183** |

---

### **4.2.2 Costos Operativos**
| Concepto | Costo | Descripción |
| :--- | :--- | :--- |
| Energía | 40 | Equipos |
| Internet | 50 | Desarrollo |
| Transporte | 60 | Reuniones |
| Alimentación | 80 | Jornadas |
| **TOTAL** | **230** | |

---

### **4.2.3 Costos de Personal**
| Rol | Horas | Pago | Total |
| :--- | :--- | :--- | :--- |
| Dev 1 | 80 | 8 | 640 |
| Dev 2 | 80 | 8 | 640 |
| **TOTAL** | | | **1280** |

---

### **4.2.4 Total del proyecto**
| Tipo | Monto |
| :--- | :--- |
| Generales | 183 |
| Operativos | 230 |
| Personal | 1280 |
| **TOTAL** | **1693** |

---

## **4.3 Factibilidad Operativa**

El sistema presenta:

- Fácil acceso (web)
- Uso intuitivo
- Sin instalación

### **Ventajas operativas**
- Rapidez
- Seguridad
- Escalabilidad

---

## **4.4 Factibilidad Legal**
- Uso de software libre
- Código propio
- Sin datos sensibles

---

## **4.5 Factibilidad Social**
- Mejora educación
- Reduce frustración
- Facilita práctica

---

## **4.6 Factibilidad Ambiental**
- Bajo consumo
- Sin hardware extra
- Digitalización total

---

# **5. Análisis Financiero**

## **5.1 Justificación**
El proyecto aporta valor en:
- Tiempo
- Aprendizaje
- Optimización

---

## **5.2 Indicadores**
| Indicador | Resultado |
| :--- | :--- |
| B/C | > 1 |
| VAN | > 0 |
| TIR | > COK |

---

# **6. Conclusiones**

1. Proyecto viable técnicamente.
2. Bajo costo económico.
3. Alto impacto educativo.
4. Reduce errores críticos.
5. Escalable.
6. Recomendado para implementación.
