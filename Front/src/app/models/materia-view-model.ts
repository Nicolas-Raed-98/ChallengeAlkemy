import { ProfesorViewModel } from './profesor-view-model'

export class MateriaViewModel {
    public idMateria : number
    public nombre : string
    public horario : string
    public profesor : ProfesorViewModel
    public cupoMax : string
    public descripcion : string
    public programa : string
    
}
