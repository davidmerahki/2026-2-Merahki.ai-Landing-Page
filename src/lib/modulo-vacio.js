// Módulo vacío para el navegador (24-nov-2026). La versión de navegador de alasql conserva un require("fs")
// y un require("path") que solo se ejecutan en Node. Turbopack los resuelve igual y falla; con este alias
// (next.config.ts → turbopack.resolveAlias, condición browser) quedan vacíos solo en el cliente.
module.exports = {};
