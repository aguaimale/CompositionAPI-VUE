
import { ref } from 'vue'


const useCounter= ( initValue = 5 ) => {
    
    const counter = ref( initValue)

   



    return {
       counter,

       //methods
       aumentar: () => counter.value++,
       decrementar: () => counter.value--,
    }
}

export default useCounter