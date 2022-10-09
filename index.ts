class Alumno {
    private nombre: string;
    private apellido: string;
    private nota: number;

    constructor(pNombre: string, pApellido: string, pNota: number) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.nota = pNota;
    }

    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(pNombre): void {
        this.nombre = pNombre;
    }

    public getApellido(): string {
        return this.apellido;
    }
    public setApellido(pApellido): void {
        this.apellido = pApellido;
    }

    public getNota(): number {
        return this.nota;
    }

    public setNota(pNota: number): void {
        this.nota = pNota;
    }

    public getAprobado(): boolean {
        if (this.nota > 7) {
            return true;
        } else {
            return false;
        }
    }
}

class Profesor {
    private nombre: string;
    private apellido: string;
    private listadoAlumnos: Alumno[];

    constructor(pNombre: string, pApellido: string, pListadoAlumnos: Alumno[]) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.listadoAlumnos = pListadoAlumnos;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(pNombre): void {
        this.nombre = pNombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(pApellido): void {
        this.apellido = pApellido;
    }

    public getAlumnos(): Alumno[] {
        return this.listadoAlumnos;
    }

    public setAlumnos(pAlumno: Alumno): void {
        this.listadoAlumnos.push(pAlumno);
    }
}

class Escuela {
    private nombre: string;
    private listaAlumnos: Alumno[];
    private listaProfesores: Profesor[];

    constructor(pNombre: string, pListaAlumnos: Alumno[], pListaProfesores: Profesor[]) {
        this.nombre = pNombre;
        this.listaAlumnos = pListaAlumnos;
        this.listaProfesores = pListaProfesores;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(pNombre): void {
        this.nombre = pNombre;
    }

    public matricularAlumno(pAlumno: Alumno): void {
        this.listaAlumnos.push(pAlumno);
        console.log(pAlumno.getApellido(), " Alumno Matriculado.");
    }

    public expulsarAlumno(pAlumno: Alumno): void {
        for (let i: number = 0; i < this.listaAlumnos.length; i++) {
            if (pAlumno.getApellido() === this.listaAlumnos[i].getApellido()) {
                this.listaAlumnos.splice(i, 1);
                console.log("El alumno ", pAlumno.getApellido(), " fue expulsado.")
            }
        }
    }

    public contratarProfesor(pProfesor: Profesor): void {
        this.listaProfesores.push(pProfesor);
        console.log(pProfesor.getApellido(), " Contratado.")
    }

    public expulsarProfesor(pProfesor: Profesor): void {
        for (let i: number = 0; i < this.listaProfesores.length; i++) {
            if (pProfesor.getApellido() === this.listaProfesores[i].getApellido()) {
                this.listaProfesores.splice(i, 1);
                console.log("El profesor ", pProfesor.getApellido(), " fue expulsado.")
            }
        }
    }
}

let primerAlumno: Alumno = new Alumno("Juan", "Perez", 6);
let segundoAlumno: Alumno = new Alumno("Carolina", "Guitierrez", 8);
let tercerAlumno: Alumno = new Alumno("Carlos", "Avalos", 9);

let listaAlumno: Alumno[] = [primerAlumno, segundoAlumno, tercerAlumno];

let primerProfesor: Profesor = new Profesor("Jose", "Fernandez", listaAlumno);
let segundoProfesor: Profesor = new Profesor("Maria", "Cuevas", listaAlumno);

let listaProfesores: Profesor[] = [primerProfesor, segundoProfesor];

let escuelaN1: Escuela = new Escuela("Escuela N 1", listaAlumno, listaProfesores)

console.log("Primer alumno esta aprobado: ", primerAlumno.getAprobado());
console.log("Nombre primer alumno:", primerAlumno.getNombre());

escuelaN1.matricularAlumno(tercerAlumno);
escuelaN1.expulsarProfesor(segundoProfesor);
escuelaN1.expulsarAlumno(segundoAlumno);