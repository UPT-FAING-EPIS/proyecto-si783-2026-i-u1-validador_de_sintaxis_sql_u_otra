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

**Sistema Validador de sintaxis SQL u otra**  
**Informe de Factibilidad**  
**Versión:** *{1.0}*[cite: 4]

### **CONTROL DE VERSIONES**
| Versión | Hecha por | Revisada por | Aprobada por | Fecha | Motivo |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1.0 | MPV | ELV | ARV | 10/10/2020 | Versión Original[cite: 4] |

---

# **INDICE GENERAL**
1. [Descripción del Proyecto](#1-descripción-del-proyecto)
2. [Riesgos](#2-riesgos)
3. [Análisis de la Situación actual](#3-análisis-de-la-situación-actual)
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
Validador de Sintaxis SQL u otra[cite: 4].

### **1.2 Duración del proyecto**
1 mes[cite: 4].

### **1.3 Descripción**
El proyecto consiste en el desarrollo de una herramienta de software a nivel local que permite realizar el análisis léxico y sintáctico de consultas para bases de datos relacionales (SQL) y documentales (NoSQL/JSON)[cite: 4]. Se desenvuelve en un contexto académico y de desarrollo de software, sirviendo como un entorno de pruebas preliminar y ligero para evitar errores de sintaxis antes de la ejecución en motores de bases de datos reales[cite: 4].

### **1.4 Objetivos**
*   **1.4.1 Objetivo general:** Desarrollar un software eficiente que valide la estructura gramatical básica de sentencias SQL y comandos NoSQL sin necesidad de conexión a un servidor de base de datos[cite: 4].
*   **1.4.2 Objetivos Específicos:**
    *   Implementar un analizador léxico (Lexer) capaz de reconocer tokens, palabras reservadas y operadores básicos de manera optimizada[cite: 4].
    *   Construir un Parser para validar reglas gramaticales estrictas y de nivel único para estructuras relacionales (SELECT, INNER JOIN simple) y comandos NoSQL (find())[cite: 4].
    *   Desarrollar un sistema de reporte que indique la línea exacta y el token donde ocurre un error sintáctico[cite: 4].

---

## **2. Riesgos**
*   **Desviación del alcance:** Intentar incorporar reglas gramaticales anidadas o complejas que excedan el tiempo planificado[cite: 4].
*   **Limitaciones de rendimiento:** Si no se gestionan correctamente los ciclos de lectura de cadenas de texto muy largas[cite: 4].
*   **Curva de aprendizaje:** En la implementación de algoritmos de parsing manual[cite: 4].

---

## **3. Análisis de la Situación actual**

### **3.1 Planteamiento del problema**
Actualmente, la validación de scripts y consultas de base de datos se realiza ejecutando directamente el código en el motor como SQL Server[cite: 4]. Esto consume recursos innecesarios del servidor, aumenta los tiempos de depuración y no proporciona un entorno de aprendizaje seguro y aislado para desarrolladores que están estructurando consultas[cite: 4].

### **3.2 Consideraciones de hardware y software**
Se utilizará un enfoque de **Clean Architecture** implementado en lenguajes robustos como Java o C#[cite: 4]. El control de versiones se gestionará a través de GitHub. A nivel de hardware, se requiere equipo estándar de desarrollo[cite: 4].

---

## **4. Estudio de Factibilidad**
El presente estudio evaluará la viabilidad técnica, económica, operativa, legal, social y ambiental para asegurar que el desarrollo del validador de sintaxis bajo el alcance establecido sea exitoso y realizable[cite: 4].

### **4.1 Factibilidad Técnica**
El proyecto es altamente factible[cite: 4]. Se cuenta con el conocimiento necesario en programación orientada a objetos (Java/C#), patrones de diseño de software y manejo de repositorios (Git)[cite: 4]. El hardware actual es completamente suficiente para compilar y probar analizadores léxicos[cite: 4].

### **4.2 Factibilidad Económica**
El estudio determina si el proyecto es rentable desde el punto de vista financiero[cite: 4]. Al ser académico, los costos son bajos al aprovechar recursos existentes como computadoras personales y software libre[cite: 4].

#### **4.2.1 Costos Generales**
| Ítem | Cantidad | Costo Unitario (S/.) | Costo Total (S/.) |
| :--- | :--- | :--- | :--- |
| Cuadernos / hojas | 2 | 10 | 20 |
| Lapiceros / marcadores | 4 | 2 | 8 |
| Cartuchos de tinta | 1 | 80 | 80 |
| Uso de computadora | 2 | 0 (propia) | 0 |
| USB / almacenamiento | 1 | 25 | 25 |
| Internet (proporcional) | 1 mes | 50 | 50 |
| **Total** | | | **183** |[cite: 4]

#### **4.2.2 Costos operativos durante el desarrollo**
| Concepto | Costo Mensual (S/.) |
| :--- | :--- |
| Energía eléctrica | 40 |
| Internet | 50 |
| Transporte | 60 |
| Alimentación (reuniones) | 80 |
| **Total** | **230** |[cite: 4]

#### **4.2.3 Costos del ambiente**
| Recurso | Disponibilidad | Costo (S/.) |
| :--- | :--- | :--- |
| Computadoras personales | Sí | 0 |
| IDE (NetBeans / Visual Studio) | Sí (gratuito) | 0 |
| Conexión a internet | Sí | Incluido |
| Sistema operativo | Sí | 0 |
| Red local / acceso remoto | Sí | 0 |
| **Total** | | **0** |[cite: 4]

#### **4.2.4 Costos de personal**
*   **Organización:** Desarrollador 1 (Léxico/Sintáctico Java) y Desarrollador 2 (Interfaz/Validación C#)[cite: 4]. Ambos participan en pruebas y documentación[cite: 4].
*   **Horario:** 4 horas diarias, 5 días a la semana durante 4 semanas (80 horas por persona)[cite: 4].

| Rol | Horas | Pago por hora (S/.) | Total (S/.) |
| :--- | :--- | :--- | :--- |
| Desarrollador 1 | 80 | 8 | 640 |
| Desarrollador 2 | 80 | 8 | 640 |
| **Total** | | | **1280** |[cite: 4]

#### **4.2.5 Costos totales del desarrollo del sistema**
| Tipo de costo | Monto (S/.) |
| :--- | :--- |
| Costos generales | 183 |
| Costos operativos | 230 |
| Costos del ambiente | 0 |
| Costos de personal | 1280 |
| **Total final** | **1693** |[cite: 4]

**Forma de pago:** Proyecto académico; el costo es referencial para medir el valor del desarrollo e inversión en conocimiento[cite: 4].

### **4.3 Factibilidad Operativa**
El sistema es una herramienta sencilla y eficiente que puede ejecutarse mediante consola o interfaz gráfica básica[cite: 4]. No requiere personal especializado para su uso ni mantenimiento. Mejora el aprendizaje y reduce errores en la escritura de consultas para estudiantes y desarrolladores[cite: 4].

### **4.4 Factibilidad Legal**
El proyecto no presenta conflictos legales: se desarrolla desde cero, utiliza herramientas bajo licencias libres (MIT, Apache) y no maneja datos personales ni sensibles[cite: 4].

### **4.5 Factibilidad Social**
Aporta beneficios a la comunidad estudiantil de la EPIS al mejorar la comprensión de SQL, reforzar conceptos de compiladores y facilitar el aprendizaje autónomo[cite: 4].

### **4.6 Factibilidad Ambiental**
Impacto mínimo: es software sin producción física, utiliza equipos existentes, tiene bajo consumo energético y no genera residuos contaminantes[cite: 4].

---

## **5. Análisis Financiero**
Se busca estimar el resultado financiero considerando costos y beneficios formativos/productivos en un enfoque académico sin ingresos directos[cite: 4].

### **5.1 Justificación de la Inversión**

#### **5.1.1 Beneficios del Proyecto**
*   **Tangibles:** Reducción de horas-hombre en detección de errores, disminución de pruebas innecesarias en gestores y reducción de carga en servidores[cite: 4].
*   **Intangibles:** Mejora en la calidad del código, estandarización de consultas, incremento en la confiabilidad del software y fortalecimiento de habilidades técnicas[cite: 4].

#### **5.1.2 Criterios de Inversión**
*   **5.1.2.1 Relación Beneficio/Costo (B/C):** Al no haber costos de infraestructura ni licencias, el **B/C > 1**. El proyecto es aceptado[cite: 4].
*   **5.1.2.2 Valor Actual Neto (VAN):** Los beneficios (aprendizaje, uso futuro) superan los costos iniciales de desarrollo. **VAN > 0**. El proyecto es viable[cite: 4].
*   **5.1.2.3 Tasa Interna de Retorno (TIR):** La rentabilidad en conocimiento es alta frente a un COK bajo en contexto académico. **TIR > COK**. El proyecto es aceptado[cite: 4].

---

## **6. Conclusiones**
Luego del análisis integral, se concluye lo siguiente:
*   **Técnica:** Viable con herramientas y conocimientos actuales[cite: 4].
*   **Económica:** Costos bajos y accesibles[cite: 4].
*   **Operativa:** Fácil de usar, sin personal especializado[cite: 4].
*   **Legal/Social/Ambiental:** Cumple con normativas libres, aporta valor académico e impacto mínimo al ambiente[cite: 4].
*   **Financiera:** Los indicadores (B/C, VAN, TIR) son favorables en el contexto académico[cite: 4].

**Conclusión general:** El desarrollo del validador de sintaxis SQL es **viable, factible y recomendable**, justificando plenamente su realización por su alto valor educativo y práctico[cite: 4].

6. <span id="_Toc52661357" class="anchor"></span>**Conclusiones**

Explicar los resultados del análisis de factibilidad que nos indican si el proyecto es viable y factible.
