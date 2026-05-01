/**
 * app.js
 * Lógica principal del SQL/NoSQL Syntax Validator.
 * Versión limpia: sin características de UI avanzadas de errores.
 */

const API_BASE = window.location.origin + '/api';
const MAX_HISTORY = 50;

const state = {
   editor: null,
   language: 'sql',
   dialect: 'MySQL',
   theme: 'dark',
   history: JSON.parse(localStorage.getItem('validator-history') || '[]'),
   stats: JSON.parse(localStorage.getItem('validator-stats') || '{"validations":0,"valid":0,"invalid":0}'),
   examples: { sql: [], nosql: [] },
   isValidating: false
};

function initMonaco() {
  require.config({
    paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs' }
  });

  require(['vs/editor/editor.main'], function () {
    monaco.editor.defineTheme('validator-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: '569cd6', fontStyle: 'bold' },
        { token: 'string', foreground: 'ce9178' },
        { token: 'number', foreground: 'b5cea8' },
        { token: 'comment', foreground: '6a9955', fontStyle: 'italic' },
        { token: 'type', foreground: '4ec9b0' },
        { token: 'delimiter', foreground: 'd4d4d4' }
      ],
      colors: {
        'editor.background': '#1e1e1e',
        'editor.foreground': '#d4d4d4',
        'editor.lineHighlightBackground': '#2a2d2e',
        'editorCursor.foreground': '#aeafad',
        'editor.selectionBackground': '#264f78',
        'editorLineNumber.foreground': '#858585',
        'editorGutter.background': '#1e1e1e'
      }
    });

    monaco.editor.defineTheme('validator-light', {
      base: 'vs',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: '0000ff', fontStyle: 'bold' },
        { token: 'string', foreground: 'a31515' },
        { token: 'number', foreground: '098658' },
        { token: 'comment', foreground: '008000', fontStyle: 'italic' }
      ],
      colors: {
        'editor.background': '#ffffff',
        'editor.foreground': '#333333',
        'editor.lineHighlightBackground': '#f5f5f5',
        'editorLineNumber.foreground': '#999999'
      }
    });

    state.editor = monaco.editor.create(document.getElementById('monaco-editor'), {
      value: getDefaultQuery('sql'),
      language: 'sql',
      theme: state.theme === 'dark' ? 'validator-dark' : 'validator-light',
      fontSize: 14,
      fontFamily: "'JetBrains Mono', Consolas, monospace",
      lineNumbers: 'on',
      minimap: { enabled: true },
      wordWrap: 'off',
      automaticLayout: true,
      scrollBeyondLastLine: false,
      roundedSelection: true,
      smoothScrolling: true,
      cursorBlinking: 'smooth',
      cursorSmoothCaretAnimation: 'on',
      renderWhitespace: 'selection',
      bracketPairColorization: { enabled: true },
      suggest: { showKeywords: true },
      padding: { top: 10 }
    });

    registerSQLCompletions();

    state.editor.onDidChangeCursorPosition(function (e) {
      document.getElementById('cursor-position').textContent =
        'Ln ' + e.position.lineNumber + ', Col ' + e.position.column;
    });

state.editor.onDidChangeModelContent(function () {
       const content = state.editor.getValue();
       document.getElementById('char-count').textContent = content.length + ' caracteres';
       document.getElementById('stat-lines').textContent = state.editor.getModel().getLineCount();
     });

    state.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, doValidate);

    document.getElementById('stat-lines').textContent = state.editor.getModel().getLineCount();
    document.getElementById('char-count').textContent = state.editor.getValue().length + ' caracteres';

    loadExamples();
    updateStats();
    renderHistory();
    updateClock();
    setInterval(updateClock, 30000);
  });
}

function registerSQLCompletions() {
  monaco.languages.registerCompletionItemProvider('sql', {
    provideCompletionItems: function () {
      var keywords = [
        'SELECT', 'FROM', 'WHERE', 'INSERT', 'INTO', 'VALUES',
        'UPDATE', 'SET', 'DELETE', 'CREATE', 'TABLE', 'DROP',
        'ALTER', 'INDEX', 'JOIN', 'INNER', 'LEFT', 'RIGHT',
        'OUTER', 'ON', 'GROUP', 'BY', 'ORDER', 'ASC', 'DESC',
        'HAVING', 'LIMIT', 'OFFSET', 'DISTINCT', 'AS', 'AND',
        'OR', 'NOT', 'NULL', 'IS', 'IN', 'BETWEEN', 'LIKE',
        'EXISTS', 'UNION', 'ALL', 'COUNT', 'SUM', 'AVG',
        'MAX', 'MIN', 'CASE', 'WHEN', 'THEN', 'ELSE', 'END',
        'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'CASCADE',
        'VARCHAR', 'INT', 'INTEGER', 'TEXT', 'DATE', 'TIMESTAMP',
        'BOOLEAN', 'FLOAT', 'DECIMAL', 'NOW', 'CURRENT_TIMESTAMP'
      ];
      return {
        suggestions: keywords.map(function (kw) {
          return {
            label: kw,
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: kw,
            detail: 'SQL Keyword'
          };
        })
      };
    }
  });
}

