
const array = [1,1,2,3,3,3,3,5,6,6,6,6,2]

const shortUnique = () =>{
    const breadcrumb:any = {};
    return function (n:any){
        const result= []
        for(const v of n){
            if(!(v in breadcrumb)){
                breadcrumb[v] = true;
                result.push(v)
            }
        }
      return result.sort((a,b)=> a-b)
    }
}

const short = shortUnique()

console.log(short(array));
