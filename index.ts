let resultado : string;

class Alumno{
    private nombre: string;
    private apellido: string;
    private matematicas : number;
    private lengua : number;
    private sociales : number;
    private naturales : number;

    constructor (pNombre:string, pApellido: string, pMatematicas: number, pLengua: number, pSociales: number, pNaturales: number){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.matematicas = pMatematicas;
        this.lengua = pLengua;
        this.sociales = pSociales;
        this.naturales = pNaturales;    
    }

    public getNombre ():string{
        return this.nombre;
    }
    public setNombre (pNombre):void{
        this.nombre = pNombre;
    }
    
    public getApellido ():string{
        return this.apellido;
    }
    public setApellido (pApellido):void{
        this.apellido = pApellido;
    }

    public getMatematicas():number{
        return this.matematicas;
    }
    public setMatematicas (pMatematicas):void{
        this.matematicas = pMatematicas;
    }

    
    public getLengua():number{
        return this.lengua;
    }
    public setLengua(pLengua):void{
        this.lengua = pLengua;
    }

    public getSociales():number{
        return this.sociales;
    }
    public setSociales(pSociales):void{
        this.sociales = pSociales;
    }
    
    public getNaturales():number{
        return this.naturales;
    }
    public setNaturales(pNaturales):void{
        this.naturales = pNaturales;
    }
    public getComprobarNota(a:number):string{
        if (a > 7){
            resultado = " aprobado ";            
            }else{
            resultado = " desaprobado ";
            }
        return resultado;
        }         
    }

class Profesor{
    private nombre: string;
    private apellido: string;
    private listadoAlumnos: Alumno[];

    constructor (pNombre:string, pApellido: string, pListadoAlumnos : Alumno[]){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.listadoAlumnos = pListadoAlumnos;
    }
    public getNombre ():string{
        return this.nombre;
    }
    public setNombre (pNombre):void{
        this.nombre = pNombre;
    }

    public getApellido ():string{
        return this.apellido;
    }
    public setApellido (pApellido):void{
        this.apellido = pApellido;
    }

   
}

class Escuela {
    private nombre: string;
    private listaAlumnos: Alumno[];
    private listaProfesores : Profesor [];


    constructor (pNombre: string, pListaAlumnos: Alumno[], pListaProfesores: Profesor[]){
        this.nombre = pNombre;
        this.listaAlumnos = pListaAlumnos;
        this.listaProfesores = pListaProfesores;
    }

    public getNombre ():string{
        return this.nombre;
    }
    public setNombre (pNombre):void{
        this.nombre = pNombre;
    }

    public matricularAlumno(pAlumno:Alumno):void{
        this.listaAlumnos.push(pAlumno);
        console.log(pAlumno.getApellido(), " Alumno Matriculado.");    
    }
    public expulsarAlumno(pAlumno:Alumno):void{
        for(let i : number = 0; i < this.listaAlumnos.length; i++){
            if(pAlumno.getApellido() === this.listaAlumnos[i].getApellido()){
        this.listaAlumnos.splice(i,1);
        console.log("El alumno ",pAlumno.getApellido()," fue expulsado.")
            }
        }   
    }
    
    public contratarProfesor(pProfesor: Profesor):void{
        this.listaProfesores.push(pProfesor);
        console.log(pProfesor.getApellido()," Contratado.")
    }
    public expulsarProfesor(pProfesor:Profesor):void{
        for(let i : number = 0; i < this.listaProfesores.length; i++){
            if(pProfesor.getApellido() === this.listaProfesores[i].getApellido()){
        this.listaProfesores.splice(i,1);
        console.log("El profesor ",pProfesor.getApellido()," fue expulsado.")
            }
        }   
    }
}

let primerAlumno : Alumno = new Alumno ("Juan", "Perez",6,8,10,5);
let segundoAlumno : Alumno = new Alumno ("Carolina","Guitierrez",8,7,5,9);
let tercerAlumno : Alumno = new Alumno ("Carlos","Avalos",9,9,5,7);

let listaAlumno : Alumno []= [primerAlumno,segundoAlumno,tercerAlumno]; 

let primerProfesor : Profesor = new Profesor ("Jose","Fernandez",listaAlumno);
let segundoProfesor : Profesor = new Profesor("Maria","Cuevas",listaAlumno);

let listaProfesores : Profesor[] = [primerProfesor,segundoProfesor];

let escuelaN1 : Escuela = new Escuela ("Escuela N 1", listaAlumno,listaProfesores)

console.log(primerAlumno.getComprobarNota(primerAlumno.getMatematicas()));

console.log(primerAlumno.getNombre());

escuelaN1.matricularAlumno(tercerAlumno);
escuelaN1.expulsarProfesor(segundoProfesor);
escuelaN1.expulsarAlumno(segundoAlumno);