function getDefaultQuery(type) {
  if (type === 'sql') {
    return '-- Escribe tu consulta SQL aquí\n-- Presiona Ctrl+Enter para validar\n\nSELECT *\nFROM usuarios\nWHERE edad > 18\nORDER BY nombre ASC;';
  }
  return JSON.stringify({
    find: 'usuarios',
    filter: { activo: true, edad: { $gte: 18 } }
  }, null, 2);
}

async function doValidate() {
   if (state.isValidating) return;

   var query = state.editor.getValue().trim();
   if (!query) {
     showToast('Escribe una consulta antes de validar.', 'info');
     return;
   }

   state.isValidating = true;
   setStatus('loading', 'Validando...');
   showLoading(true);

   try {
     var requestBody = { type: state.language, query: query };
     if (state.language === 'sql') {
       requestBody.dialect = state.dialect;
     }
     var response = await fetch(API_BASE + '/validate', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(requestBody)
     });

     var data = await response.json();

     state.stats.validations++;
     if (data.valid) state.stats.valid++;
     else state.stats.invalid++;
     localStorage.setItem('validator-stats', JSON.stringify(state.stats));
     updateStats();

     addToHistory(query, data);
     showResults(data);
     decorateErrors(data.errors || []);

     if (data.valid) {
       setStatus('success', 'Sintaxis correcta');
       showToast('✅ Sintaxis correcta', 'success');
     } else {
       setStatus('error', data.errors.length + ' error(es)');
     }
   } catch (err) {
     console.error('Error de conexión:', err);
     setStatus('error', 'Error de conexión');
     showResults({
       valid: false,
       errors: [{ line: 0, column: 1, message: 'No se pudo conectar al servidor. ¿Está corriendo el backend?' }],
       suggestions: ['Ejecuta: npm start']
     });
   } finally {
     state.isValidating = false;
     showLoading(false);
   }
 }

function showResults(data) {
  var empty = document.getElementById('results-empty');
  var validEl = document.getElementById('results-valid');
  var invalidEl = document.getElementById('results-invalid');
  var meta = document.getElementById('results-meta');

  empty.hidden = true;
  validEl.hidden = true;
  invalidEl.hidden = true;

  if (data.valid) {
    validEl.hidden = false;
    document.getElementById('results-icon').textContent = '✅';
    document.getElementById('results-title').childNodes[2].textContent = ' Resultados — Válido';
    meta.textContent = 'Sin errores';

    var sugList = document.getElementById('suggestions-valid');
    sugList.innerHTML = '';
    (data.suggestions || []).forEach(function (s) {
      var div = document.createElement('div');
      div.className = 'suggestion-item';
      div.innerHTML = '<span class="suggestion-icon">💡</span><span>' + escapeHtml(s) + '</span>';
      sugList.appendChild(div);
    });
  } else {
    invalidEl.hidden = false;
    document.getElementById('results-icon').textContent = '🔴';
    document.getElementById('results-title').childNodes[2].textContent = ' Resultados — Errores';
    meta.textContent = data.errors.length + ' error(es)';

var errList = document.getElementById('errors-list');
     errList.innerHTML = '';
     (data.errors || []).forEach(function (err) {
       var div = document.createElement('div');
       div.className = 'error-item';
       var colInfo = err.column ? ' Col ' + err.column : '';
       div.innerHTML =
         '<span class="error-line">Ln ' + err.line + colInfo + '</span>' +
         '<span class="error-msg">' + escapeHtml(err.message) + '</span>';
       div.addEventListener('click', function () {
         if (err.line > 0) {
           state.editor.revealLineInCenter(err.line);
           state.editor.setPosition({ lineNumber: err.line, column: err.column || 1 });
           state.editor.focus();
         }
       });
       div.style.cursor = 'pointer';
       div.title = 'Clic para ir a la línea ' + err.line;
       errList.appendChild(div);
     });

    var sugSection = document.getElementById('suggestions-section');
    var sugList2 = document.getElementById('suggestions-list');
    sugList2.innerHTML = '';
    if (data.suggestions && data.suggestions.length > 0) {
      sugSection.hidden = false;
      data.suggestions.forEach(function (s) {
        var div = document.createElement('div');
        div.className = 'suggestion-item';
        div.innerHTML = '<span class="suggestion-icon">💡</span><span>' + escapeHtml(s) + '</span>';
        sugList2.appendChild(div);
      });
    } else {
      sugSection.hidden = true;
    }
  }
}

