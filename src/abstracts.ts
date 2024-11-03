abstract class Camere {
          constructor(
                    public mode: string,
                    public filter:string
          ) { }
          abstract getPhoto():string
          
}

class Insta extends Camere{
          constructor(
                     public mode: string,
                    public filter:string,
                    public countings:number
          ) {
                    super(mode,filter)
          }
         getPhoto(): string {
                   return 'done'
         } 
}