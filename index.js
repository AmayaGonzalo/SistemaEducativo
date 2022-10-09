var Alumno = /** @class */ (function () {
    function Alumno(pNombre, pApellido, pNota) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.nota = pNota;
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Alumno.prototype.getApellido = function () {
        return this.apellido;
    };
    Alumno.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    Alumno.prototype.getNota = function () {
        return this.nota;
    };
    Alumno.prototype.setNota = function (pNota) {
        this.nota = pNota;
    };
    Alumno.prototype.getAprobado = function () {
        if (this.nota > 7) {
            return true;
        }
        else {
            return false;
        }
    };
    return Alumno;
}());
var Profesor = /** @class */ (function () {
    function Profesor(pNombre, pApellido, pListadoAlumnos) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.listadoAlumnos = pListadoAlumnos;
    }
    Profesor.prototype.getNombre = function () {
        return this.nombre;
    };
    Profesor.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Profesor.prototype.getApellido = function () {
        return this.apellido;
    };
    Profesor.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    Profesor.prototype.getAlumnos = function () {
        return this.listadoAlumnos;
    };
    Profesor.prototype.setAlumnos = function (pAlumno) {
        this.listadoAlumnos.push(pAlumno);
    };
    return Profesor;
}());
var Escuela = /** @class */ (function () {
    function Escuela(pNombre, pListaAlumnos, pListaProfesores) {
        this.nombre = pNombre;
        this.listaAlumnos = pListaAlumnos;
        this.listaProfesores = pListaProfesores;
    }
    Escuela.prototype.getNombre = function () {
        return this.nombre;
    };
    Escuela.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Escuela.prototype.matricularAlumno = function (pAlumno) {
        this.listaAlumnos.push(pAlumno);
        console.log(pAlumno.getApellido(), " Alumno Matriculado.");
    };
    Escuela.prototype.expulsarAlumno = function (pAlumno) {
        for (var i = 0; i < this.listaAlumnos.length; i++) {
            if (pAlumno.getApellido() === this.listaAlumnos[i].getApellido()) {
                this.listaAlumnos.splice(i, 1);
                console.log("El alumno ", pAlumno.getApellido(), " fue expulsado.");
            }
        }
    };
    Escuela.prototype.contratarProfesor = function (pProfesor) {
        this.listaProfesores.push(pProfesor);
        console.log(pProfesor.getApellido(), " Contratado.");
    };
    Escuela.prototype.expulsarProfesor = function (pProfesor) {
        for (var i = 0; i < this.listaProfesores.length; i++) {
            if (pProfesor.getApellido() === this.listaProfesores[i].getApellido()) {
                this.listaProfesores.splice(i, 1);
                console.log("El profesor ", pProfesor.getApellido(), " fue expulsado.");
            }
        }
    };
    return Escuela;
}());
var primerAlumno = new Alumno("Juan", "Perez", 6);
var segundoAlumno = new Alumno("Carolina", "Guitierrez", 8);
var tercerAlumno = new Alumno("Carlos", "Avalos", 9);
var listaAlumno = [primerAlumno, segundoAlumno, tercerAlumno];
var primerProfesor = new Profesor("Jose", "Fernandez", listaAlumno);
var segundoProfesor = new Profesor("Maria", "Cuevas", listaAlumno);
var listaProfesores = [primerProfesor, segundoProfesor];
var escuelaN1 = new Escuela("Escuela N 1", listaAlumno, listaProfesores);
console.log("Primer alumno esta aprobado: ", primerAlumno.getAprobado());
console.log("Nombre primer alumno:", primerAlumno.getNombre());
escuelaN1.matricularAlumno(tercerAlumno);
escuelaN1.expulsarProfesor(segundoProfesor);
escuelaN1.expulsarAlumno(segundoAlumno);
