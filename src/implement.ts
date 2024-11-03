interface TakePhoto {
          cameraMode: string
          filter: string
          burst:number
          
}
class Instagram implements TakePhoto{
          constructor(
          public cameraMode: string,
          public filter: string,
          public burst:number,

          ) {
                    
          }
}

type Camera = {
          cameraMode: string
          filter: string
          burst:number 
}
class Scan implements Camera{
           constructor(
          public cameraMode: string,
          public filter: string,
          public burst:number,

          ) {
                  
          } 
}
let insta = new Instagram('adf', 'fjsdl', 233)
let scan = new Scan('fjkldhsf', 'ksdjfks', 3434)
console.log(insta.cameraMode)
console.log(scan.cameraMode)