import axios from 'axios'
import { useToast } from 'vue-toastification'
const toast = useToast()
const getCurrencies = async (finalDate) => {
  try {
  const data = await axios.get('http://localhost:8080/api/currency/' + finalDate)
      toast.success("Request Is Success!", {
          timeout: 1000
      });
      return data.data.currencies;}
    catch (e){
        toast.error("Please Enter Valid Date!", {
            timeout: 1000
        });
    }
};
export default {
    getCurrencies
};