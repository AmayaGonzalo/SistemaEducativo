var resultado;
var Alumno = /** @class */ (function () {
    function Alumno(pNombre, pApellido, pMatematicas, pLengua, pSociales, pNaturales) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.matematicas = pMatematicas;
        this.lengua = pLengua;
        this.sociales = pSociales;
        this.naturales = pNaturales;
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
    Alumno.prototype.getMatematicas = function () {
        return this.matematicas;
    };
    Alumno.prototype.setMatematicas = function (pMatematicas) {
        this.matematicas = pMatematicas;
    };
    Alumno.prototype.getLengua = function () {
        return this.lengua;
    };
    Alumno.prototype.setLengua = function (pLengua) {
        this.lengua = pLengua;
    };
    Alumno.prototype.getSociales = function () {
        return this.sociales;
    };
    Alumno.prototype.setSociales = function (pSociales) {
        this.sociales = pSociales;
    };
    Alumno.prototype.getNaturales = function () {
        return this.naturales;
    };
    Alumno.prototype.setNaturales = function (pNaturales) {
        this.naturales = pNaturales;
    };
    Alumno.prototype.getComprobarNota = function (a) {
        if (a > 7) {
            resultado = " aprobado ";
        }
        else {
            resultado = " desaprobado ";
        }
        return resultado;
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
var primerAlumno = new Alumno("Juan", "Perez", 6, 8, 10, 5);
var segundoAlumno = new Alumno("Carolina", "Guitierrez", 8, 7, 5, 9);
var tercerAlumno = new Alumno("Carlos", "Avalos", 9, 9, 5, 7);
var listaAlumno = [primerAlumno, segundoAlumno, tercerAlumno];
var primerProfesor = new Profesor("Jose", "Fernandez", listaAlumno);
var segundoProfesor = new Profesor("Maria", "Cuevas", listaAlumno);
var listaProfesores = [primerProfesor, segundoProfesor];
var escuelaN1 = new Escuela("Escuela N 1", listaAlumno, listaProfesores);
console.log(primerAlumno.getComprobarNota(primerAlumno.getMatematicas()));
console.log(primerAlumno.getNombre());
escuelaN1.matricularAlumno(tercerAlumno);
escuelaN1.expulsarProfesor(segundoProfesor);
escuelaN1.expulsarAlumno(segundoAlumno);