var currentDecorations = [];
function decorateErrors(errors) {
  if (!state.editor) return;
  var decorations = errors
    .filter(function (e) { return e.line > 0; })
    .map(function (e) {
      return {
        range: new monaco.Range(e.line, 1, e.line, 1),
        options: {
          isWholeLine: true,
          className: 'line-error-decoration',
          glyphMarginClassName: 'glyph-error',
          overviewRuler: { color: '#f44747', position: monaco.editor.OverviewRulerLane.Full }
        }
      };
    });
  currentDecorations = state.editor.deltaDecorations(currentDecorations, decorations);

  if (!document.getElementById('decoration-styles')) {
    var style = document.createElement('style');
    style.id = 'decoration-styles';
    style.textContent =
      '.line-error-decoration { background: rgba(244,71,71,0.15) !important; }' +
      '.glyph-error { background: #f44747; border-radius: 50%; margin-left: 3px; }';
    document.head.appendChild(style);
  }
}

function addToHistory(query, result) {
   state.history.unshift({
     query: query,
     type: state.language,
     dialect: state.language === 'sql' ? state.dialect : undefined,
     valid: result.valid,
     errorsCount: (result.errors || []).length,
     time: new Date().toISOString()
   });
   if (state.history.length > MAX_HISTORY) state.history.pop();
   localStorage.setItem('validator-history', JSON.stringify(state.history));
   renderHistory();
 }

function renderHistory() {
  var list = document.getElementById('history-list');
  var empty = document.getElementById('history-empty');

  var items = list.querySelectorAll('.history-item');
  items.forEach(function (el) { el.remove(); });

  if (state.history.length === 0) {
    empty.style.display = 'flex';
    return;
  }
  empty.style.display = 'none';

  state.history.forEach(function (item) {
    var div = document.createElement('div');
    div.className = 'history-item ' + (item.valid ? 'valid' : 'invalid');
    div.setAttribute('role', 'listitem');

    var time = new Date(item.time);
    var timeStr = time.getHours().toString().padStart(2, '0') + ':' + time.getMinutes().toString().padStart(2, '0');

    div.innerHTML =
      '<div class="history-item-header">' +
        '<span class="history-badge ' + item.type + '">' + item.type.toUpperCase() + '</span>' +
        '<span class="history-status ' + (item.valid ? 'valid' : 'invalid') + '">' +
          (item.valid ? '✅' : '❌') +
        '</span>' +
        '<span class="history-time">' + timeStr + '</span>' +
      '</div>' +
      '<div class="history-preview">' + escapeHtml(item.query.substring(0, 80)) + '</div>';

    div.addEventListener('click', function () {
      state.editor.setValue(item.query);
      if (item.type !== state.language) {
        document.getElementById('language-select').value = item.type;
        switchLanguage(item.type);
      }
      switchToTab('editor');
      showToast('Consulta cargada', 'info');
    });

    list.appendChild(div);
  });
}

async function loadExamples() {
  try {
    var res = await fetch(API_BASE + '/examples');
    state.examples = await res.json();
  } catch (e) {
    state.examples = {
      sql: [
        { label: 'SELECT básico', query: 'SELECT * FROM usuarios WHERE edad > 18;' },
        { label: 'SQL con error', query: 'SELCT nombre FORM usuarios;' }
      ],
      nosql: [
        { label: 'find() básico', query: '{\n  "find": "usuarios",\n  "filter": { "activo": true }\n}' }
      ]
    };
  }
}

function showExamplesModal() {
  document.getElementById('modal-examples').hidden = false;
  renderExamples(state.language);
}

