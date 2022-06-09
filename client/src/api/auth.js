import api from './api';

export default {
    login(d){
        return api().post('login', d);
    },
    register(d){
      return api().post('register', d);
   }
}