function renderExamples(type) {
  var list = document.getElementById('examples-list');
  list.innerHTML = '';

  document.querySelectorAll('.example-tab').forEach(function (t) {
    t.classList.toggle('active', t.dataset.type === type);
  });

  var items = state.examples[type] || [];
  items.forEach(function (ex) {
    var div = document.createElement('div');
    div.className = 'example-item';
    div.setAttribute('role', 'listitem');
    div.innerHTML =
      '<div class="example-label">' + escapeHtml(ex.label) + '</div>' +
      '<div class="example-preview">' + escapeHtml(ex.query.substring(0, 80)) + '</div>';
    div.addEventListener('click', function () {
      if (type !== state.language) {
        document.getElementById('language-select').value = type;
        switchLanguage(type);
      }
      state.editor.setValue(ex.query);
      document.getElementById('modal-examples').hidden = true;
      showToast('Ejemplo cargado', 'info');
    });
    list.appendChild(div);
  });
}

function switchLanguage(lang) {
   state.language = lang;

   var select = document.getElementById('language-select');
   if (select) select.value = lang;

   var monacoLang = lang === 'sql' ? 'sql' : 'json';
   if (state.editor) {
     monaco.editor.setModelLanguage(state.editor.getModel(), monacoLang);
   }

   var badge = document.getElementById('badge-label');
   var desc = document.getElementById('badge-desc');
   badge.textContent = lang === 'sql' ? 'SQL' : 'NoSQL';
   badge.className = 'badge ' + (lang === 'sql' ? 'sql-badge' : 'nosql-badge');
   desc.textContent = lang === 'sql' ? 'Structured Query Language' : 'MongoDB Query Language';

   var dialectSelector = document.getElementById('dialect-selector');
   var dialectBadge = document.getElementById('dialect-badge');
   if (lang === 'sql') {
     dialectSelector.hidden = false;
     dialectBadge.hidden = false;
     document.getElementById('dialect-name').textContent = state.dialect;
   } else {
     dialectSelector.hidden = true;
     dialectBadge.hidden = true;
   }

   document.getElementById('editor-lang-indicator').textContent = lang === 'sql' ? 'SQL' : 'JSON (MongoDB)';
   document.getElementById('status-language').innerHTML =
     '<span class="status-icon">🗃️</span>' + (lang === 'sql' ? 'SQL' : 'MongoDB');

   var tabLabel = document.querySelector('#tab-editor .tab-label');
   if (tabLabel) tabLabel.textContent = lang === 'sql' ? 'validator.sql' : 'validator.json';

   currentDecorations = state.editor ? state.editor.deltaDecorations(currentDecorations, []) : [];
   resetResults();
 }

 function switchDialect(dialect) {
   state.dialect = dialect;
   document.getElementById('dialect-name').textContent = dialect;
   showToast('Dialecto SQL: ' + dialect, 'info');
 }

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.body.className = state.theme === 'dark' ? 'theme-dark' : 'theme-light';
  document.getElementById('btn-theme-toggle').querySelector('.theme-icon').textContent =
    state.theme === 'dark' ? '🌙' : '☀️';
  monaco.editor.setTheme(state.theme === 'dark' ? 'validator-dark' : 'validator-light');
  localStorage.setItem('validator-theme', state.theme);
}

function setStatus(type, text) {
  var dot = document.querySelector('.status-dot');
  dot.className = 'status-dot ' + type;
  document.querySelector('.status-text').textContent = text;
  document.getElementById('status-message').textContent = text;
}

function showLoading(show) {
  document.getElementById('results-loading').hidden = !show;
  if (show) {
    document.getElementById('results-empty').hidden = true;
    document.getElementById('results-valid').hidden = true;
    document.getElementById('results-invalid').hidden = true;
  }
}

function resetResults() {
  document.getElementById('results-empty').hidden = false;
  document.getElementById('results-valid').hidden = true;
  document.getElementById('results-invalid').hidden = true;
  document.getElementById('results-loading').hidden = true;
  document.getElementById('results-meta').textContent = '';
  document.getElementById('results-icon').textContent = '🔎';
  setStatus('idle', 'Listo');
}

function updateStats() {
  document.getElementById('stat-validations').textContent = state.stats.validations;
  document.getElementById('stat-valid').textContent = state.stats.valid;
  document.getElementById('stat-invalid').textContent = state.stats.invalid;
}

function switchToTab(tab) {
  var isEditor = tab === 'editor';
  document.getElementById('editor-panel').hidden = !isEditor;
  document.getElementById('history-panel').hidden = isEditor;
  document.getElementById('tab-editor').classList.toggle('active', isEditor);
  document.getElementById('tab-editor').setAttribute('aria-selected', isEditor);
  document.getElementById('tab-history').classList.toggle('active', !isEditor);
  document.getElementById('tab-history').setAttribute('aria-selected', !isEditor);
  if (isEditor && state.editor) state.editor.layout();
}

function showToast(message, type) {
  var container = document.getElementById('toast-container');
  var toast = document.createElement('div');
  toast.className = 'toast ' + (type || 'info');
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(function () {
    toast.classList.add('toast-fade');
    setTimeout(function () { toast.remove(); }, 300);
  }, 3000);
}

function updateClock() {
  var now = new Date();
  document.getElementById('status-time').textContent =
    now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
}

function escapeHtml(text) {
  var div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

document.addEventListener('DOMContentLoaded', function () {
  var savedTheme = localStorage.getItem('validator-theme');
  if (savedTheme === 'light') {
    state.theme = 'light';
    document.body.className = 'theme-light';
    document.getElementById('btn-theme-toggle').querySelector('.theme-icon').textContent = '☀️';
  }

  initMonaco();

  document.getElementById('btn-validate').addEventListener('click', doValidate);

  document.getElementById('btn-clear').addEventListener('click', function () {
    state.editor.setValue('');
    currentDecorations = state.editor.deltaDecorations(currentDecorations, []);
    resetResults();
    showToast('Editor limpiado', 'info');
  });

  document.getElementById('btn-format').addEventListener('click', function () {
    if (state.language === 'nosql') {
      try {
        var parsed = JSON.parse(state.editor.getValue());
        state.editor.setValue(JSON.stringify(parsed, null, 2));
        showToast('JSON formateado', 'success');
      } catch (e) {
        showToast('JSON no válido', 'error');
      }
    } else {
      state.editor.getAction('editor.action.formatDocument').run();
      showToast('Código formateado', 'success');
    }
  });

  document.getElementById('btn-example').addEventListener('click', showExamplesModal);

  document.getElementById('btn-copy').addEventListener('click', function () {
    navigator.clipboard.writeText(state.editor.getValue()).then(function () {
      showToast('Consulta copiada', 'success');
    });
  });

  // Subida de archivos
  const fileInput = document.getElementById('file-input');
  document.getElementById('btn-upload').addEventListener('click', function () {
    fileInput.click();
  });

  fileInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      const content = event.target.result;
      const ext = file.name.split('.').pop().toLowerCase();

      if (ext === 'sql') {
        switchLanguage('sql');
        state.editor.setValue(content);
        showToast('Archivo SQL cargado', 'success');
      } else if (ext === 'json' || ext === 'nosql') {
        switchLanguage('nosql');
        state.editor.setValue(content);
        showToast('Archivo MongoDB cargado', 'success');
      } else {
        showToast('Extensión no soportada', 'error');
      }
      fileInput.value = '';
    };
    reader.onerror = function () {
      showToast('Error al leer archivo', 'error');
    };
    reader.readAsText(file);
  });

  document.getElementById('btn-clear-results').addEventListener('click', resetResults);
  document.getElementById('btn-theme-toggle').addEventListener('click', toggleTheme);

document.getElementById('language-select').addEventListener('change', function (e) {
     switchLanguage(e.target.value);
     state.editor.setValue(getDefaultQuery(e.target.value));
   });

   var dialectSelect = document.getElementById('dialect-select');
   if (dialectSelect) {
     dialectSelect.addEventListener('change', function (e) {
       switchDialect(e.target.value);
     });
   }

document.getElementById('tab-editor').addEventListener('click', function () { switchToTab('editor'); });
   document.getElementById('tab-history').addEventListener('click', function () { switchToTab('history'); });

   document.getElementById('btn-clear-history').addEventListener('click', function () {
     state.history = [];
     localStorage.setItem('validator-history', '[]');
     renderHistory();
     showToast('Historial limpiado', 'info');
   });

   document.getElementById('opt-minimap').addEventListener('change', function (e) {
     state.editor.updateOptions({ minimap: { enabled: e.target.checked } });
   });

  document.getElementById('modal-close').addEventListener('click', function () {
    document.getElementById('modal-examples').hidden = true;
  });
  document.getElementById('modal-examples').addEventListener('click', function (e) {
    if (e.target === this) this.hidden = true;
  });
  document.querySelectorAll('.example-tab').forEach(function (tab) {
    tab.addEventListener('click', function () { renderExamples(this.dataset.type); });
  });

  document.getElementById('btn-fullscreen').addEventListener('click', function () {
    var el = document.getElementById('monaco-container');
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      el.requestFullscreen().catch(function () {});
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') document.getElementById('modal-examples').hidden = true;
  });
});
